// hero.js

wp.blocks.registerBlockType("na/hero-banner", {
  title: "Kinesis Hero Banner",
  icon: "smiley",
  category: "common",

  edit: function (props) {
    return wp.element.createElement("div", {}, "Kinesis Hero Banner");
  },

  save: function (props) {
    return wp.element.createElement(
      "div",
      {
        className:
          "m-0 bg-slate-900 h-screen min-w-full p-0 hero-custom-background",
      },

      wp.element.createElement(
        "div",
        { className: "relative isolate pt-14 lg:px-8 z-10" },
        wp.element.createElement(
          "div",
          {
            className:
              "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",
          },
          { arialHidden: "true" },
        ),
        wp.element.createElement(
          "div",
          { className: "mx-40 max-w-2xl py-32 sm:py-48 lg:py-56" },
          wp.element.createElement(
            "div",
            { className: "text-left" },

            wp.element.createElement(
              "p",
              { className: "tracking-tight text-zinc-300 uppercase mb-1.5" },
              "KINESIS",
            ),
            wp.element.createElement(
              "h1",
              {
                className:
                  "text-4xl font-bold tracking-tight text-zinc-300 sm:text-6xl",
              },
              "Lorem ipsum dolor sit amet, consectetur",
            ),
            wp.element.createElement(
              "p",
              { className: "tracking-tight text-zinc-300" },
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
            ),

            wp.element.createElement(
              "div",
              { className: "mt-6 flex gap-x-6" },
              wp.element.createElement(
                "a",
                {
                  className:
                    "rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                },
                "Start Trading",
              ),
              wp.element.createElement(
                "a",
                {
                  className:
                    "rounded-md bg-slate-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                },
                "Demo Trading",
              ),
            ),
          ),
        ),
      ),
    );
  },
});
