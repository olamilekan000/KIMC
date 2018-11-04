import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './Components/navbar';
import Footer from './Components/footer';
import Contact from './Components/contact';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Articles from './Components/Articles';
import Career from './Components/careers';

import Taxes from './Components/services/taxes';
import Accounting from './Components/services/Bookkepping';
import Audit from './Components/services/Audit';
import MgtConsulting from './Components/services/MgtCnslt';

import Login from './Components/Auth/Login';
import CreateArticle from './Components/Auth/CreateArticle';
import SingleArticle from './Components/Auth/SingleArticle';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Services} /> 
              <Route path="/Taxes" component={Taxes} />
              <Route path="/Accounting" component={Accounting} />
              <Route path="/signIn" component={Login} />
              <Route path="/Create" component={CreateArticle} />
              <Route path="/Articles" component={Articles} />
              <Route path="/Audit" component={Audit} />
              <Route path="/Career" component={Career} />  
              <Route path="/Consulting" component={MgtConsulting} />                       
              <Route exact path="/article/:id" component={SingleArticle} />
            </Switch>
          </main>
          <Footer />        
        </div>        
      </BrowserRouter>
    );
  }
}

export default App;
