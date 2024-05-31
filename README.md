# [@je-es](https://github.com/je-es)/ansi

> This repository provides a robust and standardized solution for handling **ANSI escape sequences** in your applications.
>
> **ANSI escape sequences** are used to control text formatting, color, and other output options on text terminals.
>
> This library simplifies the process of incorporating these sequences, ensuring consistent behavior across different environments.

- #### 📥 Usage

    ```Bash
    npm i @je-es/ansi
    ```

- #### 🌟 Syntax

    ```ts
    import { style } from '@je-es/ansi';

    style('Hello World',
    {
        fg      ?: string('name' | '#hex') | array[r,g,b],
        bg      ?: string('name' | '#hex') | array[r,g,b],
        attr    ?: string | string []
    })
    ```

---

### Documentation

  - [API](./src/docs/src/api.md)

---

> **Made with ❤ by [Maysara Elshewehy](https://github.com/Maysara-Elshewehy)**