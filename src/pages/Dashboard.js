import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/header';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

}));

export default function Dashboard() {
    const classes = useStyles();

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Header />
                <Grid container spacing={2} style={{marginTop:'20px'}}>
                    <p> New  user added.</p>
                </Grid>


            </div>
           
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}