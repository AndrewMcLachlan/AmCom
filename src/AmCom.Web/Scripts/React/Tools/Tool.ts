import Base64 from "./Base64";
import Cidr from "./Cidr";
import Regex from "./Regex";
import Colours from "./Colours";

export const tools: Tool[] = [
    {
        component: Regex,
        name: "regex",
    },
    {
        component: Cidr,
        name: "cidr",
    },
    {
        component: Base64,
        name: "base64",
    },
    {
        component: Colours,
        name: "colours",
    }
];

export interface Tool {
    name: string;
    component: any;
}
