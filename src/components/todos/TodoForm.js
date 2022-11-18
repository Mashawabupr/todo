import { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./TodoForm.module.css";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
const TodoForm = (props) => {
  let [entered, setEntered] = useState(false);
  let [isValid, setValid] = useState(false);
  let [valueAuthor, setAuthor] = useState("");
  let [valueText, setText] = useState("");
  let [valueDate, setDate] = useState("");
  let [valueFile, setFile] = useState(true);
  let [fileList, setList] = useState([]);
  let listRef = ref(storage, "");

  function submitFormHandler(event) {
    event.preventDefault();

    props.onAddQuote({
      author: valueAuthor,
      text: valueText,
      date: valueDate,
      file: fileList,
    });
  }

  let handleClick = () => {
    setEntered(false);
  };
  let handleFocus = () => {
    setEntered(true);
  };
  let handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  let handleText = (event) => {
    setText(event.target.value);
  };
  let handleDate = (event) => {
    setDate(event.target.value);
  };
  let handleFile = (event) => {
    setFile(false);
    let fileRef = ref(storage, `${Math.random()}`);
    uploadBytes(fileRef, event.target.files[0]);
  };
  let handleFileSubmit = (event) => {
    setFile(true);
    event.preventDefault();
    listAll(listRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setList(url);
        });
      });
    });
  };
  useEffect(() => {
    if (
      valueAuthor.trim().length > 0 &&
      valueText.trim().length > 0 &&
      valueDate.trim().length > 0
    ) {
      setValid(true);
    }
  }, [valueAuthor, valueText, valueDate]);
  return (
    <Card>
      <Prompt when={entered} message="Are you sure?" />
      <form
        className={classes.form}
        onSubmit={submitFormHandler}
        onFocus={handleFocus}
      >
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Title</label>
          <input
            type="text"
            id="author"
            value={valueAuthor}
            onChange={handleAuthor}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={valueDate}
            onChange={handleDate}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Description</label>
          <textarea
            id="text"
            rows="5"
            value={valueText}
            onChange={handleText}
          ></textarea>
        </div>

        <div>
          <input type="file" id="file" onChange={handleFile} />
          <button onClick={handleFileSubmit}>Add a file</button>
        </div>

        <div className={classes.actions}>
          <button
            className={isValid && valueFile ? "btn" : "btn invalid"}
            onClick={handleClick}
            disabled={!isValid && !valueFile}
          >
            Add ToDo
          </button>
        </div>
      </form>
    </Card>
  );
};

export default TodoForm;
