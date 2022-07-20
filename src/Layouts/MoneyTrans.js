import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import MainMoney from "../Components/Main_Money/MainMoney"
import {useState,useEffect} from 'react'
import Loading from '../Loading'


function MoneyTrans() {
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
        <MainMoney />
    </div>
  )
}

export default MoneyTrans