import React from 'react';
//  { useState } from 'react';
// import title from './components/title';
// import guild from './components/guild';
import "./App.css";
import Calculator from './components/calculator';


const App = () => {
    return (
    <><header id="header">
        <h1>Siege Pillage Stone Reward Breakdown</h1>
        <p>
            This site is intended to allow you to enter the collected taxes on your
            server and breakdown the ammount each pillage point will hold/reward at
            each interval.
        </p>
    </header>
    <main>
            <Calculator />
        </main>
        <footer id="footer">
            <p>
                This page was created by Pravus. It is not affiliated with the official
                game in any way.
            </p>
        </footer>
        </>
    );    
}

export default App;