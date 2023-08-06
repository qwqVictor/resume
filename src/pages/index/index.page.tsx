import './index.page.css'
import Container from '../../components/container'
import Floating from '../../components/floating'
import { useState } from 'react'
import { Language, makeI18n, resolveI18n, langSet } from '../../i18n'

function Page({ defaultLanguages } : { defaultLanguages: readonly string[] }) {
  const [language, setLanguage] = useState<Language>(resolveI18n(defaultLanguages ?? langSet))
  const $ = makeI18n(language)
  return (
    <>
      <p className="resume-last-updated">{$('T_LastUpdate', "__RESUME_LAST_UPDATED_BUILD_TIME")}</p>
      {langSet.map((lang, index) =>
          <>
            {index > 0 ? <div key={index} className={`container-page-break ${lang == language ? "" : "container-invisible"}`}></div> : <></>}
            <Container key={lang} language={lang} active={lang == language} />
          </>
        )
      }
      <Floating language={language} setLanguage={setLanguage}  />
      <p></p>
    </>
  )
}

export { Page }
