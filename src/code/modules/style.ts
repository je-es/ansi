/**
 * @name                                    style.ts
 * @description                             style module
*/


/* ---------------------------------------- PACK ----------------------------------------  */

    import * as codes                       from '../json/codes.json';
    export                                  { codes };

/* ---------------------------------------- ---- ----------------------------------------  */


/* ---------------------------------------- TYPE ----------------------------------------  */

    export type         t_rgb =
    [
        r               : number,
        g               : number,
        b               : number,
    ];

    export type         t_color = string|t_rgb;

    export type         t_attr  = string|string[];

    export interface    i_style
    {
        bg              ?: t_color,
        fg              ?: t_color,
        attr            ?: t_attr,
    }

/* ---------------------------------------- ---- ----------------------------------------  */


/* ---------------------------------------- CORE ----------------------------------------  */

    /**
     * Applies styles to a given string.
     *
     * @param {string}  str             - The string to apply styles to.
     * @param {i_style} options         - The styles to apply.
     * @param {t_color} options.fg      - The foreground color style to apply.
     * @param {t_color} options.bg      - The background color style to apply.
     * @param {t_attr}  options.attr    - The attribute style to apply.
     *
     * @return {string} The string with styles applied.
    */
    export const style
    = (str: string, options: i_style)
    : string =>
    {
        // res
        let res = '';

        // attr
        if(options.attr)
        {
            // is string ?
            if(typeof options.attr === 'string')
            {
                res += Helpers.attr(options.attr);
            }

            // is array ?
            else
            {
                for(let i = 0; i < options.attr.length; i++)
                res += Helpers.attr(options.attr[i]);
            }
        }

        // bg
        if(options.bg) res += Helpers.color(options.bg, 'bg');

        // fg
        if(options.fg) res += Helpers.color(options.fg, 'fg');

        // str
        res += str;

        // reset
        res += codes.attr.reset;

        // output : res
        return res;
    };

/* ---------------------------------------- ---- ----------------------------------------  */


/* ---------------------------------------- HELP ----------------------------------------  */

    const Helpers =
    {
        /**
         * Retrieves the attribute style from the codes object based on the provided reference.
         *
         * @param {string}  ref             - The reference to the attribute style. Must be a string.
         *
         * @throws {Error} If the reference is not a string.
         *
         * @return {string | undefined} The attribute style corresponding to the reference, or undefined if not found.
        */
        attr: (ref: string)
        : string | undefined =>
        {
            if (typeof ref !== 'string')
            {
                throw new Error('Attribute reference must be a string');
            }

            return codes.attr[ref as keyof typeof codes.attr];
        },

        /**
         * Applies a color style to the foreground or background of a string.
         *
         * @param { t_color }       ref     - The color reference to apply. Can be a string representing a color name or a hex code, or an array representing RGB values.
         * @param { 'fg' | 'bg' }   _for    - The type of color to apply. Must be 'fg' for foreground or 'bg' for background.
         *
         * @throws {Error} If ref is a string and not a valid color name or hex code.
         * @throws {Error} If ref is an array and any of the RGB values are not numbers between 0 and 255.
         *
         * @return {string} The ANSI escape code representing the color style.
        */
        color: (ref: t_color, _for: 'fg' | 'bg')
        : string =>
        {
            // by string
            if (typeof ref === 'string')
            {
                // by string : name
                if (codes[_for as keyof typeof codes].hasOwnProperty(ref))
                {
                    return (codes[_for as keyof typeof codes] as { [key: string]: string })[ref];
                }

                // by string : hex
                if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(ref))
                {
                    // #? -> ?
                    let hex = ref.replace('#', '');

                    // 3 -> 6
                    if (hex.length === 3)
                    hex = hex.split('').map(char => char + char).join('');

                    // 6 -> bigint
                    const bigint = parseInt(hex, 16);

                    // bigint -> rgb
                    const r = (bigint >> 16) & 255;
                    const g = (bigint >> 8) & 255;
                    const b = bigint & 255;

                    // rgb -> string
                    return _for === 'fg' ? `\u001b[38;2;${r};${g};${b}m` : `\u001b[48;2;${r};${g};${b}m`;
                }

                // invalid string syntax
                throw new Error('Invalid string color syntax');
            }

            // by array
            else
            {
                // by array : rgb
                {
                    // t_rgb -> r, g, b
                    const [r, g, b] = ref;

                    // r, g, b -> string
                    if ([r, g, b].every(n => typeof n === 'number' && n >= 0 && n <= 255))
                    return _for === 'fg' ? `\u001b[38;2;${r};${g};${b}m` : `\u001b[48;2;${r};${g};${b}m`;
                }

                // invalid array syntax
                throw new Error('Invalid array color syntax');
            }
        }
    };

/* ---------------------------------------- ---- ----------------------------------------  */