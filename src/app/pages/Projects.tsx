import { projectMeta } from '../../data/profile'
import { useI18n } from '../../i18n/LanguageContext'
import { PageHeader } from '../components/SectionHeader'
import { WorkCard } from '../components/WorkCard'

export function Projects() {
  const { t } = useI18n()

  return (
    <>
      <PageHeader index="02" title={t.projectsPage.title} aside={t.projectsPage.aside} />

      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {projectMeta.map((project, i) => (
            <WorkCard key={project.slug} slug={project.slug} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}
