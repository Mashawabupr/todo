import { Fragment } from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  console.log(props.quotes);
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <TodoItem
            key={quote.id}
            id={quote.id}
            date={quote.date}
            author={quote.author}
            text={quote.text}
            onFetch={props.onFetch}
            file={props.file}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
