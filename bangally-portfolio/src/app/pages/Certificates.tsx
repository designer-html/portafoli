import { ArrowUpRight, BadgeCheck } from 'lucide-react'

import { certificates } from '../../data/profile'
import { useI18n } from '../../i18n/LanguageContext'
import { PageHeader } from '../components/SectionHeader'
import { Reveal } from '../components/motion'

export function Certificates() {
  const { t } = useI18n()

  return (
    <>
      <PageHeader index="03" title={t.certificatesPage.title} aside={t.certificatesPage.aside} />

      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, i) => (
            <Reveal key={certificate.title} delay={(i % 3) * 0.06} className="h-full">
              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-[22px] border border-line bg-surface/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-[12px] border border-line-strong text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                    <BadgeCheck className="size-5" />
                  </span>
                  <span className="text-[12.5px] tabular-nums text-faint">{certificate.year}</span>
                </div>

                <h2 className="mt-6 text-[16.5px] font-medium leading-snug">{certificate.title}</h2>
                <p className="mt-1 text-[13.5px] text-muted">{certificate.issuer}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-line px-2.5 py-1 text-[11.5px] text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4 text-[12px]">
                  <span className="font-mono text-faint">{certificate.credentialId}</span>
                  <span className="inline-flex items-center gap-1 text-muted transition-colors group-hover:text-accent">
                    {t.certificatesPage.verify}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}
