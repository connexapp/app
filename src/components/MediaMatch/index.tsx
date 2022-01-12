import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoints = keyof DefaultBreakpoints

export type MediaMatchProps = {
  children: React.ReactNode
  lessThan?: breakpoints
  greaterThan?: breakpoints
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoints) => css`
    ${media.lessThan(size)` display: block; `}
  `,

  greaterThan: (size: breakpoints) => css`
    ${media.greaterThan(size)` display: flex; `}
  `
}

const Wrapper = styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`

const MediaMatch = ({ lessThan, greaterThan, children }: MediaMatchProps) => (
  <Wrapper lessThan={lessThan} greaterThan={greaterThan}>
    {children}
  </Wrapper>
)

export default MediaMatch
