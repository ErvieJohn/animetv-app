import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import './Loading.css';

function Loading() {
    const [loadingText, setLoadingText] = useState('Loading');

    useEffect(() => {
        // Update the loading text every second
        const interval = setInterval(() => {
            setLoadingText((prevText) => {
                if (prevText.length < 10){
                    var curText = prevText + '.';
                    return curText;
                }
                

                return 'Loading'; // Reset to "Loading." after 3 dots
            });
        }, 500);

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='loading-center'>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>{loadingText}</h1>
        </div>
    )
}

export default Loading