import * as React from 'react';
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

    FormAddMember:{
        width:'500px', height:'560px',
        background:'#eeeeee',
        boxShadow: '0 0px 5px 2000px rgba(0,0,0,0.8)',
        borderRadius:'10px',
        textAlign:'center',
        position:'fixed',
        paddingTop:'10px',
        top:'100px',left:'400px',
        zIndex:'500',
    },
    SubmitButton:{
        width:'150px', height:'50px',
        position:'absolute',
        top:'500px', right:'180px',
    },
    BoxErr:{
        width:'460px', height:'120px',
        background:'red',
        marginLeft:'20px',
        marginTop:'15px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        borderRadius:10,
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
});

function FormMemberPay({closePayMember}) {
  const classes = useStyles();
  const  onAddMember = ()=>{

  }

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const durationChange = (event) => {
    setAge(event.target.value);
  };

return (
  <Grid className={classes.FormAddMember}>
      <h2>Paiement of Member</h2>
      <button className={classes.CloseButton} onClick={()=>closePayMember(false)}></button>
      <form onSubmit={onAddMember}>
            <FormControl sx={{ ml: 0,mt: 4, width: 450}}>
            <InputLabel id="demo-simple-select-label">Member Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={durationChange}
            >
              <MenuItem value={1}>Read Student Maping </MenuItem>
            </Select>
          </FormControl>  
          <TextField id="outlined-basic" label="Paiement Price" variant="outlined" size="normal" sx={{ ml: 1,mr: 1,mt: 3,mb: 3, width: 200 }}/>
          <FormControl sx={{ ml: 1,mr: 1,mt: 3,mb: 3, width: 200}}>
        <InputLabel id="demo-simple-select-label">Dure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={durationChange}
        >
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
          <MenuItem value={4}>04</MenuItem>
          <MenuItem value={5}>05</MenuItem>
          <MenuItem value={6}>06</MenuItem>
          <MenuItem value={7}>07</MenuItem>
          <MenuItem value={8}>08</MenuItem>
          <MenuItem value={9}>09</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>

        </Select>
      </FormControl>  
    <Box className={classes.BoxErr}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore minima rerum maxime, vitae mollitia iste? Asperiores sunt, alias repellat iusto tempora, atque animi provident soluta perferendis, expedita reiciendis dicta.
    </Box>
    <input type="submit" value="Payer" className={classes.SubmitButton}/>  
  </form>
  </Grid>
)
}

export default FormMemberPay