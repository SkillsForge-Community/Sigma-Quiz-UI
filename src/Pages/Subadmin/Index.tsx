import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function MainSubAdmin(){
    return(
        <Grid
  templateAreas={`"sidebar main"
                  "sidebar main"
                  "sidebar main"`}
        gridTemplateColumns={'253px auto'}
        color='blackAlpha.700'
        fontWeight='bold'
        >
  <GridItem height="1024px" bg='#EDEDED'  area={'sidebar'}>
    <Sidebar/>
  </GridItem>
  <GridItem pl='2' bg='#FFFFFF' area={'main'}>
   <Outlet/>
  </GridItem>
  
</Grid>
    )
}
