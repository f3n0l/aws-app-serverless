import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FirstComponent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('https://xxxxxxxxxx.execute-api.region.amazonaws.com/api/hello')
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to My App</h1>
            <p>{message}</p>
        </div>
    );
}




export default FirstComponent