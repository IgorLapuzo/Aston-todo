import light from '../../assets/light.png';
import classes from './ChangeThemeButton.module.css';

const ChangeThemeButton = props => {
	return <button className={classes.button}>
		<div className={classes.wrapper}>
			<img src={light} alt='change to light theme'/>
		</div>
	</button>
};

export default ChangeThemeButton