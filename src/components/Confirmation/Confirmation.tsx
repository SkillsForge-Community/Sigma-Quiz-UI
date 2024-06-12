import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Box,
  HStack,
} from '@chakra-ui/react'
import { RiArrowLeftWideFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import "./Confirmation.css"
import { useState } from 'react';
type ConfirmationProps = {
  isOpen: boolean
  onClose: () => void
}
export default function Confirmation({ isOpen, onClose }: ConfirmationProps) {
  const [reset, setReset] = useState<boolean>(false)
  function handleClose(){
      onClose()
     setReset(false)
  }
  return (
    <>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl" >
        <ModalOverlay bg='none'
          backdropFilter='auto'
          backdropInvert='20%'
          backdropBlur='1px' />
        <ModalContent>
          <ModalHeader className='modal-header'>
            {!reset ? (<div onClick={onClose} className='modal-back-button'>
              <RiArrowLeftWideFill />
              <h5>Back</h5>
            </div>)
              :
              (<div onClick={() => setReset(false)} className='modal-back-button'>
                <RiArrowLeftWideFill />
                <h5>Back</h5>
              </div>)}
          </ModalHeader>
          <ModalBody >
            <div className='confimation-body'>
              { !reset ?
             ( <VStack spacing={20}>
                <Box className='confirmation-message'>Are you sure you want to reset password ?</Box>
                <HStack spacing={10}>
                  <button className='confirmation-button yes' onClick={() => setReset(true)}>Yes</button>
                  <button className='confirmation-button no' onClick={onClose}>No</button>
                </HStack>
              </VStack>)
              :
              (<VStack spacing={5}>
                <Box className='confirmation-message'>Password Reset Successful</Box>
                <Box className='congratulatory-check'>
                  <FaCheck color='white' size={100}/>

                </Box>

                <Box className='congratulatory-confirmation'>You have successfully reset this user's password.</Box>
                <button className='confirmation-button no' onClick={handleClose}>FINISH</button>
              </VStack>)}
            </div>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}