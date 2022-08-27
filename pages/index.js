import { GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { AboutMe } from '../components/AboutMe'
import { Contact } from '../components/Contact'
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
    <div className='font-sans bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50 overflow-hidden'>
      <Head>
        <title>Christian Yalamov | Portfolio</title>
        <meta name="description" content="Christian Yalamov — Creative and Technical Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> 
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"></link>
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