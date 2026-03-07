import { Colour, toHex, toRgb } from "../model/Colour";
import * as React from "react";
import { colourToClipboard } from "../helpers/functions";

export const ColourGroup = (props: ColourGroupProps) => (
    <>
        <section className="colour-group">
            <h3>{props.title}</h3>
            {props.colours.map((colour, index) =>
                <section key={index} className={`clickable colour ${colour.name.toLowerCase().replace(" ", "-")} ${textColour(colour)}`} onClick={() => colourToClipboard(colour)} title="click to copy hex value">
                    <div>
                        <h4>{colour.name}</h4>
                        <div>{toHex(colour)}<br />{toRgb(colour)}</div>
                    </div>
                </section>
            )}
        </section>
    </>
);

const textColour = (colour: Colour) => (colour.r + colour.g + colour.b) < 400 ? "colour-dark" : "colour-light";

export interface ColourGroupProps {
    title: string;
    colours: Colour[];
}