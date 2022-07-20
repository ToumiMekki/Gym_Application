import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import MainDash from "../Components/Main_dash/MainDash"
import {Grid,Paper} from "@material-ui/core"
import {useState,useEffect} from 'react'
import Loading from '../Loading'





function Dashboard({children,onClick}) {

    const [OpenLoading,setOpenLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setOpenLoading(false)
        },1000)
    })
    
    return (
        <Paper>
        <Grid>
        { OpenLoading && <Loading/>}
            <Navbar />
            <Sidebar />
            <MainDash/>
        </Grid>
        </Paper>
    )
}

export default Dashboard
