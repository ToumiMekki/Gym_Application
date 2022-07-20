import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    GridFormaCont:{
        width:'250px', height:'250px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        position:'relative',
        margin:'15px',
        borderRadius:'10px',  
        textAlign:'center',  
        backgroundImage: 'linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)', 
        color:'#00002b', 
        "&:hover":{
            boxShadow: '0 0px 5px 2px rgba(171, 0, 0, 0.75)',
        },
    },
    BoxButton:{
        display: 'flex',
        flexWrap: 'wrap',
        width:'43%',
    },
    Button:{
        width:'25px', height:'25px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        position:'relative',
        left:'5vw',
        margin:'5px',
        borderRadius:'5px', 
        border:'solid 1px #000000', 
    },
})
function FormationCont() {
    const classes = useStyles();

  return (
    <Grid className={classes.GridFormaCont}>
        <h3>Name of Formation</h3>
        <h5>Coach Name</h5>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi error eius fuga nostrum saepe cumque, suscipit, quam voluptatem ipsa nesciunt sapiente neque unde aut ratione dolore. Quidem, error. Ex, nobis!</h6>
        <Box className={classes.BoxButton}>
        <button className={classes.Button}></button>
        <button className={classes.Button}></button>
        <button className={classes.Button}></button>
        </Box>
    </Grid>
  )
}

export default FormationCont