import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


// Routes
import Products from './views/Products';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Signup from './views/Signup';





function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/products" exact component={Products} />
            <Route path="/" exact component={Home}/>
            <Route path="*" exact component={NotFound}/>
        </Switch>
      </BrowserRouter>

  );
}


export default App;
