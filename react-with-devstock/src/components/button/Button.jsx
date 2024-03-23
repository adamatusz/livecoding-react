import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ $disabled, $primary }) => {
    if ($disabled) return 'grey'
    if ($primary) return 'sandybrown'
    return 'cornflowerblue'
  }};
  color: ${({ $disabled, $primary }) =>
    $disabled || $primary ? 'black' : 'white'};
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    ${({ $disabled }) => !$disabled && 'background-color: lightskyblue;'}
  }
`

export default function Button({ children, onClick, disabled, ...rest }) {
  const defaultValue = children ? children : 'Witam'
  return (
    <StyledButton onClick={onClick} $disabled={disabled} {...rest}>
      {defaultValue}
    </StyledButton>
  )
}
