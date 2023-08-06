import './header.css'
import data from "../data"
function Header() {

  return (
    <header className="resume-header">
      <section className="header-row">
        <div className="header-left">
          <h1>
            {data.name}
            <span className="alternative-name">{data.altName ?? ""}</span>
          </h1>
        </div>
        <div className="header-right header-bottom-alignment">
          {data.job}
        </div>
      </section>
      <hr />
      <section className="header-row">
        <div className="header-left">
          <p>{data.sex} / {((date) => {
            const now = new Date()
            if (now.getMonth() > date.getMonth() || (now.getMonth() == date.getMonth() && now.getDate() >= date.getDate()))
              return now.getFullYear() - date.getFullYear()
            else return now.getFullYear() - date.getFullYear() - 1
          })(data.birthday)} 岁</p>
          <p>{data.university.type} / {data.university.begin} ~ {data.university.begin + (data.university.duration ?? 4)}</p>
          <p>{data.university.name} / {data.university.subject}</p>
        </div>
        <div className="header-right">
          <div className="header-contact">
            {data.mail ?
              <p>
                <a href={`mailto:${data.mail}`}><i className="fa-solid fa-envelope"></i> {data.mail}</a>
              </p>
              : <></>}
            {data.phone ?
              <p>
                <a href={`tel://${((phone) =>
                  (phone.replace("+", "00").match(/\d+/g) ?? ([] as string[])).reduce((sum, cur) => (sum ?? "") + (cur ?? ""))
                )(data.phone)}`}><i className="fa-solid fa-phone"></i> {data.phone}</a>
              </p>
              : <></>}
            {data.github ?
              <p>
                <a href={`https://github.com/${data.github}`}><i className="fa-brands fa-github"></i> {data.github}</a>
              </p>
              : <></>}
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
