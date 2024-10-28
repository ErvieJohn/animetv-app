import logo from './logo.svg';
import './App.css';

import axios from "axios";
import { useEffect } from 'react';



function App() {
  const url = "https://api.consumet.org/anime/9anime/demon?page=2";

  useEffect(()=>{
    // Using the example query "demon", and looking at the 2nd page of results.
    
    const fetchData = async () => {
        try {
            const data = await axios.get(url, { params: { page: 2 } });
            console.log(data);
            return data;
        } catch (err) {
            console.log(err.message);
        }
    };

    fetchData();
  
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
