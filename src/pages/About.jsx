import React from "react";
import hero from "../assets/hero.jpg";

const About = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="h-screen flex flex-col md:flex-row lg:flex-row">
          <div className="h-1/2 flex flex-col items-center justify-center p-4 md:h-full md:w-1/2 lg:h-full lg:w-1/2">
            <p className="text-6xl font-main font-bold">
              We're changing recipes one recipe at a time
            </p>
            <p className="font-main pt-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              blanditiis qui vitae quasi, a perferendis facilis eligendi aut
              harum nulla atque dolorem nesciunt veniam excepturi unde nam?
              Earum, eos totam.
            </p>
          </div>
          <img
            src={hero}
            className="h-1/2 object-contain md:h-full md:w-1/2 lg:h-full lg:w-1/2"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
