let mix = require("laravel-mix");

mix.webpackConfig({
    devtool: "source-map",
    resolve: {
        fallback: {
            constants: require.resolve("constants-browserify"),
        },
    },
}).sourceMaps();

/* SASS */
mix.sass(
    "assets/scss/style.scss",
    "style.css"
).sourceMaps();

const blocksToProcess = [
    "hero",
    "cta",
    "text-and-list",
    "tiles",
    "coins"
];

blocksToProcess.forEach(function (block) {
    mix.sass(
        `blocks/${block}/assets/scss/style.scss`,
        `blocks/${block}/style.css`
    ).sourceMaps();
});