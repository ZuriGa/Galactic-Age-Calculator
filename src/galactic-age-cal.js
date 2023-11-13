export class GalacticAge {
    constructor(age) {
        this.age = age;
    }

    calculateMercuryAge() {
        return parseFloat((this.age / .24). toFixed(2));
    }

}