import profilePic from "../assets/deepanshubhalia.jpg";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 relative">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center p-8">
            <img
              src={profilePic}
              alt="deepanshu bhalia"
              className="border border-stone-900 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Deepanshu Bhalia
            </h2>

            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Front-End Developer
            </span>

            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            I am a passionate Frontend Developer dedicated to building engaging and efficient web applications. I have experience in front-end technologies like HTML, CSS, JavaScript, Tailwind CSS and React. Additionally, I am skilled in Video editing with Final Cut Pro having edited reels for various clients.
            </p>

            {/* Resume Button with Hover Effect */}
            <a
              href="/myresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold uppercase rounded-full p-4 text-sm shadow-lg transition duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-blue-500"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      
    </div>

  );
};

export default Hero;
