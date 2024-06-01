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
      type t_rgb    = [ r : number, g : number, b : number ];

      type t_color  = string | t_rgb;

      type t_attr   = string | string[];
      ```

      ```ts
      interface i_style
      {
          bg              ?: t_color,
          fg              ?: t_color,
          attr            ?: t_attr,
      }
      ```

      ```ts
      const style
      = (str: string, options: i_style)
      : string
      ```

    - **Example**

      ```ts
      style('Hello World',
      {
          fg      : 'white',
          bg      : '#000000', // or #000
          attr    : ['bold', 'underline']
      })
      ```

---

> **Made with ❤ by [Maysara Elshewehy](https://github.com/Maysara-Elshewehy)**
