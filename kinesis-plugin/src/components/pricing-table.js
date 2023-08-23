// Register pricing table block
wp.blocks.registerBlockType("na/pricing-table", {
  title: "Kinesis Pricing Table",
  icon: "smiley",
  category: "common",

  edit: function (props) {
    return wp.element.createElement("div", {}, "Kinesis Pricing Table");
  },

  save: function (props) {
    return wp.element.createElement(
      "div",
      { className: "bg-white min-w-full" },
      wp.element.createElement(
        "div",
        { className: "relative isolate px-6 pt-14 lg:px-8" },
        wp.element.createElement(
          "div",
          {
            className:
              "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",
          },
          { ariaHidden: "true" },
        ),

        wp.element.createElement(
          "div",
          { className: "mx-auto max-w-2xl py-16" },
          wp.element.createElement(
            "div",
            { className: "text-center" },
            wp.element.createElement(
              "h1",
              {
                className:
                  "text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl",
              },
              "Pricing Table",
            ),
            wp.element.createElement(
              "p",
              {},
              "",
            ),
          ),
        ),
      ),
    );
  },
});
