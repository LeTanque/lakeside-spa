import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav_Footer/Nav.jsx';
import Home from './Home/Home.jsx';
import Menu from './Menu.jsx';



class App extends Component {



  render() {

    return (
      <>
        <BrowserRouter>
          <section className="App">
            <Nav />

            <Route
              exact 
              path='/'
              render={() => (
                <Home />
              )}
            />

            <Route
              path='/menu'
              render={() => (
                <Menu />
              )}
            />



          </section>
        </BrowserRouter>
      </>
    );
  }
}


export default App;

