import React from "react";

const HeroSection = () => {
  return (
    <motion.div
      className="relative bg-blue-700 text-white py-20 px-8 flex flex-col md:flex-row items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We’re changing the way people connect
        </h1>
        <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-6">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="/get-started"
            className="bg-white text-blue-700 py-2 px-6 rounded-lg font-bold hover:bg-gray-200"
          >
            Get started
          </a>
          <a
            href="/live-demo"
            className="text-white underline font-bold hover:text-gray-300"
          >
            Live demo →
          </a>
        </div>
      </div>
      <div className="md:w-1/2 relative mt-8 md:mt-0">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <motion.img
            src="https://via.placeholder.com/150"
            alt="Tile 1"
            className="col-span-2 row-span-2 rounded-lg shadow-lg object-cover h-48 md:h-64"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://via.placeholder.com/100"
            alt="Tile 2"
            className="rounded-lg shadow-lg object-cover h-24 md:h-32"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://via.placeholder.com/100"
            alt="Tile 3"
            className="rounded-lg shadow-lg object-cover h-24 md:h-32"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://via.placeholder.com/150"
            alt="Tile 4"
            className="col-span-2 rounded-lg shadow-lg object-cover h-48 md:h-64"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
