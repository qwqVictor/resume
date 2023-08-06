import { langNameMap, langPrompt, langSet, Language, makeI18n } from '../i18n'
import './floating.css'

function Floating({ language: language, setLanguage } : { language: Language, setLanguage: CallableFunction }) {
  const $ = makeI18n(language)
  return (
    <div className="floating-buttons">
      <div className="floating-button" style={{ backgroundColor: '#fb7299' }}>
        <span className="floating-button-icon"><i className="fa-solid fa-language"></i></span>
        <select className="floating-select" title={langPrompt} onChange={(e) => { setLanguage(e.target.value) }}>
          {langSet.map((language) => <option className="floating-select-option" key={language} value={language}>{langNameMap[language]}</option>)}
        </select>
      </div>
      <a href="javascript:void(0);" onClick={() => {
        window.print()
      }} className="floating-button" style={{backgroundColor: '#0ecaa3'}}>
        <span className="floating-button-icon"><i className="fa-solid fa-print"></i></span>
        <span className="floating-button-text">{$('T_Print')}</span>
      </a>
      <a href="resume.pdf" className="floating-button" style={{backgroundColor: '#0e92ca'}}>
        <span className="floating-button-icon"><i className="fa-solid fa-file"></i></span>
        <span className="floating-button-text">{$('T_PDF')}</span>
      </a>
    </div>
  )
}

export default Floating
