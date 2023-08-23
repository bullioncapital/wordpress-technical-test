// perks.js

wp.blocks.registerBlockType("na/perks-block", {
  title: "Kinesis Perks Block",
  icon: "smiley",
  category: "common",

  edit: function (props) {
    return wp.element.createElement("div", {}, "Kinesis Perks Block");
  },

  save: function (props) {
    return wp.element.createElement(
      "div",
      {
        className:
          "bg-slate-100 min-w-full grid grid-cols-3 gap-4 relative pt-24 lg:px-4",
      },

      // 1st Box
      wp.element.createElement(
        "div",
        { className: "bg-white" },
        wp.element.createElement(
          "div",
          { className: "mx-10 max-w-2xl py-3 sm:py-4 lg:py-24" },
          wp.element.createElement(
            "div",
            { className: "text-center place-items-center" },
            wp.element.createElement(
              "div",
              { className: "flex items-center justify-center gap-x-6" },
              wp.element.createElement("img", {
                src: "https://raw.githubusercontent.com/bullioncapital/wordpress-technical-test/5228c19269091dbda5a5dff51df73f1fc490ebbd/assets/Tile%20images/PowerfulExchange.svg",
                alt: "",
              }),
            ),
            wp.element.createElement(
              "h3",
              {
                className: "text-2xl tracking-tight text-gray-700 sm:text-3xl",
              },
              "Lorem ipsum dolor sit amet, consectetur",
            ),
            wp.element.createElement(
              "p",
              { className: "tracking-tight text-gray-400 my-1.5" },
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
            ),
          ),
        ),
      ),

      // 2nd Box
      wp.element.createElement(
        "div",
        { className: "bg-white" },
        wp.element.createElement(
          "div",
          { className: "mx-10 max-w-2xl py-3 sm:py-4 lg:py-24" },
          wp.element.createElement(
            "div",
            { className: "text-center place-items-center" },
            wp.element.createElement(
              "div",
              { className: "flex items-center justify-center gap-x-6" },
              wp.element.createElement("img", {
                src: "https://raw.githubusercontent.com/bullioncapital/wordpress-technical-test/5228c19269091dbda5a5dff51df73f1fc490ebbd/assets/Tile%20images/Fees.svg",
                alt: "",
              }),
            ),
            wp.element.createElement(
              "h3",
              {
                className: "text-2xl tracking-tight text-gray-700 sm:text-3xl",
              },
              "Lorem ipsum dolor sit amet, consectetur",
            ),
            wp.element.createElement(
              "p",
              { className: "tracking-tight text-gray-400 my-1.5" },
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
            ),
          ),
        ),
      ),

      // 3rd Box
      wp.element.createElement(
        "div",
        { className: "bg-white" },
        wp.element.createElement(
          "div",
          { className: "mx-10 max-w-2xl py-3 sm:py-4 lg:py-24" },
          wp.element.createElement(
            "div",
            { className: "text-center place-items-center" },
            wp.element.createElement(
              "div",
              { className: "flex items-center justify-center gap-x-6" },
              wp.element.createElement("img", {
                src: "https://raw.githubusercontent.com/bullioncapital/wordpress-technical-test/5228c19269091dbda5a5dff51df73f1fc490ebbd/assets/Tile%20images/EasyAPIs.svg",
                alt: "",
              }),
            ),
            wp.element.createElement(
              "h3",
              {
                className: "text-2xl tracking-tight text-gray-700 sm:text-3xl",
              },
              "Lorem ipsum dolor sit amet, consectetur",
            ),
            wp.element.createElement(
              "p",
              { className: "tracking-tight text-gray-400 my-1.5" },
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque..",
            ),
          ),
        ),
      ),

      // Button
      wp.element.createElement("div", {
        className: "mt-6 flex gap-x-6 mb-4 justify-center",
      }),
      wp.element.createElement(
        "div",
        { className: "mt-6 flex gap-x-6 mb-4 justify-center" },
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
    );
  },
});
