import { useEffect, useRef } from 'react'
import './App.css'
import Content from './components/content'
import Header from './components/header'

function App() {
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

export default App
