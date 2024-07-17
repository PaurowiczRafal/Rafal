import './AboutCards/AboutCards.scss'

import About_1 from "./AboutCards/About_1"
import About_2 from "./AboutCards/About_2"
import About_3 from "./AboutCards/About_3"
import About_4 from "./AboutCards/About_4"
import About_5 from "./AboutCards/About_5"

const AboutCards = () => {
	return (
		<div className='about-cards'>
			<div className='about-cards-row'>
				<About_1 />
				<About_2 />
				<About_3 />
			</div>
			<div className='about-cards-row'>
				<About_4 />
				<About_5 />
			</div>
		</div>
	)
}

export default AboutCards
