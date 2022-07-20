import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import MainStaffs from '../Components/Main_Staffs/MainStaffs'
import {useState,useEffect} from 'react'
import Loading from '../Loading'



function GymStaffs() {
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
            <MainStaffs />
        </div>
)}

export default GymStaffs;
