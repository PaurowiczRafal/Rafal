import './About.scss'
import AboutCards from './AboutCards'

const About = () => {
	return (
		<div id='About' className='about section'>
			<div className='about-heading'>
				<div className=''>
					<div className='elipse-heading'></div>
				</div>
				<div className=''>
					<p className='about-heading-main text-gradient'>About me</p>
				</div>
				<div className=''>
					<p className='about-heading-info'>All the things that makes you wanna hire me. Simple as it.</p>
				</div>
			</div>
			<div className=''>
                <AboutCards />
            </div>
		</div>
	)
}

export default About
