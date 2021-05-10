import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './pages/Home';
import About from './pages/About/About';
import Hotels from "./pages/Hotels/Hotels";
import SingleRoom from "./pages/SingleRoom/SingleRoom";
import BookRoom from "./pages/BookRoom/BookRoom";
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import './css/app.scss'

function App() {

  return (
    <>
       <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" exact component={Hotels} />
          <Route path="/hotels/:id" exact component={SingleRoom} />
          <Route path="/hotels/room/:id" exact component={BookRoom} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
    </>

  );
}

export default App;
