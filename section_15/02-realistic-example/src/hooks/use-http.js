import React, { useState, useEffect } from 'react';

const useHttp = (requestConfig, applyData) => {
    /** Params:
     *      requestConfig - object to configure fetch API
     *          url - URL to send request to
     *          method - GET or POST
     *          headers - 
     *          body - JS object
     */
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (taskText) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method,
                    headers: requestConfig.headers,
                    body: JSON.stringify(requestConfig.body)
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;