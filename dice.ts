export class Dice
{
    private _value: number;
    constructor(_value: number)
    {
        this._value = _value;
    }
    roll():number { 
        return Math.floor(Math.random() * (this._value - 1 + 1) + 1);
    }
}