import { ProjectPreview } from "./Project"
import { SectionTemplate } from "./SectionTemplate"

export const Projects = ({projects}) => {
    return <SectionTemplate>
        <div className="antialiased p-10 px-16 max-w-lg">
            <h2 className="text-2xl font-semibold mb-2">My work</h2>
            <p className="text-sm">I have worked on both creative and technical projects, on aspects including branding, marketing campaigns, software, API and web development.</p>
        </div>
        <div className="border dark:border-slate-600 mx-10 rounded-md mb-8 overflow-hidden">
            {projects.map((project, index) => {
                return <ProjectPreview key={index} project={project} />
            })}
        </div>
    </SectionTemplate>
}