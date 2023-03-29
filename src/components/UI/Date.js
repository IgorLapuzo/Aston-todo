import classes from './Date.module.css';

function Date(props) {
	const month = props.date.toLocaleString('en-US', {month: 'long'});
	const year = props.date.getFullYear();
	const day = props.date.toLocaleString('en-US', {day: '2-digit'});
	const time = props.date.toLocaleTimeString('en-GB');

	return (
		<div className={classes.date}>
			<div className={classes.month}>{month}</div>
			<div className={classes.year}>{year}</div>
			<div className={classes.day}>{day}</div>
			<div className={classes.time}>{time}</div>
		</div>
	)
}

export default Date;