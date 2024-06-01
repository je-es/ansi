/**
 * @name                                    tools.ts
 * @description                             tools module
*/


/* ---------------------------------------- PACK ----------------------------------------  */

    const segmenter                         = new Intl.Segmenter();

/* ---------------------------------------- ---- ----------------------------------------  */


/* ---------------------------------------- CORE ----------------------------------------  */

    /**
     * Regular expression to handling ANSI escape codes.
     *
     * @param {boolean} onlyFirst - Only return the first match
     * @return {RegExp} The regular expression
    */
    export const createAnsiRegex
    = (onlyFirst: boolean = false)
    : RegExp =>
    {
        // source: https://github.com/chalk/ansi-regex/blob/main/index.js#L3
        const pattern =
        [
            '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
            '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
        ]
        .join('|');

        return new RegExp(pattern, onlyFirst ? undefined : 'g');
    }

    /**
     * Strips ANSI escape codes from a given string.
     *
     * @param {string} str - The input string to strip ANSI escape codes from.
     * @return {string} The input string with ANSI escape codes removed.
    */
    export const removecodess
    = (str : string)
    : string =>
    {
        const reg = createAnsiRegex();

        return str.replace(reg, '');
    }

    /**
     * Calculates the length of a string, optionally excluding the length of ANSI escape sequences.
     *
     * @param {string} str - The string to calculate the length of.
     * @param {boolean} [excludeAnsi=false] - Whether to exclude the length of ANSI escape sequences.
     * @return {number} The length of the string, optionally excluding the length of ANSI escape sequences.
    */
    export const calcLength
    = (str:string, excludeAnsi = false)
    : number =>
    {
        if (excludeAnsi)
        {
            return str.length - calcStrippedLength(str);
        }

        return calcStrippedLength(str);
    }

    /**
     * Calculates the length of a string, excluding ANSI escape sequences.
     *
     * @param {string} str - The string to calculate the length of.
     * @return {number} The length of the string, excluding ANSI escape sequences.
    */
    export const calcStrippedLength
    = (str:string)
    : number =>
    {
        if (str === '')
        return 0;

        str = removecodess(str);

        if (str === '')
        return 0;

        let length = 0;

        for (const _ of segmenter.segment(str))
        length++;

        return length;
    }

    /**
     * Check if the string contains ANSI escape codes.
     *
     * @param {string} str - The string to check.
     * @return {boolean} Whether the string contains ANSI escape codes.
    */
    export const hasAnsi
    = (str:string)
    : boolean =>
    {
        const reg = createAnsiRegex();

        return reg.test(str);
    }

/* ---------------------------------------- ---- ----------------------------------------  */