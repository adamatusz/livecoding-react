import BoldText from './components/BoldText'
import Wrapper from './components/Wrapper'

function CustomComponent({ text = 'Dołącz do Devstock!' }) {
  return <h2 style={{ color: 'blue', padding: '20px' }}>{text}</h2>
}

function App() {
  return (
    <div>
      <Wrapper>
        <BoldText>
          <CustomComponent />
        </BoldText>
        <BoldText>
          <CustomComponent text='Stawiamy na zespół!' />
        </BoldText>
      </Wrapper>
    </div>
  )
}

export default App
