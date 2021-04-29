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

    get ghostOne() { return this._ghostOne }
    get ghostTwo() { return this._ghostTwo }
    get ghostThree() { return this._ghostThree }
    get ghostFour() { return this._ghostFour }


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
        } else {
            this._ghostOne.notifyIsBlocked();
        }

        if (this._ghostOne._askedDirection != null && (this._rawMaze.canWalkOn((this._ghostOne._position).nextPosition(this._ghostOne._askedDirection)))) {
            this._ghostOne.changeDirection();
        }


        if (this._rawMaze.canWalkOn((this._ghostTwo._position).nextPosition(this._ghostTwo._direction))) {
            this._ghostTwo.move();
        } else {
            this._ghostOne.notifyIsBlocked();
        }

        if (this._ghostTwo._askedDirection != null && (this._rawMaze.canWalkOn((this._ghostTwo._position).nextPosition(this._ghostTwo._askedDirection)))) {
            this._ghostTwo.changeDirection();
        }
        if (this._rawMaze.canWalkOn((this._ghostThree._position).nextPosition(this._ghostThree._direction))) {
            this._ghostThree.move();
        } else {
            this._ghostOne.notifyIsBlocked();
        }

        if (this._ghostThree._askedDirection != null && (this._rawMaze.canWalkOn((this._ghostThree._position).nextPosition(this._ghostThree._askedDirection)))) {
            this._ghostThree.changeDirection();
        }

        if (this._rawMaze.canWalkOn((this._ghostFour._position).nextPosition(this._ghostFour._direction))) {
            this._ghostFour.move();

        } else {
            this._ghostOne.notifyIsBlocked();
        }

        if (this._ghostFour._askedDirection != null && (this._rawMaze.canWalkOn((this._ghostFour._position).nextPosition(this._ghostFour._askedDirection)))) {
            this._ghostFour.changeDirection();

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
        if (this._ghostOne.canEat(this._pacman)) {
            this._pacman.hasBeenEaten();
            return this._pacman._isDead;
        }
        if (this._ghostTwo.canEat(this._pacman)) {
            this._pacman.hasBeenEaten();
            return this._pacman._isDead;
        }
        if (this._ghostThree.canEat(this._pacman)) {
            this._pacman.hasBeenEaten();
            return this._pacman._isDead;
        }
        if (this._ghostFour.canEat(this._pacman)) {
            this._pacman.hasBeenEaten();
            return this._pacman._isDead;
        }
    }

    /**
     * This function puts pacman and the ghosts in the starting positions 
     */
    respawn() {
        this.pacman.respawn();
        this.pacman._askedDirection = Direction.WEST;

        this.ghostOne.respawn();
        this.ghostTwo.respawn();
        this.ghostThree.respawn();
        this.ghostFour.respawn();
    }

    /**
     * @return {number}
     */
    get highScore() { return this._highScore }

    saveScore() {
        this._highScore = localStorage.getItem("highScore");
        if(!this._highScore){
            this._highScore = 0;
        }

        localStorage.setItem("highScore", this._highScore);

        if(this._highScore < this._scores){
            this._highScore = this._scores;
            localStorage.highScore = this._highScore;
        }
    }

    /**
     * This function allows to know if the level is complete
     */
    lvlSucceed(){
        return this._rawMaze.isEmpty();
    }

    /**
     * This function allows to create a new maze
     */
    nextLevel(){
        this._rawMaze  = new Maze(RAW_MAZE);
        this.respawn();
    }
}

