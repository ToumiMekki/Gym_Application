import {Routes, Route,BrowserRouter} from 'react-router-dom'
import Login from './Layouts/Login';
import Dashboard from './Layouts/Dashboard';
import GymMember from './Layouts/GymMember'
import GymStaffs from './Layouts/GymStaffs'
import Formation from './Layouts/Formation'
import Products from './Layouts/Products'
import MoneyTrans from './Layouts/MoneyTrans'
import Settings from './Layouts/Settings';
import PosUi from './Layouts/PosUi'
import AddNewMember from './Components/Main_Member/AddNewMember'
import FormMemberPay from './Components/Main_Member/FormMemberPay'
import AddNewStaffs from './Components/Main_Staffs/AddNewStaffs';
import FormStaffsPay from './Components/Main_Staffs/FormStaffsPay'
import {ProtectedRoutes} from './ProtectedRoutes'
import { FetchToLogin } from './FetchToLogin';
import CloseBar from './CloseBar';
import ConditionOfUse from './Layouts/ConditionOfUse';
import { Offline, Online } from "react-detect-offline";
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
  OfflineGrid:{
    width:'500px', height:'150px',
    background:'#ffffff',
    margin:'auto',
    border:'solid 5px red',
    position:'relative',
    top:'250px',
    borderRadius:'20px',
    boxShadow:'0px 0px 10px 5px rgba(0,0,0,0.5)',
    textAlign:'center',
    paddingTop:'100px',
    fontSize:'35px', fontWeight:'700',
    color:'red',
  },
})
export default function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <CloseBar />
      {/* <Online>
        <Grid className={classes.OfflineGrid}>Check your Connection</Grid>
      </Online> */}
      {/* <Offline> */}
      <BrowserRouter>
      <Routes>
        <Route element={<FetchToLogin />}>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/condition" element={<ConditionOfUse />} />
            <Route element={<ProtectedRoutes />}>
            <Route exact path="/dash" element={<Dashboard />} />
            <Route exact path="/member" element={<GymMember />} />
            <Route exact path="/staffs" element={<GymStaffs />} />
            <Route exact path="/formation" element={<Formation />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/money" element={<MoneyTrans />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/pos" element={<PosUi />} />
            <Route exact path="/addmember" element={<AddNewMember />} />
            <Route exact path="/addstaffs" element={<AddNewStaffs />} />
            <Route exact path="/paymember" element={<FormMemberPay />} />
            <Route exact path="/paystaffs" element={<FormStaffsPay />} />
        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
      {/* </Offline> */}
    </div>
  );
}
