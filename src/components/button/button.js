const Button = ({ text, onClick, className, isLoading, disabled = false }) => {
  return (
    <>
      <button
        className={
          disabled
            ? `flex cursor-not-allowed rounded-3xl px-6 py-2 transition text-disabledBtnColor bg-disabledBtnBg ${className}`
            : `flex rounded-3xl border-[1px] px-6 py-2 transition border-sky-500 hover:bg-sky-500 ease-in duration-200 hover:text-white ${className}`
        }
        onClick={() => {
          onClick();
        }}
      >
        {text}
        {isLoading && <div className="loader"></div>}
      </button>
    </>
  );
};
export default Button;
