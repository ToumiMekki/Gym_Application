import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import AnimatedPage from "../../AnimatedPage";
import DashCont from "./DashCont";
import FormationCont from "./FormationCont";


const useStyles = makeStyles({
  GridFormation:{
      width:'90%', height:'137vh',
      position:'relative',
      left:'110px', top:'120px',
  },
  BoxDashCont:{
    display: 'flex',
    flexWrap: 'wrap',
    width:'100%',
  },
  ContForma:{
    width:'95%', height:'700px',
    position:'relative',
    left:'30px', top:'10px',
    borderRadius:'20px',
  },
  ScrollForma:{
    width:'98.5%', height:'600px',
    position:'absolute',
    bottom:'20px',
    overflowY:'scroll',
    overflowX:'hidden',
    borderRadius:'20px',
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft:'10px',

  },
  TitleContForm:{
    textAlign:'center',
    position:'relative',
    top:'10px',
    color:'#0E185F',

  },
});

function MainFormation() {
  const classes = useStyles();
  return (
    <AnimatedPage>
    <Grid className={classes.GridFormation}>
      <Box className={classes.BoxDashCont}>
          <DashCont />
          <DashCont />
          <DashCont />
      </Box>
      <Box className={classes.ContForma}>
        <h1 className={classes.TitleContForm}>ALL Formations in GYM</h1>
          <Box className={classes.ScrollForma}>
              <FormationCont />              
              <FormationCont />              
              <FormationCont />              
              <FormationCont />              
              <FormationCont />              
              <FormationCont />              
              <FormationCont />              
              <FormationCont />              
              <FormationCont />              
              <FormationCont />              
              <FormationCont />              
          </Box>
      </Box>
    </Grid>
    </AnimatedPage>
  )
}

export default MainFormation