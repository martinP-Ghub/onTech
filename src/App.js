import React from 'react';
import './App.css';
import Header from './Components/Base/Header';
import Footer from './Components/Base/Footer';
import Main from './Components/Main/Main';

const App = () => {
  return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
  );
};

export default App;
