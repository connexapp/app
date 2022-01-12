import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${media.greaterThan('medium')`
    position: relative;
  `}

  margin-bottom: 1.2rem;
`
export const BannerImage = styled.div`
  height: 30rem;
  background-image: url('/bd-image.png');
  background-position: center;
  background-size: cover;
`
export const BoxInfo = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      position: absolute;
      top: 5rem;
      width: 61rem;
      padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
      background-color: ${theme.colors.white};
    `}

    padding: ${theme.spacings.xxsmall} 0;
    color: ${theme.colors.black};
    border-radius: ${theme.border.radiusLarge};

    > h1 {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
    }

    > p {
      font-size: ${theme.font.sizes.medium};
    }

    > h1,
    p {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    button {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
