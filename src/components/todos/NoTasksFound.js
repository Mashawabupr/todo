import classes from "./NoTasksFound.module.css";
import { Link } from "react-router-dom";
const NoTasksFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No Tasks found!</p>
      <Link className="btn" to="/NewToDo">
        Add a Task
      </Link>
    </div>
  );
};

export default NoTasksFound;
