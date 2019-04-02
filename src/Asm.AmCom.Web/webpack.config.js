const path = require("path");

var rootPath = path.join(__dirname, "scripts", "react");

module.exports = (env, argv) => {

    return {
        entry: path.join(rootPath, "app.tsx"),
        watchOptions: {
            ignored: ["**/*.js", "node_modules"],
        },

        devtool: "source-map",

        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },

        output: {
            path: path.join(__dirname, "wwwroot", "js"),
            filename: argv.mode === "production" ? "reacttools.min.js" : "reacttools.js"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    enforce: 'pre',
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: { /* Loader options go here */ }
                        }
                    ]
                },
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