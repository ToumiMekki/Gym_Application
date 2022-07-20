import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductsTable from './ProductsTable'


const useStyles = makeStyles({
    title:{
        textAlign:'center',
        position:'relative',
        top:'20px',
        color:'#00002b',
    },
    BoxCont:{

    },
    GridCont:{
        width:'73%', height:'500px',
        background:'#ffffff',
        borderRadius:'20px',
        boxShadow: '0 0px 5px 2px rgba(0,0,0,0.5)',
        position:'relative',
        top:'0px', left:'20px',


    },
});
  

function Container_ProductsList() {
    const classes = useStyles();
  return (
    <Grid className={classes.GridCont}>
        <Box className={classes.BoxCont}>
            <Typography component='h1' variant="h6" className={classes.title}>List Of all Salles</Typography>
        </Box>
        <Box>
        <ProductsTable />
        </Box>
    </Grid>
  )
}

export default Container_ProductsList
