import { Colour, toHex } from "../model/Colour";

export const colourToClipboard = (colour: Colour) =>  navigator.clipboard.writeText(toHex(colour));