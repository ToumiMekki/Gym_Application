import {Outlet} from 'react-router'
import Err from './Layouts/Err'


const useAuth = () =>{
    const user = {loggedIn : true}
    return user && user.loggedIn
}
export const FetchToLogin = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : < Err />
}

export default FetchToLogin

