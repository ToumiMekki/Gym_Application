import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Button from '@mui/material/Button';
import image1 from '../../image/008.jpg'
import { styled } from '@mui/material/styles';
import ContDepenseTrans from './ContDepenseTrans'
import ContBeneficeTrans from './ContBeneficeTrans'
import ContRevenuTrans from './ContRevenuTrans'
import { useState } from "react";

const useStyles = makeStyles({
    GridDashMeny:{
        width:'100%', height:'400px',
        position:'relative',
        display: 'flex',
        flexWrap: 'wrap',
  
    },
    BoxoneMeny:{
        width:'350px', height:'350px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        background:'#bbbbbb',
        position:'relative',
        top:'100px', left:'20px',
        borderRadius:'20px',
        textAlign:'center',
        background: 'rgb(255,255,255)',
    },
    BoxtwoMeny:{
        width:'450px', height:'450px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        background:'#bbbbbb',
        position:'relative',
        top:'40px', left:'40px',
        borderRadius:'20px',
        textAlign:'center',
        background: 'rgb(255,255,255)',
    },
    BoxthreeMeny:{
        width:'350px', height:'350px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        background:'#bbbbbb',
        position:'relative',
        top:'100px', left:'60px',
        borderRadius:'20px',
        textAlign:'center',
        background: 'rgb(255,255,255)',
    },
    ButtonShow:{
        width:'150px', height:'40px',
        position:'absolute',
        top:'45px',
    },
    ButtonBenef:{
        width:'150px', height:'40px',
        position:'absolute',
        top:'120px',
    },

})

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#00002b',
    borderColor: '#000000',
    color:'#ffffff',
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
  
function ContDashMoney() {
    const classes = useStyles();
    const [OpenDepenseTrans,setOpenDepenseTrans]=useState(false)
    const ClickOpenDepenseTrans = ()=>{
        setOpenDepenseTrans((OpenDepenseTrans)=> !OpenDepenseTrans)}

        const [OpenBeneficeTrans,setOpenBeneficeTrans]=useState(false)
        const ClickOpenBeneficeTrans = ()=>{
            setOpenBeneficeTrans((OpenBeneficeTrans)=> !OpenBeneficeTrans)}

            const [OpenRevenuTrans,setOpenRevenuTrans]=useState(false)
            const ClickOpenRevenuTrans = ()=>{
                setOpenRevenuTrans((OpenRevenuTrans)=> !OpenRevenuTrans)}
              
  return (
    <Grid className={classes.GridDashMeny}>
        <Box className={classes.BoxoneMeny}>
            <h2>Dépenses</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cumque optio magni voluptatibus, ullam quibusdam quo,
                aliquam provident dolorem aut neque blanditiis</p>
            <h1>100000 Dzd</h1>
            <BootstrapButton variant="outlined" onClick={ClickOpenDepenseTrans}
            className={classes.ButtonShow}>Show Dépenses</BootstrapButton>      
        </Box>
        <Box className={classes.BoxtwoMeny}>
            <h2>bénéfice brut</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cumque optio magni voluptatibus, ullam quibusdam quo,
                aliquam provident dolorem aut neque blanditiis similique 
                enim temporibus quia architecto, accusantium veniam. Exercitationem, reiciendis?</p>
            <h1>200000 Dzd</h1>
            <BootstrapButton variant="outlined" onClick={ClickOpenBeneficeTrans}
            className={classes.ButtonBenef}>Show Bénéfice</BootstrapButton>      
        </Box>
        <Box className={classes.BoxthreeMeny}>
            <h2>Le Revenu</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cumque optio magni voluptatibus, ullam quibusdam quo,
                aliquam provident dolorem aut neque blanditiis</p>
            <h1>300000 Dzd</h1>
            <BootstrapButton variant="outlined" onClick={ClickOpenRevenuTrans}
            className={classes.ButtonShow}>Show Revenu</BootstrapButton>      
        </Box>
        { OpenDepenseTrans && <ContDepenseTrans closeOpenDepenseTrans={setOpenDepenseTrans}/>}
        { OpenBeneficeTrans && <ContBeneficeTrans closeOpenBeneficeTrans={setOpenBeneficeTrans}/>}
        { OpenRevenuTrans && <ContRevenuTrans closeOpenRevenuTrans={setOpenRevenuTrans}/>}
    </Grid>
  )
}

export default ContDashMoney