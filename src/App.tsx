import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Header from './page/01_Header/Header'
import Works from './page/02_Works/Work'
import About from './page/03_About/About'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
	return (
		<div className=''>
			<Navbar />
			<Header />
      <Works />
      <About />
			<div className='h-[1000px]'></div>
		</div>
	)
}

export default App
