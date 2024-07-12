import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Header from './page/01_Header/Header'


function App() {
  return (
    <div className="">
     <Navbar />
			<Header />
			<div className='h-[1000px]'></div>
    </div>
  );
}

export default App;
