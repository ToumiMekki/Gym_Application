import { makeStyles } from '@material-ui/core/styles'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from  'react-loader-spinner'

const useStyles = makeStyles({
    Loading:{
        position:'fixed',
        zIndex:'300',
        boxShadow: '0 0px 5px 2000px rgba(250,250,250,0.8)',
        left:'550px', top:'270px',
        background:'rgba(250,250,250,0.8)',
      
    },
});

function Loading() {
    const classes = useStyles();
  return (
    <div className={classes.Loading}>
        <BallTriangle color="#082032" height={200} width={200} timeout={3000}/>
    </div>
  )
}

export default Loading