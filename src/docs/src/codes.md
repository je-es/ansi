# [@je-es/ansi API](./api.md) Codes

```ts
import { codes } from '@je-es/ansi';

codes.<group>.<element>;
```

| Group             | Desc                                    |
| ----------------- | --------------------------------------- |
| [fg](#fg)         | ANSI foreground color escape sequences. |
| [bg](#bg)         | ANSI background color escape sequences. |
| [attr](#attr)     | Text attributes escape sequences.       |
| [cursor](#cursor) | Cursor movement escape sequences.       |
| [erase](#erase)   | Erasing text or parts of the screen.    |
| [scroll](#scroll) | Scrolling escape sequences.             |
| [misc](#misc)     | Miscellaneous escape sequences.         |

---

- #### fg

    | Color        | Escape Sequence | Description             |
    | ------------ | --------------- | ----------------------- |
    | Black        | \u001b[30m      | Black foreground        |
    | Red          | \u001b[31m      | Red foreground          |
    | Green        | \u001b[32m      | Green foreground        |
    | Yellow       | \u001b[33m      | Yellow foreground       |
    | Blue         | \u001b[34m      | Blue foreground         |
    | Magenta      | \u001b[35m      | Magenta foreground      |
    | Cyan         | \u001b[36m      | Cyan foreground         |
    | White        | \u001b[37m      | White foreground        |
    | Bright Black | \u001b[90m      | Bright black foreground |
    | ...          | ...             | ...                     |

- #### bg

    | Color        | Escape Sequence | Description             |
    | ------------ | --------------- | ----------------------- |
    | Black        | \u001b[40m      | Black background        |
    | Red          | \u001b[41m      | Red background          |
    | Green        | \u001b[42m      | Green background        |
    | Yellow       | \u001b[43m      | Yellow background       |
    | Blue         | \u001b[44m      | Blue background         |
    | Magenta      | \u001b[45m      | Magenta background      |
    | Cyan         | \u001b[46m      | Cyan background         |
    | White        | \u001b[47m      | White background        |
    | Bright Black | \u001b[100m     | Bright black background |
    | ...          | ...             | ...                     |

- #### attr

    | Attribute     | Escape Sequence | Description                |
    | ------------- | --------------- | -------------------------- |
    | Reset         | \u001b[0m       | Resets all attributes      |
    | Bold          | \u001b[1m       | Sets text to bold          |
    | Dim           | \u001b[2m       | Sets text to dim           |
    | Italic        | \u001b[3m       | Sets text to italic        |
    | Underline     | \u001b[4m       | Sets text to underline     |
    | Blink         | \u001b[5m       | Sets text to blink (slow)  |
    | Rapid Blink   | \u001b[6m       | Sets text to blink (rapid) |
    | Inverse       | \u001b[7m       | Sets text to inverse       |
    | Hidden        | \u001b[8m       | Sets text to hidden        |
    | Strikethrough | \u001b[9m       | Sets text to strikethrough |
    | ...           | ...             | ...                        |

- #### cursor

    | Movement         | Escape Sequence         | Description                        |
    | ---------------- | ----------------------- | ---------------------------------- |
    | Save Position    | \u001b[s                | Saves cursor position              |
    | Restore Position | \u001b[u                | Restores cursor position           |
    | Hide Cursor      | \u001b[?25l             | Hides cursor                       |
    | Show Cursor      | \u001b[?25h             | Shows cursor                       |
    | Next Line        | \u001b[E                | Moves cursor to next line          |
    | Prev Line        | \u001b[F                | Moves cursor to previous line      |
    | Forward          | \u001b[G                | Moves cursor forward               |
    | Backward         | \u001b[H                | Moves cursor backward              |
    | Move To          | \u001b[{line};{column}H | Moves cursor to specified position |
    | ...              | ...                     | ...                                |

- #### erase

    | Type   | Escape Sequence | Description             |
    | ------ | --------------- | ----------------------- |
    | Line   | \u001b[2K       | Erases line             |
    | Screen | \u001b[2J       | Clears screen           |
    | Down   | \u001b[J        | Erases to end of screen |
    | ...    | ...             | ...                     |

- #### scroll

    | Direction | Escape Sequence | Description  |
    | --------- | --------------- | ------------ |
    | Up        | \u001b[S        | Scrolls up   |
    | Down      | \u001b[T        | Scrolls down |
    | ...       | ...             | ...          |

- #### misc

    | Action       | Escape Sequence       | Description   |
    | ------------ | --------------------- | ------------- |
    | Reset All    | \u001b[0m             | Resets all    |
    | Reset Cursor | \u001b[?25l\u001b[?0c | Resets cursor |
    | Reset Colors | \u001b[39;49m         | Resets colors |
    | Reset Screen | \u001b[2J\u001b[1;1H  | Resets screen |
    | Reset Line   | \u001b[2K\u001b[1G    | Resets line   |
    | ...          | ...                   | ...           |

---

> **Made with ❤ by [Maysara Elshewehy](https://github.com/Maysara-Elshewehy)**
