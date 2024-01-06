const Button = ({ type, customClass, text }) => {
  return (
    <button type={type} className={customClass}>
      {text}
    </button>
  );
};

export default Button;
