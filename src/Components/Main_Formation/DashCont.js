import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import image1 from '../../image/006.jpg'

const useStyles = makeStyles({
    GridFormCont:{
        width:'29%', height:'250px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        backgroundImage: `url(${image1})`,
        backgroundSize:'110%',
        backgroundRepeat: 'no-repeat',
        margin:'25px',
        borderRadius:'20px',
        position:'relative',
    },
    GridIntern:{
        width:'100%', height:'250px',
        background:'rgba(0, 10, 40, 0.9)',
        borderRadius:'20px',
        position:'absolute',
        color:'#ffffff',
        textAlign:'center',
        "&:hover":{
            background:'rgba(255, 255, 255, 0.9)',
            color:'#000000',
        },
    },
})

function DashCont() {
    const classes = useStyles();

  return (
    <Grid className={classes.GridFormCont}>
        <Grid className={classes.GridIntern}>

            <h2>Title Container</h2>
            <h1>Values</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Show More</button>
        </Grid>
    </Grid>
  )
}

export default DashCont