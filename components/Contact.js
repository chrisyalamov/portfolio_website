import { SectionTemplate } from "./SectionTemplate"
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi"
import Link from "next/link"

export const Contact = () => {
    return <SectionTemplate customStyles={`
    @media (max-width: 640px) {
        padding-bottom: 5rem;
    }
    `}>
        <div className="p-10 md:p-24 px-16 max-w-xl">
            <h2 className="text-2xl font-semibold mb-2 antialiased">💬 Get in touch</h2>
            <div className="ml-8 antialiased">
                <p className="text-lg mb-4">
                    I&apos;m always open to new opportunities. If you have a project in mind, get in touch!
                </p>
                <p className="mb-4 text-sm">
                    You can fill out <Link href="/contact"><a className="underline">this short form</a></Link> or connect via one of my social channels below.
                </p>
                <br />
                <div className="flex flex-col gap-2">
                    <a href="mailto:chris@chrisyalamov.space?subject=%F0%9F%91%8B%20Hey%2C%20let's%20connect!&body=Hi%20there%2C%0D%0A%0D%0AI'm%20%5Bname%5D%20(from%20%5Bcompany%5D).%20I'm%20looking%20for%20someone%20to%20work%20with%20on%20%5Bproject%5D.%0D%0A%0D%0ALet's%20chat!">
                        <FiMail className="inline mb-1 mr-1" /> 
                        <span className="underline">Reach out via email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/chrisyalamov/">
                        <FiLinkedin className="inline mb-1 mr-1" /> 
                        <span className="underline">Connect with me on LinkedIn</span>
                    </a>
                    <a href="https://github.com/chrisyalamov">
                        <FiGithub className="inline mb-1 mr-1" /> 
                        <span className="underline">Check out my Github</span>
                    </a>
                    <a href="https://twitter.com/chrisyalamov">
                        <FiTwitter className="inline mb-1 mr-1" /> 
                        <span className="underline">Follow me on Twitter</span>
                    </a>
                </div>
            </div>
        </div>
    </SectionTemplate>
}