import { useState } from 'react'
import Soup from './components/Soup'
import Button from './components/Button'

function App() {
  const [hideButtons, setHideButtons] = useState(false)
  return (
    <>
      <Button onClick={() => setHideButtons((prev) => !prev)}>
        {hideButtons ? 'Pokaż' : 'Ukryj'} przyciski akcji
      </Button>
      <Soup hideButtons={hideButtons} />
    </>
  )
}

export default App
