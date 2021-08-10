import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Interview from './components/Posts/Interview';
import WebDev from './components/Posts/Webdev';
import Backend from './components/Posts/Backend';
import Frontend from './components/Posts/Frontend';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Nav';
import { GlobalStyle } from './GlobalStyled';

function App() {
    return (
        <>
        <GlobalStyle /> {/* This tag for global style i.e removing default margin padding */}
        <Nav />
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route exact path="/webdev" component={WebDev}/>
                <Route exact path="/interview" component={Interview}/>
                <Route exact path="/frontend" component={Frontend}/>
                <Route exact path="/backend" component={Backend}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch> 
            <Footer />
        </>
    );
}

export default App;