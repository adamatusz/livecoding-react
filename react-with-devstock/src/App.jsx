import UserCard from './components/UserCard'

const user = {
  name: 'Jan Kowalski',
  nickname: 'jankowalski',
  email: 'jan.kowalski@example.com',
  phone: '123-456-789',
}

const secondUser = {
  name: 'Anna Nowak',
  nickname: 'annanowak',
  email: 'anna.nowak@example.com',
}

function App() {
  const isLogged = false

  return (
    <>
      <UserCard user={user} isLogged />
      <hr />
      <UserCard user={secondUser} isLogged={isLogged} />
    </>
  )
}

export default App
