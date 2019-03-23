const path = require("path");

var rootPath = path.join(__dirname, "scripts", "react");

module.exports = {
    entry: [path.join(rootPath, "app.tsx"), path.join(rootPath, "tools/regex.tsx") ],
    watchOptions: {
        ignored: ["**/*.js", "node_modules"],
    },
    output: {
        path: path.join(__dirname, "wwwroot", "js"),
        filename: "regex.js"
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