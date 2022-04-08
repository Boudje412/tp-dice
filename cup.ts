import { Dice } from "./dice";
export class Cup{
    private _value: number;
    private _dices: Array<Dice>;
    throw():number[]
    {
        let i=this._value;
        let result=[]
        this._dices.forEach(dice =>{
            dice.roll();
        })
        // while(i>0)
        // {
        //     result.push(_dices.roll());
        //     i--
        // }
        return result;
    }
    printScore(score:number[]):void
    {
        score.forEach(a => console.log(a))
    }
}