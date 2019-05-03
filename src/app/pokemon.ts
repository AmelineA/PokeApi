export class Pokemon {
    id: number;
    name: string;
    favori : boolean;
    picture: string;
    weight: string;
    height: string;

    constructor() {
        this.favori = false;
    }

    setWeight(weight: number){
        this.weight = (weight*0.1).toFixed(2);
    }

    setHeight(height: number){
        this.height = (height*0.1).toFixed(2);
    }
}
