import ReactDOM from 'react-dom/client'

const classNameValue = 'button'

const element = (
  <>
    <div>
      <button className={classNameValue}>Kliknij mnie</button>
    </div>
    <div>Cześć</div>
  </>
)

ReactDOM.createRoot(document.getElementById('root')).render(element)
