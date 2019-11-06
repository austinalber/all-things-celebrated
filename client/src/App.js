import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn/SignIn"; 
import SignUp from "./pages/SignUp/SignUp";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"; 
import TaskBar from "./pages/TaskBar"; 
import Memento from "./pages/SignUp/Memento"; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user-page" component={UserPage} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login"  component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/task" component={TaskBar} />
          <Route exact path="/memento" component={Memento} />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// /Users/TinX/Desktop/projects/korgi-project/korgi/src/components/SignInSide/SignInSide.js
