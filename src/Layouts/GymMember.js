import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import MainMember from "../Components/Main_Member/MainMember";
import {useState,useEffect} from 'react'
import Loading from '../Loading'



function GymMember() {

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
            <MainMember />
        </div>
)}

export default GymMember;
