import './Work.scss'
import SecondaryButton from '../../components/Button/SecondaryButton'
import CardsDesktop from './Cards/CardsDesktop'

const WorkCardsDekstop = () => {
	return (
		<div className='workCards '>
			<div className='workCards-info'>
				<div className=''>
					<p className='workCards-title'>This item is tltle. <br/> We will see what will time bring</p>
				</div>
				<div className=''>
					<p className='workCards-text'>
						And this item is a description. This will be significantly longer than the heading part. Probably some
						description of projects/ free time activities. This is yet to be decided with a stakeholder.
					</p>
				</div>
				<div className='flex mt-8'>
					<SecondaryButton text='Visit live site' />
				</div>
			</div>
			<div className=''>
                <CardsDesktop />
            </div>
		</div>
	)
}

export default WorkCardsDekstop
