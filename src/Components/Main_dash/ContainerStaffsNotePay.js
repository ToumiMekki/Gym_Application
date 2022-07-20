import StaffsNotPay from './StaffsNotPay'
import {Grid,Box,Typography} from "@material-ui/core"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title:{
        position:'relative',
        top:'20px',
        color:'#0f3876',
        fontWeight:'700',
    },
    icon:{
        float:'right',
    },
    GridCont:{
        width:'100%', height:'550px',
        marginTop:'5px',
        background:'#ffffff',
        borderRadius:'20px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        marginBottom:'30px',
        textAlign:'center',
    },
});
  

function ContainerStaffsNotePay() {
    const classes = useStyles();
  return (
    <Grid className={classes.GridCont}>
        <Box className={classes.BoxCont}>
            <Typography component='h1' variant="h6" className={classes.title}>Member dosent pay</Typography>
        </Box>
        <Box>
        <StaffsNotPay />
        </Box>
    </Grid>
  )
}

export default ContainerStaffsNotePay