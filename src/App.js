
import React from 'react';
import Main from './pages/Main';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <div className='absolute inset-x-0 bottom-0 '>
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
