import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SplashPage from './pages/splashPage';



function App() {
  const [userToken, setUserToken] = useState('')
  return (
    <SplashPage/>
  );
}

export default App;
