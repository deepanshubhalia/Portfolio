const Contact = () => {
    return (
      <div className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-full max-w-lg border border-white/20">
          <h2 className="text-4xl font-bold text-stone-300 text-center mb-4 font-serif tracking-wide">
            Get in Touch
          </h2>
          <div className="text-center text-lg text-stone-300 space-y-3">
            <p className="flex items-center justify-center gap-2 text-lg font-medium">
              📍 <span>4557A, Model Town, Rewari, Haryana</span>
            </p>
            <p className="flex items-center justify-center gap-2 text-lg font-medium">
              📞 
              <a 
                href="tel:+918901770840"
                className="hover:text-stone-100 transition duration-300 shadow-md"
              >
                8901770840
              </a>
            </p>
            <p className="flex items-center justify-center gap-2 text-lg font-medium">
              📧 
              <a 
                href="mailto:deepanshubhalia1234@gmail.com"
                className="hover:text-stone-100 transition duration-300 shadow-md"
              >
                deepanshubhalia1234@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Contact;
