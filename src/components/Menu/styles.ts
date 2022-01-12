import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.lightGray};

    div > svg {
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }
  `}
`
export const LogoIcon = styled.img`
  width: 17rem;
  height: 6rem;
  cursor: pointer;
`
export const MenuButtons = styled.div`
  ${({ theme }) => css`
    > button {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
export const MenuButtonsWrapper = styled.div`
  position: relative;
  display: flex;
`
export const MenuButtonsUsername = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    > svg {
      width: 3rem;
      height: 3rem;
    }
    > span {
      font-size: ${theme.font.sizes.small};
      margin-bottom: 0.2rem;
    }
  `}
`
type MenuDropdown = {
  isOpen: boolean
}

export const MenuDropdown = styled.div<MenuDropdown>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    width: 20.4rem;
    top: 3.2rem;
    left: 0;
    padding: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: opacity 0.3s ease-in-out;
    z-index: 1000;

    > h3,
    > p {
      margin-bottom: 0.4rem;
    }

    > h3 {
      font-size: ${theme.font.sizes.medium};
    }

    > p {
      font-size: ${theme.font.sizes.small};
      cursor: pointer;

      :hover {
        background-color: #dcdcdc;
      }
    }
  `}
`

type MenuFull = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFull>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: 100vh;
    background-color: ${theme.colors.white};
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0.6rem;
      right: 0.5rem;
      margin: ${theme.spacings.xxsmall};
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`
export const MenuNav = styled.div``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white}
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
export const ProfileAvatarWrapper = styled.div`
  height: 68px;
  width: 85px;
  border-radius: 45px;
  display: flex;
  padding: 1px 1px;
  align-items: center;
  justify-content: center;

  > img {
    width: 63px;
    height: 63px;
    border-radius: 57px;
  }
`
