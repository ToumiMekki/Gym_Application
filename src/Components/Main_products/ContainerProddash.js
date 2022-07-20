import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  container:{
    background: '#ffffff',
    boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
      width:'220px',
      height:'110px',
      margin:'10px',
      borderRadius:'10px',
      textAlign:'center',
      paddingTop:'20px',
      paddingBottom:'5px',
      color:'#00001b',
      "&:hover": {
        background:'#00002b',
        color:'#ffffff',
      }        
  }
});

function ContainerProddash(props) {
  const {titleCont,ValuesCont} = props
    const classes = useStyles();
  return (
    <Grid className={classes.container}>
        <Typography component='h1' variant="h6">{titleCont}</Typography>
        <Typography component='h1' variant="h7">{ValuesCont}</Typography>
    </Grid>
  )
}

export default ContainerProddash