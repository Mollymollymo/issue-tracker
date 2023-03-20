import TaskButton from "../TaskButton";

const Issues = (props) => {
  return (
    <div>
      <div className="text-red-500 text-base">
        {props.title}
        <TaskButton text="Edit" />
        <TaskButton text="Delete" />
      </div>
      <div className="text-blue-500 text-base">{props.body}</div>
    </div>
  );
};

export default Issues;
