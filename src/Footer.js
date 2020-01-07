import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                Croix Apps
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.footer,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    }
}));

export default function Footer(props) {
    const classes = useStyles();
    const { description, title } = props;

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">

                <div align="center">
                    <Typography variant="h6" align="center" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <IconButton className={classes.margin} href="https://www.facebook.com/CroixApps">
                        <FacebookIcon fontSize="large" />
                    </IconButton> <IconButton className={classes.margin} href="https://twitter.com/CroixApps">
                        <TwitterIcon fontSize="large" />
                    </IconButton> <IconButton className={classes.margin} href="https://www.linkedin.com/in/johan-croix-plasencia-estrada-50b27b142/">
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <Copyright />
                </div>

            </Container>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};