import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import GAME_DATA from './game.data.js';
import Chip from '@material-ui/core/Chip';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';


import Footer from './Footer';
import SimpleModalWrapped from './Modal';

import AutoRotatingCarouselModalTest from './RotatingModal';



import { ReactComponent as Logo } from './assets/crown.svg';




const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));




const cards = GAME_DATA;


export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Link className='logo-container' to='/'>
                        <Logo className='logo' />
                    </Link>
                    <Typography variant="h6" color="inherit" noWrap>
                        CROIX APPS
          </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent} key="1">
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Games
            </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Check out our newest games.
            </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.slice(0).reverse().map((card, index) => (

                            < Grid item key={card} xs={12} sm={6} md={4} >
                                <Card className={classes.card} key={index}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.imageUrl}
                                        title={card.title}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            {card.shortDes}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>


                                        <AutoRotatingCarouselModalTest title={card.title} description={card.shortDes} image={card.imageUrl} screenshots={card.screenshots} storeLink={card.storeLink}></AutoRotatingCarouselModalTest>
                                        {

                                            {
                                                'ios': <Chip color={card.active} icon={<PhoneIphoneIcon />}
                                                    label={card.year} />,
                                                'wp': <Chip color={card.active} icon={<PhoneAndroidIcon />}
                                                    label={card.year} />,
                                                'pc': <Chip color={card.active} icon={<DesktopWindowsIcon />}
                                                    label={card.year} />
                                            }[card.platform]
                                        }

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <div className={classes.heroContent} key="2">
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        About me
            </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        I'm a computer engineer who likes to create games, sometimes I make them to learn and solve problems and usually I make them for fun.
            </Typography>
                </Container>
            </div>
            <Footer title="SOCIAL MEDIA" description="" />
            {/* End footer */}
        </React.Fragment >
    );
}