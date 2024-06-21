import {
    
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
  } from '@chakra-ui/react'
import "./Validation.css"
type ModalProps={
  isOpen: boolean,
   onClose:()=>void,
   message: string
}
export default function VerticallyCenter({isOpen, onClose,message}:ModalProps) {
    return (
       
      <>

      <Modal onClose={onClose} isOpen={isOpen} isCentered motionPreset='slideInBottom'
>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="red">Validation Error</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody textAlign={"center"}>
            <h4 >{message}</h4>

          </ModalBody>
          <ModalFooter>
            <Button bg="red" color="white" _hover={{ bg:"white", color: "red" }} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    );
}
