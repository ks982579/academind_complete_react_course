import React, { useState, useCallback } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
    const [showPara, setShowPara] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false)

    const toggleParagraphHandler = useCallback((evnt) => {
        if(allowToggle){
            setShowPara((prevState) => {
                return !prevState;
            });
        }
    },[allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showPara}/>
            <Button onClick={allowToggleHandler}>Allow Toggle</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
