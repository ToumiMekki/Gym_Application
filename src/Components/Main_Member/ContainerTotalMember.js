import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TotalMember from './TableTotalMember'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'

const useStyles = makeStyles({
    title:{

        position:'relative',
        top:'20px', left:'20px',
        color:'#00002b',
    },
    GridCont:{
        width:'100%', height:'700px',
        marginTop:'70px',
        marginBottom:'30px',
        background:'#FFFFFF',
        borderRadius:'20px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',

    },
    TextField:{
        width:'200px',
    },  
    BoxCont:{
        
    },
    BoxSearchMem:{
        width:'330px',
        position:'relative',
        right:'50px', top:'-20px',
        float:'right',
    },
});



function ContainerTotalMember() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const classes = useStyles();
  return (
    <Grid className={classes.GridCont}>
        <Box className={classes.BoxCont}>
            <Typography component='h1' variant="h6" className={classes.title}>Total Member List</Typography>
            <Box className={classes.BoxSearchMem}>
            <TextField id="outlined-basic" size='small' label="Search" variant="outlined" className={classes.TextField}/>
            <FormControl sx={{width:'100px',marginLeft:'10px',}} size='small'>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </Box>
        </Box>
        <Box>
        <TotalMember />
        </Box>
    </Grid>
  )
}

export default ContainerTotalMember