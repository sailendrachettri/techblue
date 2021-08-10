import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import { GlobalStyle } from './GlobalStyled';

function App() {
    return (
        <>
        <GlobalStyle /> {/* This tag for global style i.e removing default margin padding */}
        <Nav />
            <Switch>
                <Route path ="/" component={Home}/>
            </Switch> 
        </>
    );
}

export default App;