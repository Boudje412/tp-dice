import { Dice } from "./dice";
export class Cup{
    private _value: number;
    constructor(value: number)
    {
        this._value = value;
    }
    throw(dice:Dice):number[]
    {
        let i=this._value;
        let result=[]
        while(i>0)
        {
            result.push(dice.roll());
            i--
        }
        return result;
    }
    printScore(score:number[]):void
    {
        score.forEach(a => console.log(a))
    }
}