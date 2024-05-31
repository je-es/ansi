/* ---------------------------------------- PACK ----------------------------------------  */

    import * as ansi                 from '../../dist/main';

/* ---------------------------------------- ---- ----------------------------------------  */



/* ---------------------------------------- TEST ----------------------------------------  */

    describe("createAnsiRegex", () =>
    {
        test("Should be defined !", () =>
        {
            expect(ansi.createAnsiRegex).toBeDefined();
        });

        test("Is text containing ANSI escape codes", () =>
        {
            expect(ansi.createAnsiRegex().test('\u001B[4m plain \u001B[0m')).toEqual(true);
        });
    
        test("Is text not containing ANSI escape codes", () =>
        {
            expect(ansi.createAnsiRegex().test('plain')).toEqual(false);
        });
    });

    describe("removecodess", () =>
    {
        test("Should be defined !", () =>
        {
            expect(ansi.removecodess).toBeDefined();
        });

        test("Removes ANSI escape codes", () =>
        {
            expect(ansi.removecodess('\u001B[31mPlain !\u001B[0m')).toEqual('Plain !');
        });
    });

    describe("calculateLength", () =>
    {
        test("Should be defined !", () =>
        {
            expect(ansi.calculateLength).toBeDefined();
        });

        test("Calculates the length of a string", () =>
        {
            expect(ansi.calculateLength('\u001B[31mPlain !\u001B[0m')).toEqual(7);
        });

        test("Calculates the length of a string, excluding ANSI escape sequences", () =>
        {
            expect(ansi.calculateLength('\u001B[31mPlain !\u001B[0m', true)).toEqual(9);
        });
    });

    describe("calculateStrippedLength", () =>
    {
        test("Should be defined !", () =>
        {
            expect(ansi.calculateStrippedLength).toBeDefined();
        });

        test("Calculates the length of a string, excluding ANSI escape sequences", () =>
        {
            expect(ansi.calculateStrippedLength('\u001B[31mPlain !\u001B[0m')).toEqual(7);
        });
    });

    describe("containscodess", () =>
    {
        test("Should be defined !", () =>
        {
            expect(ansi.containscodess).toBeDefined();
        });

        test("Checks if the string contains ANSI escape codes", () =>
        {
            expect(ansi.containscodess('\u001B[31mPlain !\u001B[0m')).toEqual(true);
        });
    });

/* ---------------------------------------- ---- ----------------------------------------  */