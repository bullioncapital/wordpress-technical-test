// console.log('CTA Frontend ready!')

import ctaBG from "../assets/images/cta.jpg";

const ctaBlockDivToUpdate = document.querySelectorAll(".cta-section-block-update");

ctaBlockDivToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<CtaComponent {...data} />, div);
  div.classList.remove("cta-section-block-update");
});

function CtaComponent(props) {
  return (
    <>
      {/* CTA */}
      <div class="w-full z-10" className="py-24 bg-cover bg-center relative bg-gradient-to-b from-neutral-950 to-slate-600 flex items-center justify-start"
              style={{ backgroundImage: `url(${ctaBG})` }}>
				<div class="w-full p-8 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-8">
					<div class="col-span-4 lg:col-span-5 lg:col-start-2">
						  <h2 class="text-4xl font-medium text-white tracking-tight mb-6">
                {props.textblock}
                </h2>
							<div class="mt-10">
								<div class="flex flex-wrap -mx-1 -my-1">
                  <button className="m-1 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50">
                    Join Kinesis
                  </button>
                </div>
							</div>
						</div>
				</div>
			</div>

    </>
  );
}
