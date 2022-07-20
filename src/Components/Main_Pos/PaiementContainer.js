import { makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import PrintComand from './PrintComand'


const useStyles = makeStyles({
    ContainerOrder:{
        width:'600px', height:'300px',
        background:'#eeeeee',
        boxShadow: '0 0px 5px 2000px rgba(0,0,0,0.8)',
        borderRadius:'10px',
        textAlign:'center',
        position:'fixed',
        paddingTop:'10px',
        top:'220px',left:'350px',
        zIndex:'500',
    },
    CloseButton:{
        width:'17px', height:'17px',
        background:'red',
        border:'none',
        borderRadius:'50%',
        position:'absolute',
        top:'15px', right:'15px',
        "&:hover": {
            boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
          }},
  })

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#F76E11',
    borderColor: '#000000',
    color:'#000000',
    position:'relative',
    top:'100px',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:'#ffffff',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });      


function PaiementContainer({closePayCont}) {
    const classes = useStyles();

    const [OpenPrintPay,setOpenPrintPay] = useState(false)
    const ClickPrintPay = ()=>{
        setOpenPrintPay((OpenPrintPay)=> !OpenPrintPay)
        
  }


  return (
    <Grid className={classes.ContainerOrder}>
        <button className={classes.CloseButton} onClick={()=>closePayCont(false)}></button>
        <h3>Saisez le mantant que vous payez</h3>
        <TextField id="outlined-basic" label="mantant Dzd" variant="outlined" size="normal" sx={{ m: 1, width: 500 }}/>
        <BootstrapButton variant="outlined" onClick={ClickPrintPay}>Payez Cash</BootstrapButton>
        { OpenPrintPay && <PrintComand closePrintComand={setOpenPrintPay}/>}
    </Grid>
  )
}

export default PaiementContainer