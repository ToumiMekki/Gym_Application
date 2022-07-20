import {Grid,Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import ContainerMember from "./ContainerStaffs";
import Typography from '@mui/material/Typography';
import ContainerTotalMember from "./ContainerTotalStaffs";
import AnimatedPage from "../../AnimatedPage";
import AddNewMember from "./AddNewStaffs";
import { styled } from '@mui/material/styles';
import { useState } from "react";

const useStyles = makeStyles({
    BoxDash_Member:{
        display: 'flex',
        width:'100%',
        position:'relative',
        top:'0px',left:'0px',
        overflowX:'scroll',
        overflowY:'hidden',
    },
    title:{
        position:'relative',
        top:'10px',left:'20px',
        fontWeight:'700',
        opacity:'0.5',
    },
    AddMember:{
      position:'relative',
      top:'50px',left:'33%',
      fontWeight:'700',
      width:'400px', height:'60px',
      borderRadius:10,
      border:'none',
      boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
      fontSize:'20px',
      "&:hover": {
        background:'#ffffff',
        color:'#00002b',
      }
  },
  GridStaffs:{
    position:'relative',
    top:'120px',left:'100px',
    width:'91%',
    height:'142vh',
  },

  });

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    background:'#00002b',
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

function MainMember() {

  const [OpenAddMember,setOpenAddMember]=useState(false)
  const ClickAddMember = ()=>{
  setOpenAddMember((OpenAddMember)=> !OpenAddMember)}

    const classes = useStyles();

  return (
<AnimatedPage>
    <Grid className={classes.GridStaffs}>
        <Typography component='p' variant="h7" className={classes.title}>Candidate Number per Group</Typography><br />
        <Box className={classes.BoxDash_Member}>
        <ContainerMember GroupName="GroupName" NumberPerGroup="All"/>
        <ContainerMember GroupName="GroupName" NumberPerGroup="All"/>
        <ContainerMember GroupName="GroupName" NumberPerGroup="All"/>
        </Box>
        <BootstrapButton className={classes.AddMember} onClick={ClickAddMember}>Add new Staff</BootstrapButton>
        <ContainerTotalMember />
        { OpenAddMember && <AddNewMember closeAddStaffs={setOpenAddMember}/>}
    </Grid>
</AnimatedPage>
  )
}

export default MainMember