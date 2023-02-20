import React from 'react'
import { Blog, Footer, Possibility, Header, Features, WhatGPT4} from './containers';
import { CTA, Navbar, Brand} from './components';
import './App.css';
import './index.css';



const App = () => {
    return (
    <div className='App'>
        <div className='gradient__bg' >
            <Navbar /> 
            <Header />
        </div>
        <Brand />
        <WhatGPT4 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />

    </div>
)
}

export default App
