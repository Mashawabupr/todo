import TodoList from "../components/todos/TodoList";
import useHttp from "../hooks/use-http";
import NoTasksFound from "../components/todos/NoTasksFound";
import { useEffect, useState } from "react";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

let AllToDos = () => {
  let { sendRequest, status, data, error } = useHttp(getAllQuotes, true);
  let [deleting, setDelete] = useState("");
  useEffect(() => {
    sendRequest();
  }, [sendRequest, deleting]);
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
  if (status === "completed" && (!data || data.length === 0)) {
    return <NoTasksFound />;
  } else {
    return <TodoList quotes={data} onFetch={setDelete} />;
  }
};
export default AllToDos;
