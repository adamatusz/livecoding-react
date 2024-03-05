import ReactDOM from 'react-dom/client'
import Button from './components/Button'

const element = (
  <div>
    <Button text='Click me' />
    <Button />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(element)
