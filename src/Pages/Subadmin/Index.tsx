import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../../Global Components/Sidebar/Sidebar';
import { Outlet,  } from 'react-router-dom';
function MainSubAdmin() {
  

  return (
    <Grid
      templateAreas={`"sidebar main"
                      "sidebar main"
                      "sidebar main"`}
      templateColumns="253px auto"
      color='blackAlpha.700'
      fontWeight='bold'
      height="100vh"
     
    >
      <GridItem bg='#EDEDED'  area={'sidebar'} >
        <Sidebar />
      </GridItem>
      <GridItem bg='#FFFFFF' area={'main'} p="2">
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default MainSubAdmin;
