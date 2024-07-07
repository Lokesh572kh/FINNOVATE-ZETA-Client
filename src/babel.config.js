export const presets = [
    ["@babel/preset-env", {
        "useBuiltIns": "usage",
        "corejs": 3
    }],
    "@babel/preset-react"
];
export const plugins = [
    "@babel/plugin-transform-runtime"
];
  