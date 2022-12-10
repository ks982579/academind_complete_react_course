import React, {useState, useEffect} from 'react';

const useCounter = (countForwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (countForwards) {
                setCounter((prevState) => prevState + 1);
            } else {
                setCounter((prevState) => prevState - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countForwards]);

    return counter;
};

export default useCounter