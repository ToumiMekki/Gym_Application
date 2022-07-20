import React from 'react'
import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    CloseBar:{
        position:'fixed',
        top:'0px', left:'0px',
        color:'#00002b',
        width:'100%', height:'25px',
        background:'#161618',
        zIndex:'7000',
        textAlign:'center',
        zIndex:'1001',
    },
    CloseButton:{
        width:'15px', height:'15px',
        border:'none',
        borderRadius:'50%',
        position:'absolute',
        right:'35px', top:'5px',
        background:'red',
        "&:hover":{
            boxShadow: '0 0px 2px 5px rgba(255,0,0,0.5)',  
        },
    },
    MinimizeButton:{
        width:'15px', height:'15px',
        border:'none',
        borderRadius:'50%',
        position:'absolute',
        right:'60px', top:'5px',
        background:'orange',
        "&:hover":{
            boxShadow: '0 0px 2px 5px rgba(255,255,0,0.5)',  
        },
    },
    TitleCloseBar:{
        marginTop:'3px',
        marginLeft:'45%',
        color:'#ffffff',
        opacity:'0.7',
        width:'80px',
        "&:hover":{
            opacity:'0.9',
        },
    },
});

function CloseBar() {
    const classes = useStyles();
  return (
    <Grid className={classes.CloseBar}>
        <h5 className={classes.TitleCloseBar}>GlitchX-Gym</h5>
        <button className={classes.CloseButton}
        onClick={()=>window.close()}
        ></button>
        <button className={classes.MinimizeButton}></button>
    </Grid>
  )
}

export default CloseBar