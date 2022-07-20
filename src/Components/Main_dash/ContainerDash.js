import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
    container:{
      background: '#ffffff',
      boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
      width:'185px',
        height:'125px',
        margin:'15px',
        border:'2px solid #082032',
        borderRadius:'15px',
        textAlign:'center',
        paddingTop:'20px',
        color:'#082032',
        "&:hover":{
          background: '#082032',
          color:'#ffffff',
        },
    }
});

function ContainerDash(props) {
    const classes = useStyles();
    const {Container_name,Container_Value}=props
  return (
    <Grid>
        <Box className={classes.container}>
        <Typography component='h1' variant="h6">{Container_name}</Typography><br />
        <Typography component='h1' variant="h4">{Container_Value}</Typography>
        </Box>
    </Grid>
  )
}

export default ContainerDash