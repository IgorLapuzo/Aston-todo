import { Fragment } from "react";
import Button from "./Button";
import Date from "./Date";
import classes from './ModalView.module.css'

const ModalView = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h3>{props.title}</h3>
        </header>
				<div className={classes.container}>
					<div>
						<div className={classes.content}>
          		<p>{props.description}</p>
        		</div>
						<div className={classes.content}>
        	  	<p>{props.status}</p>
						</div>
        	</div>
					<Date date={props.date}/>
				</div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Выполнено</Button>
					<Button onClick={props.onConfirm}>В архив</Button>
					<Button onClick={props.onConfirm}>Удалить</Button>
					<Button onClick={props.onConfirm}>Назад</Button>
        </footer>
      </div>
    </Fragment>
  );
};

export default ModalView;