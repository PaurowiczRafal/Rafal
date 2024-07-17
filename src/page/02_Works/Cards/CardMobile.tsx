import './Cards.scss'

interface CardProps {
	className: string
}

const CardMobile = ({ className }: CardProps) => {
	return <div className={`card ${className}`}></div>
}

export default CardMobile
