import { ErrorRounded } from '@mui/icons-material'
import axios from 'axios'
import publicIp from 'public-ip';


const API = axios.create({baseURL:'https://gym-system-1.herokuapp.com/api'})

API.interceptors.request.use((req)=>{

    if(localStorage.getItem('gym-profile')){
        req.headers.token = "Bearer ${JSON.parse(localStorage.getItem('gym-profile')).token}"
    }
    return req
})


// Getting ip Address

console.log(publicIp.v4());

// Fetching Mac Address
export const FtechMac = () => API.get('/auth/fetchmac')

FtechMac().then(response => { 
	console.log('The address Mac in server '+response.data.addressMac[0].address)
})
.catch(error => {
    console.log(error)
});


// Login Auth
export const login = (DataLogin) => API.post('/auth/login') 
// Register Auth
export const register = (DataRegister) => API.post('/auth/register') 
// ------------------- Member ----------------------------
// add New member
export const Addmember = (DataMember) => API.post('/members') 
// Get all member
export const Getmembers = () => API.get('/members') 
// Get member By ID
export const GetmemberByid = () => API.get('/members/:id') 
// Update Member
export const updateMember = (UpdateDataMemeber) => API.patch('/members/:id') 
// delete member 
export const deleteMember = () => API.delete('/members/:id') 
// Update Member Paiement
export const payMember = (PayDataMember) => API.patch('/members/:id') 

// ------------------- Admins ----------------------------
// Get all Admin
export const Getadmin = () => API.get('/admins') 
// Get Admin By ID
export const GetadminByid = () => API.get('/admins/:id') 
// Update admin
export const updateAdmin = (UpdateDataAdmin) => API.patch('/admins/:id') 
// delete admin 
export const deleteAdmin = () => API.delete('/admins/:id') 

// ------------------- Staffs ----------------------------
// add New Staffs
export const AddStaffs = (DataStaffs) => API.post('/stuffs') 
// Get all Staffs
export const GetStaffs = () => API.get('/stuffs') 
// Get Staffs By ID
export const GetStaffsById = () => API.get('/stuffs/:id') 
// Update Staffs
export const updateStaffs = (UpdateDataStaffs) => API.patch('/stuffs/:id') 
// delete Staffs 
export const deleteStaffs = () => API.delete('/stuffs/:id') 
// Update Staffs Paiement
export const payStaffs = (PayDataStaffs) => API.patch('/stuffs/:id') 

// ------------------- Formation ----------------------------
// add New Formation
export const AddFormation = (DataFormation) => API.post('/formations') 
// Get all Formation
export const GetFormation = () => API.get('/formations') 
// Get Formation By ID
export const GetFormationById = () => API.get('/formations/:id') 
// Update Formation
export const updateFormation = (UpdateDataFormation) => API.patch('/formations/:id') 
// delete Formation 
export const deleteFormation = () => API.delete('/formations/:id') 

// ------------------- Products ----------------------------
// add New Products
export const AddProducts = (DataProducts) => API.post('/products') 
// Get all Products
export const GetProducts = () => API.get('/products') 
// Get Products By ID
export const GetProductsById = () => API.get('/products/:id') 
// Update Products
export const updateProducts = (UpdateDataProducts) => API.patch('/products/:id') 
// delete Products 
export const deleteProducts = () => API.delete('/products/:id') 

// ------------------- Products ----------------------------
// add New Sells
export const AddSells = (DataSells) => API.post('/sells') 
// Get all Sells
export const GetSells = () => API.get('/sells') 
// Get Sells By ID
export const GetSellsById = () => API.get('/sells/:id') 
// Update Sells
export const updateSells = (UpdateDataSells) => API.patch('/sells/:id') 
// delete Sells 
export const deleteSells = () => API.delete('/sells/:id') 
