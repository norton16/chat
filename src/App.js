import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    //Check if user is logged in
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="81d1adb1-25aa-4441-8af7-dac3a558424b"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            //Customizing chat feed area
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App