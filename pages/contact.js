import Head from "next/head";
import { StickyHeader } from "../components/StickyHeader";
import { Contact } from "../components/Contact";
import { ContactForm } from "../components/ContactForm";
import Link from "next/link";

export default function ContactPage(props) {
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

        <StickyHeader>
            <Link href="/">
                <a className="underline">
                    Portfolio 
                </a>
            </Link>
            <span> / Contact me</span>
        </StickyHeader>

        {/* <Contact /> */}
        <ContactForm />

    </div>
)}