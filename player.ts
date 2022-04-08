import {Cup} from "./cup"
import {Dice} from "./dice"
export class Player{
    private _name:string;
    private _score:number;
    constructor(name:string)
    {
        this._name = name;
        this._score = 0;
    }
    get name():string{
        return this._name;
    }
    play(cup:Cup):void{
        let dice=new Dice(6);
        let res=cup.throw(dice);
        res.forEach(a=>{
            this._score=this._score+a
        })
    }
    printScore():void{
        console.log(this._name+' a pour score:'+this._score)
    }
}