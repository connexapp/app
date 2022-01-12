import React, { useState, useEffect } from 'react'
import { Moment } from 'moment'
import { userData } from '../userData'
import * as S from './styles'
import { FreeHours } from 'templates/ConsultancyRead'

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
    handleClick: (gatway: string) => void
    uuid: string | string[] | undefined
}


const BuyingServiceTime = ({ day, freeHours, handleClick }: Input) => {
    const [selectedTime, setSelectedTime] = useState(false)
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
                            <S.ButtonStyled
                                onClick={() => handleClick('NOWPAYMENTS')}
                            >
                                PAGAR COM NANO
                            </S.ButtonStyled>
                            <S.ButtonStyled
                                onClick={() => handleClick('MERCADO_PAGO')}
  
                                style={{ backgroundColor: "#50b4e9"}}
                            >
                                PAGAR
                            </S.ButtonStyled>
                        </S.DivButton>
                    ) :
                    (null)
            }
        </S.Wrapper>
    )
}

export default BuyingServiceTime
