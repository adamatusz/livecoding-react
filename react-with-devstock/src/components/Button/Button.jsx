import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 40px;
  color: orange;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

const StyledButtonWrapper = styled(StyledButton)`
  padding: 10px;
`;

export default function Button({ children, onClick, color }) {
  const defaultValue = children ? children : "Witam";
  return (
    <>
      <StyledButton color={color} onClick={onClick}>
        {defaultValue}
      </StyledButton>
      <StyledButtonWrapper color={color} onClick={onClick}>
        COPY {defaultValue}
      </StyledButtonWrapper>
    </>
  );
}
