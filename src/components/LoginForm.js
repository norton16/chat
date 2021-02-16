import {React, useState} from 'react'
import axios from 'axios';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Give user/pass to chatengine to retreive user messages
        //Log in if works, else try again if error
        const authObject = {
            'Project-ID': '81d1adb1-25aa-4441-8af7-dac3a558424b', 
            'User-Name': username, 
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        }   catch(error) {
            setError('Incorrect username or password.')
        }
        
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting!</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
