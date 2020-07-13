export class Player {
    id: number;
    name: string;
    tokenColor: string;
    pos: number;

    constructor(id: number, name: string, tokenColor: string, pos: number) {
        this.id         = id;
        this.name       = name;
        this.tokenColor = tokenColor;
        this.pos        = pos;
    }
}
