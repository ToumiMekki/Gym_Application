import { makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core"
import { AiFillDelete } from "react-icons/ai";
import {useState} from 'react'

const useStyles = makeStyles({
    ContainerOrder:{
      color:'#00002b',
      width:'450px', height:'75px',
      borderRadius:10,
      margin:'5px',
      display:'flex',
      fontWeight:'700',
      "&:hover": {
        backgroundColor: '#F76E11',
        color:'#ffffff',
      }
    },
    ProductsImg:{
        width:'60px',
        height:'60px',
        borderRadius:10,
        border:'solid 2px #F76E11',
        marginLeft:'5px', marginTop:'5px',
    }, 
    IconOrder:{
        color:'#002201',
        background:'#bbbbbb',
        padding:'5px',
        borderRadius:10,
        width:'20px',height:'20px',
        marginLeft:'60px',
        marginTop:'18px',
    },
    TitleOrder:{
      width:'100px', height:'45px',
      marginLeft:'5px',
      marginTop:'5px',
      textAlign:'center',
      fontSize:'13px',
      paddingTop:'15px',

    },
    NumberOrder:{
      width:'50px',
      height:'25px',
      borderRadius:10,
      border:'solid 2px #000000',
      marginLeft:'20px',
      marginTop:'15px',
      fontSize:'15px',
      textAlign:'center',
    },
    PrixOrder:{
      marginLeft:'50px',
      marginTop:'20px',
    },
  });

function CurrentOrder(props) {
    const classes = useStyles();

    const {imgProducts,ProductsName,Prix} = props
    const [Qunt,setQunt] = useState('')
    const QuntitiChange = (e) => {
      setQunt(e.target.value)
    };
    function Price(){
      return Prix*Qunt
    }
    
  return (
  <Grid className={classes.ContainerOrder}>
     <img src={imgProducts} alt="" className={classes.ProductsImg}/>
     <div className={classes.TitleOrder}>{ProductsName}</div>
     <input type="number" min="1" max="50" value={Qunt} className={classes.NumberOrder} placeholder="1" onChange={QuntitiChange}/>
     <h4 className={classes.PrixOrder}>{Price()}</h4>
     <AiFillDelete className={classes.IconOrder}/>
  </Grid>
  
)}


export default CurrentOrder