import React, { useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
    const [showPara, setShowPara] = useState(false);

    const toggleParagraphHandler = (evnt) => {
        setShowPara((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showPara}/>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
