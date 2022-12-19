import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.js'; // adding .js to "home"
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";

import Signup from './pages/Signup';
import Login from './pages/login';
import SingleQuestion from './pages/SingleQuestion';
import Profile from './pages/Profile';
// import Map from "./components/Map/Map";

// function App() {
//   const [currentPage, setCurrentPage] = useState("Login");
//   console.log(11, currentPage);


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
  cache: new InMemoryCache()
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" // added abc, testing homepage route
                element={<Home />}
              />
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/me"
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username"
                element={<Profile />}
              />
              <Route 
                path="/questions/:questionId"
                element={<SingleQuestion />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
        {/* <div>
          <Map />
        </div>
        <Footer />
      </div> */}
    {/* </Router> */}

      </Router>
    </ApolloProvider>
  );
}

export default App;


