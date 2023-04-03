import { Fragment, Component } from 'react';
import ButtonRound from '../UI/ButtonRound';
import light from '../../assets/light.png';
import dark from '../../assets/dark.png';
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
						<div className={classes.control}>
							<input 
								placeholder='Поиск...'
								type='text'
							/>
						</div>
					<ButtonRound className={classes.button} onClick={this.onClickHandler}>
						<div className={classes.wrapper}>
							<img src={this.context.value === 'light' ? dark : light} alt='change to light theme'/>
						</div>
					</ButtonRound>
				</header>
				<h1 className={classes.name}>Just do it</h1>
			</Fragment>
		)
	}
	
}

export default Header;