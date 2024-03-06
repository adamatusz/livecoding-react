export default function UserCard({ user, isLogged }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Nickname: {user.nickname}</p>
      {isLogged ? (
        <>
          <p>Email: {user.email}</p>
          {user.phone && <p>Phone: {user.phone}</p>}
        </>
      ) : (
        <p>Please log in to see contact details.</p>
      )}
    </div>
  )
}
