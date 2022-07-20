import { makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ContainerProducts from './ContainerProducts';
import AnimatedPage from "../../AnimatedPageThree";
import CurrentOrder from './CurrentOrder'
import {useState,useRef} from 'react'
import PaiementCash from './PaiementContainer'
import { styled } from '@mui/material/styles';
import { useReactToPrint } from 'react-to-print'
import PrintComand from './PrintComand'
import AddNewProduct from '../Main_products/AddProducts'


const useStyles = makeStyles({
    BoxPosProducts: {
        display:'flex',
        flexWrap: 'wrap',
        width:'870px', height:'630px',
        float:'left',
        position:'relative',
        left:'5px', top:'50px',
        overflowX: 'hidden',
        overflowY:'scroll',
        },
        BoxPosCrud: {
            display: 'flex',
            flexWrap: 'wrap',
            width:'530px',
            float:'right',
            position:'absolute',
            right:'30px',top:'30px',  
            },
        PayButton: {
                width:'300px', height:'70px',
                margin:'5px',
                borderRadius:20,
                border:'solid',
            },
            SaleButton: {
                width:'200px', height:'70px',
                margin:'5px',
                borderRadius:20,
                border:'solid',
            },
            OtherButton: {
                width:'100px', height:'70px',
                margin:'5px',
                borderRadius:20,
                border:'solid',
            },
            GridPosRight: {
                width:'64.6%', height:'100vh',
                float:'left',
                position:'relative',
                background:'#FFFFFF',
            },    
            GridPosLeft: {
                width:'35%', height:'100vh',
                float:'left',
                position:'relative',
                background:'#ffffff',
                borderLeft:'solid 2px #F76E11',
            },    
            BoxOrder:{
                width:'480px', height:'400px',
                position:'relative',
                overflowX:'hidden',
                overflowY:'scroll',
                marginTop:'20px',
            },
            TitleOrder:{
                width:'480px', height:'60px',
                display: 'flex',
                flexWrap: 'wrap',
                marginTop:'25px',
            },  
            ButtonOrder:{
                width:'150px', height:'40px',
                position:'relative',
                left:'90px', top:'10px',
            }, 
            Title:{
                position:'relative',
                left:'10px', bottom:'15px',
            }, 
            BoxTotal:{
                width:'450px', height:'80px',
                display: 'flex',
                flexWrap: 'wrap',
                borderRadius:10,
                marginLeft:'15px',
                marginTop:'10px',
            },
            TotalTitle:{
                position:'relative',
                left:'20px', top:'-5px',
            },
            PayTotal:{
                position:'relative',
                left:'130px', top:'2px',
            },
            Buttonpay:{
                width:'350px', height:'60px',
                position:'relative',
                left:'70px', top:'80px',
                color:'#F76E11',
            },
            TitleBox:{
                position:'relative',
                left:'20px', top:'25px',
                color:'#F76E11',
            },
            hr:{
                marginTop:'10px',
            },
            });    
            const BootstrapButton = styled(Button)({
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: 16,
                padding: '6px 12px',
                border: '1px solid',
                lineHeight: 1.5,
                backgroundColor: '#F76E11',
                borderColor: '#000000',
                color:'#000000',
                '&:hover': {
                  backgroundColor: '#0069d9',
                  borderColor: '#0062cc',
                  boxShadow: 'none',
                  color:'#ffffff',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: '#0062cc',
                  borderColor: '#005cbf',
                },
                '&:focus': {
                  boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                },
              });
              const BootstrapButton2 = styled(Button)({
                color:'#00002b',
                width:'120px', height:'60px',
                boxShadow: '0 0px 5px 2px rgba(0,0,0,0.3)',
                background:'#FFFFFF',
                borderRadius:10,
                textAlign:'center',
                margin:'5px',
                border:'none',
                fontWeight:'700',
                fontSize:'12px',
                "&:hover": {
                  backgroundColor: '#F76E11',
                  color:'#ffffff',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: '#0062cc',
                  borderColor: '#005cbf',
                },
                '&:focus': {
                  boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                },
              });      
      

function MainPos() {

    const classes = useStyles();
    const Dash = ()=>{
        window.location.href = 'http://localhost:3000/dash'
    }

    const [OpenPayCont,setOpenPayCont] = useState(false)
    const ClickPayCash = ()=>{
        setOpenPayCont((OpenPayCont)=> !OpenPayCont)
        console.log(OpenPayCont)
  }
  const componentRef = useRef();  
  const handlePrint = useReactToPrint({
      content:()=>componentRef.current
  }) 

  const [OpenAddProducts,setOpenAddProducts]=useState(false)

  const onClickAddProduct = () =>{
    setOpenAddProducts(true)
  }

  return (
<AnimatedPage>
{ false && <PrintComand PrintComand={handlePrint}/>}
    <Grid>
    <Grid className={classes.GridPosRight}>
        <Box className={classes.TitleBox}>
            <h2>Point of Sales</h2>
        </Box>
        <Box className={classes.BoxPosCrud}>
        <BootstrapButton2 onClick={onClickAddProduct}>add Products</BootstrapButton2>
        <BootstrapButton2>add amount</BootstrapButton2>
        <BootstrapButton2>add</BootstrapButton2>
        <BootstrapButton2 onClick={Dash}>Dashboard</BootstrapButton2>

        </Box>
        <Box className={classes.BoxPosProducts}>
        <ContainerProducts />
        </Box>
        </Grid>
        <Grid className={classes.GridPosLeft}>
            <Box className={classes.TitleOrder}>
                 <h1 className={classes.Title}>Current Order</h1> 
                 <Button variant='contained' color="error" className={classes.ButtonOrder}>Clear All</Button>
            </Box>
            <Box className={classes.BoxOrder} ref={componentRef}>
            <CurrentOrder ProductsName="Products one" ProductsQun="1" Prix='10000'/>
            </Box>
            <hr className={classes.hr}/>
            <Box className={classes.BoxTotal}>
                <h1 className={classes.TotalTitle}>Total</h1> 
                <h2 className={classes.PayTotal}>20000000000 Dzd</h2> 
            </Box>
            <BootstrapButton variant="outlined"
            className={classes.Buttonpay} onClick={ClickPayCash}>Paiement Cash</BootstrapButton>
        </Grid>
    </Grid>
    { OpenPayCont && <PaiementCash closePayCont={setOpenPayCont}/>}
    { OpenAddProducts && <AddNewProduct closeAddProduct={setOpenAddProducts}/>}
</AnimatedPage>
  )
}

export default MainPos