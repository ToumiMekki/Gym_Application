import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import { AiFillDelete } from "react-icons/ai";
import {MdOutlineUpdate} from "react-icons/md";





const useStyles = makeStyles({
    FormGroup:{
        marginLeft:'50px',
        marginTop:'20px',
    },
    transcation:{
        width:'550px', height:'400px',
        background:'#eeeeee',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.3)',
        marginLeft:'670px', marginTop:'-360px',
        borderRadius:'10px',
        overflowX:'hidden',
        overflowY:'scroll',
    },
    text:{
        position:'relative',
        left:'20px', top:'10px',
    },
    Trans_icon:{
        position:'relative',
        left:'440px', top:'-25px',
    },
    Trans_fixed:{
        position:'absolute',
        zIndex:'100',
        background:'#eeeeee',
        width:'550px', height:'50px',
    },
});


function DailyTransaction() {
    const classes = useStyles();
  return (
    <Grid className={classes.transcation}>
        <Box className={classes.Trans_fixed}>            
            <Typography component='p' variant="h6" className={classes.text}>All transaction Today</Typography>
            <IconButton className={classes.Trans_icon}><AiFillDelete/></IconButton>
            <IconButton className={classes.Trans_icon}><MdOutlineUpdate/></IconButton>
        </Box>
            <br /><br />
            <FormGroup className={classes.FormGroup}>
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            <FormControlLabel control={<Checkbox />} label="Acheter une boite d eau de 0.5 L 35 Dzd" />
            </FormGroup>
    </Grid>
  )
}

export default DailyTransaction