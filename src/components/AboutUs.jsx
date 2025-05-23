import bg from "../assets/about.png";
import bg1 from "../assets/about-spinner.png"
const AboutUs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 py-[100px] border-x-2 border-amber-300  max-w-full md:max-w-5xl lg:max-w-7xl mx-auto bg-[#0b1315]'>
            <div className="space-y-4">
                <p className="tang text-amber-300 text-3xl">About Us</p>
                <h1 className="oswald text-white text-2xl md:text-5xl lg:text-5xl">Heaven and Earth are <br />between <span className="text-amber-300"> each other</span> </h1>
                <p className="josefin text-gray-400">But the border is dark at the decorated gate. The other wing is dark against the large reception, the fermented ridge is a rough edge. But the free reception is clear, and the supporting edge is a darkened border. The positioned edges are dark as arrows. The curved shape is dark, the element is empty, and the decorative curve is free. The darkened border is just at the decorated edge, the front edge is dark, and the lace is dark and rough.The ornate border is free at the gate, and not oppressed. The intermediate space is dark, and not the decorative support.</p>
                <button button className="btn border-2 border-amber-300 p-2 hover:bg-amber-300 hover:text-white text-sm md:text-lg lg:text-xl">View More</button>
            </div>
            <div className="relative">
                <img className="w-9/12 h-full flex ml-auto mr-0" src={bg} alt="" />
                <img className="absolute bottom-0 animate-spin slow w-1/2" style={{ animationDuration: '7s' }} src={bg1} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;