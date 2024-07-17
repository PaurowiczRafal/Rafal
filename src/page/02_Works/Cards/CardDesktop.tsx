import './Cards.scss'

interface CardProps {
	className: string
}

const CardDesktop = ({ className }: CardProps) => {
	return <div className={`card ${className}`}></div>
}

export default CardDesktop
