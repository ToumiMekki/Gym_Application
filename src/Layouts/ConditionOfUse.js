import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import image1 from '../image/004.jpg'

const useStyles = makeStyles({
    GridCondOfUse:{
        width:'100%', height:'100vh',
        backgroundImage: `url(${image1})`,
        backgroundSize:'100%',
        backgroundRepeat: 'no-repeat',
        position:'relative',
    },
    BoxCondOfUse:{
        width:'700px', height:'680px',
        position:'relative',
        top:'50px',
        margin:'auto',        
        background:'#eeeeee',
        borderRadius:'20px',
        textAlign:'center',
    },
    BoxRules:{
        width:'650px', height:'500px',
        overflowY:'scroll',
        paddingLeft:'25px',
        paddingRight:'25px',
        position:'relative',
        top:'100px',
    },
    TitleCond:{
        position:'absolute',
        top:'10px', left:'200px',
    },
    BoxShadow:{
        width:'100%', height:'100vh',
        position:'absolute',
        background:'rgba(0,0,0,0.5)',
    },
    button:{
        position:'absolute',
        bottom:'30px', left:'42%',
    },
})

function ConditionOfUse() {
    const classes = useStyles();
  return (
    <Grid className={classes.GridCondOfUse}>
        <Box className={classes.BoxShadow}>
            <Box className={classes.BoxCondOfUse}>
            <h1 className={classes.TitleCond}>Condition Of Use</h1>
            <Box className={classes.BoxRules}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate reprehenderit, blanditiis enim quidem corporis, maiores quaerat minima nam velit eveniet sunt, magni dolorum? Optio consequatur fuga sapiente distinctio aperiam.
            Quo eveniet impedit delectus. Iure sint laboriosam reprehenderit expedita aliquid quo unde numquam natus cupiditate, ea, adipisci minima! Non a sapiente deleniti cum rerum soluta! Impedit dolores ipsa adipisci aut?
            In facere accusamus voluptate maiores laudantium commodi quod eos sapiente harum! Et dolorem dignissimos voluptatibus rerum officia? Odio labore vel, exercitationem modi et qui, dolores facere voluptatum quibusdam fugit totam!
            Inventore corporis quod quis delectus hic asperiores dolores veritatis magni optio nisi neque vero voluptates mollitia reprehenderit natus nostrum odio, harum perferendis animi eveniet quaerat repudiandae quae. Molestiae, repudiandae incidunt!
            Aliquid aliquam iusto provident eos, voluptates sint ducimus unde id ea odit dolores eligendi similique magni voluptas iure nemo, magnam quisquam dolorem dicta eaque esse obcaecati corporis ipsam? Tempora, similique!
            Velit atque quos mollitia fuga quis enim voluptate, alias laboriosam dolorem sit quisquam minus. Tempora tempore fugiat error fuga voluptatum sequi consectetur ut voluptas laboriosam, amet, dignissimos dolorem aliquid a?
            Exercitationem sint nemo iure ea magnam officia unde perferendis sit. At et saepe atque rem, recusandae unde modi laborum architecto, minus voluptas esse sapiente temporibus? Nostrum asperiores ad velit unde!
            Quod enim modi, praesentium assumenda suscipit rem cum natus deserunt pariatur libero! Distinctio et dolorem ipsa. Accusantium impedit vero repellendus rem veniam quas perferendis facilis, unde, reprehenderit temporibus quidem inventore!
            Aliquam, temporibus? Ducimus eos aspernatur illo beatae maxime, velit natus consequatur sint odio laborum, ab voluptatem. Earum voluptatem qui ipsa temporibus eaque dolore id excepturi. Voluptas debitis illum nulla velit?
            Odit fugit explicabo eos corrupti quos amet repellat harum veritatis possimus voluptatem perferendis dolor numquam excepturi, deleniti autem velit quo? Eum iusto laborum ea ipsam vel pariatur ab, officia possimus.</p>
            </Box>
            <button className={classes.button}
            onClick={()=>window.location.href = 'http://localhost:3000'}>Login Page</button>
            </Box>
        </Box>        
    </Grid>
  )
}

export default ConditionOfUse