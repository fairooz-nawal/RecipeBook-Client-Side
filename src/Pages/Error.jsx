import bg from "../assets/cook.jpg"

const Error = () => {
    return (
        <div className="max-w-full md:max-w-8xl lg:max-w-8xl mx-auto h-screen flex flex-col justify-center items-center bg-[#0b1315]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-amber-300">No Page Found</h1><br />
            <img className="rounded-full" src={bg} alt="" />
        </div>
    );
};

export default Error;