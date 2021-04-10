import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import Hotels from "./pages/Hotels";
import SingleRoom from "./pages/SingleRoom";
import BookRoom from "./pages/BookRoom";
import ScrollToTop from './components/ScrollToTop';
import './css/app.scss';




function App() {

  return (
    <Router basename={process.env.PUBLIC_URL} >
       <ScrollToTop />
        <Header />

        <Switch>
    
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/hotels" exact component={Hotels} />
          <Route path="/hotels/:id" exact component={SingleRoom} />
          <Route path="/hotels/room/:id" exact component={BookRoom} />

        </Switch>

     
    </Router>

  );
}



export default App;
