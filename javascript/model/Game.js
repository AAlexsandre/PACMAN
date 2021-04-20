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

                if (RAW_MAZE.table[i][j] == 5) {
                    this._ghostOne = new Ghost(new Position(i, j), Direction.WEST, GHOST_ONE_ID);
                    this._ghostTwo = new Ghost(new Position(i, j), Direction.NORTH, GHOST_TWO_ID);
                    this._ghostThree = new Ghost(new Position(i, j), Direction.EAST, GHOST_THREE_ID);
                    this._ghostFour = new Ghost(new Position(i, j), Direction.WEST, GHOST_FOUR_ID);
                    
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

    get ghostOne(){ return this._ghostOne}
    get ghostTwo(){ return this._ghostTwo}
    get ghostThree(){ return this._ghostThree}
    get ghostFour(){ return this._ghostFour}


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

        if (this._rawMaze.canWalkOn((this._ghostOne._position).nextPosition(this._ghostOne._direction))) {
            this._ghostOne.move();
        }
        if (this._ghostOne._askedDirection != null && (this._rawMaze.canWalkOn((this._ghostOne._position).nextPosition(this._ghostOne._askedDirection)))) {
            this._ghostOne.changeDirection();
        }

        if (this._rawMaze.canWalkOn((this._ghostTwo._position).nextPosition(this._ghostTwo._direction))) {
            this._ghostTwo.move();
        }
        if (this._ghostTwo._askedDirection != null && (this._rawMaze.canWalkOn((this._ghostTwo._position).nextPosition(this._ghostTwo._askedDirection)))) {
            this._ghostTwo.changeDirection();
        }
        if (this._rawMaze.canWalkOn((this._ghostThree._position).nextPosition(this._ghostThree._direction))) {
            this._ghostThree.move();
        }
        if (this._ghostThree._askedDirection != null && (this._rawMaze.canWalkOn((this._ghostThree._position).nextPosition(this._ghostThree._askedDirection)))) {
            this._ghostThree.changeDirection();
        }
        if (this._rawMaze.canWalkOn((this._ghostFour._position).nextPosition(this._ghostFour._direction))) {
            this._ghostFour.move();
        }
        if (this._ghostFour._askedDirection != null && (this._rawMaze.canWalkOn((this._ghostFour._position).nextPosition(this._ghostFour._askedDirection)))) {
            this._ghostFour.changeDirection();
        }
    }
}

