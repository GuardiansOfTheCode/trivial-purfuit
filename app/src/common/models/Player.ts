export class Player {
    id: number;
    name: string;
    tokenColor: string;
    pos: number;
    cakeSlices: number;
    numQuestions: number;
    numCorrect: number;

    constructor(id: number, name: string, tokenColor: string, pos: number, cakeSlices: number, numQuestions: number, numCorrect: number) {
        this.id = id;
        this.name = name;
        this.tokenColor = tokenColor;
        this.pos = pos;
        this.cakeSlices = cakeSlices;
        this.numQuestions = numQuestions;
        this.numCorrect = numCorrect;
    }
}
