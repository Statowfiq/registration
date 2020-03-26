import React from 'react';
import Registration from './pages/Registration';
import RegistrationDetail from './pages/RegistrationDetail';
import Listing from './pages/Listing';
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';


function App() {

  const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers: {  },
});
  

 
  return (
  
  <ApolloProvider client={client}>
      <Router> 
       <Switch>
          <Route exact path="/"   >
            <Redirect to="register" />
           </Route>
          <Route exact path="/register" component={Registration} />
          <Route exact path="/registrationDetail" component={RegistrationDetail} />
          <Route exact path="/listing" component={Listing} />
          <Route exact path="/dashboard" component={Dashboard} />
           
        </Switch>
    </Router>
    </ApolloProvider>
  
  );
}

export default App;
