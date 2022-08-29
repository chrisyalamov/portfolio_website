import Head from "next/head";
import { StickyHeader } from "../components/StickyHeader";
import { Contact } from "../components/Contact";
import { ContactForm } from "../components/ContactForm";
import Link from "next/link";

export default function ContactPage(props) {
    return (
        <div className='font-sans bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 overflow-hidden flex flex-col items-center'>
        <Head>
          <title>Christian Yalamov | Portfolio</title>
          <meta name="description" content="Christian Yalamov — Creative and Technical Portfolio" />
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