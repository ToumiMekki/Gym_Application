import {Grid,Box,Typography} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import MemberNotPay from './MemberNotPay'


const useStyles = makeStyles({
    title:{
        position:'relative',
        top:'20px',
        color:'#1B0044',
        fontWeight:'700',
    },
    icon:{
        float:'right',
        position:'relative',
        top:'-20px',
    },
    BoxCont:{

    },
    GridCont:{
        width:'61%', height:'500px',
        marginTop:'25px',
        background:'#ffffff',
        borderRadius:'20px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        textAlign:'center',
    },
});
  

function ContainerMemberNotePay() {
    const classes = useStyles();
  return (
    <Grid className={classes.GridCont}>
        <Box className={classes.BoxCont}>
            <Typography component='h1' variant="h6" className={classes.title}>Member dosent pay</Typography>
        </Box>
        <Box>
        <MemberNotPay />
        </Box>
    </Grid>
  )
}

export default ContainerMemberNotePay