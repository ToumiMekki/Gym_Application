import ContainerProddash from './ContainerProddash'
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import ContainerSalesEarning from './ContainerSalesEarning';
import ContainerCustomer from './ContainerCustomer'
import ContainerProductsList from './ContainerProductsList';
import AnimatedPage from "../../AnimatedPage";
import { useState } from 'react';
import AddNewProduct from './AddProducts'


const useStyles = makeStyles({

  GridProducts:{
    width:'91%',  height:'130vh',
    position:'relative',
    left:'100px', top:'120px',
  },  
  Boxsalls_dash:{
    display: 'flex',
    flexWrap: 'wrap',
    width:'40%',
    position:'relative',
    top:'10px', left:'5px',
},
BoxToday_dash:{
  display: 'flex',
  flexWrap: 'wrap',
  float:'left',
  width:'60%',
  position:'relative',
  top:'0px', left:'0px',

},
ButtonStyles:{
  margin:'15px',
  fontWeight:'700',
  width:'400px', height:'60px',
  background:'#00002b',
  color:'#ffffff',
  borderRadius:10,
  border:'none',
  boxShadow: '0 0px 5px 2px rgba(0,0,0)',
  fontSize:'20px',
  "&:hover": {
    background:'#ffffff',
    color:'#00002b',
  }
},
BoxButton:{
  position:'relative',
  left:'180px',top:'20px',
  display: 'flex',
  flexWrap: 'wrap',
  width:'70%',
},
BoxCont:{
  position:'relative',
  left:'0px',top:'40px',
  display: 'flex',
  flexWrap: 'wrap',
  width:'100%',
},
BoxFirst:{
  display: 'flex',
  flexWrap: 'wrap',
  width:'100%',
},

});

const Pos = ()=>{
  window.location.href = 'http://localhost:3000/pos'
}


function MainProducts() {
  const classes = useStyles();
  const [OpenAddProducts,setOpenAddProducts]=useState(false)

  const onClickAddProduct = () =>{
    setOpenAddProducts(true)
  }

  return (
<AnimatedPage>
    <Grid className={classes.GridProducts}>
      <Box className={classes.BoxFirst}>
      <Box className={classes.Boxsalls_dash}>
          <ContainerProddash titleCont='Total Products' ValuesCont='35'/>
          <ContainerProddash titleCont='Month Net Worth' ValuesCont='200000'/>
          <ContainerProddash titleCont='Today Earning' ValuesCont='13000'/>
          <ContainerProddash titleCont='Today Net Worth' ValuesCont='6650'/>
        </Box>
        <Box className={classes.BoxToday_dash}>
        <ContainerSalesEarning TitleCont='Total Products' ValueCont='35'/>
        <ContainerSalesEarning TitleCont='Total Products' ValueCont='35'/>
        </Box>
      </Box>
        <Box className={classes.BoxButton}>
        <button className={classes.ButtonStyles} onClick={onClickAddProduct}>Add New Products</button>
        <button className={classes.ButtonStyles} onClick={Pos}>Add New Salles</button>
        </Box>
        <Box className={classes.BoxCont}>
        <ContainerCustomer />
        <ContainerProductsList />
        </Box>
        { OpenAddProducts && <AddNewProduct closeAddProduct={setOpenAddProducts}/>}

    </Grid>
</AnimatedPage>
  )
}

export default MainProducts