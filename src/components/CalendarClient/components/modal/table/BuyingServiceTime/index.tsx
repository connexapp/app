import React, { useState, useEffect } from 'react'
import { Moment } from 'moment'
import { userData } from '../userData'
import * as S from './styles'
import { FreeHours } from 'templates/ConsultancyRead'
import QrCode from 'components/QrCode'
import { Backdrop, Box, Modal, Fade, BoxProps } from '@material-ui/core'

export interface ColumnModal {
    field: string
    headerName: string
    width: number
}

export interface RowModal {
    start: string
    end: string
    id: number,
    isChecked: boolean
}

type Input = {
    day: Moment
    freeHours: FreeHours[]
    handleClick: (gatway: string, hourId: number, callback:(response)=> void) => void
    uuid: string | string[] | undefined
}


const BuyingServiceTime = ({ day, freeHours, handleClick }: Input) => {
    const [selectedTime, setSelectedTime] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showQrCode, setShowQrCode] = useState<any>(null)
    const [tableLine, setTableLine] = useState<RowModal[]>([] as RowModal[])
    const [hourSelected, setHourSelected] = useState<number>(0)

    useEffect(() => {
        function getHours() {
            const dayHoursModal: RowModal[] = []

            const dayModal = freeHours.filter(x => x.date == day.format("DDMMYYYY"))
            const dayModalHours = dayModal.map(x => x.hours)

            userData.forEach(hourDefault => {
                dayModalHours.forEach(hourModal => {
                    if (hourModal.includes(hourDefault.id)) {
                        dayHoursModal.push(hourDefault)
                    }
                })
            })
            setTableLine(dayHoursModal)
        }

        getHours()
    }, [day])

    const handleChange = (e) => {
        const { value } = e.target;

        setSelectedTime(true)
        setHourSelected(value)
    };
    return (
        <S.Wrapper>
            <S.TableDiv>
                <S.Form >
                    {tableLine.map(({ id, start, end }, index) => (
                        <S.DivLine key={index}>
                            <S.DivCheckBox>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={start}
                                    name={start}
                                    checked={id == hourSelected}
                                    value={id}
                                    onChange={handleChange}
                                />
                            </S.DivCheckBox>
                            <S.DivContent>
                                <S.DivLabel>
                                    <label>{start}</label>
                                </S.DivLabel>
                                <S.DivLabel>
                                    <label>{end}</label>
                                </S.DivLabel>
                            </S.DivContent>
                        </S.DivLine>
                    ))}
                </S.Form>
            </S.TableDiv>
            {
                selectedTime ?
                    (
                        <S.DivButton>
                            {/* <S.ButtonStyled
                                onClick={() => {
                                    handleClick('NOWPAYMENTS',hourSelected, ()=> {})
                                    setShowQrCode(false)
                                }}
                            >
                                PAGAR COM NANO
                            </S.ButtonStyled>
                            <S.ButtonStyled
                                onClick={() => {

                                    handleClick('MERCADO_PAGO',hourSelected,() => {})
                                    setShowQrCode(false)
                                }}
  
                                style={{ backgroundColor: "#50b4e9"}}
                            >
                                PAGAR
                            </S.ButtonStyled> */}
                            <S.ButtonStyled
                                onClick={() => {

                                   handleClick('PIX',hourSelected, (response) => {setShowQrCode(response), setShowModal(true)})
                                }}
  
                                style={{ backgroundColor: "#32CD32"}}
                            >
                                PAGAR COM PIX
                            </S.ButtonStyled>
                        </S.DivButton>
                    ) :
                    (null)
            }
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={showModal}
                onClose={setShowModal}
                closeAfterTransition
                BackdropProps={{
                timeout: 500
                }}
            >
                <Fade in={showModal}>
                    <Box style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        border: 'none',
                        transform: 'translate(-50%, -50%)',
                        width: 'auto',
                        height: 'auto',
                        borderRadius: "0.4rem",
                        backgroundColor: 'white',
                        boxShadow: "24",
                        padding: "3rem",
                    }}>
                    <S.CloseBox onClick={() => setShowModal(!showModal)}>
                        <img src="/delete.png" />
                    </S.CloseBox>
                    { showQrCode != null ?(
                        <QrCode pixCopiaECola={showQrCode.pixCopiaECola} imageBase64={showQrCode.imagemQrCodeBase64}/>
                    ): (null)}
                </Box>
                </Fade>
            </Modal>
         
        </S.Wrapper>
      
    )
}

export default BuyingServiceTime
