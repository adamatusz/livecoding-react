import ReactDOM from 'react-dom/client'
import Button from './components/Button'

function Hello() {
  return <div>Cześć</div>
}

const element = (
  <>
    <div>
      <Button />
    </div>
    <Hello />
  </>
)

ReactDOM.createRoot(document.getElementById('root')).render(element)
