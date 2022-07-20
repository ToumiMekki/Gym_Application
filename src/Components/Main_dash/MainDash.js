import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import ContainerDash from './ContainerDash';
import DailyTransaction from "./DailyTransaction";
import ContainerMemberNotePay from "./ContainerMemberNotePay";
import SpeedAccess from "./SpeedAccess";
import ContainerStaffsNotepay from './ContainerStaffsNotePay'
import AnimatedPage from "../../AnimatedPage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



const useStyles = makeStyles({
      GridDashboard:{
        width:'90%', height:'205vh',
        marginLeft:'100px', marginTop:'140px',
        zIndex:'1',        
      },
    BoxCont_dash:{
        display: 'flex',
        flexWrap: 'wrap',
        width:'660px',
        position:'relative',
        top:'20px', left:'0px',
    },
    BoxSpeedMember:{
      position:'relative',
      display: 'flex',
      flexWrap: 'wrap',
      width:'100%', height:'550px',
      marginTop:'5px',
    },
  });
  
function MainDash() {

    const classes = useStyles();
    
    
  return (
    <AnimatedPage>
    <Grid className={classes.GridDashboard}>
        <Box className={classes.BoxCont_dash}>
            <ContainerDash Container_name='Admin Number' Container_Value='3'/>  
            <ContainerDash Container_name='Members Number' Container_Value='120'/>
            <ContainerDash Container_name='Staffs Number' Container_Value='10'/> 
            <ContainerDash Container_name='Coachs Number' Container_Value='5'/>
            <ContainerDash Container_name='Formation Number' Container_Value='12'/> 
            <ContainerDash Container_name='Products Number' Container_Value='48'/> 
        </Box>
        <DailyTransaction />
        <Box className={classes.BoxSpeedMember}>
          <ContainerMemberNotePay />
          <SpeedAccess />
        </Box>
        <ContainerStaffsNotepay />
    </Grid>
    </AnimatedPage>
  )
}
export default MainDash