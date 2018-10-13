import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './Components/navbar';
import Footer from './Components/footer';
import Contact from './Components/contact';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services'

import Taxes from './Components/services/taxes'
import Bookkepping from './Components/services/Bookkepping'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Services} /> 
              <Route path="/Taxes" component={Taxes} />
              <Route path="/Bookkeeping" component={Bookkepping} />          
            </Switch>
          </main>
          <Footer />        
        </div>        
      </BrowserRouter>
    );
  }
}

export default App;
