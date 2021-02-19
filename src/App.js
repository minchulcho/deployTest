import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Resume from './components/pages/Resume/Resume';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import Print_ from './components/pages/ComponentToPrint/PrintExample'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Resume' component={Resume} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/printExample' component={Print_} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
