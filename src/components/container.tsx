import { Language, makeI18n } from '../i18n'
import './container.css'
import data from "../data"
import Content from './content'
import Header from './header'

function Container({ language, active }: { language: Language, active: boolean }) {
    const i18n = makeI18n(language)
    
    return (
        <div className={`container ${active ? "" : "container-invisible"}`}>
            <Header i18n={i18n} data={data[language]} />
            <div className="divider">
                <hr />
            </div>
            <Content i18n={i18n} data={data[language]} />
        </div>
    )
}

export default Container
