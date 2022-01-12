import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
import { Theme } from '../../../styled-components'

const wrapperModifiers = {
  primary: (theme: Theme) => css`
    background-color: ${theme.colors.primary};

    :hover {
      background: #c24444;
    }
  `,

  red: (theme: Theme) => css`
    background-color: ${theme.colors.red};

    :hover {
      background: #dd0000;
    }
  `,

  secondary: (theme: Theme) => css`
    background-color: ${theme.colors.secondary};

    :hover {
      background: #797a7d;
    }
  `,

  blue: () => css`
    background-color: #50b4e9;

    :hover {
      background: #1a91d0;
    }
  `,

  normal: (theme: Theme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  huge: (theme: Theme) => css`
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, variant, width, fullWidth }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    border: 0;
    text-decoration: none;
    cursor: pointer;

    ${!!variant && wrapperModifiers[variant](theme)};
    ${!!width && wrapperModifiers[width](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
  `}
`
