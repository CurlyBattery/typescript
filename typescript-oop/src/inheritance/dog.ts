import { Pet } from './pet';

export class Dog extends Pet {
    private breed: string;

    constructor(_name: string, _breed: string) {
        super(_name);
        this.breed = _breed;
    }
}