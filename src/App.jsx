import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div>
      <NavBar/>
      <Body/>
      <Footer/>
      <Main/>
    </div>
  );
}

export default App;
