/* ---------------------------------------- PACK ----------------------------------------  */

    import { codes, style }                 from '../../dist/main';

/* ---------------------------------------- ---- ----------------------------------------  */



/* ---------------------------------------- TEST ----------------------------------------  */

    describe("codes", () =>
    {
        test("Should be defined !", () =>
        {
            expect(codes).toBeDefined();
        });
    });

    describe("style", () =>
    {
        test("Should be defined !", () =>
        {
            expect(style).toBeDefined();
        });

            //  ?  cases for applying foreground color
        test("Apply foreground color using color name", () =>
        {
            const styledText = style(" ? ", { fg: "red" });
            expect(styledText).toEqual("\u001b[31m ? \u001b[0m");
        });

        test("Apply foreground color using hex code", () =>
        {
            const styledText = style(" ? ", { fg: "#de5151" });
            expect(styledText).toEqual("\u001b[38;2;222;81;81m ? \u001b[0m");
        });

        test("Apply foreground color using RGB array", () =>
        {
            const styledText = style(" ? ", { fg: [222, 81, 81] });
            expect(styledText).toEqual("\u001b[38;2;222;81;81m ? \u001b[0m");
        });

        //  ?  cases for applying background color
        test("Apply background color", () =>
        {
            const styledText = style(" ? ", { bg: "red" });
            expect(styledText).toEqual("\u001b[41m ? \u001b[0m");
        });

        //  ?  cases for applying attribute style
        test("Apply attribute style", () =>
        {
            const styledText = style(" ? ", { attr: "bold" });
            expect(styledText).toEqual("\u001b[1m ? \u001b[0m");
        });

        //  ?  cases for applying attribute style
        test("Apply attribute style as array", () =>
        {
            const styledText = style(" ? ", { attr: ["bold"] });
            expect(styledText).toEqual("\u001b[1m ? \u001b[0m");
        });
    });

/* ---------------------------------------- ---- ----------------------------------------  */