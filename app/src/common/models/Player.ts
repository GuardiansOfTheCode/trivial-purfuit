export class Player {
    id: number;
    name: string;
    tokenColor: string;
    pos: number;
    numQuestions: number;
    numCorrect: number;
    totalCakeSlices: number;
    cakeSlice1: boolean;
    cakeSlice2: boolean;
    cakeSlice3: boolean;
    cakeSlice4: boolean;

    constructor(id: number,
                name: string,
                tokenColor: string,
                pos: number,
                numQuestions: number,
                numCorrect: number,
                totalCakeSlices: number,
                cakeSlice1: boolean,
                cakeSlice2: boolean,
                cakeSlice3: boolean,
                cakeSlice4: boolean) {
        this.id = id;
        this.name = name;
        this.tokenColor = tokenColor;
        this.pos = pos;
        this.numQuestions = numQuestions;
        this.numCorrect = numCorrect;
        this.totalCakeSlices = totalCakeSlices;
        this.cakeSlice1 = cakeSlice1;
        this.cakeSlice2 = cakeSlice2;
        this.cakeSlice3 = cakeSlice3;
        this.cakeSlice4 = cakeSlice4;
    }
}
