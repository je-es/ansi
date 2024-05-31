# [@je-es/ansi API](./api.md) Tools

```ts
import { <tool> } from '@je-es/ansi';
```

| Tool                                                | Desc                                                                                         |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [removecodess](#removecodess)                       | Strips ANSI escape codes from a given string.                                                |
| [calculateLength](#calculatelength)                 | Calculates the length of a string, optionally excluding the length of ANSI escape sequences. |
| [calculateStrippedLength](#calculatestrippedlength) | Calculates the length of a string, excluding ANSI escape sequences.                          |
| [containscodess](#containscodess)                   | Check if the string contains ANSI escape codes.                                              |

---

- #### createAnsiRegex

    ```ts
    /**
     * Regular expression to handling ANSI escape codes.
     *
     * @param {boolean} onlyFirst - Only return the first match
     * @return {RegExp} The regular expression
    */
    const createAnsiRegex
    = (onlyFirst: boolean = false)
    : RegExp
    ```

- #### removecodess

    ```ts
    /**
     * Strips ANSI escape codes from a given string.
     *
     * @param {string} str - The input string to strip ANSI escape codes from.
     * @return {string} The input string with ANSI escape codes removed.
    */
    const removecodess
    = (str : string)
    : string
    ```

- #### calculateLength

    ```ts
    /**
     * Calculates the length of a string, optionally excluding the length of ANSI escape sequences.
     *
     * @param {string} str - The string to calculate the length of.
     * @param {boolean} [excludeAnsi=false] - Whether to exclude the length of ANSI escape sequences.
     * @return {number} The length of the string, optionally excluding the length of ANSI escape sequences.
    */
    const calculateLength
    = (str:string, excludeAnsi = false)
    : number
    ```

- #### calculateStrippedLength

    ```ts
    /**
     * Calculates the length of a string, excluding ANSI escape sequences.
     *
     * @param {string} str - The string to calculate the length of.
     * @return {number} The length of the string, excluding ANSI escape sequences.
    */
    const calculateStrippedLength
    = (str:string)
    : number
    ```

- #### containscodess

    ```ts
    /**
     * Check if the string contains ANSI escape codes.
     *
     * @param {string} str - The string to check.
     * @return {boolean} Whether the string contains ANSI escape codes.
    */
    const containscodess
    = (str:string)
    : boolean
    ```

---

> **Made with ❤ by [Maysara Elshewehy](https://github.com/Maysara-Elshewehy)**
