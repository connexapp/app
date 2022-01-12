import React, { useEffect, useState } from 'react'
import { Backdrop, Box, Modal, Fade, BoxProps } from '@material-ui/core'
import SaveHoursService from './table/SaveHoursService'
import { Title, CloseBox } from './styles'
import { Moment } from 'moment'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import { selectedTimesDay } from '..'
import { ServiceConsultancyEditing } from 'templates/EditingService'

type Input = {
  open: boolean
  day: Moment
  setOpenModal: Function
  uuid?: string | string[] | undefined
  service: ServiceConsultancyEditing
  provider: number
  selectedTimesDay: selectedTimesDay
  setSelectedTimesDay: Function
}

export default function ModalContent({ open, day, setOpenModal, uuid, service, provider, selectedTimesDay, setSelectedTimesDay }: Input) {

  const { request } = useRequest()

  useEffect(() => {
    const getService = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: `/service/read/${uuid}`
      }

      const response = await request(config)
    }

    getService()
  }, [request, uuid])

  const handleClick = async (gateway: string) => {
    const configs: useRequestConfig = {
      method: 'POST',
      url: '/payment/create',
      sendToken: true,
      data: {
        serviceUuid: uuid
        // aki mandar o dia e o id da hora 
      }
    }

    if (gateway === 'MERCADO_PAGO') {
      configs.data.gateway = 'MERCADO_PAGO'
    }

    if (gateway === 'NOWPAYMENTS') {
      configs.data.gateway = 'NOWPAYMENTS'
    }

    const { url } = await request(configs)
    if (url) {
      window.open(url)
    }
  }

  const handleClose = () => {
    setSelectedTimesDay(null)
    setOpenModal(false)
  }
  
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
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
            <CloseBox onClick={handleClose}>
                <img src="/delete.png" />
            </CloseBox>
            <Title>{`Selecionar hórario`}</Title>
            <Title>{`para o dia ${day?.format('DD/MM')}`}</Title>
                <SaveHoursService day={day} selectedTimesDay={selectedTimesDay} setOpenModal={setOpenModal} service={service} provider={provider} />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
