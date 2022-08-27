import React, { useRef, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

let LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

    return (
        <div className="flex flex-col justify-center h-full">
            <button 
                disabled={isFirstItemVisible} 
                onClick={() => scrollPrev()}
                className=" md:mr-5 text-xl text-slate-500 nonstick:hover:bg-slate-200 hover:active:bg-slate-100 box-content rounded-lg p-3 md:rounded-md md:p-2 disabled:opacity-30">
                <FiChevronsLeft />
            </button>
        </div>
    );
}

let RightArrow = () => {
    const { isLastItemVisible, scrollNext } =
    React.useContext(VisibilityContext);

    return (
        <div className="flex flex-col justify-center h-full">
            <button 
                disabled={isLastItemVisible} 
                onClick={() => scrollNext()}
                className=" md:ml-5 text-xl text-slate-500 nonstick:hover:bg-slate-200 hover:active:bg-slate-100 box-content rounded-lg p-3 md:rounded-md md:p-2 disabled:opacity-30">
                <FiChevronsRight />
            </button>
        </div>
    );
}

export const HorizontalScroll = ({children, ...props}) => {
    const { isFirstItemVisible, isLastItemVisible } = React.useContext(VisibilityContext);
    const apiRef = useRef()
    const [firstVis, setFirstVis] = useState(true);
    const [lastVis, setLastVis] = useState(false);

    let update = () => {
        setFirstVis(apiRef.current.isFirstItemVisible);
        setLastVis(apiRef.current.isLastItemVisible);
    }

    return <>
        <style dangerouslySetInnerHTML={{__html: `
            .scroll-menu {
                ${!lastVis ? `
                    mask: linear-gradient(to right,
                        black,
                        black calc(100% - 20px),
                        transparent 100%);
                ` : ""}

                ${!firstVis ? `
                    mask: linear-gradient(to right,
                        transparent 0%,
                        black 20px,
                        black 100%
                    );
                ` : ""}

                ${(!lastVis && !firstVis) ? `
                    mask: linear-gradient(to right,
                        transparent 0%,
                        black 20px,
                        black calc(100% - 20px),
                        transparent 100%);
                ` : ""}
            }

            .scroll-menu::-webkit-scrollbar {
                width: 0px;
                height: 0px;
                display: none;
            }
        `}} />
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            scrollContainerClassName="scroll-menu"
            apiRef={apiRef}
            onWheel={e => update()}
            >
            {children}
        </ScrollMenu>
    </>
}