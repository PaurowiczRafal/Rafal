import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import bgStars from './img/background/bg-stars.svg'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)


function AppWithBackground() {
  useEffect(() => {
    const pattern = document.querySelector('.bgStars') as HTMLElement;
    const handleScroll = () => {
      const scrollFactor = 20;
      pattern.style.backgroundPosition = `0 ${window.scrollY / scrollFactor}px`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <React.StrictMode>
      <App />
      <div className="bgStars"></div>
    </React.StrictMode>
  );
}

root.render(<AppWithBackground />);

// root.render(
// 	<React.StrictMode>
// 		<App />
//     <div className="bgStars"></div>
// 	</React.StrictMode>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
