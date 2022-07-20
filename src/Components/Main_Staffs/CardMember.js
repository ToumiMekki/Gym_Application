import React,{useRef} from 'react'
import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { FaLayerGroup } from "react-icons/fa";
import ImageLogo from '../../image/logo.png'
import CodeQr from '../../image/CodeQr.png'
import { useReactToPrint } from 'react-to-print'
import ProfileStaffImg from '../../image/003.jpg'

const useStyles = makeStyles({
    CardMember:{
        position:'fixed',
        top:'90px', left:'170px',
        color:'#00002b',
        width:'1000px', height:'600px',
        background:'#ffffff',
        zIndex:'700',
        boxShadow: '0 0px 10px 2000px rgba(0,0,0,0.9)',
        borderRadius:'20px',
    },
    close:{
        position:'absolute',
        top:'15px', right:'15px',
        background:'red',
        width:'20px', height:'20px',
        borderRadius:'50%',
        border:'none',
        "&:hover": {
            boxShadow: '0 0px 5px 5px rgba(255,0,0,0.6)',
        }
    },
    BoxButton:{
        position:'relative',
        width:'360px',
        left:'300px',
    },
    ButtonCard:{
        width:'100px', height:'40px',
        margin:'10px',
        fontWeight:'700',
    },
    GridMemberCard:{
        width:'900px', height:'500px',
        marginTop:'20px', marginLeft:'50px',
        display: 'flex',
        flexWrap: 'wrap',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.7)',
        borderRadius:'20px',
    },
    leftPart:{
        width:'60%', height:'500px',
        background:'#eeeeee',
        borderRadius:'20px',
        position:'relative',
    },
    rightPart:{
        width:'40%', height:'500px',
        background:'#00001b',
        borderRadius:'20px',
        color:'#ffffff',
        textAlign:'center',
    },
    Logo:{
        width:'150px',
        marginTop:'30px',
    },
    DescCard:{
        position:'relative',
        top:'40px', left:'50px',   
        fontSize:'18px',     
    },
    NameCard:{
        position:'absolute',
        top:'50px', left:'35%',
        fontSize:'30px',     
    },
    paraCard:{
        padding:'15px',
        opacity:'0.7',
    },
    CodeQR:{
        width:'110px',
    },
    StaffImg:{
        width:'150px', height:'150px',
        border:'orange solid 2px',
        borderRadius:'20px',
        position:'relative',
        top:'20px', left:'20px',
    },
});

function CardMember({closeCardMember}) {

    const componentRef = useRef();  
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current
    })  

    const classes = useStyles();
  return (

 
    <Grid className={classes.CardMember}> 
        <button onClick={()=>closeCardMember(false)} className={classes.close}></button>
            <Box className={classes.BoxButton}>
                <button className={classes.ButtonCard}
                onClick={handlePrint}
                >Print</button>
                <button className={classes.ButtonCard}>Delete</button>
                <button className={classes.ButtonCard}>Update</button>
            </Box>
        <Grid className={classes.GridMemberCard} ref={componentRef}>
            <Box className={classes.leftPart}>
                    <img src={ProfileStaffImg} alt="" className={classes.StaffImg}/>
                    <h1 className={classes.NameCard}>Toumi Ammar Mekki</h1>
                    <Box className={classes.DescCard}>
                    <h4>< MdOutlineEmail /> Email : amartoumi100@gmail.com</h4>
                    <h4>< FaPhoneSquareAlt /> Phone : 0699977753</h4>
                    <h4>< BsGenderAmbiguous /> Gender : Homme</h4>
                    <h4>< RiMoneyEuroCircleLine /> Paid Monthes : april,mars</h4>
                    <h4>< FaLayerGroup /> Formation : Gym,Fitness</h4>
                    </Box>
            </Box>
            <Box className={classes.rightPart}>
                    <Box>
                        <img src={ImageLogo} alt="" className={classes.Logo}/>
                        <h2>Name Of Gym</h2>
                        <p className={classes.paraCard}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum repellendus reprehenderit culpa rerum aperiam, obcaecati nisi ut animi consequuntur nemo. Ex quia tempora aliquam mollitia inventore, nam molestias numquam animi.</p>
                        <img src={CodeQr} alt="" className={classes.CodeQR}/>
                    </Box>
            </Box>
        </Grid>
    </Grid>
  )
}

export default CardMember