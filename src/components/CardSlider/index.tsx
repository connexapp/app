import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArroRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { useRouter } from 'next/router'
import Card, { CardProps } from 'components/Card'
import Slider, { SliderSettings } from 'components/Slide'
import * as S from './styles'
import { useDragDetection } from 'hooks/useDragDetections'

export type CardSliderProps = {
  items: CardProps[]
}

const CardSlider = (CardProps: { items: CardProps[] }) => {
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
          arrows: true,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true, 
          slidesToShow: 2.6
        }
      },
      {
        breakpoint: 570,
        settings: {
          prevArrow: <ArrowLeft />,
          infinite: true,
          arrows: false,
          slidesToShow: 1.4
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
      <Slider settings={settings}>
        {(CardProps.items || []) && CardProps.items.map((item: CardProps, index) => (
          <a
            key={index}
            onMouseDownCapture={handleMouseDown}
            onClickCapture={(e) => handleClick(e, item)}
          >
            <Card thumbnailUrl={item.thumbnailUrl} title={item.title} provider={item.provider} price={item.price} promotionPrice={item.promotionPrice} nameProvider={item.provider.name} />
          </a>
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default CardSlider
