const TaskButton = (props) => {
  return (
    <button className="bg-black text-white w-24 h-10 rounded-xl hover:bg-[orange] active:bg-[orange] focus:bg-[orange]">
      {props.text}
    </button>
  );
};

export default TaskButton;
