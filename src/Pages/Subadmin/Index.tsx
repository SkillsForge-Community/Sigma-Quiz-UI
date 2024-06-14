import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from '../../Global Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom'
import Header from "../../Global Components/Dashboad Header/Header";
function MainSubAdmin(){
    return(
        <Grid
  templateAreas={`"sidebar header"
                  "sidebar main"
                  "sidebar main"`}
        gridTemplateColumns={'253px 1fr'}
        color='blackAlpha.700'
        fontWeight='bold'
        >
  <GridItem height="1024px" bg='#EDEDED'  area={'sidebar'}>
    <Sidebar />
  </GridItem>
  <GridItem pl='2' bg='#FFFFFF' area={'header'}>
    <Header isAdmin={true}/>
  </GridItem>
  <GridItem pl='2' bg='#FFFFFF' area={'main'}>
   <Outlet/>
  </GridItem>
  
</Grid>
    )
}
export default MainSubAdmin