
import React, { useState, useEffect } from 'react'
import * as S from './styles'

const QrCode = ({
    pixCopiaECola,
    imageBase64
}) => {

    const copyToClipBoard = async copyMe => {
          await navigator.clipboard.writeText(copyMe);
      };

    return (
        <>
            <S.QrCodeContainer>
                <S.QrCodeImage>
                    <img src={imageBase64} alt="" />
                </S.QrCodeImage>
                <S.QrCodeCopieEcolaContainer>
                    <S.QrCodeCopieEcolaContainerTitle>
                        <span><b>Copie ou escaneie o QR CODE</b> </span>
                    </S.QrCodeCopieEcolaContainerTitle>
                    <S.QrCodeCopieEcolaContainerDescription>
                        <span>Ao copiar o código, abra seu aplicativo cadastrado no pix e realize o seu pagmento de forma rápida.</span>
                    </S.QrCodeCopieEcolaContainerDescription>
                    <S.QrCodeCopieEcolaContainerButton>
                        <S.ButtonStyled onClick={()=>copyToClipBoard(pixCopiaECola)}>
                            COPIAR CÓDIGO
                        </S.ButtonStyled>
                    </S.QrCodeCopieEcolaContainerButton>
                </S.QrCodeCopieEcolaContainer>
            </S.QrCodeContainer>

        </>
    )
}
export default QrCode