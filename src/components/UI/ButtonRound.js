import classes from './ButtonRound.module.css';

const ButtonRound = props => {
	return (
		<button 
			className={classes.button}
			type={props.type || 'button'}
			onClick={props.onClick}
		>{props.children}</button>
	);
};

export default ButtonRound