import { useEffect, useState } from "react";
import Tasks from "../modules/Tasks";

function HomePage() {
  const [todos, setTodos] = useState({})

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = async () => {
    const res = await fetch("/api/todos")
    const data = await res.json();
    if (data.status === "successful") setTodos(data.data)
  }

  return (
    <div className="home-page">
      <div className="home-page--todo">
        <p>Todo</p>
        <Tasks data={todos.todo} />
      </div>
      <div className="home-page--inProgress">
        <p>In Progress</p>
        <Tasks data={todos.inProgress} />
      </div>
      <div className="home-page--review">
        <p>Review</p>
        <Tasks data={todos.review} />
      </div>
      <div className="home-page--done">
        <p>Done</p>
        <Tasks data={todos.done} />
      </div>
    </div>
  );
}

export default HomePage;