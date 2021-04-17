import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";

//components
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import Home from './assets/components/body/Home';
import Catalog from './assets/components/body/Catalog';
import Gallery from './assets/components/body/Gallery';
import About from './assets/components/body/About';
import Contact from './assets/components/body/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <SimpleReactLightbox>
        <Route exact path='/' component={Home}/>
        <Route exact path='/catalog' component={Catalog}/>
        <Route exact path='/gallery' component={Gallery}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        </SimpleReactLightbox>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
