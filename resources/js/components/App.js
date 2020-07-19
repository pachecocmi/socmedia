import React from 'react';
import ReactDOM from 'react-dom';
import Header from './comps/Header/Header';
import Footer from './comps/Footer/Footer';

export default function App() {
    return (
        <div className="block w-screen h-screen bg-orange-100">
            <Header />



            <Footer />
        </div>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
