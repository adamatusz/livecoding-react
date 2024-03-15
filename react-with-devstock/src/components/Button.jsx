export default function Button({
  color = "green",
  text = "Accept",
  clickHandler = () => console.log("a"),
  user,
}) {
  console.log(user);
  return (
    <button onClick={clickHandler} className={color}>
      {text}
    </button>
  );
}
