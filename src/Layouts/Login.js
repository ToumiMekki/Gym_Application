import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import AnimatedPageTwo from "../AnimatedPageTwo";
import {useState,useEffect} from 'react'
import Loading from '../Loading'
import {connect} from 'react-redux'
import BackImg from '../image/4931936.jpg'
import Logo from '../image/logo2.png'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2'



const useStyles = makeStyles(theme =>({
    root:{
        backgroundImage: `url(${BackImg})`,
        backgroundSize:'80%',
        height:'100vh',
        textAlign:'center',
        overflow:'hidden',
        backgroundRepeat: 'no-repeat',
    },
    Login:{
        backgroundColor: '#FDEFF4',
        margin:'auto',
        marginTop:'20%',
        height:'450px',
        width:'400px',
        borderRadius:'20px',
        boxShadow:'0px 0px 10px 5px rgba(0,0,0,0.5)',
        color:'#000000',
    },
    Button:{
        height:'50px',
        width:'100px',
        position:'relative',
        borderRadius:'20px',
    },
    TextField:{
        width:'320px',
    },
    Title:{
        position:'absolute',
        color:'black',
        left:'15%',top:'50px',
    },
    rightCont:{
        backgroundColor: '#FDEFF4',
        height:'100vh',
        width:'40%',
        position:'absolute',
        right:'0px',top:'0px',
        zIndex:'1000',
        borderLeft:'1px solid',
    },
    leftCont:{
        height:'100vh',
        width:'60%',
        position:'absolute',
        left:'0px',top:'0px',
        zIndex:'1000',
    },
    desLog:{
        position:'absolute',
        color:'black',
        top:'250px',
        padding:'50px',
        fontWeight:'700',
        direction: 'ltr',
    },
    ButtonDes1:{
        width:'200px', height:'50px',
        position:'absolute',
        bottom:'50px',
        left:'60px',
        borderRadius:10,
        border:'solid 2px',
        fontWeight:'700',
        "&:hover": {
            backgroundColor: '#082032',
            color:'#ffffff',
          }
    },
    ButtonDes2:{
        width:'200px', height:'50px',
        position:'absolute',
        bottom:'50px',
        right:'60px',
        borderRadius:10,
        border:'solid 2px',
        fontWeight:'700',
        "&:hover": {
            backgroundColor: '#082032',
            color:'#ffffff',
          }
    },
    Spanerr:{
        color:'red',
        marginRight:'140px',
        position:'relative',
        top:'5px',
    },
    ButtonSub:{
        width:'150px', height:'50px',
        borderRadius:'20px', border:'solid 1px orange',
        fontWeight:'700', fontSize:'18px',
        "&:hover": {
            backgroundColor: '#082032',
            color:'#ffffff',
          }
    },
    MotpassOublie:{
        color:'#082032',
        "&:hover": {
            color: 'blue',
          }
    },
}))
function Login() {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setFormValues({ ...FormValues,password:event.target.value})
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const [Submitted,setSubmitted] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        window.location.href = 'http://localhost:3000/dash'

    }
    const [OpenLoading,setOpenLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setOpenLoading(false)
        },1500)
    })

    const [FormValues,setFormValues]=useState({ username:'', password:'' })

    const FormUserNameHandel = (e)=>{
        setFormValues({ ...FormValues,username:e.target.value})
    }

    const CondOfUse = () =>{
        window.location.href = 'http://localhost:3000/condition'
    }

    const classes = useStyles()

    return (
            <AnimatedPageTwo>
            { OpenLoading && <Loading/>}
            <Grid container component='div' className={classes.root}>
                <Box className={classes.rightCont}> 
                    <h1 className={classes.Title}>
                    <span><img src={Logo} alt="" /></span><br />
                    Glitch x Gym Application</h1>
                    <p className={classes.desLog}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, nisi quae! Voluptates quo accusantium nihil eum ullam tempora quia? Minima autem nam repudiandae ipsa aliquid sequi laudantium et ullam? Quasi?
                    Iste cupiditate, officia est excepturi, fuga explicabo alias deserunt pariatur harum quia sint? Voluptate sapiente ipsa nostrum veniam iusto quidem corporis odit perferendis praesentium debitis. Distinctio veniam quod doloremque nostrum.
                    Nisi alias fugiat ipsum, qui officia recusandae magni voluptatem excepturi debitis veniam rem tempore, aut harum facere hic necessitatibus saepe consequuntur dolore! Dolorem iste facere iusto hic sequi pariatur est.</p>
                    <button className={classes.ButtonDes1}>Glitch X Store</button>
                    <button className={classes.ButtonDes2} onClick={CondOfUse}>Condtion of Use</button>
                </Box>
                <Box className={classes.leftCont}>
                <Box container component='div' className={classes.Login}><br />
                <form onSubmit={handleSubmit}>
                    <Typography component='h1' variant="h4">Login</Typography><br /><br />
                    <TextField id="outlined-basic" label="UserName" variant="outlined" className={classes.TextField}
                    value={ FormValues.username } onChange={FormUserNameHandel}
                    /><br />
                    {Submitted && !FormValues.username ? <span className={classes.Spanerr}>Please Add a username</span> : null }
                    <br /><br />
                    <FormControl sx={{ m: 1, width: '320px' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <br />
                    {Submitted && !FormValues.password ? <span className={classes.Spanerr}>Please Add a password</span> : null }
                    <br /><br />
                    <input type="submit" value="Login"  className={classes.ButtonSub}/><br />
                </form>
                <h5 className={classes.MotpassOublie}>Tu as oublie ton mot de passe ?</h5>
                </Box>
                </Box>
            </Grid>
            </AnimatedPageTwo>
    ) 
}

export default Login
