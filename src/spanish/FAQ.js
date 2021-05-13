import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'; 

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway',
    fontSize:'2vw'
  },
});
const Accordion = withStyles({
  root: {
    borderRadius: '20px',
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginRight: 'auto',
    marginLeft: 'auto',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    border: '3px',
    width: '50vw',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    flexGrow:0,
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className='FAQ'>
      <h1>Preguntas frecuentes</h1><br></br><br></br>
      
        <Accordion id='accordion' square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className='question'><b>¿Qué puedo esperar en nuestra primera reunión?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
            Puede esperar que tengamos una conversación sobre sus inquietudes que lo llevaron a la terapia. Planifique una sesión de 60 minutos. Revise el formulario de admisión para tener una idea de las preguntas que se discutirán. Las preguntas pueden variar según el tipo de servicio necesario.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className='question'><b>¿Cuáles son las tarifas y cómo las pago?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
            Comuníquese con nosotros para conocer las tarifas. Puede pagar en efectivo, tarjeta de crédito o cheque.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className='question'><b>¿Aceptan seguro?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
            No aceptamos seguros. Sin embargo, es posible que le proporcionemos documentación que su proveedor de seguros pueda requerir para el reembolso fuera de la red. Consulte con su seguro antes de nuestra sesión programada.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className='question'><b>¿Cuál es la disponibilidad?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
            Estamos disponibles de lunes a sábados. Otros horarios pueden estar disponibles a solicitud.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className='question'><b>¿Cómo programo una cita?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
            No dude en llamarnos al (443) 326-9018. Si no respondemos a su llamada, déjenos un mensaje de correo de voz y le devolveremos la llamada.
          </Typography>
          </AccordionDetails>
        </Accordion>
    </div>
    </ThemeProvider>
  );
}