import './Card.css'

function Card(props) {
	const funnelClasses = 'card ' + props.className;
	return <div className={funnelClasses}>{props.children}</div>
}

export default Card;