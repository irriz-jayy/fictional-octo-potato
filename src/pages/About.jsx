import React from "react";
import TeamSection from "../components/TeamSection";
import hero from "../assets/hero.jpg";
import ban from "../assets/ban.jpg";

const About = () => {
  return (
    <>
      <div className="min-h-screen">
        {/* first section */}
        <div className="h-screen flex flex-col md:flex-row lg:flex-row">
          <div className="h-1/2 flex flex-col items-center justify-center p-4 md:h-full md:w-1/2 lg:h-full lg:w-1/2">
            <p className="text-6xl text-orange-600 font-main font-bold">
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
        {/* mission section */}
        <div className="h-screen flex flex-col md:flex-row lg:flex-row">
          <div className="h-1/2 flex flex-col items-center justify-center p-4 md:h-full md:w-1/2 lg:h-full lg:w-1/2">
            <p className="text-6xl text-orange-600 font-main font-bold">
              Our mission
            </p>
            <p className="font-main pt-2 text-lg">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
            <p className="font-main pt-2 text-lg">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id
            </p>
          </div>
          <div className="h-1/2 flex flex-col items-center justify-center p-4 md:h-full md:w-1/2 lg:h-full lg:w-1/2">
            <p className="text-5xl text-orange-600 font-main font-bold">
              44 thousand +
            </p>
            <p className="font-main pt-2 text-lg">Recipes available</p>
            <p className="text-5xl text-orange-600 font-main font-bold">
              10,000
            </p>
            <p className="font-main pt-2 text-lg">Active users</p>
            <p className="text-5xl text-orange-600 font-main font-bold">100+</p>
            <p className="font-main pt-2 text-lg">
              Ways to cook your favourite meal
            </p>
          </div>
        </div>
        {/* image banner */}
        <img src={ban} alt="banner" className="w-full h-[70vh] object-fit" />
        {/* logo clouds */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-xl font-semibold  font-main leading-8 text-orange-600">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />

              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
        <TeamSection />
      </div>
    </>
  );
};

export default About;
