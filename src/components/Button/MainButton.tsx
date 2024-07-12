import React from 'react'

import './MainButton.scss'

// Define the props interface to type the expected props
interface MainButtonProps {
	text: string // Adding a text prop
}

const MainButton = ({ text }: MainButtonProps) => {
	return (
		<div className='mainBtn-border'>
			<div className='mainBtn-bg'>
				<div className='mainBtn'>
					<p className='mainBtn-text'>{text}</p>
				</div>
			</div>
		</div>
	) // Display the text prop
}

export default MainButton
