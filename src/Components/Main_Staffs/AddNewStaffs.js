import * as React from 'react';
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'
import Swal from 'sweetalert2'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Kick Boxing',
  'Judo',
  'fitness',
  'airobic',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const useStyles = makeStyles({

    FormAddStaffs:{
        width:'520px', height:'670px',
        background:'#eeeeee',
        boxShadow: '0 0px 5px 2000px rgba(0,0,0,0.8)',
        borderRadius:'10px',
        textAlign:'center',
        position:'fixed',
        paddingTop:'0px',
        top:'60px',left:'425px',
        zIndex:'500',

    },
    SubmitButton:{
        width:'150px', height:'50px',
        position:'absolute',
        top:'600px', right:'190px',
    },
    BoxErr:{
        width:'460px', height:'70px',
        marginLeft:'20px',
        marginTop:'15px',
        borderRadius:10,
        textAlign:'left',
        overflowY:'scroll',
        overflowX:'hidden',
        textAlign:'center',
    },
    CloseButton:{
        width:'17px', height:'17px',
        background:'red',
        border:'none',
        borderRadius:'50%',
        position:'absolute',
        top:'15px', right:'15px',
        "&:hover": {
            boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
          }
    },
    Spanerr:{
      fontSize:'13px',
      position:'relative',
      color:'red',
    },
    BoxImg:{
      width:'200px', height:'200px',
      border:'solid 2px',
      borderRadius:'20px',
      float:'right',
      marginRight:'30px',
      marginTop:'10px',
    },

});

function AddNewStaffs({closeAddStaffs}) {
    const classes = useStyles();

    const [AddMemValues,setAddMemValues]=useState({firstname:'', lastname:'',email:'',phone:'',salaire:''})
        const FormFirstNameHandel = (e)=>{
          setAddMemValues({ ...AddMemValues,firstname:e.target.value})
    }
      const FormLastNameHandel = (e)=>{
        setAddMemValues({ ...AddMemValues,lastname:e.target.value})
    }
      const FormEmailHandel = (e)=>{
        setAddMemValues({ ...AddMemValues,email:e.target.value})
    }
    const FormPhoneHandel = (e)=>{
      setAddMemValues({ ...AddMemValues,phone:e.target.value})
    }
    const FormSalaireHandel = (e)=>{
      setAddMemValues({ ...AddMemValues,salaire:e.target.value})
    }

    const [Submitted,setSubmitted] = useState(false)


    const  onAddStaffs = (e)=>{
      e.preventDefault()
      if(!AddMemValues.firstname || !AddMemValues.lastname || !AddMemValues.salaire
      || !AddMemValues.email  || !AddMemValues.phone  || Formation=='' 
      || Dure=='' || Gender=='' ){
        setSubmitted(true).then(setSubmitted(false))
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Add Stuffs succesfully',
        showConfirmButton: false,
        timer: 2000
      }).then(closeAddStaffs(false))
    }
  }

    const theme = useTheme();
    const [Formation, setFormation] = React.useState([]);
    const [Dure, setDure] = React.useState('');
    const [Gender, setGender] = React.useState('');
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setFormation(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    const durationChange = (event) => {
      setDure(event.target.value);
    };
    const GenderChange = (event) => {
      setGender(event.target.value);
    };

  return (
    <Grid className={classes.FormAddStaffs}>
        <h2>Add New Stuffs</h2>
        <button className={classes.CloseButton} onClick={()=>closeAddStaffs(false)}></button>
        <form onSubmit={onAddStaffs}>
            <TextField id="outlined-basic" label="first Name" variant="outlined" size="small" sx={{ m: 1, width: 200 }}
              value={ AddMemValues.firstname } onChange={FormFirstNameHandel}/>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" sx={{ m: 1, width: 200 }}
              value={ AddMemValues.lastname } onChange={FormLastNameHandel}/><br />
            <TextField id="outlined-basic" label="Email" variant="outlined" size="small" sx={{ m: 1, width: 200 }}
              value={ AddMemValues.email } onChange={FormEmailHandel}/>
            <TextField id="outlined-basic" label="Phone" variant="outlined" size="small" sx={{ m: 1, width: 200 }}
              value={ AddMemValues.phone } onChange={FormPhoneHandel}/><br />
              <Box className={classes.BoxImg}>
                <input type="file" name="" id="" />
              </Box>
        <FormControl sx={{ml: 2,mt:2, width: 220}} size='small'>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Gender}
          label="Gender"
          onChange={GenderChange}
        >
          <MenuItem value='Homme'>Homme</MenuItem>
          <MenuItem value='Femme'>Femme</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ ml:2,mt: 2, width: 220}} size='small'>
        <InputLabel id="demo-multiple-name-label">Functions</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={Formation}
          onChange={handleChange}
          input={<OutlinedInput label="Functions" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, Formation, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl><br />
      <FormControl sx={{ ml: 2,mt: 2, width: 220}} size='small'>
        <InputLabel id="demo-simple-select-label">Formation of Coach</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Dure}
          label="Formation of Coach"
          onChange={durationChange} >
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
        </Select>
        </FormControl>  
        <TextField id="outlined-basic" 
        label="Slaire/mois on Dzd"
        variant="outlined" size="small"
        sx={{ ml: 2,mt: 2,width: 220 }}
        value={ AddMemValues.salaire } onChange={FormSalaireHandel}
        />
      {Submitted ? <table className={classes.BoxErr}>
      {Submitted && !AddMemValues.firstname ? <tr className={classes.Spanerr}>Please Add a firstname</tr> : null }
      {Submitted && !AddMemValues.lastname ? <tr className={classes.Spanerr}>Please Add a lastname</tr> : null }
      {Submitted && !AddMemValues.email ? <tr className={classes.Spanerr}>Please Add a email</tr> : null }
      {Submitted && !AddMemValues.phone ? <tr className={classes.Spanerr}>Please Add a phone number</tr> : null }
      {Submitted && !Gender ? <tr className={classes.Spanerr}>Please Select Gender</tr> : null }
      {Submitted && Formation=='' ? <tr className={classes.Spanerr}>Please Select Formation</tr> : null }
      {Submitted && !Dure ? <tr className={classes.Spanerr}>Please Select Dure Of paiement</tr> : null }
      {Submitted && !AddMemValues.salaire ? <tr className={classes.Spanerr}>Please Add a Salaire</tr> : null }
      </table> : null}
      <input type="submit" value="Add Stuffs" className={classes.SubmitButton}/>  
    </form>
    </Grid>
  )
}

export default AddNewStaffs