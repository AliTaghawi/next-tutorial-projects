import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { BsAlignStart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
import RadioButton from "../elements/RadioButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTodoPage() {
  const [todoData, setTodoData] = useState({
    title: "",
    status: "todo",
  });

  const changeHandler = (e) => {
    setTodoData({ ...todoData, [e.target.name]: e.target.value });
  };

  const addHandler = async () => {
    const res = await fetch('/api/todos', {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {"Content-Type": "application/json"}
    })
    const data = await res.json();
    if (data.status === "successful") {
      setTodoData({
        title: "",
        status: "todo"
      })
      toast.success("Todo added")
    }
  }

  return (
    <div className="add-form">
      <h2>
        <GrAddCircle />
        Add new todo
      </h2>
      <div className="add-form__input">
        <div className="add-form__input--first">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={todoData.title}
            onChange={changeHandler}
          />
        </div>
        <div className="add-form__input--second">
          <RadioButton
            status={todoData.status}
            onChange={changeHandler}
            label={"Todo"}
            value={"todo"}
          >
            <BsAlignStart />
          </RadioButton>
          <RadioButton
            status={todoData.status}
            onChange={changeHandler}
            label={"In Progress"}
            value={"inProgress"}
          >
            <FiSettings />
          </RadioButton>
          <RadioButton
            status={todoData.status}
            onChange={changeHandler}
            label={"Review"}
            value={'review'}
          >
            <AiOutlineFileSearch />
          </RadioButton>
          <RadioButton
            status={todoData.status}
            onChange={changeHandler}
            label={"Done"}
            value={'done'}
          >
            <MdDoneAll />
          </RadioButton>
        </div>
        <button onClick={addHandler}>Add</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddTodoPage;
