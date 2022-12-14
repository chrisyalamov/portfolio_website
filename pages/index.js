import { GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { AboutMe } from '../components/AboutMe'
import { Contact } from '../components/Contact'
import { CV } from '../components/CV'
import { Education } from '../components/Education'
import { LandingHeader } from '../components/LandingHeader'
import { Projects } from '../components/Projects'
import { StickyHeader } from '../components/StickyHeader'
import styles from '../styles/Home.module.css'

const hygraph = new GraphQLClient(process.env.HYGRAPH_URL, {
  method: "POST",
  headers: {
      authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  }
})

let MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home(props) {
  return (
    <div className='font-sans bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 overflow-hidden'>
      <Head>
        <title>Christian Yalamov | Portfolio</title>
        <meta name="description" content="Christian Yalamov — Creative and Technical Portfolio" />
      </Head>

      <MainContainer>
        <StickyHeader>
          <p>Portfolio / Home</p>
        </StickyHeader>
        <LandingHeader />
        <Projects projects={props.projects} />
        <AboutMe />
        <Education />
        <Contact />
        <CV />
      </MainContainer>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = await hygraph.request(`
  {
    projects {
      slug
      projectTitle
      briefDescription
    }
  }
  `);

  return {
      props: {
          projects: data.projects
      }
  }
}