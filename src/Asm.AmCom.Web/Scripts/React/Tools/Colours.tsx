import * as React from "react";

import { Colour } from "../model/Colour";
import { ColourGrid } from "../Components/ColourGrid";
import { ColourGroup } from "../Components/ColourGroup";

export const Colours = () => (
    <>
        <ColourGroup title="Core Colours" colours={coreColours} />
        <ColourGroup title="Secondary Colours" colours={secondaryColours} />
        <ColourGroup title="VS Colours" colours={vsColours} />
        <ColourGrid title="Blues" colours={blues} />
        <ColourGrid title="Reds" colours={reds} />
    </>
);

export default Colours;

const coreColours: Colour[] = [
    { name: "Dark", r: 0x14, g: 0x25, b: 0x2c, },
    { name: "Blue", r: 0x73, g: 0xbe, b: 0xe9, },
    { name: "Bone", r: 0xf8, g: 0xf8, b: 0xd2, },
];

const secondaryColours: Colour[] = [
    { name: "Lighter", r: 0x29, g: 0x33, b: 0x3D, },
    { name: "Rich Blue", r: 0x3C, g: 0x74, b: 0xA8, },
    { name: "Light Blue", r: 0xAA, g: 0xDC, b: 0xF7, },
    { name: "Muted Bone", r: 0xDA, g: 0xDA, b: 0xD3, },
];

const vsColours: Colour[] = [
    { name: "Keyword", r: 0x81, g: 0xE2, b: 0x81, },
];

const blues: Colour[] = [
    { name: "Blue (Crayola)", r: 0x1F, g: 0x75, b: 0xFE },
    { name: "Periwinkle", r: 0xCC, g: 0xCC, b: 0xFF },
    { name: "Ultramarine", r: 0x40, g: 0x00, b: 0xFF },
    { name: "Medium Blue", r: 0x00, g: 0x00, b: 0xCD },
    { name: "Savoy blue", r: 0x4B, g: 0x61, b: 0xD1 },
    { name: "Liberty", r: 0x54, g: 0x5A, b: 0xA7 },
    { name: "Egyptian Blue", r: 0x10, g: 0x34, b: 0xA6 },
    { name: "Neon Blue", r: 0x4D, g: 0x4D, b: 0xFF },
    { name: "Dark Blue", r: 0x00, g: 0x00, b: 0x8B },
    { name: "Picotee Blue", r: 0x2E, g: 0x27, b: 0x87 },
    { name: "Navy Blue", r: 0x00, g: 0x00, b: 0x80 },
    { name: "Midnight Blue", r: 0x19, g: 0x19, b: 0x70 },
    { name: "Independence", r: 0x4C, g: 0x51, b: 0x6D },
    { name: "Space Cadet", r: 0x1E, g: 0x29, b: 0x52 },
    { name: "International Klein Blue", r: 0x12, g: 0x0A, b: 0x8F },
    { name: "Original Blurple", r: 0x72, g: 0x89, b: 0xda },
    { name: "Blurple", r: 0x58, g: 0x65, b: 0xf2 },
    { name: "Cool black", r: 0x00, g: 0x2E, b: 0x63 },
    { name: "Baby blue", r: 0x89, g: 0xCF, b: 0xF0 },
    { name: "Light blue", r: 0xAD, g: 0xD8, b: 0xE6 },
    { name: "Powder Blue", r: 0xB0, g: 0xE0, b: 0xE6 },
    { name: "Uranian Blue", r: 0xAF, g: 0xDB, b: 0xF5 },
    { name: "Argentinian Blue", r: 0x6C, g: 0xB4, b: 0xEE },
    { name: "Ruddy Blue", r: 0x76, g: 0xAB, b: 0xDF },
    { name: "Celtic Blue", r: 0x24, g: 0x6B, b: 0xCE },
    { name: "Spanish Blue", r: 0x00, g: 0x70, b: 0xBB },
    { name: "Bleu de France", r: 0x31, g: 0x8C, b: 0xE7 },
    { name: "Delft Blue", r: 0x1F, g: 0x30, b: 0x5E },
    { name: "Duck Blue", r: 0x00, g: 0x77, b: 0x91 },
    { name: "Resolution Blue", r: 0x00, g: 0x23, b: 0x87 },
    { name: "Polynesian Blue", r: 0x22, g: 0x4C, b: 0x98 },
    { name: "Moroccan Blue", r: 0x46, g: 0x8f, b: 0xea },
    { name: "Sapphire", r: 0x08, g: 0x25, b: 0x67 },
    { name: "Fluorescent blue", r: 0x15, g: 0xF4, b: 0xEE },
    { name: "Yale Blue", r: 0x00, g: 0x35, b: 0x6B },
    { name: "Teal blue", r: 0x36, g: 0x75, b: 0x88 },

];

