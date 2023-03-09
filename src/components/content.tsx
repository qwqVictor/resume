import './content.css'
import data from "../data"
import ReactMarkdown from 'react-markdown'
import { ResumeExperience } from '../types/data'

function Content() {

  const render = (experience: ResumeExperience, index: number) => {
    return (
      <section className="content-section" key={index}>
        <header className="content-title">
          <span className="content-section-title-l"></span>
          <h2 className="content-section-title">
            <div className="content-title-box">
              {experience.title}
            </div>
          </h2>
          <span className="content-section-title-r"></span>
        </header>
        <div className="content-details">
          {experience.details.map(((detail, index) =>
            <div key={index}>
              {typeof detail === "string" ? <></> : 
              <div className="content-details-item">
                <h3 className="content-details-title">
                  <div className="content-details-icon">
                    {(detail.title.icon ?? "").includes("fa") ? 
                      <i className={detail.title.icon ?? "fa-solid fa-circle"}></i>
                      : detail.title.icon
                    }
                  </div>
                  {detail.title.text}
                </h3>
                <h3 className="content-details-location">{detail.location ?? ""}</h3>
                <span className="content-details-badge">{detail.badge ?
                  <span className="content-details-badge-box">
                    {detail.badge.url ?
                      <a href={detail.badge.url}>{detail.badge.text}</a> :
                      <>{detail.badge.text}</>}

                  </span>
                  : <></>}</span>
              </div>
              }
              <div className="content-details-markdown">
                <ReactMarkdown>{(typeof detail === "string" ? detail : detail.content) ?? ""}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  return (
    <div className="resume-content">
      <div className="resume-content-left">
        {data.experiences1.map(render)}
      </div>
      <hr className="resume-content-divider" />
      <div className="resume-content-right">
        {data.experiences2.map(render)}
      </div>
    </div>
  )
}

export default Content
