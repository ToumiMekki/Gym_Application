import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import MainFormation from '../Components/Main_Formation/MainFormation'
import {useState,useEffect} from 'react'
import Loading from '../Loading'


function Formation() {
  const [OpenLoading,setOpenLoading]=useState(true)
  useEffect(()=>{
      setTimeout(()=>{
          setOpenLoading(false)
      },1500)
  })

  return (
    <div>
        { OpenLoading && <Loading/>}
        <Navbar />
        <Sidebar />
        <MainFormation />
    </div>
  )
}

export default Formation