import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import ContainerMember from "./ContainerMember";
import Typography from '@mui/material/Typography';
import ContainerTotalMember from "./ContainerTotalMember";
import AnimatedPage from "../../AnimatedPage";
import AddNewMember from "./AddNewMember";
import { useState } from "react";

const useStyles = makeStyles({
    BoxDash_Member:{
        display: 'flex',
        width:'100%',
        marginLeft:'0px', marginTop:'10px',
        overflowX:'scroll',
        overflowY:'hidden',
    },
    title:{
        position:'relative',
        top:'20px',left:'20px',
        fontWeight:'700',
        opacity:'0.5',
    },

    AddMember:{
      position:'relative',
      top:'30px',left:'35%',
      fontWeight:'700',
      width:'30%', height:'60px',
      background:'#00002b',
      color:'#ffffff',
      borderRadius:10,
      border:'none',
      boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
      fontSize:'20px',
      "&:hover": {
        background:'#ffffff',
        color:'#00002b',
      }
  },

  Gridmember:{
    position:'relative',
    top:'100px',left:'100px',
    width:'91%', height:'140vh',
  },

  });

function MainMember() {

  const [OpenAddMember,setOpenAddMember]=useState(false)
  const ClickAddMember = ()=>{
  setOpenAddMember((OpenAddMember)=> !OpenAddMember)}

    const classes = useStyles();

  return (
<AnimatedPage>
    <Grid className={classes.Gridmember}>
        <Typography component='p' variant="h7" className={classes.title}>Candidate Number per Group</Typography><br />
        <Box className={classes.BoxDash_Member}>
        <ContainerMember GroupName="GroupName" NumberPerGroup="All"/>
        <ContainerMember GroupName="GroupName" NumberPerGroup="All"/>
        <ContainerMember GroupName="GroupName" NumberPerGroup="All"/>
        </Box>
        <button className={classes.AddMember} onClick={ClickAddMember}>Add new Member</button>
        <ContainerTotalMember />
        { OpenAddMember && <AddNewMember closeAddMember={setOpenAddMember}/>}
    </Grid>
</AnimatedPage>
  )
}

export default MainMember