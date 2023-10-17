import Avatar from '@mui/material/Avatar';
import Perfil from './img/Foto_perfil (2).jpeg'
import {Grid, Typography} from '@mui/material';
  
  export default function head() {
    return (
      <Grid container spacing={0} sx={{backgroundColor:'#80cbc4', padding:3}}>
        <Grid item md={4} xs={4}>
          <Avatar alt="Foto Andrea OA" src={Perfil} sx={{height:'100px',width:'100px'}}/>
        </Grid>
        <Grid item md={8} xs={8} sx={{verticalAlign:'center'}}>
          <Typography variant='h4' align='left' sx={{fontFamily:'Calibri',fontWeight:'bold',color:'white'}}>Andrea Ortega</Typography>
          <Typography variant='h6' align='left' sx={{fontFamily:'Calibri',color:'white'}}>Estudiante de Ingeniería de Software</Typography>
        </Grid>
      </Grid>
    )
  }