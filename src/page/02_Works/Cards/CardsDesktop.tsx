import React, { useEffect, useRef } from 'react'

import CardDesktop from './CardDesktop'
import './Cards.scss'

const CardsDesktop = () => {
	const cardsRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			if (cardsRef.current) {
				const { top } = (cardsRef.current as HTMLElement).getBoundingClientRect()
				const cardsElement = cardsRef.current as HTMLElement
				if (top >= 0 && top <= window.innerHeight) {
					// Przesuń karty w prawo w zależności od scrolla
					const scrollAmount = window.scrollY - cardsElement.offsetTop + window.innerHeight / 2
					cardsElement.style.transform = `translateX(${scrollAmount}px)`
				}
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div
			className='cards'
			ref={cardsRef}>
			<CardDesktop className='card-3' />
			<CardDesktop className='card-2' />
			<CardDesktop className='card-1' />
		</div>
	)
}

export default CardsDesktop
