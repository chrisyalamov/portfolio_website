import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { SectionTemplate } from "./SectionTemplate";
import { BsCalendar3, BsCalendar3Range } from "react-icons/bs";
import { TbCurrencyPound } from "react-icons/tb";


let Step = ({ visible, children, dispatch, first, last, submit }) => {
    return (
        <div className={`step ${visible ? "" : "hidden"}`}>
            {children}
            <div className="mt-10 flex justify-end w-full gap-4">
                {
                    dispatch && <>
                        {first || <button className="p-1 px-2 rounded-[0.25rem] nonstick:hover:bg-slate-200 hover:active:bg-slate-100 dark:nonstick:hover:bg-slate-500 dark:hover:active:bg-slate-600" onClick={() => dispatch({ type: "prev" })}>Previous</button>}
                        {last || <button className="p-1 px-2 rounded-[0.25rem] bg-slate-600 nonstick:hover:bg-slate-900 hover:active:bg-slate-800 dark:nonstick:hover:bg-slate-700 dark:hover:active:bg-slate-800 text-white" onClick={() => dispatch({ type: "next" })}>Next</button>}
                        {last && <button className="p-1 px-2 rounded-[0.25rem] bg-slate-600 nonstick:hover:bg-slate-900 hover:active:bg-slate-800 dark:nonstick:hover:bg-slate-700 dark:hover:active:bg-slate-800 text-white" onClick={() => submit()}>Send</button>}
                    </>
                }
            </div>
        </div>
    )
}

let Field = ({ icon, label, placeholder, onChange }) => {
    return <div className="grid grid-cols-[20px_auto] gap-2 p-4 border-t-[1px] border-slate-200 dark:border-slate-600 mt-5">
        <span>{icon}</span>
        <p className="text-lg font-bold">{label}</p>
        <div></div>
        <input className="bg-transparent" type="text" placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </div>
}

export function ContactForm() {
    let reducer = (state, action) => {
        switch (action.type) {
            case "next":
                if (state > 4) {
                    return state;
                } else {
                    return state + 1;
                }
                break;
            case "prev":
                if (state < 1) {
                    return state;
                } else {
                    return state - 1;
                }
        }
    }
    let [step, dispatch] = useReducer(reducer, 0);
    let [formState, setFormState] = useState(null);
    let [formData, setFormData] = useState({});

    let submit = async () => {
        let res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
        if(res.ok) {
            setFormState("success");
        } else {
            setFormState("error");
        }
        dispatch({ type: "next" });
    }

    return <SectionTemplate className="relative">
        <div className="w-72 absolute right-0 pointer-events-none">
            <Image alt="" src="/distort3.png" width={2058} height={2845} />
        </div>
        <div className="p-10 md:p-16 pt-44 md:pt-52 flex flex-col justify-end items-start h-full gap-2 w-full antialiased">
            <Step visible={step === 0} first={true} dispatch={dispatch}>
                <div className="antialiased">
                    <h1 className="text-3xl font-medium mb-2">
                        👋 Hello!
                    </h1>
                    <p>
                        Looked around my portfolio and like what you see? Drop me a line!<br /><br />
                        First off, what&apos;s your name?
                    </p>
                    <input
                        type="text"
                        placeholder="Name"
                        className="my-4 font-base p-2 rounded-md border-[1px] border-slate-200 min-w-[20rem]"
                        onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
            </Step>
            <Step visible={step === 1} dispatch={dispatch}>
                <div className="antialiased">
                    <h1 className="text-3xl font-medium mb-2">
                        Hey {formData.name}
                    </h1>
                    <p>
                        On what email address can I get back to you?
                    </p>
                    <input
                        type="email"
                        placeholder="Email"
                        className="my-4 font-base p-2 rounded-md border-[1px] border-slate-200 min-w-[20rem]"
                        onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
            </Step>
            <Step visible={step === 2} dispatch={dispatch}>
                <div className="antialiased">
                    <h1 className="text-3xl font-medium mb-2">
                        What can I help you out with?
                    </h1>
                    <p>
                        Type in your message below.
                    </p>
                    <TextareaAutosize 
                        className="my-4 font-base p-2 rounded-md border-[1px] border-slate-200 min-w-[20rem]"
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        minRows={4} />
                </div>
            </Step>
            <Step visible={step === 3} dispatch={dispatch}>
                <div className="antialiased">
                    <h1 className="text-3xl font-medium mb-2">
                        A few more details
                    </h1>
                    <p className="max-w-lg">
                        If you have a specific project in mind, you can fill out some of the fields below— it may help speed things up.
                    </p>

                    <Field 
                        label="Project Name" 
                        placeholder="Project Name" 
                        onChange={val => setFormData({...formData, projectName: val})} 
                        icon={<BsCalendar3 className="mt-1" />} 
                    />
                    <Field 
                        label="Budget" 
                        placeholder="Budget" 
                        onChange={val => setFormData({...formData, budget: val})} 
                        icon={<TbCurrencyPound className="mt-[0.35rem]" />} 
                    />
                    <Field 
                        label="Timeframe" 
                        placeholder="e.g. 3-4 weeks" 
                        onChange={val => setFormData({...formData, timeframe: val})} 
                        icon={<BsCalendar3Range className="mt-[0.35rem]" />} 
                    />
                </div>
            </Step>
            <Step visible={step === 4} last={true} dispatch={dispatch} submit={submit}>
                <div className="antialiased">
                    <h1 className="text-3xl font-medium mb-2">
                        Nearly there...
                    </h1>
                    <p className="max-w-lg">
                        Once you send off your message, I&apos;ll try and get back to you within 2-3 working days. You can always reach me at <a className="underline" href="mailto:chris@chrisyalamov.space">chris@chrisyalamov.space</a>
                    </p>
                </div>
            </Step>
            <Step visible={step === 5} last={false}>
                <div className="antialiased">
                    <h1 className="text-3xl font-medium mb-2">
                        {formState == "success" ? "All done!" : "Something went wrong"}
                    </h1>
                    <p className="max-w-lg">
                        { formState == "success" ? "I'll get back to you as soon as I can." : "Please try again later or get in touch with me via email." }
                    </p>
                </div>
            </Step>
        </div>
    </SectionTemplate>
}