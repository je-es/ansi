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

    describe("removeAnsi", () =>
    {
        test("Should be defined !", () =>
        {
            expect(ansi.removeAnsi).toBeDefined();
        });

        test("Removes ANSI escape codes", () =>
        {
            expect(ansi.removeAnsi('\u001B[31mPlain !\u001B[0m')).toEqual('Plain !');
        });
    });

    describe("calcLength", () =>
    {
        test("Should be defined !", () =>
        {
            expect(ansi.calcLength).toBeDefined();
        });

        test("Calculates the length of a string", () =>
        {
            expect(ansi.calcLength('\u001B[31mPlain !\u001B[0m')).toEqual(7);
        });

        test("Calculates the length of a string, excluding ANSI escape sequences", () =>
        {
            expect(ansi.calcLength('\u001B[31mPlain !\u001B[0m', true)).toEqual(9);
        });
    });

    describe("calcStrippedLength", () =>
    {
        test("Should be defined !", () =>
        {
            expect(ansi.calcStrippedLength).toBeDefined();
        });

        test("Calculates the length of a string, excluding ANSI escape sequences", () =>
        {
            expect(ansi.calcStrippedLength('\u001B[31mPlain !\u001B[0m')).toEqual(7);
        });
    });

    describe("hasAnsi", () =>
    {
        test("Should be defined !", () =>
        {
            expect(ansi.hasAnsi).toBeDefined();
        });

        test("Checks if the string contains ANSI escape codes", () =>
        {
            expect(ansi.hasAnsi('\u001B[31mPlain !\u001B[0m')).toEqual(true);
        });
    });

/* ---------------------------------------- ---- ----------------------------------------  */