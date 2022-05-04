export interface Colour {
    name: string;
    hex?: string;
    rgb?: string;
    cssClass?: string;
    r: number;
    g: number;
    b: number;
}

export const toHex = (colour: Colour) => `#${colour.r.toString(16).padStart(2, "0")}${colour.g.toString(16).padStart(2, "0")}${colour.b.toString(16).padStart(2, "0")}`;
export const toRgb = (colour: Colour) => `${colour.r}, ${colour.g}, ${colour.b}`;

