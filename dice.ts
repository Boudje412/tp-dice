export class Dice
{
    private _value: number;
    private _nbFace: number;
    constructor(nbFace?: number)
    {
        this._nbFace =nbFace||6;
    }
    roll():number { 
        return Math.floor(Math.random() * (this._nbFace - 1 + 1) + 1);
    }
}