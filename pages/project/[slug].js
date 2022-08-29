import Head from 'next/head'
import styled from 'styled-components'
import { GraphQLClient } from "graphql-request"
import { ProjectFull } from '../../components/Project'
import { StickyHeader } from '../../components/StickyHeader'
import Link from 'next/link'

const hygraph = new GraphQLClient(process.env.HYGRAPH_URL, {
    method: "POST",
    headers: {
        authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    }
})

export default function Project(props) {
  return (
    <div className='font-sans bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 overflow-hidden flex flex-col items-center'>
      <Head>
        <title>Christian Yalamov | Portfolio</title>
        <meta name="description" content="Christian Yalamov — Creative and Technical Portfolio" />
      </Head>

        <StickyHeader>
          <Link href="/">
            <a className='underline'>Portfolio</a>
          </Link>
          <span> / Projects / {props.project.projectTitle}</span>
        </StickyHeader>
        <ProjectFull project={props.project} />
    </div>
  )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking",
    }
}

export async function getStaticProps({ params }) {
    const data = await hygraph.request(`
    query GetProject($slug:String) {
        project(where: {slug: $slug}) {
          slug
          projectTitle
          briefDescription
          disclaimers {
            shortName
            fullName
            disclaimerBody
          }
          projectSections {
            title
            body
          }
          images {
              url
              width
              height
          }
        }
      }
    `, {
        slug: params.slug
    });

    return {
        props: {
            project: data.project
        }
    }
}
