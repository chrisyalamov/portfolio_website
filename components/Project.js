import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi"
import ReactMarkdown from "react-markdown"
import styled, { css } from "styled-components"
import { HorizontalScroll } from "./HorizontalScroll"
import { SectionTemplate } from "./SectionTemplate"
import { RiArrowGoBackLine } from "react-icons/ri"
import { Contact } from "./Contact"

export const ProjectPreview = ({project}) => {
    return <Link href={`/project/${project.slug}`}>
        <button className="text-left appearance-none block w-full px-5 py-2 border-b-[1px] last-of-type:border-b-0 group cursor-pointer active:bg-slate-100 dark:active:bg-slate-700">
            <h4 className="text-base font-semibold nonstick:group-hover:underline">{project.projectTitle}</h4>
            <p className="text-sm font-light max-w-md">{project.briefDescription}</p>
        </button>
    </Link>
}

let Disclosures = ({disclosures}) => {
    let [visible, setVisible] = useState(false)
    
    return <SectionTemplate customStyles={css`
        min-height: inherit!important;
        padding-top: 0!important;
    `}>
        <div className="py-6 px-10 md:px-16 antialiased">
            <div className="flex justify-between items-center">
                <h3>Important disclosures and disclaimers</h3>
                <button
                    className="nonstick:hover:bg-slate-200 hover:active:bg-slate-100 dark:nonstick:hover:bg-slate-600 dark:hover:active:bg-slate-700 px-2 py-1 rounded-md"
                    style={{WebkitTapHighlightColor: "rgba(0,0,0,0)"}}
                    onClick={() => setVisible(!visible)}
                >{visible ? "Hide" : "Show"}</button>
            </div>

            {visible && <div className="mt-5 text-sm max-w-lg">
                <p>I have published details of this project in good faith and in accordance with relevant law. This section includes important disclaimers regarding the work showcased.</p>
                <div className="mt-10 flex flex-col gap-5">
                    {
                        disclosures.map((disclosure, index) => {
                            return <div key={index}>
                                <h4 className="text-base font-semibold">{disclosure.fullName}</h4>
                                <p className="text-xs">{disclosure.disclaimerBody}</p>
                            </div>
                        })
                    }
                </div>
            </div>}
        </div>
    </SectionTemplate>
}

let Sections = ({sections}) => {
    return <>
        {sections.map((section, index) => {
            return <SectionTemplate key={index} customStyles={css`
                min-height: inherit!important;
                padding-top: inherit!important;
            `}>
                <div className="antialiased p-10 md:px-16 max-w-4xl text-sm">
                    <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
                    {/* eslint-disable-next-line react/no-children-prop */}
                    <ReactMarkdown children={section.body} components={{
                        p: props => <p className="my-3 leading-relaxed">{props.children}</p>,
                        h1: props => <h1 className="text-2xl font-semibold mb-2">{props.children}</h1>,
                        h2: props => <h2 className="text-xl font-semibold mb-2">{props.children}</h2>,
                        h3: props => <h3 className="text-lg font-semibold mb-2">{props.children}</h3>,
                        img: props => <img src={props.src} alt={props.alt} className="max-h-96 inline-block my-4 mr-5 rounded-lg border-[1px] border-slate-300" />
                    }} />
                </div>
            </SectionTemplate>
        })}
    </>
}

