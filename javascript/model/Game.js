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
        this._scores = 0;
        this._removedDot;
        this._highScore;
        this._ghosts = new Array();

        for (let i = 0; i < RAW_MAZE.table.length; i++) {
            for (let j = 0; j < RAW_MAZE.table[0].length; j++) {
                if (RAW_MAZE.table[i][j] == 4) {
                    this._pacman = new Pacman(new Position(i, j), Direction.WEST);
                }

                if (RAW_MAZE.table[i][j] == 5) {
                    this._ghosts.push(this._ghostOne = new Ghost(new Position(i, j), Direction.WEST, GHOST_ONE_ID));
                    this._ghosts.push(this._ghostTwo = new Ghost(new Position(i, j), Direction.NORTH, GHOST_TWO_ID));
                    this._ghosts.push(this._ghostThree = new Ghost(new Position(i, j), Direction.EAST, GHOST_THREE_ID));
                    this._ghosts.push(this._ghostFour = new Ghost(new Position(i, j), Direction.WEST, GHOST_FOUR_ID));
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
        for (let index = 0; index < this._ghosts.length; index++) {
            if (this._rawMaze.canWalkOn((this._ghosts[index]._position).nextPosition(this._ghosts[index]._direction))) {
                this._ghosts[index].move();

            } else {
                this._ghosts[index].notifyIsBlocked();
            }

            if (this._ghosts[index]._askedDirection != null && (this._rawMaze.canWalkOn((this._ghosts[index]._position).nextPosition(this._ghosts[index]._askedDirection)))) {
                this._ghosts[index].changeDirection();
            }
            if (this._ghosts[index]._position._row == 14 && this._ghosts[index]._position._column == 0 && this._ghosts[index]._direction == Direction.WEST) {
                this._ghosts[index]._position = new Position(14, 27);
            }
    
            
            if (this._ghosts[index]._position._row == 14 && this._ghosts[index]._position._column == 27 && this._ghosts[index]._direction == Direction.EAST) {
                this._ghosts[index]._position = new Position(14, 0);
                
            }
        }

        if (this._rawMaze.canWalkOn((this._pacman._position).nextPosition(this._pacman._direction))) {
            this._pacman.move();
        }

        if (this._pacman._askedDirection != null && (this._rawMaze.canWalkOn((this._pacman._position).nextPosition(this._pacman._askedDirection)))) {
            this._pacman.changeDirection();
        }

        if (this._pacman._position._row == 14 && this._pacman._position._column == 0 && this._pacman._direction == Direction.WEST) {
            this._pacman._position = new Position(14, 27);
        }

        
        if (this._pacman._position._row == 14 && this._pacman._position._column == 27 && this._pacman._direction == Direction.EAST) {
            this.pacman._position = new Position(14, 0);
            
        }




        if (this._rawMaze.canPick(this._pacman._position)) {
            if (this._rawMaze._layerDot.hasTile(this._pacman._position)) {
                if (this._rawMaze._layerDot._tab[this._pacman._position._row][this._pacman._position._column]._isEnergizer) {
                    this._scores += 100;
                    this._removedDot = this._rawMaze.pick(this._pacman._position);
                } else {
                    this._scores += 10;
                    this._removedDot = this._rawMaze.pick(this._pacman._position);
                }
            }
        }
    }

    /**
     * This function indicates whether the number of pacman points is zero or not 
     * @return {Boolean}
     */
    isGameOver() {
        return this.pacman.nbLives == 0;
    }

    /**
     * This function indicates whether is the pacman as the same position with a ghost
     * @return {Boolean}
     */
    pacmanHasBeenEaten() {
        for (let index = 0; index < this._ghosts.length; index++) {
            if (this._ghosts[index].canEat(this._pacman)) {
                this._pacman.hasBeenEaten();
                return this._pacman._isDead;
            }
        }
    }

    /**
     * This function puts pacman and the ghosts in the starting positions 
     */
    respawn() {
        this.pacman.respawn();
        this.pacman._askedDirection = Direction.WEST;

        for (let index = 0; index < this._ghosts.length; index++) {
            this._ghosts[index].respawn();
        }

    }

    /**
     * @return {number}
     */
    get highScore() { return this._highScore }

    saveScore() {
        this._highScore = localStorage.getItem("highScore");
        if (!this._highScore) {
            this._highScore = 0;
        }

        localStorage.setItem("highScore", this._highScore);

        if (this._highScore < this._scores) {
            this._highScore = this._scores;
            localStorage.highScore = this._highScore;
        }
    }

    /**
     * This function allows to know if the level is complete
     */
    lvlSucceed() {
        return this._rawMaze.isEmpty();
    }

    /**
     * This function allows to create a new maze
     */
    nextLevel() {
        this._rawMaze = new Maze(RAW_MAZE);
        this.respawn();
    }
}

