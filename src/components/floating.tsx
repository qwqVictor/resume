import './floating.css'

function Floating() {
  return (
    <div className="floating-buttons">
      <a href="javascript:void(0);" onClick={() => {
        window.print()
      }} className="floating-button" style={{backgroundColor: '#0ecaa3'}}>
        <span className="floating-button-icon"><i className="fa-solid fa-print"></i></span>
        <span className="floating-button-text">打印本页</span>
      </a>
      <a href="resume.pdf" className="floating-button" style={{backgroundColor: '#0e92ca'}}>
        <span className="floating-button-icon"><i className="fa-solid fa-file"></i></span>
        <span className="floating-button-text">PDF 简历</span>
      </a>
    </div>
  )
}

export default Floating
