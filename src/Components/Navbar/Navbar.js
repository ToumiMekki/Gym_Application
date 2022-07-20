import { makeStyles } from '@material-ui/core';
import {Grid,Button} from "@material-ui/core"
import Typography from '@mui/material/Typography';
import Profile from '../../image/001.jpg'
import TextField from '@mui/material/TextField';
import { useState } from "react";
import ProfileModal from './ProfileModal';
import { styled } from '@mui/material/styles';




const useStyles = makeStyles({

  Profile:{
    maxWidth:'35px',
    borderRadius:'50%',
    float:'right',
    marginRight:'50px',
    marginTop:'10px',
    border:'solid',
    "&:hover": {
      boxShadow: '0 0px 5px 2px #00002b',
    }

  },
  title:{
    position:'absolute',
    left:'50px', top:'15px',
  },
  ButtonPos:{
    width:'50px', height:'40px',
    float:'right',
    position:'absolute',
    right:'150px', top:'10px',
    fontWeight:'700',
    background:'#FFFFFF',
    borderRadius:'10px',
    border:'none',
    boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
    color:'#00002b',
    "&:hover": {
      background:'#00002b',
      color:'#ffffff',
      duration:'2000ms',
    }
},
      Navbar:{
        width:'92%', height:'60px',      
        position:'absolute',
        top:'40px', right:'10px',
      },

  });

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    background:'#ffffff',
    borderColor: '#000000',
    color:'#00002b',
  '&:hover': {
      backgroundColor: '#00002b',
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

  
function Navbar() {

  const [OpenProfile,setOpenProfile]=useState(false)

  const ClickProfile = ()=>{
    setOpenProfile((OpenProfile)=> !OpenProfile)
}
  const Pos = ()=>{
    window.location.href = 'http://localhost:3000/pos'
}

    const classes = useStyles();
  return (
    <Grid className={classes.Navbar}>
      <Typography component='h1' variant="h5" className={classes.title}>Dashboard</Typography>
      <img src={Profile} alt=""  className={classes.Profile} onClick={ClickProfile}/>
      <BootstrapButton className={classes.ButtonPos} onClick={Pos}>POS</BootstrapButton>
      { OpenProfile && <ProfileModal closeProfile={setOpenProfile}/>}
    </Grid>
    
  )
}

export default Navbar