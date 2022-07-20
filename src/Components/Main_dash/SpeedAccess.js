import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineEuroCircle} from "react-icons/ai";
import { SiSamsungpay} from "react-icons/si";
import { AiOutlineDollarCircle} from "react-icons/ai";
import AddNewMember from '../Main_Member/AddNewMember'
import FormMemberPay from '../Main_Member/FormMemberPay'
import { useState } from "react";

const useStyles = makeStyles({
    AccessBox:{
        display:'flex',
        flexWrap:'wrap',
        marginLeft:'25px',
        marginTop:'40px',
        width:'400px',
    },
    AccessButton:{
        width:'180px', height:'180px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.1)',
        margin:'10px',
        borderRadius:20,
        textAlign:'center',
        "&:hover": {
            backgroundColor: '#082032',
            color:'#ffffff',
          }
      },
    AccessGrid:{
        width:'450px', height:'500px',
        borderRadius:'20px',
        position:'relative',
        top:'25px', left:'25px', 
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        background: '#ffffff',
        color:'#082032',
        fontWeight:'700',
    },
    title:{
        textAlign:'center',
        position:'relative',
        top:'20px',
    },
    AccessIcon:{
        width:'70px', height:'70px',
        position:'relative',
        top:'30px',      
    },

});



function SpeedAccess() {
    const classes = useStyles();

    const [OpenAddMember,setOpenAddMember]=useState(false)
    const ClickAddMember = ()=>{
        setOpenAddMember((OpenAddMember)=> !OpenAddMember)
  }
  const [OpenPayMember,setOpenPayMember]=useState(false)
  const ClickPayMember = ()=>{
    setOpenPayMember((OpenPayMember)=> !OpenPayMember)
}
      
  return (
    <Grid className={classes.AccessGrid}>
        <Typography component='h1' variant="h4" className={classes.title}>Speed Access</Typography>
        <Box className={classes.AccessBox}>
            <Box className={classes.AccessButton} onClick={ClickAddMember}><AiOutlineUserAdd className={classes.AccessIcon}/><br/><br/><br/>Add Member</Box>
            <Box className={classes.AccessButton} onClick={ClickPayMember}><AiOutlineEuroCircle className={classes.AccessIcon}/><br/><br/><br/>Add Member Paiements</Box>
            <Box className={classes.AccessButton}><SiSamsungpay className={classes.AccessIcon}/><br/><br/><br/>Add Staffs Paiement</Box>
            <Box className={classes.AccessButton}><AiOutlineDollarCircle className={classes.AccessIcon}/><br/><br/><br/>New Depense</Box>
        </Box>
        { OpenAddMember && <AddNewMember closeAddMember={setOpenAddMember}/>}
        { OpenPayMember && <FormMemberPay closePayMember={setOpenPayMember}/>}

    </Grid>
  )
}

export default SpeedAccess