import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArroRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { useRouter } from 'next/router'
import Card, { CardProps } from 'components/CardHome'
import Slider, { SliderSettings } from 'components/Slide'
import * as S from './styles'
import { useDragDetection } from 'hooks/useDragDetections'

export type CardSliderProps = {
  items: CardProps[]
}

const CardSliderHome = (CardProps: { items: CardProps[] }) => {
  const router = useRouter()
  const { handleMouseDown, dragging } = useDragDetection()
  const user = useContext(AuthContext)

  const handleClick = (e: React.MouseEvent<HTMLElement>, item: CardProps) => {
    e.preventDefault()
    if (item?.provider.id === user?.user?.id) {
      router.push(`/service/${item.uuid}`)
      return
    }

    if (!dragging) {
      router.push({
        pathname: `/consultoria/${item.uuid}`,

      })
    }
  }

  const settings: SliderSettings = {
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1.1
        }
      }
    ],
    prevArrow: <ArrowLeft />,
    nextArrow: <ArroRight />
  }

  return (
    <S.Wrapper>
      <S.Slicker>
        {(CardProps.items || []) && CardProps.items.map((item: CardProps, index) => (
          <a
            key={index}
            onMouseDownCapture={handleMouseDown}
            onClickCapture={(e) => handleClick(e, item)}
          >
            <Card thumbnailUrl={item.thumbnailUrl} title={item.title} provider={item.provider} price={item.price} promotionPrice={item.promotionPrice} nameProvider={item.provider.name} />
          </a>
        ))}

        </S.Slicker>
    </S.Wrapper>
  )
}

export default CardSliderHome
