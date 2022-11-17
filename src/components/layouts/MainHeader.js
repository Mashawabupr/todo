import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
let MainHeader = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>ToDo</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/AllToDos" activeClassName={classes.active}>
              All Todos
            </NavLink>
          </li>
          <li>
            <NavLink to="/NewToDo" activeClassName={classes.active}>
              Add a Todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainHeader;
