import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import WebDev from './components/WebDev/Webdev';
import Frontend from './components/Frontend/Frontend';
import Backend from './components/Backend/Backend';
import Interview from './components/Interview/Interview';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
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