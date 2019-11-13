// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// Pages
import Discover from "./pages/Discover";
import Home from "./pages/Home/Home";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn/SignIn"; 
import SignUp from "./pages/SignUp/SignUp";
import UserPage from "./pages/UserPage/UserPage";
import Memento from "./pages/Memento"; 
import Dashboard from "./pages/Dashboard/Dashboard";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"; 
import TaskBar from "./components/TaskBar"; 
import TaskCard from "./components/TaskCard"; 
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const App = () => {

  return (
    <Provider store={store}>
    <Router>
      <div className="app">
        <Navbar/>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/login"  component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Switch>
            <PrivateRoute exact path="/search" component={Search} />
            <PrivateRoute exact path="/user-page" component={UserPage} />
            <PrivateRoute exact path="/task" component={TaskBar} />
            <PrivateRoute exact path="/memento" component={Memento} />
            <PrivateRoute exact path="/taskcard" component={TaskCard} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
