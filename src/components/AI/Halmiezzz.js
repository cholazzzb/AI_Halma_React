const deepcopy = require("rfdc")();

var gameBoard = []
var analyzeBoard = deepcopy(gameBoard)

export default class Halmiezzz{
    constructor(playerId) {
        this.playerId = playerId
        this.moves = []
        this.bestMove = []
        this.analyticBoard = []
    }
    print10(test){
        console.log(this.playerId, 10, test)
    }
    updateAnalyticBoard(newBoardPosition){
        this.analyticBoard = newBoardPosition
    }

    // Use Greedy Algorithm


}