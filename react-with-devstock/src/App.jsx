// function CustomComponent(( text = 'Dołącz do Devstock' )) {
//  return <h2 style={{color: 'blue', padding: '20px'}}>{text}</h2>
// }

import UserCard from "./components/UserCard";

function App() {
  const user = {
    id: 1,
    name: "Jan Kowalski",
    nickname: "jankowalski",
    // phone:"123-456-789",
    isLoggedIn: false,
  };
  const user2 = {
    id: 2,
    name: "Anna Kowalska",
    nickname: "annakowalska",
    email: "anna.kowalska@example.com",
    phone: "555-456-789",
    isLoggedIn: true,
  };

  const users = [user, user2];
  return (
    <div>
      {users
        .filter((user) => user.isLoggedIn)
        .map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
    </div>
  );
}

export default App;
