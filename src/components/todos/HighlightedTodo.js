import classes from "./HighlightedTodo.module.css";

const HighlightedTodo = (props) => {
  return (
    <figure className={classes.quote}>
      <p className={classes.title}>{props.quote.author}</p>
      <p>{props.quote.text}</p>
      <figcaption>{props.quote.date}</figcaption>
    </figure>
  );
};

export default HighlightedTodo;
