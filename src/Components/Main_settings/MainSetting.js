import pallet from '../../image/pallet.png'
import AnimatedPage from "../../AnimatedPage";
import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import {connect} from 'react-redux'
import English from '../../image/English.png'
import France from '../../image/france.png'
import Algeria from '../../image/algeria.png'


const useStyles = makeStyles({
  GridSetting:{
    width:'91%', height:'83vh',
    position:'relative',
    left:'100px', top:'120px',
    marginBottom:'20px',
  },
  GridMode:{
    textAlign:'center',
    width:'450px',
    display: 'flex',
    flexWrap: 'wrap',
    position:'relative',
    left:'10px', top:'10px',

  },
  GridPallet:{
    textAlign:'center',
    width:'650px',
    display: 'flex',
    flexWrap: 'wrap',
    position:'relative',
    left:'10px', top:'50px',
    paddingLeft:'20px',

  },
  BoxPallet:{
    display: 'flex',
    flexWrap: 'wrap',
  },
  BoxDark:{
    width:'120px', height:'100px',
    margin:'10px',
    paddingTop:'10px',
    boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
    borderRadius:'10px',
    "&:hover": {
      background:'#00002b',
      color:'#ffffff',
      boxShadow: '0 0px 5px 1px red',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'red',
      borderColor: '#red',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },      
    '&:visited ':{
      background:'#00002b',
    },
},
  
  IconSetting:{
    width:'40px', height:'40px',
  },
  TextMode:{
    marginTop:'45px',
    marginLeft:'20px',
    marginRight:'20px',
  },
  RadioPosition:{
    marginTop:'25px',
    marginLeft:'25px',
    marginRight:'10px',
  },
  ImageRadioPosition:{
    width:'80px', height:'40px',
    border:'solid',
    marginTop:'10px',
    marginRight:'25px',
    borderRadius:'10px',

  },
  LangRadioPosition:{
    width:'40px', height:'40px',
    borderRadius:'50%',
    marginTop:'10px',
    marginRight:'25px',
    border:'solid 2px',
  },

});

function MainSetting() {
  const classes = useStyles();
  return (
<AnimatedPage>
    <Grid className={classes.GridSetting}>
        <Grid className={classes.GridMode}>
            <h3 className={classes.TextMode}>Themes Type :</h3>
            <Box className={classes.BoxDark}>
              <MdOutlineDarkMode className={classes.IconSetting}/>
              <h4>Dark Mode</h4>
            </Box>
            <Box className={classes.BoxDark}>
              <MdOutlineLightMode className={classes.IconSetting}/>
              <h4>Light Mode</h4>
            </Box>
        </Grid><br /><br />
        <Grid className={classes.GridPallet}>
          <h3>Pallets Colors :</h3>
          <Box className={classes.BoxPallet}>
            <input type="radio" name="pallet" id=""  className={classes.RadioPosition} />
            <img src={pallet} className={classes.ImageRadioPosition} alt="image"/>
            <input  type="radio" name="pallet" id="" className={classes.RadioPosition}/>
            <img src={pallet} className={classes.ImageRadioPosition} alt="image"/>
            <input type="radio" name="pallet" id="" className={classes.RadioPosition}/>
            <img src={pallet} className={classes.ImageRadioPosition} alt="image"/>
          </Box>
        </Grid><br /><br /><br /><br />
        <Grid className={classes.GridPallet}>
          <h3>Langues ALL :</h3>
          <Box className={classes.BoxPallet}>
            <input type="radio" name="Lang" id=""  className={classes.RadioPosition} />
            <img src={Algeria} className={classes.LangRadioPosition} alt="image"/>
            <input  type="radio" name="Lang" id="" className={classes.RadioPosition}/>
            <img src={English} className={classes.LangRadioPosition} alt="image"/>
            <input type="radio" name="Lang" id="" className={classes.RadioPosition}/>
            <img src={France} className={classes.LangRadioPosition} alt="image"/>
          </Box>
        </Grid>
    </Grid>
</AnimatedPage>
  )
}


export default MainSetting