const reds: Colour[] = [

    { name: "Amaranth purple", r: 0xAB, g: 0x27, b: 0x4F },
    { name: "Barn red", r: 0x7C, g: 0x09, b: 0x02 },
    { name: "Bittersweet", r: 0xFE, g: 0x6F, b: 0x5E },
    { name: "Bittersweet shimmer", r: 0xBF, g: 0x4F, b: 0x51 },
    { name: "Blood red", r: 0x66, g: 0x00, b: 0x00 },
    { name: "Bright pink (Crayola)", r: 0xFB, g: 0x60, b: 0x7F },
    { name: "Burgundy", r: 0x80, g: 0x00, b: 0x20 },
    { name: "Candy apple red", r: 0xFF, g: 0x08, b: 0x00 },
    { name: "Cantaloupe melon", r: 0xFD, g: 0xBC, b: 0xB4 },
    { name: "Cardinal", r: 0xC5, g: 0x1E, b: 0x3A },
    { name: "Carmine", r: 0x96, g: 0x00, b: 0x18 },
    { name: "Cerise", r: 0xDE, g: 0x31, b: 0x63 },
    { name: "Chili red", r: 0xE2, g: 0x3D, b: 0x28 },
    { name: "Chocolate cosmos", r: 0x58, g: 0x11, b: 0x1A },
    { name: "Cinnabar", r: 0xE4, g: 0x4D, b: 0x2E },
    { name: "Coquelicot", r: 0xFF, g: 0x38, b: 0x00 },
    { name: "Coral pink", r: 0xF8, g: 0x83, b: 0x79 },
    { name: "Cordovan", r: 0x89, g: 0x3F, b: 0x45 },
    { name: "Cornell red", r: 0xB3, g: 0x1B, b: 0x1B },
    { name: "Crimson", r: 0xDC, g: 0x14, b: 0x3C },
    { name: "Dark red", r: 0x8B, g: 0x00, b: 0x00 },
    { name: "Fire brick", r: 0xB2, g: 0x22, b: 0x22 },
    { name: "Fire engine red", r: 0xCE, g: 0x20, b: 0x29 },
    { name: "Folly", r: 0xFF, g: 0x00, b: 0x4F },
    { name: "Garnet", r: 0x73, g: 0x36, b: 0x35 },
    { name: "Imperial red", r: 0xED, g: 0x29, b: 0x39 },
    { name: "Indian red", r: 0xCD, g: 0x5C, b: 0x5C },
    { name: "Jasper", r: 0xD0, g: 0x53, b: 0x40 },
    { name: "Light coral", r: 0xF0, g: 0x80, b: 0x80 },
    { name: "Light red", r: 0xFF, g: 0x7F, b: 0x7F },
    { name: "Madder", r: 0xA5, g: 0x00, b: 0x21 },
    { name: "Mahogany", r: 0xC0, g: 0x40, b: 0x00 },
    { name: "Maroon", r: 0x80, g: 0x00, b: 0x00 },
    { name: "Misty rose", r: 0xFF, g: 0xE4, b: 0xE1 },
    { name: "Off-red (RGB)", r: 0xFE, g: 0x00, b: 0x00 },
    { name: "Old rose", r: 0xC0, g: 0x80, b: 0x81 },
    { name: "OU crimson", r: 0x84, g: 0x16, b: 0x17 },
    { name: "Penn red", r: 0x99, g: 0x00, b: 0x00 },
    { name: "Persian red", r: 0xCC, g: 0x33, b: 0x33 },
    { name: "Pink", r: 0xFF, g: 0xC0, b: 0xCB },
    { name: "Red", r: 0xFF, g: 0x00, b: 0x00 },
    { name: "Red-brown", r: 0xA5, g: 0x2A, b: 0x2A },
    { name: "Red (CMYK)", r: 0xED, g: 0x1B, b: 0x24 },
    { name: "Red (Crayola)", r: 0xEE, g: 0x20, b: 0x4E },
    { name: "Red (Munsell)", r: 0xF2, g: 0x00, b: 0x3C },
    { name: "Red (NCS)", r: 0xC4, g: 0x02, b: 0x34 },
    { name: "Red (Pantone)", r: 0xED, g: 0x28, b: 0x39 },
    { name: "Redwood", r: 0xAB, g: 0x4E, b: 0x52 },
    { name: "Rojo", r: 0xE6, g: 0x00, b: 0x26 },
    { name: "Rose ebony", r: 0x67, g: 0x48, b: 0x46 },
    { name: "Rose red", r: 0xC2, g: 0x1E, b: 0x56 },
    { name: "Rose taupe", r: 0x90, g: 0x5D, b: 0x5D },
    { name: "Rose vale", r: 0xAB, g: 0x4E, b: 0x52 },
    { name: "Rosewood", r: 0x65, g: 0x00, b: 0x0B },
    { name: "Rosy brown", r: 0xBC, g: 0x8F, b: 0x8F },
    { name: "Rust", r: 0xB7, g: 0x41, b: 0x0E },
    { name: "Rusty red", r: 0xDA, g: 0x2C, b: 0x43 },
    { name: "Salmon", r: 0xFA, g: 0x80, b: 0x72 },
    { name: "Salmon pink", r: 0xFF, g: 0x91, b: 0xA4 },
    { name: "Scarlet", r: 0xFF, g: 0x24, b: 0x00 },
    { name: "Syracuse red-orange", r: 0xD4, g: 0x45, b: 0x00 },
    { name: "Tea rose (red)", r: 0xF4, g: 0xC2, b: 0xC2 },
    { name: "Tomato", r: 0xFF, g: 0x63, b: 0x47 },
    { name: "Turkey red", r: 0xA9, g: 0x11, b: 0x01 },
    { name: "Vermilion", r: 0xE3, g: 0x42, b: 0x34 },
    { name: "Wine", r: 0x72, g: 0x2F, b: 0x37 },
];
