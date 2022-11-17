import { useParams, Route, Switch, Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import NoTasksFound from "../components/todos/NoTasksFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighlightedTodo from "../components/todos/HighlightedTodo";
import { getSingleQuote } from "../lib/api";
let DetailQuotes = () => {
  let { sendRequest, status, data, error } = useHttp(getSingleQuote, true);
  let params = useParams();
  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if ((status === "completed" && !data) || data.length === 0) {
    return <NoTasksFound />;
  } else {
    return (
      <div>
        <HighlightedTodo quote={data} />
        <Switch>
          <Route path={`/AllToDos/${data.id}/`} exact>
            <div className="centered">
              <Link to={`/AllToDos/${data.id}/comments`} className="btn--flat ">
                Load Comments
              </Link>
            </div>
          </Route>

          <Route path={`/AllToDos/${data.id}/comments`}></Route>
        </Switch>
      </div>
    );
  }
};
export default DetailQuotes;
