import classes from "./TodoItem.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const TodoItem = (props) => {
  let [inputCheck, setCheck] = useState(false);
  let handleDelete = () => {
    fetch(
      `https://todo-69230-default-rtdb.firebaseio.com/todos/${props.id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      props.onFetch(Math.random());
    });
  };
  useEffect(() => {
    setCheck(inputCheck);
  }, [inputCheck]);
  let hanleCheckBox = () => {
    setCheck(!inputCheck);
  };
  let date = new Date() > new Date(props.date);
  let classDateExpired = date
    ? `${classes.item} ${classes.expired}`
    : `${classes.item}`;
  let taskIsDone = inputCheck
    ? `${classes.item} ${classes.taskDone}`
    : `${classes.item}`;
  return (
    <li className={`${classDateExpired} ${taskIsDone}`}>
      {!date && (
        <input
          type="checkbox"
          className={classes.checkBox}
          onClick={hanleCheckBox}
          value={inputCheck}
        />
      )}
      <figure>
        <figcaption>{props.author}</figcaption>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <p>
          {date && <span>expired-</span>}
         
          {props.date}
        </p>
        <div>{props.file}</div>
      </figure>
      <Link className="btn" to={`/AllToDos/${props.id}`}>
        View
      </Link>
      <div className="btn" onClick={handleDelete}>
        Delete
      </div>
    </li>
  );
};

export default TodoItem;
