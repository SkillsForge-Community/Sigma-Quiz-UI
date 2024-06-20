import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

type modalProps = {
  setShowModal?: (data: boolean) => void, 
  heading: string,
  message: string,
  navigateTo?: string,
}

const SuccessModal = ({setShowModal, heading, message, navigateTo} : modalProps) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  const buttonStyle = {
    ':hover': {
      bgColor: '#6F19C7'
    }
  }

  useEffect(() => {
    onOpen();
  }, [onOpen])

  const closeModal = () => {
    onClose();
    if (setShowModal){
      setShowModal(false);
    }
    if (navigateTo){
      navigate(navigateTo);
    }
    
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'3xl'} closeOnOverlayClick={false} motionPreset='none'>
      <ModalOverlay />

      <ModalContent p={'30px'} borderRadius={'15px'}>
        
        <ModalBody textAlign={'center'}>

          <Flex >
            <IoIosArrowBack style={{ marginRight: '15px', cursor: 'pointer' }} size={24} onClick={closeModal}/>
            <Text>Back</Text>
          </Flex>

          <Text fontSize={'28px'} color={'#8F19E7'} fontWeight={'600'}>{heading}</Text>
          <FaCheckCircle color={'#1FAF38'} size={150} style={{ margin: 'auto', marginBottom: '30px', marginTop: '30px'}} />
          <Text fontSize={'14.5px'} mb={'30px'}>{message}</Text>
          <Button onClick={closeModal} w={'173px'} h={'58px'} borderRadius={'15px'} color={'#fff'} bg={'#8F19E7'} fontWeight={'500'} sx={buttonStyle}>FINISH</Button>

        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SuccessModal