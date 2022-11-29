const Button = ({
  text,
  onClick,
  className,
  isLoading,
  disabled = false,
  icon,
}) => {
  return (
    <>
      <button
        className={
          disabled
            ? `flex cursor-not-allowed rounded-3xl px-6 py-2 transition text-disabledBtnColor bg-disabledBtnBg ${className}`
            : `flex rounded-3xl border-[1px] px-6 py-2 transition border-sky-500 hover:bg-sky-500 ease-in duration-200 hover:text-white ${className}`
        }
        onClick={() => {
          if (!isLoading) {
            onClick();
          }
        }}
      >
        {icon && <img className="mr-[5px]" src={icon}></img>}

        {text}
        {isLoading && <div className="loader"></div>}
      </button>
    </>
  );
};
export default Button;
