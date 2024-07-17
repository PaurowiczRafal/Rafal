import './Work.scss'
import WorkCardsDekstop from './WorkCardsDesktop'
import WorkCardsMobile from './WorkCardsMobile'

const Works = () => {
	return (
		<div
			id='Work'
			className='work section'>
			<div className='work-heading'>
				<div className=''>
					<div className='elipse-work'></div>
				</div>
				<div className=''>
					<p className='work-heading-main text-gradient'>My work</p>
				</div>
				<div className=''>
					<p className='work-heading-info'>Been there, done that. All thanks to Stack Overflow.</p>
				</div>
			</div>
			<div className=''>
				{window.innerWidth > 1024 ? <WorkCardsDekstop /> : <WorkCardsMobile />}
            </div>
		</div>
	)
}

export default Works
