import { useState } from 'react'
import './AboutCards.scss'

import img1 from '../../../img/about/sup1.jpeg'
import img2 from '../../../img/about/sup2.jpeg'
import img3 from '../../../img/about/bmw.jpeg'
import img4 from '../../../img/about/bmw2.jpeg'

const About_5 = () => {
	const [hoveredIcon, setHoveredIcon] = useState<boolean>(false)

	// Event handlers that accept an icon identifier
	const handleMouseEnter = () => setHoveredIcon(true)
	const handleMouseLeave = () => setHoveredIcon(false)

	return (
		<div
			className='aboutCard aboutCard-5'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div className='aboutCard-5-heading'>
				<p>I’m a big fan of Lego bricks and SUPs, too</p>
			</div>
			<div className='aboutCard-5-images'>
				<img
					src={img1}
					alt=''
					className={`aboutCard-5-img aboutCard-5-img-1 ${hoveredIcon ? 'aboutCard-5-img-hover' : ''}`}
				/>
				<img
					src={img2}
					alt=''
					className={`aboutCard-5-img aboutCard-5-img-2 ${hoveredIcon ? 'aboutCard-5-img-hover' : ''}`}
				/>
				<img
					src={img3}
					alt=''
					className={`aboutCard-5-img aboutCard-5-img-3 ${hoveredIcon ? 'aboutCard-5-img-hover' : ''}`}
				/>
				<img
					src={img4}
					alt=''
					className={`aboutCard-5-img aboutCard-5-img-4 ${hoveredIcon ? 'aboutCard-5-img-hover' : ''}`}
				/>
			</div>
		</div>
	)
}

export default About_5
