// console.log('Hero Frontend ready!')

import heroImg from "../assets/images/heroimage.png";

const heroBlockDivToUpdate = document.querySelectorAll(".hero-section-block-update");

heroBlockDivToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<HeroComponent {...data} />, div);
  div.classList.remove("hero-section-block-update");
});

function HeroComponent(props) {

  return (
    <>
      {/* Hero */}
      <div className="mx-auto">
        <div className="pt-24 pb-40 overflow-hidden space-y-8 w-full relative bg-gradient-to-b from-neutral-950 to-slate-600">
          <img
            src={heroImg}
            alt="Background image"
            className="h-full w-full object-cover absolute"
          />

          <div className="max-w-7xl mx-auto mt-32">
          <div className="px-4 md:px-8">
          <dl class="grid mx-auto max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-16">
          <div className="relative flex flex-col space-y-4">
              <span className="uppercase text-gray-400 font-medium">{props.subtitle}</span>
              <h1 className="text-5xl text-white font-medium tracking-tight mb-6">
                {props.mainHeading}
              </h1>
              <p className="text-lg text-gray-300">{props.description}</p>

              <div className="flex relative justify-start md:justify-start space-x-2">
                <button onClick="#" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50">
                  Sign up
                </button>

                <button onClick="#" className="mt-4 px-6 py-2 bg-slate-800 text-white hover:bg-slate-600 font-medium hover:text-white rounded focus:outline-none focus:ring-1 focus:ring-slate-600 focus:ring-opacity-50">
                  Learn more
                </button>
              </div>
              
            </div>
             <div></div>
            </dl>
            </div>
            </div>
        </div>
      </div>
      {/* end */}
    </>
  );
}
