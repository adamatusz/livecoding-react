export default function Button({ children, onClick }) {
  const defaultValue = children ? children : "Witam";
  return <button onClick={onClick}>{defaultValue}</button>;
}
