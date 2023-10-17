import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Grid, Typography} from '@mui/material';
import { ThemeContext } from '@emotion/react';
  
  export default function head() {
    return (
      <Grid container spacing={0} sx={{backgroundColor:'#ce93d8', padding:2}}>
        <Grid item xs={12} sx={{textAlign:'center'}}>
          <Typography variant='h5' sx={{fontFamily:'Calibri', fontWeight:'bold',color:'white'}}>Contacto:</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
            <CallIcon fontSize='large' sx={{color:'#7b1fa2'}} />
          <Typography variant='body1' sx={{fontFamily:'Calibri', fontWeight:'bold',color:'#7b1fa2'}}>9993314449</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
            <GitHubIcon fontSize='large' sx={{color:'#7b1fa2'}}/>
            <Typography variant='body1' sx={{fontFamily:'Calibri', fontWeight:'bold',color:'#7b1fa2'}}>@NataliOA</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
            <EmailIcon fontSize='large' sx={{color:'#7b1fa2'}}/>
            <Typography variant='body1' sx={{fontFamily:'Calibri', fontWeight:'bold',color:'#7b1fa2'}}>andy27wlf@outlook.com</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
            <PlaceIcon fontSize='large' sx={{color:'#7b1fa2'}}/>
            <Typography variant='body1' sx={{fontFamily:'Calibri', fontWeight:'bold',color:'#7b1fa2'}}>Merida, Yucatán, México</Typography>
        </Grid>
      </Grid>
    )
  }