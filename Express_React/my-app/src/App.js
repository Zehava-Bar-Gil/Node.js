import react from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


function App() {

    const [email, setEmail] = react.useState('');

    react.useEffect(() => {
        axios.get('http://localhost:8000/').then((req) => {
            console.log(req);
            setEmail(req.data.success.email)
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                    wellcome {email}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

