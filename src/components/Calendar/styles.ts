import styled, { css } from 'styled-components'
import { SizeProps } from './Calendar'

export const SizeCalendar = styled.div`
${({ size }: SizeProps) => css`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  /* border: 2px solid black;
  border-radius: 20px; */
  height: ${({ size }: SizeProps) => (size ? size : 'none')};
  width: ${({ size }: SizeProps) => (size ? size : 'none')};
  min-width: ${({ size }: SizeProps) => (size ? size : 'none')};

`}
`
