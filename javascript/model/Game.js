/**
 * 
 */
class Game {

    /**
     * 
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