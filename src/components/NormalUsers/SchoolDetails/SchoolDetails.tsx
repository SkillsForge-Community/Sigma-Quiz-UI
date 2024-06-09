import { Link, useParams } from "react-router-dom"
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import PaginatedItems from "../Pagininate/Paginate"
function SchoolDetails() {
    const { schools } = useParams()
    return (
        <main className="test-details">
        <SimpleGrid
        spacing={5}
        >
            <HStack spacing={504}>
                <Box w='116px' h='30px'>
                    <h4>Test Details</h4>
                </Box>
                <Box w='334px' h='30px'>
                    <h4 className="school-name">{schools} College, Sango Ota</h4>
                </Box>
            </HStack>
            <SimpleGrid columns={6} spacing={30} height="47px" width="613px">
                <Box width="104px" className="round-button" height='47px'>Round 1</Box>
                <Box width="104px" className="round-button" height='47px'>Round 2</Box>
                <Box width="104px" className="round-button" height='47px'>Round 3</Box>
                <Box width="104px" className="round-button" height='47px'>Round 4</Box>
                <Box width="104px" className="round-button" height='47px'>Round 5</Box>
                <Box width="104px" className="round-button" height='47px'>Overall</Box>

            </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid>
            <div>
                <h5>Questions</h5>
                <PaginatedItems itemsPerPage={30} />

            </div>
            <HStack spacing={554}>
                <Box w='221px' h='27px'>
                    <h4 className="Answered">Answered by School two</h4>
                </Box>
                <Box w='171px' h='27px'>
                    <Link to="#">

                    <h4 className="school-name">Manage Questions</h4>
                    </Link>
                    
                </Box>
            </HStack>
        </SimpleGrid>
        </main>
    )
}
export default SchoolDetails