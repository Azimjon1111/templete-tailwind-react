const Button = ({ text, onClick, className, isLoading, disabled }) => {
  return (
    <>
      {disabled && (
        <button
          className={` cursor-not-allowed rounded-lg px-4 py-2 transition ${className}`}
          onClick={() => {
            onClick();
          }}
        >
          {text}
        </button>
      )}
      {!disabled && (
        <button
          className={`rounded-lg px-4 py-2 transition  ${className}`}
          onClick={() => {
            onClick();
          }}
        >
          {text}
        </button>
      )}
    </>
  );
};
export default Button;
