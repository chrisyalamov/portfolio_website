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

// let MainContainer = styled.div`
//   height: 100vh;
//   width: 100%;
//   scroll-snap-type: y mandatory;
//   overflow-y: scroll;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

export default function Project(props) {
  return (
    <div className='font-sans bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50 overflow-hidden flex flex-col items-center'>
      <Head>
        <title>Christian Yalamov | Portfolio</title>
        <meta name="description" content="Christian Yalamov — Creative and Technical Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> 
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"></link>
      </Head>

      {/* <MainContainer> */}
        <StickyHeader>
          <Link href="/">
            <a className='underline'>Portfolio</a>
          </Link>
          <span> / Projects / {props.project.projectTitle}</span>
        </StickyHeader>
        <ProjectFull project={props.project} />
      {/* </MainContainer> */}
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
