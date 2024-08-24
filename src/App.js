import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    useEffect(() => {
        axios.get('/api/data/')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name: e.target.name.value };
        axios.post('/api/submit/', data)
            .then(response => setSubmittedData(response.data))
            .catch(error => console.error('Error submitting data:', error));
    };

    return (
        <div>
            <h1>{message}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" />
                <button type="submit">Submit</button>
            </form>
            {submittedData && <p>Submitted: {JSON.stringify(submittedData)}</p>}
        </div>
    );
}

export default App;

