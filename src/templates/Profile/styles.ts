import styled, {css} from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const ProfileFormWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`
export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  text-align: center;
`

export const Input = styled.div`
  label {
    background-color: #ec5252;
    border-radius: 5px;
    color: #fff;
    margin: 10px;
    padding: 7px 20px 8px;
  }
  label:hover {
    filter: brightness(70%);
  }

  text-align: center;
`

export const ProfileAvatarWrapper = styled.div`
  /* margin: 2rem 0; */
  margin-bottom: 11px;
  text-align: center;

  > div > input {
    width: 50%;
  }
`
export const ProfileAvatarInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const CardSection = styled.section`
  ${({ theme }) => css`
    margin: 0.8rem 0;

    > div > h2 {
      padding: 1.2rem 0;
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`