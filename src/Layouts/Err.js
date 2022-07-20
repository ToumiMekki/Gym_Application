import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import CloseBar from '../CloseBar'

const useStyles = makeStyles({
    GridErrMac:{
      background: 'red',
      boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
      width:'60%',
        height:'45vh',
        margin:'auto',
        marginTop:'150px',
        borderRadius:'10px',
        textAlign:'center',
        paddingTop:'100px',
        color:'#ffffff',
    }
});


function Err() {
    const classes = useStyles();
  return (
      <Grid className={classes.GridErrMac}>
        <CloseBar />
        <h1>Err you not Allowed to access to this Software <br />
        Please Contact the seller to buy one copy <br />
        0699977753</h1>
        <button onClick={()=>{window.location.href = 'https://www.facebook.com/GlitchXDigit'}}>
        More Info</button>
      </Grid>
  )
}

export default Err