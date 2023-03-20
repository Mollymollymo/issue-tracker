const Button = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="bg-black text-white w-48 h-12 rounded-xl hover:bg-[orange] active:bg-[orange] focus:bg-[orange]"
    >
      {props.text}
    </button>
  );
};

export default Button;
