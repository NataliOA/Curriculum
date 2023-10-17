import * as React from 'react';
import Lista from './lista';
import { Card, CardContent, Typography } from '@mui/material';

function Infocard({titulo,txt1,txt2}) {
  return (
    <Card sx={{backgroundColor:'#e0f2f1'}}>
        <CardContent >
          <Typography gutterBottom variant="body1" component="div" sx={{font:'Calibri',color:'#7b1fa2', fontWeight:'bold'}}>
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Calibri',color:'#00897b'}}>
            <Lista texto1={txt1} texto2={txt2}/>
          </Typography>
        </CardContent>
    </Card>
  );
}

export default Infocard;