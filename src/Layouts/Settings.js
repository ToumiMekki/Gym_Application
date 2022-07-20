import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import MainSettings from '../Components/Main_settings/MainSetting'
import {useState,useEffect} from 'react'
import Loading from '../Loading'


function Settings() {
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
        <MainSettings />
    </div>
  )
}

export default Settings