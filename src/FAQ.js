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
    fontFamily: 'Montserrat'
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
    width: '93%',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
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
      <h1>Frequent Asked Questions</h1><br></br><br></br>
      
        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className='question'>Q: What can I expect during our first meeting?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
              You can expect that we will have a conversation about your concerns that have brought you to therapy. Please plan for a 60-minute session. Review the Intake Form to have an idea of questions that will be discussed. Questions might vary depending on the type of service needed.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className='question'>Q: What are the fees and how do I pay?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
              Please contact for fees. You can pay with cash, credit card or check.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className='question'>Q: Do you take insurance?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
              We do not take insurance. However, we may provide you with documentation that your insurance provider may require for out of network reimbursement. Please check with your insurance before our scheduled session.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className='question'>Q: What is your availability?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
              We are available weeknights, Fridays and Saturdays. Other times may be available upon request.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className='question'>Q: How do I schedule an appointment?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='answer'>
              Feel free to call us at (443) 326-9018. If we do not answer your call, please leave us a voicemail message and we will call you back.
          </Typography>
          </AccordionDetails>
        </Accordion>
    </div>
    </ThemeProvider>
  );
}