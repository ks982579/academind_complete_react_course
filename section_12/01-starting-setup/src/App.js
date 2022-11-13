import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
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

    const [listTitle, setListTitle] = useState("My List");

    const changeTitleHandler = useCallback(() => {
        setListTitle("New Title!");
    }, []);

    const theList = useMemo(() => [5, 3, 1, 10, 9], [])

    return (
        <div className="app">
            <div>
            <DemoOutput show={showPara}/>
            <Button onClick={allowToggleHandler}>Allow Toggle</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
            </div>
            <div>
                <DemoList title={listTitle} items={theList} />
                <Button onClick={changeTitleHandler}>Change list title</Button>
            </div>
        </div>
    );
}

export default App;
