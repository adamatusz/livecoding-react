const UserCard = ({ user }) => {
  if (!user.isLoggedIn) {
    return null;
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Nickname: {user.nickname}</p>
      <p>Email: {user.email}</p>
      {user.phone ? (
        <p>Phone:{user.phone}</p>
      ) : (
        <p>{user.name} nie ma telefonu</p>
      )}
    </div>
  );
};

export default UserCard;
