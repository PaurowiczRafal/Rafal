import React from 'react'

import { Link } from 'react-scroll'
import { useState } from 'react'

import './Navbar.scss'

const Navbar = () => {
	// const [activeLink, setActiveLink] = useState('Home')

	// const handleClick = (linkName: string) => {
	// 	setActiveLink(linkName)
	// }

	return (
		<nav className='nav'>
			<ul className='nav-menu'>
				<li className=''>
					<Link
						to='Home'
						className={`nav-link`}>
						Home
					</Link>
				</li>
				<li className=''>
					<Link
						to='Work'
						className={`nav-link`}>
						Work
					</Link>
				</li>
				<li className=''>
					<Link
						to='About'
						className={`nav-link`}>
						About
					</Link>
				</li>
				<li className=''>
					<Link
						to='Contact'
						className={`nav-link`}>
						Contact
					</Link>
				</li>
				<li className='nav-link flex'>
					<svg
						width='16'
						height='16'
						viewBox='4 -2 22 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM19.931 11H17.167C17.0436 8.81124 16.4313 6.67797 15.375 4.757C16.5992 5.32905 17.6589 6.2014 18.4554 7.29291C19.252 8.38442 19.7596 9.65965 19.931 11ZM12.53 4.027C13.565 5.391 14.957 7.807 15.157 11H9.03C9.169 8.404 10.024 5.972 11.481 4.026C11.653 4.016 11.825 4 12 4C12.179 4 12.354 4.016 12.53 4.027ZM8.688 4.727C7.704 6.618 7.136 8.762 7.03 11H4.069C4.24177 9.64784 4.75663 8.3621 5.56489 7.26442C6.37315 6.16673 7.44808 5.29339 8.688 4.727ZM4.069 13H7.043C7.179 15.379 7.708 17.478 8.599 19.23C7.38119 18.6559 6.32773 17.7842 5.53596 16.6953C4.74419 15.6064 4.23966 14.3355 4.069 13ZM11.45 19.973C10.049 18.275 9.222 15.896 9.041 13H15.154C14.946 15.773 14.037 18.196 12.551 19.972C12.369 19.984 12.187 20 12 20C11.814 20 11.633 19.984 11.45 19.973ZM15.461 19.201C16.416 17.407 16.999 15.3 17.152 13H19.93C19.7612 14.3243 19.264 15.5853 18.4834 16.6684C17.7029 17.7514 16.6639 18.622 15.461 19.201Z'
							fill='#E6E6E6'
						/>
					</svg>
					<p>PL</p>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
