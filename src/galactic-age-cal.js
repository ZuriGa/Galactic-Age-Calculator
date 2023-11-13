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

}