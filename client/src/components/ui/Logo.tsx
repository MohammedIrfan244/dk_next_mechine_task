import { useNavigate } from "react-router-dom";


function Logo() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };

    return (
        <div
            onClick={handleClick}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-blue-900 px-3 py-1 bg-gradient-to-r from-yellow-400 to-violet-400 hover:from-yellow-500 hover:to-violet-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm"
        >
            <div className="flex flex-col items-center leading-tight">
                <h1 className="text-violet-800 text-sm shrikhand-regular drop-shadow-sm">
                    DK NEXT
                </h1>
                <div className="flex items-center px-1">
                    <span className="text-green-800 font-bold text-[10px] opacity-90">
                        {"-".repeat(10)}
                    </span>
                    <span className="text-green-800 text-[10px] font-bold opacity-90">{">"}</span>
                </div>
            </div>
        </div>
    );
}

export default Logo;