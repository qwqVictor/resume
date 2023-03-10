import './index.page.css'
import Content from '../../components/content'
import Header from '../../components/header'

function Page() {
  return (
    <>
      <p></p>
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
