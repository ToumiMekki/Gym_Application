import { makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core"
import AnimatedPageThree from '../../AnimatedPageThree'
import Button from '@mui/material/Button';
import { useState } from "react";
import AdminMain from './Admin/NewAdmin/AdminMain';
import ProfileContainer from './Profile';
import Swal from 'sweetalert2'
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  width:'100%',
  fontSize: 17,
  padding: '6px 12px',
  border: 'none',
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


const useStyles = makeStyles({
  ProfileModal:{
    width:'200px', height:'190px',
    borderRadius:10,
    position:'absolute',
    backgroundColor:'#ffffff',
    zIndex:'490',
    boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
    textAlign:'center',
    paddingTop:'30px',
    right:'80px', top:'40px',
},
Button:{
  width:'100%',
},
});

function ProfileModal({closeProfile}) {
  const [OpenNewAdmin,setOpenNewAdmin]=useState(false)
  const [OpenProfile,setOpenProfile]=useState(false)

const ClickNewAdmin = ()=>{
  setOpenNewAdmin((OpenNewAdmin)=> !OpenNewAdmin)
}
const ClickProfile = ()=>{
  setOpenProfile((OpenProfile)=> !OpenProfile)
}

const RouteLogout = ()=>{

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't to Logout!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Logout !'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'http://localhost:3000'
    }
  })
  closeProfile(false)
}


  const classes = useStyles();
  return (
    <AnimatedPageThree>   
      <Grid className={classes.ProfileModal}>
      <BootstrapButton variant="outlined" onClick={ClickProfile}>Profile</BootstrapButton><br /><br />
      <BootstrapButton variant="outlined" onClick={ClickNewAdmin}>New Admin</BootstrapButton><br /><br />
      <BootstrapButton variant="outlined" onClick={RouteLogout}>Logout</BootstrapButton>
    </Grid>
    { OpenNewAdmin && <AdminMain closeNewAdmin={setOpenNewAdmin}/>}
    { OpenProfile && <ProfileContainer closeProfile={setOpenProfile}/>}
    </AnimatedPageThree>
 
  )
}

export default ProfileModal