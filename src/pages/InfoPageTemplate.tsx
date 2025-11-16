import React from 'react'
import './LegalPage.css'

export interface InfoPageSection {
  title?: string
  paragraphs: string[]
  list?: string[]
}

interface InfoPageTemplateProps {
  badge?: string
  title: string
  description: string
  sections: InfoPageSection[]
  note?: React.ReactNode
}

const InfoPageTemplate: React.FC<InfoPageTemplateProps> = ({
  badge = 'Информация',
  title,
  description,
  sections,
  note,
}) => {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <div className="legal-hero-content">
            {badge && <span className="legal-badge">{badge}</span>}
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="legal-content">
        <div className="container">
          {sections.map((section, index) => (
            <section key={`${section.title ?? 'section'}-${index}`} className="legal-section">
              {section.title && <h2>{section.title}</h2>}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`paragraph-${index}-${paragraphIndex}`}>{paragraph}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={`${section.title ?? 'item'}-${item}`}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {note && <div className="legal-note">{note}</div>}
        </div>
      </div>
    </div>
  )
}

export default InfoPageTemplate

