# [@je-es/ansi](../../../README.md) API

| API                 | Desc                                           |
| ------------------- | ---------------------------------------------- |
| [Style](#style)     | Function to styling a string using ansi codes  |
| [Codes](./codes.md) | JSON for ansi escape sequences                 |
| [Tools](./tools.md) | Functions to working with ANSI escape sequence |

---

- #### Style

    - **Prototype**

      ```ts
      interface   t_style
      {
          bg    ?: string|number[],
          fg    ?: string|number[],
          attr  ?: string|string[],
      }
      ```

      ```ts
      const       style
      = (str: string, options: t_style)
      : string
      ```

    - **Example**

      ```ts
      style('Hello World',
      {
          fg      : 'white',
          bg      : 'black',
          attr    : ['bold', 'underline']
      })
      ```

---

> **Made with ❤ by [Maysara Elshewehy](https://github.com/Maysara-Elshewehy)**
