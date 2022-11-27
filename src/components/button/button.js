const Button = ({ text, onClick, className, isLoading, disabled }) => {
  return (
    <>
        <button
          className={`  rounded-lg px-4 py-2 transition ${className}`}
          onClick={() => {
            onClick();
          }}
          disabled={disabled}
        >
          {text}
        </button>
    </>
  );
};
export default Button;
