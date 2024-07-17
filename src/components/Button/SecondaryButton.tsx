import './SecondaryButton.scss'

import svgLink from '../../icon/icon/link-external.svg'

interface SecondaryButtonProps {
	text: string // Adding a text prop
}

const SecondaryButton = ({ text }: SecondaryButtonProps) => {
	return (
		<div className='secondaryBtn-border'>
			<div className='secondaryBtn-bg'>
				<div className='secondaryBtn'>
					<p className='secondaryBtn-text'>{text} </p>
					<img
						src={svgLink}
						alt='Link icon'
					/>
				</div>
			</div>
		</div>
	) // Display the text prop
}

export default SecondaryButton
