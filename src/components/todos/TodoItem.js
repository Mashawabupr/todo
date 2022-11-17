import classes from "./TodoItem.module.css";
import { Link } from "react-router-dom";

const TodoItem = (props) => {
  console.log(props);
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

  let classDate =
    new Date() > new Date(props.date)
      ? `${classes.item} ${classes.expired}`
      : `${classes.item}`;
  console.log(classDate);
  return (
    <li className={classDate}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
        <p>{props.date}</p>
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
