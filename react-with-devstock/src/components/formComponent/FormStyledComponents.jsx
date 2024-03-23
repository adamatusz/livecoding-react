import styled from 'styled-components'

export const StyledForm = styled.form`
  background-color: honeydew;
  padding: 20px;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  & input,
  textarea {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 8px;
    flex-grow: 1;
  }

  & label {
    font-weight: 600;
  }
`

export const StyledFormElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 16px;
`

export const StyledFormElement = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 4px;
`
