import Infocard from './infocard.js';
import {styled, Grid, Paper, Typography} from '@mui/material';

    const DemoPaper = styled(Paper)(({ theme }) => ({
        margin: 3,
        padding: theme.spacing(1),
        ...theme.typography.body1,
        textAlign: 'center',
        fontFamily:'Calibri',
    }));

  export default function body() {
    return (
      <Grid container rowSpacing={2} columnSpacing={2} sx={{flexGrow:1,alignContent:'center',padding:2}}>
        <Grid item xs={12} >
          <DemoPaper square={false}>
            <Typography variant='h6'sx={{fontFamily:'Calibri', fontWeight:'bold', color:'#00897b'}}>Sobre mí</Typography><br/>
            Estudio ingeniería de software. Soy una persona comprometida y dispuesta a aprender para adquirir experiencia 
            y nuevos conocimientos. Mi enfoque es el desarrollo web, pero igual busco conocer todos los ámbitos de mi carrera.
          </DemoPaper>
        </Grid>
        <Grid item xs={12} md={4}>
            <Infocard titulo="Experiencia Laboral" txt1="Basico Materiales " txt2="2021 - 2023: Auxiliar Administrativo"/>
        </Grid>
        <Grid item xs={12} md={4}>
            <Infocard titulo="Estudios" txt1="Universidad Autónoma de Yucatán " txt2="2020 - actualidad: Licenciatura"/>
        </Grid>
        <Grid item xs={12} md={4}>
            <Infocard titulo="Idiomas" txt1="Español nativo, Inglés Avanzado, Italiano Intermedio" txt2=""/>
        </Grid>
        <Grid item xs={12} md={4}>
            <Infocard titulo="Lenguajes de programación" txt1="C, C++, C#, Java, HTML, CSS, PHP, SQL" txt2=""/>
        </Grid>
        <Grid item xs={12} md={4}>
            <Infocard titulo="Referencias" txt1="Ligia Aguilar Flores. Basico Materiales. " txt2="cel.9991005226"/>
        </Grid>
      </Grid>
    )
  }