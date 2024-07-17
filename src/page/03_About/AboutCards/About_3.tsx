import './AboutCards.scss'

import GithubIcon from '../../../icon/stack-icons/github.svg'
import { useState } from 'react'

const About_3 = () => {
	const [hoveredIcon, setHoveredIcon] = useState<boolean>(false)

	// Event handlers that accept an icon identifier
	const handleMouseEnter = () => setHoveredIcon(true)
	const handleMouseLeave = () => setHoveredIcon(false)
	return (
		<div
			className='aboutCard aboutCard-3'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div className=''>
				<p className='aboutCard-3-heading'>Hop on my Github</p>
			</div>
			<div className=''>
				<div className={`gitCircle ${hoveredIcon ? 'gitCircle-4' : ''}`}>
					<div className={`gitCircle ${hoveredIcon ? 'gitCircle-3' : ''}`}>
						<div className={`gitCircle ${hoveredIcon ? 'gitCircle-2' : ''}`}>
							<div className={`gitCircle ${hoveredIcon ? 'gitCircle-1' : ''}`}>
								<div className='aboutCard-3-icon test'>
									<img
										src={GithubIcon}
										alt='GithubIcon'
										className=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=''>
				<p className='aboutCard-3-text'>Check out what’s cookin</p>
			</div>
		</div>
	)
}

export default About_3
