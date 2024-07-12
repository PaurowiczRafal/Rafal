import React, { useState, useEffect } from 'react'

import './Header.scss'
import ProfilePic from '../../img/profilePic/profilePic.jpeg'
import Mainbutton from '../../components/Button/MainButton'

const Header = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	// Calculate the movement of the ellipse-light. It moves down by 50px slowly.
	const ellipseLightStyle = {
		transform: `translateY(${Math.min(scrollPosition /2, 150)}px)`,
	}

	return (
		<div
			id='Home'
			className='header section overflow-hidden'>
			<div className=''>
				<div className='header-pic'></div>
			</div>
			<div className=''>
				<p className='header-welcome text-gradient'>Hey, my name is Rafał</p>
			</div>
			<div className=''>
				<p className='header-info'>
					Creative dev and 1/2 of Anytime. I’m having a party on saturday and we gonna drink tequila till death 🇲🇽
				</p>
			</div>
			<div className='mt-16'>
				<Mainbutton text='Press me' />
			</div>
			<div className='ellipse'></div>
			<div
				className='ellipse-light'
				style={ellipseLightStyle}></div>
		</div>
	)
}

export default Header
