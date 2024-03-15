import { useState } from 'react'
import Soup from './components/Soup'
import Button from './components/Button'
import FormComponent from './components/FormComponent'

function App() {
  const [hideButtons, setHideButtons] = useState(false)
  return (
    <>
      <Button onClick={() => setHideButtons((prev) => !prev)}>
        {hideButtons ? 'Pokaż' : 'Ukryj'} przyciski akcji
      </Button>
      <Soup hideButtons={hideButtons} />
      <FormComponent />
    </>
  )
}

export default App
