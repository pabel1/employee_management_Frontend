const Input = ({ type, error, placeholder, customClassName, hookRef }) => {
  return (
    <input
      type={type}
      className={`shadow-sm border-gray-300 rounded-lg placeholder:text-lightText placeholder:text-sm focus:ring-2 ${
        error
          ? "focus:ring-red-200 focus:border-red-400"
          : "focus:ring-purple-200 focus:border-purple-400"
      } w-full ${customClassName || ""}`}
      placeholder={placeholder}
      {...hookRef}
    />
  );
};

export default Input;
