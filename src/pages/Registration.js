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
import { useApolloClient } from "@apollo/react-hooks";


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

export default function SignUp(props) {
  const [email, setEmail]= React.useState("");
  const [username, setUsername]= React.useState("");
  const [password, setPassword]= React.useState("");

  const classes = useStyles();
  const client = useApolloClient();
  const {  history } = props;
 const  handleNext=(e)=>{
   
  client.writeData({ data: { username: username } })
  client.writeData({ data: { email: email } })
  client.writeData({ data: { password: password } })
        history.push("/registrationDetail")
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       <Header />
    
        {/* <form className={classes.form} noValidate > */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                autoFocus
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
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
          
        {/* </form> */}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}