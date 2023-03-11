import './index.page.css'
import Content from '../../components/content'
import Header from '../../components/header'

function Page() {
  return (
    <>
      <p className="resume-last-updated">最后更新于 {new Date().toLocaleDateString()}。</p>
      <div className="container">
        <Header />
        <div className="divider">
          <hr />
        </div>
        <Content />
      </div>
      <p></p>
    </>
  )
}

export { Page }
