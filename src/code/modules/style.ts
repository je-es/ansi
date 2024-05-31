/**
 * @name                                    style.ts
 * @description                             style module
*/


/* ---------------------------------------- PACK ----------------------------------------  */

    import * as codes                       from '../json/codes.json';

/* ---------------------------------------- ---- ----------------------------------------  */


/* ---------------------------------------- TYPE ----------------------------------------  */

    /**
     * Options for the style function.
     *
     * @param {string|number[]} fg              - The foreground color style to apply.
     * @param {string|number[]} bg              - The background color style to apply.
     * @param {string|string[]} attr            - The attribute style to apply.
    */
    export interface t_style
    {
        bg              ?: string|number[],
        fg              ?: string|number[],
        attr            ?: string|string[],
    }

    export { codes };

/* ---------------------------------------- ---- ----------------------------------------  */


/* ---------------------------------------- CORE ----------------------------------------  */

    /**
     * Applies styles to a given string.
     *
     * @param {string} str                      - The string to apply styles to.
     * @param {t_style} options                 - The styles to apply.
     * @param {string|number[]} options.fg      - The foreground color style to apply.
     * @param {string|number[]} options.bg      - The background color style to apply.
     * @param {string|string[]} options.attr    - The attribute style to apply.
     *
     *
     * @return {string} The string with styles applied.
    */
    export const style
    = (str: string, options: t_style)
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
         * Retrieves the ANSI escape code for the specified attribute.
         *
         * @param {string} ref - The name of the attribute.
         * @throws {Error} If the input is not a string.
         * @return {string|undefined} The ANSI escape code for the specified attribute, or undefined if the attribute is not found.
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
         * Retrieves the ANSI escape code for the specified color.
         *
         * @param {string|Array<number>} ref - The color name or RGB values.
         * @param {string} [_for='fg'] - The type of color ('fg' for foreground, 'bg' for background).
         * @throws {Error} If the input is not a valid color name or RGB values.
         * @return {string} The ANSI escape code for the specified color.
        */
        color: (ref: string | number[], _for: string = 'fg')
        : string =>
        {
            const validColorTypes = ['fg', 'bg'];

            if (!validColorTypes.includes(_for))
            {
                throw new Error("_for must be 'fg' or 'bg'");
            }

            if (typeof ref === 'string')
            {
                if (codes[_for as keyof typeof codes].hasOwnProperty(ref))
                {
                    return (codes[_for as keyof typeof codes] as { [key: string]: string })[ref];
                }

                const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

                if (hexRegex.test(ref))
                    {
                    let hex = ref.replace('#', '');

                    if (hex.length === 3) {
                        hex = hex.split('').map(char => char + char).join('');
                    }

                    const bigint = parseInt(hex, 16);
                    const r = (bigint >> 16) & 255;
                    const g = (bigint >> 8) & 255;
                    const b = bigint & 255;
                    return _for === 'fg' ? `\u001b[38;2;${r};${g};${b}m` : `\u001b[48;2;${r};${g};${b}m`;
                }

                else
                {
                    throw new Error('Invalid hex color code');
                }

            }

            else if (Array.isArray(ref) && ref.length === 3)
            {
                const [r, g, b] = ref;
                if ([r, g, b].every(n => typeof n === 'number' && n >= 0 && n <= 255))
                {
                    return _for === 'fg' ? `\u001b[38;2;${r};${g};${b}m` : `\u001b[48;2;${r};${g};${b}m`;
                }

                else
                {
                    throw new Error('RGB values must be numbers between 0 and 255');
                }
            }

            else
            {
                throw new Error('ref must be a non-empty string or array[n,n,n]');
            }
        }
    };

/* ---------------------------------------- ---- ----------------------------------------  */