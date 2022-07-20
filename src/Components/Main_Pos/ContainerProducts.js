import { makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core"
import Box from '@mui/material/Box';
import {useState} from 'react'

const useStyles = makeStyles({
    ContainerProducts:{
      color:'#F76E11',
      width:'258px',
      height:'160px',
      background:'#FFFFFF',
      borderRadius:25,
      margin:'10px',
      border:'solid 1px #F76E11',
      "&:hover": {
        backgroundColor: '#F76E11',
        color:'#ffffff',
      }
    },
    ProductText:{
      float:'left',
      position:'relative',
      left:'20px', bottom:'10px',
      fontSize:'18px',
      color:'#00002b',
    },
    Prix:{
        position:'relative',
        right:'135px',top:'90px',
        fontSize:'15px',
    },
    ProductsImg:{
      width:'85px',
      height:'85px',
      float:'right',
      position:'relative',
      bottom:'10px', right:'10px',
      borderRadius:10,
  },
  });

function ContainerProducts(props) {
    const {productName,quntit,Price,ProductsImg} = props
    const classes = useStyles();
    const [Comand,setComand] = useState({productName:'',quntit:'',Price:'',ProductsImg:''})
    const ClickProducts = () =>{

    }
  return (
    <Grid className={classes.ContainerProducts}>
        <Box className={classes.ProductText}>
        <h3>{productName}</h3>
        <h5>{quntit}</h5>
        </Box>
        <h4 className={classes.Prix}>{Price} Dzd</h4>
        <img src={ProductsImg} alt="Prodcuts Image" className={classes.ProductsImg}/>
    </Grid>
  )
}

export  default ContainerProducts