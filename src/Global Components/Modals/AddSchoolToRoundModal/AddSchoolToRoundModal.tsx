import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Flex,
  Box,
  Spacer,
  Text,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi2"
import { GoPlusCircle } from "react-icons/go";
import { useEffect, useRef, useState } from 'react';
import SuccessModal from '../SuccessModal/SuccessModal';

type modalProps = {
  setShowModal: (data: boolean) => void
}

const AddSchoolToRoundModal = ({setShowModal} : modalProps) => {


  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef<HTMLParagraphElement>(null);
  const [selectedSchoolIndex, setSelectedSchoolIndex] = useState([0, 8, 9]);
  const schoolList = ['Ambassadors College, Sango ota', 'Kings College, Lagos', 'Bovas International, Ibadan', 'Bovas International, Ibadan', 'Kings College, Lagos', 'Bovas International, Ibadan', 'Bovas International, Ibadan', 'Bovas International, Ibadan', 'Bovas International, Ibadan', 'Bovas International, Ibadan', 'Bovas International, Ibadan', 'Bovas International, Ibadan']
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  const removeTextStyle = {
    cursor: 'pointer',
    ':hover': {
      color: '#8F19E7'
    }
  }

  const buttonStyle = {
    ':hover': {
      bgColor: '#6F19C7'
    }
  }

  const handleAddSchool = () => {
    if (selectedSchoolIndex.length === 0){
      return;
    }
    onClose();
    setIsSuccessful(true);
  }

  useEffect(() => {
    onOpen();
    setIsSuccessful(false);
  }, []);


  const closeModal = () => {
    onClose();
    setShowModal(false);
  }



  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} size={'6xl'} closeOnOverlayClick={false} initialFocusRef={initialRef} motionPreset='slideInBottom'>
      <ModalOverlay />
      <ModalContent p={'10px'}>

        <ModalBody>

          {/* HEADER CONTENT  */}
          <Flex align={'center'}>
            <IoIosArrowBack style={{ marginRight: '40px', cursor: 'pointer' }} size={24} onClick={closeModal} />
            <Text ref={initialRef}>Edit/Add Round</Text>
            <Spacer />
            <Box pos={'relative'} h={"fit-content"}>
              <Input type='text' placeholder='Search round' w={"550px"} h={'50px'} pl={'70px'} bg={'#ededed'}></Input>
              <IoIosSearch style={{ position: 'absolute', top: '50%', transform: "translateY(-50%)", left: '20px', color: '#8F19E7', zIndex: '100' }} size={24} />
            </Box>

          </Flex>

          {/* SCHOOL LIST SECTION  */}
          <Box my={'70px'} w={'100%'}>
            {selectedSchoolIndex.length === 0 && <Text color={'red'} fontSize={'15px'} mb={'20px'}>Select at least one school</Text>}
            <Flex wrap={'wrap'} gap={'30px'} fontSize={'15px'} >

              {schoolList.map((school, index) => (
                <Flex key={index} bg={selectedSchoolIndex.includes(index) ? '#8F19E7' : '#EDEDED'} borderRadius={'30px'} p={'15px 20px'} gap={'20px'} color={selectedSchoolIndex.includes(index) ? '#FFFFFF' : '#333333'} align={'center'}>
                  <Text fontSize={'14px'}>{school}</Text>
                  {selectedSchoolIndex.includes(index) ?
                    <Flex align={'center'} textDecoration={'underline'} gap={'5px'} cursor={'pointer'} onClick={() => setSelectedSchoolIndex(selectedSchoolIndex.filter(selectedIndex => selectedIndex !== index))}>
                      <HiOutlineTrash size={18} />
                      Remove
                    </Flex>
                    :
                    <Flex align={'center'} gap={'5px'} sx={removeTextStyle} onClick={() => setSelectedSchoolIndex(prev => [...prev, index])}>
                      <GoPlusCircle size={18} />
                      Add
                    </Flex>
                  }
                </Flex>
              ))}

            </Flex>

            <Button onClick={handleAddSchool} w={'200px'} ml={'calc(100% - 200px)'} mt={'50px'} h={'60px'} bg={'#8F19E7'} color={'white'} borderRadius={'10px'} display={'flex'} alignItems={'center'} gap={'5px'} sx={buttonStyle} >
              <GoPlusCircle size={20} />
              Add School
            </Button>
          </Box>

        </ModalBody>
      </ModalContent>
    </Modal>

    {/* CALL THE SUCCESS MODAL */}
    {isSuccessful && <SuccessModal heading='School Successfully Added' message='You have successfully added schools to Round 1 of 2024 Sigma Secondary School Quiz' setShowModal={setShowModal}/>}
    </>
  )
}

export default AddSchoolToRoundModal