import { Fragment } from 'react';
import ChangeThemeButton from './ChangeThemeButton.js';
import classes from './Header.module.css';

const Header = props => {
	return <Fragment>
		<header className={classes.header}>
			<div className={classes.indicator}>
				<span className={classes.text}>Задач на сегодня: 3</span>
				<span className={classes.text}>Задач на неделю: 10</span>
			</div>
			<ChangeThemeButton />
		</header>
		<h1 className={classes.name}>Just do it</h1>
	</Fragment>
}

export default Header;