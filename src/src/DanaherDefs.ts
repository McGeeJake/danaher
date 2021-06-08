import manifest from "manifest";

export namespace defs {

    export const fonts = manifest.fonts;

    export const colors = {
        black: { name: "black", label: "Black", cmyk: [0, 0, 0, 1], rgb: 0x000000 },
        white: { name: "white", label: "White", cmyk: [0, 0, 0, 0], rgb: 0xFFFFFF }
    };

    export const images = manifest.images;

}