import s from "./Todo.module.css";

const Todo = ({ id, title, completed, toggleCompleted }) => {
  return (
    <div className={s.container}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            toggleCompleted(e, id);
          }}
          id={id}
        />
        <span className={completed ? s.completedTodo : ""}>{title}</span>
      </label>
      <span>{id}</span>
    </div>
  );
};

export default Todo;
