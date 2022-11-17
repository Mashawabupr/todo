import classes from "./HighlightedTodo.module.css";

const HighlightedTodo = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.quote.text}</p>
      <figcaption>{props.quote.author}</figcaption>
    </figure>
  );
};

export default HighlightedTodo;
