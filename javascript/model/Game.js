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

        for (let i = 0; i < RAW_MAZE.table.length; i++) {
            for (let j = 0; j < RAW_MAZE.table[0].length; j++) {
                if (RAW_MAZE.table[i][j] == 4) {
                    this._pacman = new Pacman(new Position(i, j), Direction.WEST);
                }
            }
        }

    }

    /**
     * @return {Array}
     */
    get rawMaze() { return this._rawMaze }

    /**
     * @return {Pacman}
     */
    get pacman() { return this._pacman }


    /**
     * This function will move the pacman
     */
    moveSprites() {  
        if (this._rawMaze.canWalkOn((this._pacman._position).nextPosition(this._pacman._direction))) {
            this._pacman.move();
        }
        if (this._pacman._askedDirection != null && (this._rawMaze.canWalkOn((this._pacman._position).nextPosition(this._pacman._askedDirection)))) {
            this._pacman.changeDirection();
        }
    }
}

