import styled from "styled-components"

let Sticky = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    backdrop-filter: blur(10px);
`

export const StickyHeader = ({children}) => {
    return <Sticky className="bg-slate-50/90 dark:bg-slate-800/70 border-b-[1px] dark:border-slate-700/50 z-20 px-6 py-3">
        {children}
    </Sticky>
}