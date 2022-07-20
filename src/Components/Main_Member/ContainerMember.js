import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    GridMember_dash:{
        width:'180px', height:'100px',
        textAlign:'center',
        backgroundColor:'#ffffff',
        paddingTop:'15px',
        margin:'15px',
        color:'#00001b',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        borderRadius: 15,
        fontWeight:'700',
        "&:hover": {
          backgroundColor: '#00001b',
          color:'#ffffff',
        }
    },
  });


function ContainerMember(props) {

    const {GroupName,NumberPerGroup} = props

    const classes = useStyles();

  return (
    <Grid className={classes.GridMember_dash}>
        <Typography component='p' variant="h5" className={classes.text}>{GroupName}</Typography><br />
        <Typography component='p' variant="h6" className={classes.text}>{NumberPerGroup}</Typography>
    </Grid>
  )
}

export default ContainerMember