"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const pet_1 = require("./pet");
class Dog extends pet_1.Pet {
    constructor(_name, _breed) {
        super(_name);
        this.breed = _breed;
    }
}
exports.Dog = Dog;
//# sourceMappingURL=dog.js.map