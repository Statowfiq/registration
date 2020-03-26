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
import { USERNAME, EMAIL, PASSWORD, NAME } from '../components/Queries';
import { useApolloClient, useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

}));

export default function Listing(props) {
    const classes = useStyles();


    const { data: username } = useQuery(USERNAME);
    const { data: email } = useQuery(EMAIL);
    const { data: name } = useQuery(NAME);
    const { history } = props;
    const handleSubmit = () => {
        history.push("/dashboard");
    }
    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Header />
                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                    <Grid item xs={12}>
                        {username ?
                            <Typography component="h5" variant="body1">
                                Username : {username.username}
                            </Typography> : null
                        }
                    </Grid>
                    <Grid item xs={12}>
                        {email ?
                            <Typography component="h5" variant="body1">
                                Email : {email.email}
                            </Typography> : null
                        }
                    </Grid>

                    <Grid item xs={12}>
                        {name ?
                            <Typography component="h5" variant="body1">
                                Name : {name.name}
                            </Typography> : null
                        }
                    </Grid>
                </Grid>


            </div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
            >
                Submit
          </Button>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}