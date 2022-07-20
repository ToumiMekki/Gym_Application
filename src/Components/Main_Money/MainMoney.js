import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import ContDashMoney from "./ContDashMoney";
import AnimatedPage from "../../AnimatedPage";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ContMoneyTrans from './ContDepenseTrans'
import AddDepense from './AddDepense'
import { useState } from "react";


const useStyles = makeStyles({
  GridMoney:{
    width:'91%', height:'80vh',
    position:'relative',
    left:'100px', top:'120px',
  },
  ButtonMoney:{
    width:'30%', height:'60px',
    position:'relative',
    left:'34%', top:'130px',
    color:'#F76E11',
  },
});

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



function MainMoney() {
  const classes = useStyles();
  const [OpenAddDepense,setOpenAddDepense]=useState(false)
  const ClickOpenAddDepense = ()=>{
    setOpenAddDepense((OpenAddDepense)=> !OpenAddDepense)}

  return (
<AnimatedPage>
    <Grid className={classes.GridMoney}>
      <ContDashMoney />
      <BootstrapButton variant="outlined" onClick={ClickOpenAddDepense}
            className={classes.ButtonMoney}>Add Dépenses</BootstrapButton>      
    </Grid>
    { OpenAddDepense && <AddDepense closeOpenAddDepense={setOpenAddDepense}/>}
</AnimatedPage>
  )
}

export default MainMoney