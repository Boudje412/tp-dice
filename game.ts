import { Cup } from "./cup";
import {Player} from "./player"
export class Game{
    private _nbRound!: number;
    private _players: Player[]=[];
    private _cup: Cup;

    initGame(...players: Player[]): void
    {
        this._players = players;
        this._nbRound = players.length+1;
        this._cup=new Cup()
        players.forEach
    }
    play(players: Player[]): void
    {
        while (this._nbRound!=0)
        {
            players.forEach(player =>{player.play})
            this._nbRound--
        }
        this.printWinner(players)
    }
    printWinner(players: Player[]):void
    {
        let scores=[];
        let winner=players[0]
        for(let i=1; i<players.length; i++)
        {
            if (winner._score<players[i]._score)
            {
                winner=players[i];
            }
        }
        console.log(winner.printScore+' Il a donc gagné bande de loosers')

    }
}