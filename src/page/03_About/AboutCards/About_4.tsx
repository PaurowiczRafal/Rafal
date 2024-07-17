import './AboutCards.scss'

import Anytime from '../../../icon/logos/anytime.svg'

const About_4 = () => {
	return (
		<div className='aboutCard aboutCard-4'>
			<div className='aboutCard-4-header'>
				<div className='aboutCard-4-heading'>
					<p className=''>Co-creating Anytime Studio. </p>
				</div>
				<div className='aboutCard-4-text'>
					<p className=''>Digital agency creating landings that works!</p>
				</div>
			</div>
			<div className='aboutCard-4-anytime'>
				<img
					src={Anytime}
					alt=''
				/>
			</div>
		</div>
	)
}

export default About_4
