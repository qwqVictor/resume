import './index.page.css'
import Content from '../../components/content'
import Header from '../../components/header'
import Floating from '../../components/floating'

function Page() {
  return (
    <>
      <p className="resume-last-updated">最后更新于 __RESUME_LAST_UPDATED_BUILD_TIME。</p>
      <div className="container">
        <Header />
        <div className="divider">
          <hr />
        </div>
        <Content />
      </div>
      <Floating />
      <p></p>
    </>
  )
}

export { Page }
