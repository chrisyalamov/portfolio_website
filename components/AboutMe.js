import { SectionTemplate } from "./SectionTemplate"

export const AboutMe = () => {
    return <SectionTemplate>
        <div className="p-10 md:p-24 px-16">
            <h2 className="text-2xl font-semibold mb-2">👋 About me</h2>
            <div className="ml-8 mt-6 w-full flex flex-col lg:flex-row lg:justify-between">
                <div className="max-w-md">
                    <p className="text-sm mb-4">
                        I&apos;m a student, designer and developer based in Manchester, UK. I&apos;m currently studying Business Technology at Manchester Metropolitan Business School.
                    </p>
                    <p className="text-sm mb-4">
                        Originally from Bulgaria, I am currenly based between Bristol and Manchester.
                    </p>
                    <p className="text-sm mb-4">
                        I have experience with developing APIs, web applications, deploying on the cloud, as well as designing brands and marketing material.
                    </p>
                </div>
                <div className="">
                    <span className="inline-block bg-red-700 text-white px-2 rounded-[0.25rem] text-sm font-bold w-60">• CURRENTLY</span>
                    <ul className="p-3 text-sm flex flex-col gap-2">
                        <li>📍 in Bristol, UK</li>
                        <li>🕤 in GMT+1</li>
                        <li>👍 open for work</li>
                    </ul>
                </div>
            </div>
        </div>
    </SectionTemplate>
}