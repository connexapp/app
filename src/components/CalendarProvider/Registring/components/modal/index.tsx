import React from 'react'
import { Backdrop, Box, Modal, Fade } from '@material-ui/core'
import SaveHoursService from './table/SaveHoursService'
import { Title, CloseBox } from './styles'
import { Moment } from 'moment'
import useRequest from 'hooks/useRequest'
import { Service } from 'templates/ConsultancyRead'
import { RegisterOfCalendar } from '..'

type Input = {
  open: boolean,
  day: Moment,
  setOpenModal: Function,
  service: Service,
  providerId: number
  selectedTimesDay: RegisterOfCalendar | null,
  setDataRequestFunction: Function
  setSelectedTimesDay: Function
}

export default function ModalContent({ setSelectedTimesDay, open, day, setOpenModal, service, providerId, selectedTimesDay, setDataRequestFunction }: Input) {
  
  const handleClose = () => {
    setOpenModal(false)
    setSelectedTimesDay(null)
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
            <SaveHoursService setDataRequestFunction={setDataRequestFunction} day={day} selectedTimesDay={selectedTimesDay} setOpenModal={setOpenModal} service={service} providerId={providerId} />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
