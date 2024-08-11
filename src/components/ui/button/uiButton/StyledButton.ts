import styled from 'styled-components'

interface ButtonProps {
  backgroundcolor?: string
  color?: string
  border?: string
  width?: string
  onClick?: (payload?: any) => void
}

export const StyledButton = styled.button<ButtonProps>`
  transition: all 0.2s ease-in-out;
  padding: 9px 24px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 130%;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: fit-content;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  &:hover {
    opacity: 0.7;
  }
`


export const StyledSubmitButton = styled.button.attrs({ type: 'submit' })`
  transition: all 0.2s ease-in-out;
  padding: 13px 0 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 130%;
  cursor: pointer;
  text-align: center;
  color: white;
  width: 100%;
  background-color: #2d71ae;

  &:hover {
    opacity: 0.8;
  }
`
