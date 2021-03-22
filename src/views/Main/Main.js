import React,{Fragment,useState,useEffect} from 'react';
import { Container,AppBar,Toolbar,IconButton,Typography,Button,makeStyles,Grid,Paper  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
const Main = ( props ) => {
    const [contador,setContador] = useState(0);

    const classes = useStyles();
    useEffect(() =>{
        console.log("entra");
    },[]);
    useEffect(() =>{
        console.log("entra",contador);
    },[contador]);
    console.log("hi",classes);
    const sum1 = () => {
        setContador(contador+1);
    }
    return(
        <Fragment>
            <div className={classes.root} style={{ flexGrow: 1}}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton}  color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Container maxWidth={true} disableGutters={true}>
            <div style={{marginTop:80}} style={{width:"100% !important",backgroundColor:"grey"}}>
               
                    <Grid container spacing={3} style={{marginTop:64}}>
                        <Grid item xs={12} style={{backgroundColor:"green"}}>
                            <Carousel arrows plugins={[
                                                'infinite',
                                                {
                                                resolve: autoplayPlugin,
                                                options: {
                                                    interval: 1000,
                                                }
                                                },
                                            ]}   
                                            animationSpeed={1000}>
                                <img src={"/imagenes/veterinario-online-mascotas.jpg"} style={{minWidth:"100%"}}/>
                                <img src={"/imagenes/veterinario-online-perros.jpg"} style={{minWidth:"100%"}}/>
                            </Carousel>
                        </Grid>
                        <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.paper} elevation={3}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.paper} elevation={3}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.paper} elevation={3}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.paper} elevation={3}>xs=3</Paper>
                        </Grid>
                    </Grid>
                
            </div>
            </Container>    
        </Fragment>
    )
}

export default Main;