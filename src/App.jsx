import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList/Index";
import useLocalStore from "./hooks/useLocalStore";

const App = () => {
  const [tasks, setTasks] = useLocalStore("my-tasks-todo", []);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>The Task Tracker</h1>
      </header>

      <TaskForm addTask={addTask} />
      {tasks && tasks.length > 0 && (
        <div>
          <header>
            <h2>All Tasks</h2>
          </header>

          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
      )}
    </div>
  );
};

export default App;
