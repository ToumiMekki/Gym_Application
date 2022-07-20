import { makeStyles,Grid} from '@material-ui/core';
import MainPos from '../Components/Main_Pos/MainPos'
import {useState,useEffect} from 'react'
import Loading from '../Loading'




const useStyles = makeStyles({
    GridPosUi: {
        overflowY:'hidden',
        width:'100%', height:'100vh',

    },
    ReturnButton:{
        position:'absolute',
        left:'', top:'',
        width:'40px', height:'40px',
    },
  });
  

function PosUi() {
  const [OpenLoading,setOpenLoading]=useState(true)
  useEffect(()=>{
      setTimeout(()=>{
          setOpenLoading(false)
      },1500)
  })

    const classes = useStyles();
    const Dash = ()=>{
        window.location.href = 'http://localhost:3000/dash'
    }
  
  return (
    <Grid className={classes.GridPosUi}>
        { OpenLoading && <Loading/>}
        <button onClick={Dash} className={classes.ReturnButton}>Dashboard</button>
        <MainPos />
    </Grid>
  )
}

export default PosUi