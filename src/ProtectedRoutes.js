import {Outlet,Navigate} from 'react-router'

const useAuth = () =>{
    const user = {loggedIn : true}
    return user && user.loggedIn
}

export const ProtectedRoutes = () => {
    const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to='/'/>
}
