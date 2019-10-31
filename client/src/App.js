import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import SignInSide from "./pages/SignInSide"; 
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"; 
import TaskBar from "./components/TaskBar"; 


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/userForm" component={UserForm} /> */}
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login"  component={SignInSide} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/task" component={TaskBar} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// /Users/TinX/Desktop/projects/korgi-project/korgi/src/components/SignInSide/SignInSide.js