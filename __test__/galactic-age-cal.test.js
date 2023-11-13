import { experiments } from 'webpack';
import { GalacticAge } from './../src/galactic-age-cal.js';

describe(GalacticAge, () => {
    let galacticAge;
    beforeEach(() => {
        galacticAge = new GalacticAge(33);
    });
    test('It should correctly calculate a users age from a users input date: 11/14/1990', () => {
        expect(galacticAge.age).toEqual(33);
    });

    test('It should calculate a users age in Mercury years', () => {
        expect(galacticAge.calculateMercuryAge()).toEqual(137.50);
    });
    
    test('It should calculate a users age in Venus years', () => {
        expect(galacticAge.calculateVenusAge()).toEqual(53.23);
    });

    test('It should calculate a users age in Mars years', () => {
        expect(galacticAge.calculateMarsAge()).toEqual(17.55);
    });

    test('It should calculate a users age in Jupiter years', () => {
        expect(galacticAge.calculateJupiterAge()).toEqual(2.78);
    });

    test('It should calculate how many years have passed since a users past birthday in earth years', () => {
        expect(galacticAge.calculateYearsSinceBirthday(25).earthYears).toEqual(8);
    });

    test('It should calculate how many years have passed since a users past birthday in Mercury years', () => {
        expect(galacticAge.calculateYearsSinceBirthday(25).mercuryYears).toEqual(1.92);
    });

    test('It should calculate how many years have passed since a users past birthday in Venus years', () => {
        expect(galacticAge.calculateYearsSinceBirthday(25).venusYears).toEqual(4.96);
    });

    test('It should calculate how many years have passed since a users past birthday in Mars years', () => {
        expect(galacticAge.calculateYearsSinceBirthday(25).marsYears).toEqual(15.04);
    });

    test('It should calculate how many years have passed since a users past birthday in Jupiter years', () => {
        expect(galacticAge.calculateYearsSinceBirthday(25).jupiterYears).toEqual(94.88);
    });

    test('It should calculate how many years have yet to pass until a future birthday in Earth years', () => {
        expect(galacticAge.calculateYearsToFutureBirthday(45)).toEqual({
            earthYears: 12,
        });
    });


});
