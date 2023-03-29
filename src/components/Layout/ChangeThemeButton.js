import classes from './ChangeThemeButton.module.css';

const ChangeThemeButton = props => {
	return <button className={classes.button}>
		<span>Change to</span>
		<span className={classes['next-theme']}>Dark</span>
	</button>
}

export default ChangeThemeButton