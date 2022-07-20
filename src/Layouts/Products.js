import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import MainProducts from '../Components/Main_products/MainProducts'
import {useState,useEffect} from 'react'
import Loading from '../Loading'


function Products() {
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
        <MainProducts />
    </div>
  )
}

export default Products