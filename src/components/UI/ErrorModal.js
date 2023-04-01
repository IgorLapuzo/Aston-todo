import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from './ErrorModal.module.css'

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<header className={classes.header}>
				<h3>{props.errorTitle}</h3>
			</header>
			<div className={classes.content}>
				<p>{props.errorMessage}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirm}>Okay</Button>
			</footer>
		</div>
	);
};

const ErrorModal = (props) => {
	return(
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />, 
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay errorTitle={props.errorTitle}
					errorMessage={props.errorMessage}
					onConfirm={props.onConfirm} />, 
				document.getElementById('overlay-root')
			)}
		</Fragment>
	)
}

export default ErrorModal;