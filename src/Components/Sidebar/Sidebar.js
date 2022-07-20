import { makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core"
import { RiHome6Line } from "react-icons/ri";
import { BiGroup } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import { FaLayerGroup } from "react-icons/fa";
import { MdProductionQuantityLimits} from "react-icons/md";



const useStyles = makeStyles({
  sidebar: {
    background: '#082032',
    borderRadius: 10,
    border:'none',
    boxShadow: '0 0px 5px 3px rgba(0,0,0,0.5)',
    color: 'white',
    width:'70px',
    height:'720px',
    position:'fixed',
    margin:'10px',
    bottom:'3px',
    textAlign:'center',
    zIndex:'200',
  },
  Icons:{
    fontSize:'30px',
    color:'#ffffff',
    width:'30px',
    height:'30px',
    padding:'5px',
    borderRadius: 10,
    "&:hover": {
      backgroundColor: '#ffffff',
      color:'#00001b',
    }
  },
});

function Sidebar() {
    const classes = useStyles();
    const Dash = ()=>{
      window.location.href = 'http://localhost:3000/dash'
  }
  const Member = ()=>{
    window.location.href = 'http://localhost:3000/member'
}
const Staffs = ()=>{
  window.location.href = 'http://localhost:3000/staffs'
}
const information = ()=>{
  window.location.href = 'http://localhost:3000/formation'
}
const products = ()=>{
  window.location.href = 'http://localhost:3000/products'
}
const money_trans = ()=>{
  window.location.href = 'http://localhost:3000/money'
}
const settings = ()=>{
  window.location.href = 'http://localhost:3000/settings'
}

  return (
    <Grid className={classes.sidebar}><br />
      <IconButton><AiOutlineMenu  className={classes.Icons} /></IconButton><br /><br /><br /><br />
      <IconButton onClick={Dash}><RiHome6Line className={classes.Icons}/></IconButton><br /><br /><br />
      <IconButton onClick={Member}><BiGroup className={classes.Icons}/></IconButton><br /><br />
      <IconButton onClick={Staffs}><HiOutlineUserGroup className={classes.Icons}/></IconButton><br /><br />
      <IconButton onClick={information}><FaLayerGroup className={classes.Icons}/></IconButton><br /><br />
      <IconButton onClick={products}><MdProductionQuantityLimits className={classes.Icons}/></IconButton><br /><br />
      <IconButton onClick={money_trans}><RiMoneyEuroCircleLine className={classes.Icons}/></IconButton><br /><br />
      <IconButton onClick={settings}><AiOutlineSetting className={classes.Icons}/></IconButton><br />
    </Grid>
  )
}

export default Sidebar