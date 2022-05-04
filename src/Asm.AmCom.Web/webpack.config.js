const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');

var rootPath = path.join(__dirname, "scripts");
var reactPath = path.join(rootPath, "react");
var standardPath = path.join(rootPath, "standard");

module.exports = (env, argv) => {

    return {
        plugins: [new ESLintPlugin()],
        entry: {
            reacttools: path.join(reactPath, "app.tsx"),
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
                        loader: "ts-loader"
                    }],
                }
            ],
        },

        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "redux": "Redux",
            "react-redux": "ReactRedux",
            "redux-thunk": "ReduxThunk",
        }
    };
};