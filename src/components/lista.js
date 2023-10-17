import * as React from 'react';
import { styled} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor:'#e0f2f1',
}));

function Lista({texto1,texto2}){
  return(
    <Demo>
      <List dense={false}>
          <ListItem>
          <ListItemText
            primary={texto1}
            secondary={texto2}
          />
          </ListItem>
      </List>
    </Demo>
  );
}

export default Lista;
