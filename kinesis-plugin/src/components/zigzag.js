// hero.js

wp.blocks.registerBlockType("na/zigzag-block", {
  title: "Kinesis ZigZag Block",
  icon: "smiley",
  category: "common",

  edit: function (props) {
    return wp.element.createElement("div", {}, "Kinesis ZigZag Block");
  },

  save: function (props) {
    return wp.element.createElement(
      "div",
      { className: "bg-white min-w-full flex justify-between" },

      wp.element.createElement(
        "div",
        { className: "flex-1 w-64" },

        wp.element.createElement(
          "div",
          { className: "relative isolate pt-14 lg:px-2" },
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
                "h3",
                {
                  className:
                    "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
                },
                "Lorem ipsum dolor sit amet, consectetur",
              ),
              wp.element.createElement(
                "p",
                { className: "tracking-tight text-gray-900" },
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
              ),

              wp.element.createElement(
                "div",
                { className: "mt-6 flex gap-x-6" },
                wp.element.createElement(
                  "a",
                  {
                    className: "text-sm font-semibold leading-6 text-blue-700",
                  },
                  "Sign up",
                  " →",
                ),
              ),
            ),
          ),
        ),
      ),
      wp.element.createElement(
        "div",
        { className: "flex-1 w-32" },
        wp.element.createElement("img", {
          src: "https://github.com/bullioncapital/wordpress-technical-test/blob/main/assets/images/zigzag.jpg?raw=true",
          alt: "",
        }),
      ),
    );
  },
});
