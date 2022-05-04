import * as React from "react";

import { Colour, toHex } from "../model/Colour";
import { colourToClipboard } from "../helpers/functions";

export const ColourGrid = (props: ColourGridProps) => (
    <>
        <section className="colour-grid">
            <h3>{props.title}</h3>
            {props.colours.map((colour, index) =>
                <section key={index} className="clickable" style={{ backgroundColor: toHex(colour) }} onClick={() => colourToClipboard(colour)} title="click to copy hex value">
                    <div>
                        <h4>{colour.name}</h4>
                        <div>{toHex(colour)}</div>
                    </div>
                </section>
            )}
        </section>
    </>
);

export interface ColourGridProps {
    title: string;
    colours: Colour[];
}
