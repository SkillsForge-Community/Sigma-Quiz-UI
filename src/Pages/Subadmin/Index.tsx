import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../../Global Components/Sidebar/Sidebar';
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch} from '../../app/Hooks';
import { useEffect } from 'react';
import { getQuizResult } from '../../features/getQuizResultSlice';
function MainSubAdmin() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuizResult(id));
  }, [dispatch, id]);

  return (
    <Grid
      templateAreas={`"sidebar main"
                      "sidebar main"
                      "sidebar main"`}
      templateColumns="253px 1fr"
      color='blackAlpha.700'
      fontWeight='bold'
      height="auto" // Adjusted height to fill the viewport
    >
      <GridItem bg='#EDEDED' area={'sidebar'}>
        <Sidebar />
      </GridItem>
      <GridItem bg='#FFFFFF' area={'main'} p="2">
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default MainSubAdmin;
