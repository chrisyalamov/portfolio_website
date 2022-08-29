import Link from "next/link"
import { FiDownload } from "react-icons/fi"
import { SectionTemplate } from "./SectionTemplate"

let ExtLink = ({ href, label, icon }) => {
    return <Link href={href}>
        <a className="inline-flex items-center justify-center border-b-[1px] cursor-pointer">
            <span className="mr-1">{label}</span>
            <span className="">{icon}</span>
        </a>
    </Link>
}

export const CV = () => {
    return <SectionTemplate>
        <div className="p-10 md:p-24 px-16">
            <h2 className="text-2xl font-semibold mb-2">👋 Hey Recruiters!</h2>
            <div className="ml-8 mt-6 w-full flex gap-5 flex-col max-w-lg">
                <p>Pleased to see you here— if you&apos;ve had a look around my portfolio and you like what you&apos;re seeing, I&apos;d love to have a chat!</p>
                <p className="text-sm">You can find my CV <ExtLink 
                        href='/CV.pdf'
                        label='here'
                        icon={<FiDownload />}
                    /> and then head over to the contact section above.
                </p>
            </div>
        </div>
    </SectionTemplate>
}