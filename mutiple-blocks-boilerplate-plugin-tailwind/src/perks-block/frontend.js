// console.log('Perks Frontend ready!')

import coding from "../assets/icons/coding.svg";
import fees from "../assets/icons/fees.svg";
import arrows from "../assets/icons/arrows.svg";


const PerksBlockDivToUpdate = document.querySelectorAll(".perks-section-block-update");

PerksBlockDivToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<PerksComponent {...data} />, div);
  div.classList.remove("perks-section-block-update");
});

function PerksComponent(props) {
  return (
    <>
      {/* Perks */}
      <div class="bg-neutral-50 py-24 sm:py-32 space-y-8">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {props.mainHeading}
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {props.description}
            </p>
          </div>
          <div class="mx-auto mt-10 sm:mt-20 md:mt-16 md:max-w-5xl">
            <dl class="grid mx-auto max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-3 md:gap-y-16">
              <div class="relative flex flex-col items-center justify-center bg-white p-4 md:p-6 rounded-lg drop-shadow-md hover:drop-shadow-lg space-y-4">
                <dt class="mt-6 flex flex-col text-2xl items-center justify-center text-center font-semibold leading-7 text-gray-900">
                  <div class="flex h-10 w-14 text-lg items-center justify-center rounded-lg mb-6">
                    <img src={fees} alt="Fees Icon" />
                  </div>
                  Lorem ipsum dolor
                </dt>
                <dd class="mt-2 text-center text-base leading-7 text-gray-600">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                </dd>
              </div>
              <div class="relative flex flex-col items-center justify-center bg-white p-4 md:p-6 rounded-lg drop-shadow-md hover:drop-shadow-lg space-y-4">
                <dt class="mt-6 flex flex-col text-2xl items-center justify-center text-center font-semibold leading-7 text-gray-900">
                  <div class="flex h-10 w-14 text-lg items-center justify-center rounded-lg mb-6">
                    <img src={arrows} alt="arrows Icon" />
                  </div>
                  Lorem ipsum dolor
                </dt>
                <dd class="mt-2 text-center text-base leading-7 text-gray-600">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                </dd>
              </div>
              <div class="relative flex flex-col items-center justify-center bg-white p-4 md:p-6 rounded-lg drop-shadow-md hover:drop-shadow-lg space-y-4">
                <dt class="mt-6 flex flex-col text-2xl items-center justify-center text-center font-semibold leading-7 text-gray-900">
                  <div class="flex h-10 w-14 items-center justify-center rounded-lg mb-6">
                    <img src={coding} alt="coding Icon" />
                  </div>
                  Lorem ipsum dolor
                </dt>
                <dd class="mt-2 text-center text-base leading-7 text-gray-600">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-4xl">
          <div className="flex justify-center space-x-2">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50">
              Sign up
            </button>

            <button className="mt-4 px-6 py-2 bg-neutral-200 text-black hover:font-normal hover:text-white rounded hover:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-600 focus:ring-opacity-50">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
