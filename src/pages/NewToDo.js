import TodoForm from "../components/todos/TodoForm";
import useHttp from "../hooks/use-http";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { addQuote } from "../lib/api";
let NewToDo = () => {
  let history = useHistory();
  let { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/AllToDos");
    }
  }, [status, history]);
  let addQuotes = (data) => {
    sendRequest(data);
  };
  return <TodoForm isLoading={status === "pending"} onAddQuote={addQuotes} />;
};
export default NewToDo;
