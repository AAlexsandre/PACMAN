/**
 * A Game is a facade
 */
class Game {

    /**
     * To be created, a game we just need a rawMaze
     * @param {Array} rawMaze 
     */
    constructor(rawMaze) {
        this._rawMaze = new Maze(rawMaze);
        
    }

    /**
     * @return {Array}
     */
    get rawMaze(){return this._rawMaze}

}