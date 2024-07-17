import Saio from '../../../icon/logos/saio-logo.svg'
import SaioFull from '../../../icon/logos/saio-full-logo.png'

import './AboutCards.scss'

const About_1 = () => {
	return (
		<div className='aboutCard aboutCard-1'>
			<div className='aboutCard-1-heading'>
				<img
					src={Saio}
					alt='Logo saio'
					className='mb-3'
				/>
				<p className=''>I’m Process Automation Developer @ SAIO</p>
			</div>
			<div className=''>
				<p className='aboutCard-1-text'>
					My day to day job is to provide co-workers best possible automatization tools. But I mostly play on
					PlayStation
				</p>
			</div>
		</div>
	)
}

export default About_1
