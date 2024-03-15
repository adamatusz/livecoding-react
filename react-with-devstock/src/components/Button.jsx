export default function Button({ children = "Witam", onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
