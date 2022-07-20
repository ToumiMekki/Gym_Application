import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    GridAddDepense:{
        width:'40%', height:'50%',
        boxShadow: '0 0px 10px 2000px rgba(0,0,0,0.9)',
        background:'#bbbbbb',
        position:'fixed',
        top:'25%', left:'30%',
        borderRadius:'20px',
        zIndex:'200',
        textAlign:'center',
        backgroundImage: 'radial-gradient( circle farthest-corner at 50.4% 49.8%,  rgba(254,245,234,1) 0%, rgba(255,231,204,1) 90% )',
        
    },
    CloseButton:{
        position:'absolute',
        top:'15px', right:'15px',
        background:'red',
        width:'20px', height:'20px',
        borderRadius:'50%',
        border:'none',
        "&:hover": {
            boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
          },
          '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },      
    },
})
function AddDepense({closeOpenAddDepense}) {
    const classes = useStyles();
  return (
    <Grid className={classes.GridAddDepense}>
        <button className={classes.CloseButton} onClick={()=>closeOpenAddDepense(false)}></button>
        
    </Grid>
  )
}

export default AddDepense