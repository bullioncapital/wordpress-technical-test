// console.log('Zigzag Frontend ready!')

import zigzag from "../assets/images/zigzag.jpg";
import monitor from "../assets/icons/monitor.svg";
import cards from "../assets/icons/cards.svg";

const heroBlockDivToUpdate = document.querySelectorAll(".zigzag-section-block-update");

heroBlockDivToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<ZigzagComponent {...data} />, div);
  div.classList.remove("zigzag-section-block-update");
});

function ZigzagComponent(props) {
  //  console.log('frontend-zigzag-block-component live', props);

  return (
    <>
      {/* zigzag */}
      <div class="bg-white max-w-7xl mx-auto py-24">
        <div class="px-6 md-px-0 space-y-8">
          <dl class="grid grid-cols-1 md:max-w-none md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-16">
            <div>
              <dl class="grid max-auto grid-cols-1 gap-x-8 gap-y-10 md:gap-y-16">
                <div class="relative space-y-2">
                  <h2 className="text-4xl font-normal text-black tracking-tight">
                    {props.heading}
                  </h2>
                  <p className="leading-7 text-gray-500">{props.description}</p>
                </div>
                <div class="relative pl-16">
                  <dt class="font-semibold text-lg leading-7 text-gray-900">
                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <img src={cards} alt="cards Icon" />
                    </div>
                    Push to deploy
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="font-semibold text-lg leading-7 text-gray-900">
                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <img src={monitor} alt="monitor Icon" />
                    </div>
                    Push to deploy
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
                  </dd>
                </div>

                <div>
                  <div class="relative" style={{ marginLeft: '-20px'}} >
                    <button className="px-6 py-2 bg-transparent text-blue-500  hover:text-blue-900">
                      Sign up
                    </button>
                  </div>
                </div>
              </dl>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${zigzag})` }}
            ></div>
          </dl>
        </div>
      </div>
    </>
  );
}
