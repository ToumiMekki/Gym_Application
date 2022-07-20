import { makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import {useState,useRef} from 'react'


const useStyles = makeStyles({
    ContainerOrder:{
        width:'500px', height:'200px',
        background:'#eeeeee',
        boxShadow: '0 0px 5px 2000px rgba(0,0,0,0.8)',
        borderRadius:'10px',
        textAlign:'center',
        position:'fixed',
        paddingTop:'10px',
        top:'270px',left:'400px',
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
    top:'30px',
    margin:'5px',
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


function PrintComand({PrintComand}) {
    const classes = useStyles();
  return (
    <Grid className={classes.ContainerOrder}>
        <h4>Sucssess Validation of transaction</h4>
        <h3>Voulez-vous imprimer la facture ??</h3>
        <BootstrapButton variant="outlined" onClick={PrintComand}>Oui Imprimer</BootstrapButton>
        <BootstrapButton variant="outlined">Non</BootstrapButton>
    </Grid>
  )
}

export default PrintComand