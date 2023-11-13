import { GalacticAge } from './../src/galactic-age-cal.js';

describe(GalacticAge, () => {
    let galacticAge;
    beforeEach(() => {
        galacticAge = new GalacticAge(33);
    });
    test('It should correctly calculate a users age from a users input date: 11/14/1990', () => {
    expect(galacticAge.age).toEqual(33);
    });
});
