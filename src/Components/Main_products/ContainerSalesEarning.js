import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    container:{
        background: '#ffffff',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
          width:'350px',
          height:'300px',
          margin:'10px',
          borderRadius:'10px',
          textAlign:'center',
          paddingTop:'15px',
          paddingBottom:'5px',
          color:'#00001b',
          "&:hover": {
            background:'#00002b',
            color:'#ffffff',
            }        
      }
      });
  
function Container_SalesEarning(props) {
    const {TitleCont,ValueCont} = props
    const classes = useStyles();
  return (
    <Grid className={classes.container}>
        <Typography component='h1' variant="h6">{TitleCont}</Typography><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Consequatur repudiandae officia dolores, culpa fugit mollitia nesciunt,
         recusandae quam exercitationem iure ex laboriosam tenetur sapiente fuga
        soluta deleniti placeat enim iusto.</p><br />
        <Typography component='h1' variant="h7">{ValueCont}</Typography>
    </Grid>
  )
}

export default Container_SalesEarning