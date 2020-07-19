import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './comps/Header/Header';
import Footer from './comps/Footer/Footer';
import Articles from './comps/Article/Articles';

export default function App() {
    
    return (
        <div className="block w-screen h-screen bg-gray-100">
            <BrowserRouter>
                <Header />
                
                <Switch>
                    <Route exact path="/">
                        <Articles />
                    </Route>
                    <Route path="/login">
                        something here login
                    </Route>
                    <Route path="/register">
                        something here register
                    </Route>
                    <Route exact path="/posts">
                        <Articles />
                    </Route>
                    <Route exact path="/tag/:tag">
                        <Articles />
                    </Route>
                    <Route path="/posts/:id">
                        article here
                    </Route>
                </Switch>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