// let Contact = () => {
//     return <SectionTemplate>
//         <div className="p-10 md:p-16 flex flex-col items-start h-full w-full gap-2 antialiased relative">
//             <h2 className="text-2xl font-semibold mb-2 antialiased">💬 Get in touch</h2>
//             <div className="ml-8 antialiased flex flex-col">
//                 <p className="text-lg mb-4 max-w-md">
//                     I&apos;m always open to new opportunities. If you have a project in mind, get in touch!
//                 </p>
//                 <br />
//                 <div className="flex flex-col gap-2">
//                     <a href="mailto:chris@chrisyalamov.space?subject=%F0%9F%91%8B%20Hey%2C%20let's%20connect!&body=Hi%20there%2C%0D%0A%0D%0AI'm%20%5Bname%5D%20(from%20%5Bcompany%5D).%20I'm%20looking%20for%20someone%20to%20work%20with%20on%20%5Bproject%5D.%0D%0A%0D%0ALet's%20chat!">
//                         <FiMail className="inline mb-1 mr-1" /> 
//                         <span className="underline">Reach out via email</span>
//                     </a>
//                     <a href="https://www.linkedin.com/in/chrisyalamov/">
//                         <FiLinkedin className="inline mb-1 mr-1" /> 
//                         <span className="underline">Connect with me on LinkedIn</span>
//                     </a>
//                     <a href="https://github.com/chrisyalamov">
//                         <FiGithub className="inline mb-1 mr-1" /> 
//                         <span className="underline">Check out my Github</span>
//                     </a>
//                     <a href="https://twitter.com/chrisyalamov">
//                         <FiTwitter className="inline mb-1 mr-1" /> 
//                         <span className="underline">Follow me on Twitter</span>
//                     </a>
//                 </div>
//                 <div className="w-28 md:w-48 mt-10 md:mt-0 self-end">
//                     <Image src="/think.png" width={325} height={329}/>
//                 </div>
//             </div>
//         </div>

//     </SectionTemplate>
// }

let StyledImageWrapper = styled.div`
    width: ${props => props.newWidthMobile}px;

    @media (min-width: 768px) {
        width: ${props => props.newWidth}px;
    }
`

let ShowcaseImage = ({image}) => {
    let ratio = image.height / image.width;
    let newWidth = Math.ceil(384 / ratio) + 1;
    let newWidthMobile = Math.ceil(224 / ratio) + 1;
    return <StyledImageWrapper 
            className={`h-56 md:h-96 inline-block my-4 mr-4 md:mr-10 rounded-lg border-[1px] border-slate-300 overflow-hidden`}
            newWidth={newWidth} newWidthMobile={newWidthMobile} >
        <Image src={image.url} width={image.width} height={image.height} />
    </StyledImageWrapper>
}

let ShowcaseReel = ({images}) => {
    // let [expanded, toggle] = useState(false)

    // if(!expanded) {
    //     images = images.slice(0, 2)
    // }

    return <div className="">
        <HorizontalScroll>
            {images.map((image, index) => {
                return <ShowcaseImage key={index} image={image} />
            })}
        </HorizontalScroll>
    </div>
}

let Showcase = ({images}) => {
    return <SectionTemplate customStyles={css`min-height:inherit!important;`}>
        <div className="py-6 px-10 md:px-16 antialiased">
            <h2 className="text-lg font-semibold mb-2">Showcase</h2>
            {
                images?.length > 0
                ? ""
                : "No images available"
            }
        </div>
        <ShowcaseReel images={images} />
    </SectionTemplate>
}

export const ProjectFull = ({project}) => {
    return <>
        <SectionTemplate className="relative min-h-[300px]" customStyles={css`min-height:inherit!important;`}>
            <div className="absolute top-0 md:opacity-70 w-[900px] md:w-full left-1/2 -translate-x-1/2 z-0 dark:mix-blend-screen">
                <Image src="/distort2.png" width={2058} height={654} />
            </div>
            <div className="p-10 md:p-16 pt-44 md:pt-52 flex flex-col justify-end items-start h-full gap-2 max-w-lg antialiased">
                <Link href="/">
                    <button 
                        className="absolute top-44 sm:top-32 text-left mb-8 nonstick:hover:bg-slate-200 hover:active:bg-slate-100 dark:nonstick:hover:bg-slate-600 dark:hover:active:bg-slate-700 px-3 py-1 rounded-md -ml-3 flex items-center gap-3">
                            <RiArrowGoBackLine className="inline" /><span>Back</span>
                    </button>
                </Link>
                <h1 className="text-3xl font-medium mb-2">
                    {project.projectTitle}
                </h1>
                <p>
                    {project.briefDescription}
                </p>
            </div>
        </SectionTemplate>
        <Disclosures disclosures={project.disclaimers} />
        <Showcase images={project?.images} />
        <Sections sections={project.projectSections} />
        <Contact />
    </>
}