import { SiHtml5, SiTailwindcss, SiJavascript, SiReact } from "react-icons/si";
import symbol from "../assets/finalsymbol.png";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="transition-transform duration-300 hover:scale-125">
          <SiHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="transition-transform duration-300 hover:scale-125">
          <SiTailwindcss className="text-7xl text-blue-400" />
        </div>
        <div className="transition-transform duration-300 hover:scale-125">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="transition-transform duration-300 hover:scale-125">
          <SiReact className="text-7xl text-cyan-400" />
        </div>
        {/* Adding Final Cut Pro PNG Image */}
        <div className="transition-transform duration-300 hover:scale-125">
          <img src={symbol} alt="Final Cut Pro" className="w-20 h-20" />
        </div>
        
      </div>
    </div>
  );
};

export default Technologies;
