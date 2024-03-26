import styles from "./styles.module.css";

export default function Button({ children, onClick, color = "yellow" }) {
  const defaultValue = children ? children : "Witam";
  return (
    <button style={{ color, padding: "20px" }} onClick={onClick}>
      {defaultValue}
    </button>
  );
}
