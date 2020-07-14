export class Player {
    id: number;
    name: string;
    tokenColor: string;
    pos: number;
    cakeSlices: number;

    constructor(id: number, name: string, tokenColor: string, pos: number, cakeSlices: number) {
        this.id         = id;
        this.name       = name;
        this.tokenColor = tokenColor;
        this.pos        = pos;
        this.cakeSlices = cakeSlices;
    }
}
