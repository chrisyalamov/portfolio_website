import { SectionTemplate } from "./SectionTemplate"

export const Education = () => {
    return <SectionTemplate>
        <div className="p-10 md:p-24 px-16 max-w-lg">
            <div>
                <h2 className="text-2xl font-semibold mb-2">🎓 Education</h2>
                <div className="ml-8 flex flex-col lg:flex-row lg:gap-20">
                    <div className="mb-10 mt-6 shrink-0 grow-0 max-w-xs">
                        <h4 className="font-semibold bg-slate-500 text-slate-100 dark:bg-slate-700 px-2 -ml-1 mb-1 rounded-[0.25rem] inline-block">Manchester Metropolitan University</h4>
                        <p className="text-sm">Faculty of Business and Law</p>
                        <p className="text-sm">Manchester, UK</p>
                        <br/>
                        <p className="text-sm">Bachelor of Science (Hons.) in Business Technology.</p>
                        <br />
                        <p className="text-sm">
                            <span className="text-blue-800 bg-blue-50 dark:bg-blue-800 dark:text-blue-200 px-1 inline-block rounded-[0.25rem] mr-1">PRESENT STUDY</span>
                            Expected completion in 2025.
                        </p>
                    </div>
                    <div className="mb-10 mt-6 shrink-0 grow-0 max-w-xs">
                        <h4 className="font-semibold bg-slate-500 text-slate-100 dark:bg-slate-700 px-2 -ml-1 mb-1 rounded-[0.25rem] inline-block">University of the West of England</h4>
                        <p className="text-sm">Bristol Business School</p>
                        <p className="text-sm">Bristol, UK</p>
                        <br/>
                        <p className="text-sm">Certificate of Higher Education (CertHE) in Business and Management (Marketing).</p>
                        <br />
                        <p className="text-sm">
                            <span className="text-green-800 bg-green-50 dark:text-green-300 dark:bg-green-900 px-1 inline-block rounded-[0.25rem]  mr-1">COMPLETED</span>
                            in June 2021. Awarded with Distinction (First).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </SectionTemplate>
}