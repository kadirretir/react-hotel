import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import Hotels from "./pages/Hotels";
import SingleRoom from "./pages/SingleRoom";
import './css/app.scss';



function App() {

  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Header />


      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/hotels/:id" component={SingleRoom} />

      </Switch>


    </Router>

  );
}



export default App;
