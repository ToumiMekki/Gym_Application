import { makeStyles } from '@material-ui/core';
import {Grid,Box} from "@material-ui/core"
import add from '../../../../image/add.png'

const useStyles = makeStyles({
    GridNewAdmin:{
    width:'90%', height:'90vh',
    background:'#FFFFFF',   
    zIndex:'1000', 
    position:'fixed',
    left:'70px', top:'10',
    borderRadius:20,
    boxShadow: '0 0px 5px 200px rgba(0,0,0,.8)',
    },
    BoxListAdmin:{
        width:'68%', height:'90vh',
        zIndex:'1000', 
        overflowX:'hidden',
        overflowY:'scroll',
        display: 'flex',
        flexWrap: 'wrap',
    },
    ContainerAdmin:{
        width:'250px', height:'180px',
        background:'#111111',   
        margin:'10px',
        borderRadius:20,
        textAlign:'center',
        color:'#ffffff',
    },
    CloseButton:{
        width:'17px', height:'17px',
        background:'red',
        border:'none',
        borderRadius:'50%',
        position:'absolute',
        top:'15px', right:'15px',
        "&:hover": {
            boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
          }
    },
    TitleNewAdmin:{
        position:'absolute',
        top:'30px', right:'100px',
        width:'200px',
        textAlign:'center',
    },
    ImgNewAdmin:{
        marginTop:'30px',
        width:'60px',
    },
    });
  
function AdminMain({closeNewAdmin}) {
    const classes = useStyles();
  return (
    <Grid className={classes.GridNewAdmin}>
        <button className={classes.CloseButton} onClick={()=>closeNewAdmin(false)}></button>
        <h2 className={classes.TitleNewAdmin}>List of Admins</h2>
        <Box className={classes.BoxListAdmin}>
            <Box className={classes.ContainerAdmin}>
                    <img src={add} alt="" className={classes.ImgNewAdmin}/>
                    <h3>New Admin</h3>
            </Box>
        </Box>
    </Grid>
  )
}

export default AdminMain