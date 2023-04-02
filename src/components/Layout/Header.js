import { Fragment, Component } from 'react';
import ButtonRound from '../UI/ButtonRound';
import Button from '../UI/Button';
import light from '../../assets/light.png';
import tableLight from '../../assets/tableLight.png';
import classes from './Header.module.css';
import { ThemeContext } from '../../context/ThemeContext';


class Header extends Component {

	static contextType = ThemeContext;

	

	onClickHandler = () => {
		
		this.context.changeThemeHandler();
	}

	render() {
		return (
			<Fragment>
				<header className={classes.header}>
					<Button>Задач на сегодня: 3</Button>
					<ButtonRound className={classes.button}>
						<div className={classes.wrapper}>
							<img src={tableLight} alt='change to table view'/>
						</div>
					</ButtonRound>
					<ButtonRound className={classes.button} onClick={this.onClickHandler}>
						<div className={classes.wrapper}>
							<img src={light} alt='change to light theme'/>
						</div>
					</ButtonRound>
				</header>
				<h3>{this.context.value}</h3>
				<h1 className={classes.name}>Just do it</h1>
			</Fragment>
		)
	}
	
}

export default Header;