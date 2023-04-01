import { Fragment } from 'react';
import ButtonRound from '../UI/ButtonRound';
import Button from '../UI/Button';
import light from '../../assets/light.png';
import tableLight from '../../assets/tableLight.png';
import classes from './Header.module.css';

const Header = props => {
	return <Fragment>
		<header className={classes.header}>
			<Button>Задач на сегодня: 3</Button>
			<ButtonRound className={classes.button}>
				<div className={classes.wrapper}>
					<img src={tableLight} alt='change to table view'/>
				</div>
			</ButtonRound>
			<ButtonRound className={classes.button}>
				<div className={classes.wrapper}>
					<img src={light} alt='change to light theme'/>
				</div>
			</ButtonRound>
		</header>
		<h1 className={classes.name}>Just do it</h1>
	</Fragment>
}

export default Header;