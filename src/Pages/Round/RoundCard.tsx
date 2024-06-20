import { Button, Flex, Spacer, Text } from '@chakra-ui/react'
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2"
import { useNavigate } from 'react-router-dom';

type RoundCardProps = {
    roundname: string,
    marks: number,
    bonus: number,
    NoOfSchools: number, 
    date: Date
}

const RoundCard = ({roundname, marks, bonus, NoOfSchools, date} : RoundCardProps) => {

    const navigate = useNavigate()

    return (
        <Flex h={'50px'} w={'100%'} align={'center'} px={'20px'} mt={'20px'}>
            <Text color={'#333'} fontSize={'15px'} width={'21%'}>{roundname}</Text>
            <Text color={'#333'} fontSize={'15px'} width={'21%'}>{marks} ({bonus}) Marks</Text>
            <Text color={'#333'} fontSize={'15px'} width={'21%'}>{NoOfSchools}</Text>
            <Text color={'#333'} fontSize={'15px'} width={'10%'} textAlign={'right'}>{date.toLocaleString().split(',')[0]}</Text>
            <Flex width={'27%'} marginLeft={'auto'} gap={'10px'}>
                <Spacer />
                <Button p={'0px'} px={'6px'} fontWeight={'400'} h={'28px'} display={'flex'} alignItems={'center'} gap={'5px'} bg={'#ededed'} onClick={() => navigate('/round/add')}><FiEdit size={20} />Edit</Button>
                <Button p={'0px'} px={'6px'} fontWeight={'400'} h={'28px'} display={'flex'} alignItems={'center'} gap={'5px'} bg={'#ededed'}><HiOutlineTrash size={20} />Delete</Button>
            </Flex>
        </Flex>
    )
}

export default RoundCard