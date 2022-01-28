import * as S from './styles'

type Provider = {
  name: string
  id: number
}

export type CardProps = {
  authorName?: string
  date?: string
  hour?: string
  promotionPrice?: string
  description?: string
  discountPercentage?: number
  id?: number
  price: string
  priceKind?: string
  status?: string
  subtitle?: string
  thumbnailUrl: string
  title: string
  uuid?: string
  videoUrl?: string
  viewsNumber?: number
  provider: Provider
  nameProvider?: string
}

const Card = ({
  thumbnailUrl,
  title,
  nameProvider,
  price,
  promotionPrice
}: CardProps) => (
  <>
  <S.Wrapper>
    <S.Containerimagem>
    <S.Image src={thumbnailUrl} />

    </S.Containerimagem>
    <S.CardTitle>{title}</S.CardTitle>
    <S.CardAuthor>{nameProvider}</S.CardAuthor>
    <S.CardPrices>
      <S.Price>R$ {price}</S.Price>
      {!!promotionPrice && (
        <S.PromotionPrice>{promotionPrice}</S.PromotionPrice>
      )}
    </S.CardPrices>
  </S.Wrapper>
  </>
)

export default Card
