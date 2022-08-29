import styled from "styled-components";

export const SectionTemplate = styled.section`
    width: 100%;
    max-width: 1000px;
    border-bottom: 1px solid #B9C2D0;

    @media (prefers-color-scheme: dark) {
        border-bottom: 1px solid #324765;
    }
    
    @media (max-width: 640px) {
        scroll-snap-align: start;
        padding-top: 5rem;
        // padding-bottom: 5rem;
        // min-height: 80vh;
    }
    ${({customStyles}) => customStyles}}
`