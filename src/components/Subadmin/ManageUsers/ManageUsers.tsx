import { HStack, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import "./ManageUsers.css";
import { IconContext } from 'react-icons';
import { useState } from 'react';
import VerticallyCenter from '../../Validation/ValidationMessage';
import { useDisclosure } from '@chakra-ui/react';

export default function ManageUsers() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState<string>("");

    function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            if (!search) {
                onOpen();
            }
        }
    }

    return (
        <>
            <VerticallyCenter isOpen={isOpen} onClose={onClose} message='Search cannot be empty' />
            <div>
                <HStack spacing={4}>
                    <InputGroup width="573px" height="50px">
                        <InputLeftAddon id='search-button'>
                            <IconContext.Provider value={{ color: "rgba(143, 25, 231, 1)" }}>
                                <CiSearch />
                            </IconContext.Provider>
                        </InputLeftAddon>
                        <Input
                            onKeyDown={handleSearch}
                            onChange={e => setSearch(e.target.value)}
                            className='search-users'
                            type='text'
                            placeholder='Search User'
                        />
                    </InputGroup>
                </HStack>
            </div>
        </>
    );
}
