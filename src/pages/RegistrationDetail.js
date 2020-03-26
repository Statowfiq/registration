import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import Header from '../components/header';
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import Typography from '@material-ui/core/Typography';
import {USERNAME,EMAIL,PASSWORD} from '../components/Queries';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegistrationDetail(props) {
  const classes = useStyles();
  const client = useApolloClient();
  const [name, setName] = React.useState("");
  const {  history } = props;
  


 
  const handleNext = (e) => {
    client.writeData({ data: { name: name } })
    history.push("/listing")
  }

  const { data: username } = useQuery(USERNAME);
  const { data: email } = useQuery(EMAIL);
  const { data: password } = useQuery(PASSWORD);
  console.log("MYDATQ", username, email, password)
  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Header />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {username ?
                <Typography component="h5" variant="body1">
                  Username : {username.username}
                </Typography> : null
              }
            </Grid>
            <Grid item xs={12}>
              {email ?
                <Typography component="h5" variant="body1" >
                  Email : {email.email}
                </Typography> : null
              }
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="addressln1"
                variant="outlined"
                required
                fullWidth
                id="addressln1"
                label="Address Line1"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="addressln2"
                variant="outlined"
                required
                fullWidth
                id="addressln2"
                label="Address Line2"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="contact"
                variant="outlined"
                required
                fullWidth
                id="contact"
                label="Contact number"
                autoFocus
              />

            </Grid>
          </Grid>


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleNext}
          >
            Next
          </Button>

        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}