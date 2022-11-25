
const Button = ({text, onClick, className, isLoading})=>{
    return (
        <>
        <button  className={`bg-slate-600 text-white rounded-lg p-2 ${className}`} onClick={()=>{onClick()}}>
            {text}
        </button>
        </>
        )
}
export default Button