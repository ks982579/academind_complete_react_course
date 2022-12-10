import React, {useState, useEffect} from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevState) => prevState + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
};

export default useCounter