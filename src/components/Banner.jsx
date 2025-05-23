import bg from "../assets/banner-01.png"
import { Slide, Fade } from "react-awesome-reveal";
const Banner = () => {
    return (
        <Slide direction="up">
            <div className='mt-[151px] md:mt-[115px] lg:mt-[121px] h-[400px] md:h-[700px] lg:h-[700px] max-w-full md:max-w-5xl lg:max-w-7xl mx-auto relative border-1 border-t-2 border-amber-300 border-b-1 border-b-[#0b1315]'>

                <img className='w-11/12 mx-auto h-full' src={bg} alt="" />
                <Fade
                    delay={200} // Wait before starting
                    duration={1000} // Animation duration
                    triggerOnce // Animate only once
                >
                    <div className="absolute bottom-5 md:top-[15%] lg:top-[25%] left-0 md:left-10 lg:left-10 w-full md:w-1/2 lg:w-1/2 space-y-4 p-5">
                        <p className="tang text-amber-300 text-3xl">Welcome To Earls</p>
                        <h1 className="oswald text-white text-2xl md:text-5xl lg:text-5xl">The Teasure Of <span className="text-amber-300">Recipes</span></h1>
                        <p className="josefin text-gray-300 font-bold">But the border is dark at the decorated gate. The other wing is dark against the large reception. The fermented ridge is a rough edge. But the free reception is clear, and the supporting edge is a darkened border.For the positioned edges are dark as arrows</p>
                        <button className="btn border-2 border-amber-300 p-2 hover:bg-amber-300 hover:text-white text-sm md:text-lg lg:text-xl">View More</button>
                    </div>
                </Fade>
            </div>
        </Slide>
    );
};

export default Banner;