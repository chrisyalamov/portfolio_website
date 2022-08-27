import Image from "next/image"
import styled, { css } from "styled-components"
import { SectionTemplate } from "./SectionTemplate"

let Distort = styled.div`
    position: absolute;
    width: 200px;
    mix-blend-mode: darken;
    right: 0;
    bottom: -6px;
`

let Wave = styled.div`
    width: 200px;
    height: 200px;
    justify-self: end;
    align-self: end;
    z-index: 1;
    margin-right: 20px;
`

export const LandingHeader = () => {
    return <SectionTemplate customStyles={css`
        position: relative;
        min-height: 4x00px;
        padding-top: 10rem;
        display: flex;    
        justify-content: space-between;

        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
        }
        `}>
        <div className="antialiased p-10 px-16 max-w-sm">
            <h2 className="text-3xl font-medium mb-2">Hello, I&apos;m Chris.</h2>
            <p>I&apos;m a student, designer and developer, based in Manchester, UK.</p>
        </div>
        <Wave>
            <Image src="/wave.png" alt="wave" width={300} height={300} loading="eager" />
        </Wave>
        <Distort>
            <div className="dark:hidden"><Image src="/distort.png" width={2245} height={3990} /></div>
            <div className="hidden dark:block"><Image src="/distortDark.png" width={2245} height={3990} /></div>
        </Distort>
    </SectionTemplate>
}