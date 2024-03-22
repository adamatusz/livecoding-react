import style from './Button.module.css'

export default function Button({ children, onClick, disabled, ...rest }) {
  const defaultValue = children ? children : 'Witam'
  return (
    <button
      className={disabled ? style.btnDisabled : style.btn}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {defaultValue}
    </button>
  )
}
