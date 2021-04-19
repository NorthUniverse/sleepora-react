import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";

//components
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import Home from './assets/components/body/Home';
import Catalog from './assets/components/body/Catalog';
import Paradise from './assets/components/body/products/Paradise';
import Stream from './assets/components/body/products/Stream';
import Sunrise from './assets/components/body/products/Sunrise';
import Revital from './assets/components/body/products/Revital';
import Miracle from './assets/components/body/products/Miracle';
import Wave from './assets/components/body/products/Wave';
import SnowTop from './assets/components/body/products/SnowTop';
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
        <Route exact path='/catalog/paradise' component={Paradise}/>
        <Route exact path='/catalog/stream' component={Stream}/>
        <Route exact path='/catalog/sunrise' component={Sunrise}/>
        <Route exact path='/catalog/revital' component={Revital}/>
        <Route exact path='/catalog/miracle' component={Miracle}/>
        <Route exact path='/catalog/wave' component={Wave}/>
        <Route exact path='/catalog/snowTop' component={SnowTop}/>
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
