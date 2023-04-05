import { Fragment } from "react";
import Button from "./Button";
import Date from "./Date";
import classes from './ModalView.module.css'

const ModalView = (props) => {

	const showStatus = () => {
		switch (props.status) {
			case 'active': return <p>Активная</p>
			case 'finished': return <p>Выполнено</p>
			case 'archives': return <p>В архиве</p>
		}
	}

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.closeActiveTask} />
      <div className={classes.modal}>
        <header className={classes.header}>
				{!props.editTitleMode &&
					<h3 onClick = {props.activateTitleEditMode}>{props.title}</h3>
				}	
				{props.editTitleMode &&
					<input 
						autoFocus = {true} 
						onChange = {props.onTitleChange} 
						onBlur = {props.deactivateEditMode} 
						value = {props.title} 
					/>
				}
        </header>
				<div className={classes.container}>
					<div>
						{
							props.description && <div className={classes.content}>
								{!props.editDescriptionMode &&
									<p onClick = {props.activateDescriptionEditMode}>{props.description}</p>
								}	
								{props.editDescriptionMode &&
									<input 
										autoFocus = {true} 
										onChange = {props.onDescriptionChange} 
										onBlur = {props.deactivateEditMode} 
										value = {props.description} 
									/>
								}
							</div>
						}
						<div className={classes.status}>
        	  	<div>{showStatus(props.status)}</div>
						</div>
        	</div>
					<Date date={props.date} />
				</div>
				<p className={classes.helper}>кликните на текст для изменения</p>
        <footer className={classes.actions}>
					{props.status === 'active'
						? <Button onClick={props.finishActiveTask}>Выполнено</Button>
						:	<Button onClick={props.finishActiveTask}>Не выполнено</Button>
					}
					{props.status === 'archives'
						? <Button onClick={props.archivesActiveTask}>Восстановить</Button>
						:	<Button onClick={props.archivesActiveTask}>В архив</Button>
					}
					<Button onClick={props.deleteActiveTask}>Удалить</Button>
					<Button onClick={props.closeActiveTask}>Назад</Button>
        </footer>
      </div>
    </Fragment>
  );
};

export default ModalView;