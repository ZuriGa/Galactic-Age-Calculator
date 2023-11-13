export class GalacticAge {
    constructor(age) {
        this.age = age;
    }

    calculateMercuryAge() {
        return parseFloat((this.age / .24).toFixed(2));
    }

    calculateVenusAge() {
        return parseFloat((this.age / .62).toFixed(2));
    }

    calculateMarsAge() {
        return parseFloat((this.age / 1.88).toFixed(2));
    }

    calculateJupiterAge() {
        return parseFloat((this.age / 11.86).toFixed(2));
    }

    calculateYearsSinceBirthday(targetAge) {
        const yearsPassed = this.age - targetAge;
        return {
            earthYears: yearsPassed,
            mercuryYears: yearsPassed * 0.24,
            venusYears: yearsPassed * 0.62,
            marsYears: yearsPassed * 1.88,
            jupiterYears: yearsPassed * 11.86,
        };
    }

    calculateYearsToFutureBirthday(targetAge) {
        const yearsToPass = targetAge - this.age;
        return {
            earthYears: yearsToPass,
            mercuryYears: yearsToPass * 0.24,
            venusYears: parseFloat((yearsToPass * 0.62).toFixed(2)),
            marsYears: yearsToPass * 1.88,
            jupiterYears: yearsToPass * 11.86,
        };
    }

}