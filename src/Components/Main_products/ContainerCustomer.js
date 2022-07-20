import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
    title:{
        textAlign:'center',
        position:'relative',
        top:'10px',
        color:'#00002b',
    },
    icon:{
        float:'right',
        position:'relative',
        top:'-10px',
    },
    BoxCont:{

    },
    GridCont:{
        width:'25%', height:'500px',
        background:'#ffffff',
        borderRadius:'20px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        position:'relative',
        left:'5px',
    },
});
  

function ContainerMemberNotePay() {
    const classes = useStyles();
  return (
    <Grid className={classes.GridCont}>
        <Box className={classes.BoxCont}>
            <Typography component='h1' variant="h6" className={classes.title}>Best Products</Typography>
        </Box>
        <Box>
        </Box>
    </Grid>
  )
}

export default ContainerMemberNotePay