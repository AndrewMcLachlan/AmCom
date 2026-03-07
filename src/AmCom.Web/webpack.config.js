const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');

var rootPath = path.join(__dirname, "Scripts");
var reactPath = path.join(rootPath, "React");
var standardPath = path.join(rootPath, "Standard");

module.exports = (env, argv) => {

    return {
        plugins: [new ESLintPlugin()],
        entry: {
            reacttools: path.join(reactPath, "App.tsx"),
            core: path.join(standardPath, "Core.ts")
        },
        watchOptions: {
            ignored: ["**/*.js", "node_modules"],
        },

        devtool: "source-map",

        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },

        output: {
            path: path.join(__dirname, "wwwroot", "js"),
            filename: argv.mode === "production" ? "[name].min.js" : "[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader"
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: path.join(reactPath, "tsconfig.json")
                        }
                    }],
                }
            ],
        },
    };
};