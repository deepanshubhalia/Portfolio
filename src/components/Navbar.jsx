import { FaLinkedin, FaInstagram, FaGithub, FaVimeo } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-8">
      {/* Left side: DB (Your Branding) */}
      <div className="text-3xl font-bold font-merriweather 
                      text-transparent bg-clip-text 
                      bg-gradient-to-r from-purple-400 to-pink-500 
                      hover:from-pink-500 hover:to-purple-400 
                      transition duration-300">
        DB
      </div>

      {/* Right side: Social Icons */}
      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/deepanshu-bhalia-7014792a7/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/deepanshu.bhalia/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/deepanshubhalia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-yellow-300 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://vimeo.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vimeo"
          className="hover:text-teal-400 transition duration-300"
        >
          <FaVimeo />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
