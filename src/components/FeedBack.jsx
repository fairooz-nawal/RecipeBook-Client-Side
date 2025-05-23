import bg from "../assets/aboutus.png"
import cus1 from "../assets/customer1.png"
import cus2 from "../assets/customer-2.png"
import cus3 from "../assets/customer-3.png"
const FeedBack = () => {
    return (
        <div className="border-x-2 border-amber-300  max-w-full md:max-w-5xl lg:max-w-7xl mx-auto bg-[#0b1315] py-[50px]">
            <div className="w-3/4 mx-auto">
                 <h1 className="oswald text-white text-center text-2xl md:text-5xl lg:text-5xl font-bold">Feedback of<span className="text-amber-300"> our customers</span> </h1><br /><br /><br />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 '>
                <div className="relative">
                    <img className="animate-spin w-9/12 mx-auto" style={{ animationDuration: '20s' }} src={bg} alt="" />
                </div>
                <div className="p-10 space-y-4">
                    <p className="tang text-amber-300 text-3xl">Client Feedhack</p>
                    <h1 className="oswald text-white text-2xl md:text-5xl lg:text-5xl font-bold">What believe between <span className="text-amber-300"> our customers</span> </h1>
                    <p className="josefin text-gray-400">But the shaft is dark at the gate threshold. The whole wing is situated next to the large receptacle.</p>
                    <button button className="btn border-2 border-amber-300 p-2 hover:bg-amber-300 hover:text-white text-sm md:text-lg lg:text-xl">View More</button>
                    <br />
                    <div className="carousel rounded-box w-full">
                        <div className="carousel-item w-full">
                            <div className="">
                                <img
                                    src={cus1}
                                    className="w-1/4 rounded-full"
                                    alt="Tailwind CSS Carousel component" />
                                <h1 className="oswald text-white text-xl md:text-3xl lg:text-3xl font-bold">Wade Warren</h1>
                                <p className="tang text-amber-300 text-xl">CEO</p>
                                <p className="josefin text-gray-400">The fermented dough is rough. But the receptacle is free and clear, at the edge of the threshold. But the receptacle is free and clear, at the edge of the threshold with a rough border. The rough border.</p>
                            </div>
                        </div>
                        <div className="carousel-item w-full">
                            <div className="carousel-item w-full">
                                <div className="">
                                    <img
                                        src={cus2}
                                        className="w-1/4 rounded-full"
                                        alt="Tailwind CSS Carousel component" />
                                    <h1 className="oswald text-white text-xl md:text-3xl lg:text-3xl font-bold">John deo</h1>
                                    <p className="tang text-amber-300 text-xl">Manager</p>
                                    <p className="josefin text-gray-400"> But the receptacle is free and clear, at the edge of the threshold. But the receptacle is free and clear, at the edge of the threshold with a rough border. The rough border.</p>
                                </div>
                            </div>
                            <div className="carousel-item w-full">
                                <div className="carousel-item w-full">
                                    <div className="">
                                        <img
                                            src={cus3}
                                            className="w-1/4 rounded-full"
                                            alt="Tailwind CSS Carousel component" />
                                        <h1 className="oswald text-white text-xl md:text-3xl lg:text-3xl font-bold">Dev Uddin</h1>
                                        <p className="tang text-amber-300 text-xl">CEO</p>
                                        <p className="josefin text-gray-400">At the edge of the threshold with a rough round and moist border.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FeedBack;