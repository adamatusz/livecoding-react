export default function Button({ text }) {
  const defaultValue = text ? text : 'Witam'
  return <button>{defaultValue}</button>
}
