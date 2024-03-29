/**
 * The maze is a modelisation of the maze of pacman
 */
class Maze {

    /**
     * To created a maze weed need, rawMaze and two layers
     * @param {Array} rawMaze 
     */
    constructor(rawMaze) {
        this._rawMaze = rawMaze;

        this._layerWall = new Layer(RAW_MAZE.table.length, RAW_MAZE.table[0].length);
        this._layerDot = new Layer(RAW_MAZE.table.length, RAW_MAZE.table[0].length);

        this._pacman;
        this._ghost;

        this._nbDots = 0;

        for (let i = 0; i < RAW_MAZE.table.length; i++) {
            for (let j = 0; j < RAW_MAZE.table[i].length; j++) {

                if (RAW_MAZE.table[i][j] == 1) {
                    this._layerWall.setTile(new Position(i, j), new Wall(`w${i}_${j}`));
                }

                if (RAW_MAZE.table[i][j] == 2) {
                    this._layerDot.setTile(new Position(i, j), new Dot(`d${i}_${j}`, false));
                    this._nbDots++;
                }

                if (RAW_MAZE.table[i][j] == 3) {
                    this._layerDot.setTile(new Position(i, j), new Dot(`d${i}_${j}`, true));
                    this._nbDots++;
                }

                if (RAW_MAZE.table[i][j] == 4) {
                    this._pacman = new Position(i, j);
                }

                if (RAW_MAZE.table[i][j] == 5) {
                    this._ghost = new Position(i, j);

                }
            }
        }


    }

    /**
     * this function checks if the position is in the array range and then returns the "wall" tile at the given position 
     * @param {Position} pos row + column
     * @return {Tile}
     */
    getWallLayerTile(pos) {
        if (this._layerWall.contains(pos)) {
            return this._layerWall.getTile(pos);
        }

    }

    /**
     * this function checks if the position is in the array range and then returns the "dot" tile at the given position 
     * @param {Position} pos row + column
     * @return {Tile}
     */
    getDotLayerTile(pos) {
        if (this._layerDot.contains(pos)) {
            return this._layerDot.getTile(pos);
        }
    }

    /**
     * @return {Array}
     */
    get rawMaze() { return this._rawMaze }

    /**
     * @return {number}
     */
    get nbRows() { return this._rawMaze.nbRows }

    /**
     * @return {number}
     */
    get nbColumns() { return this._rawMaze.nbColumns }

    /**
     * @return {Array}
     */
    get layerWall() { return this._layerWall }

    /**
     * @return {Array}
     */
    get layerDot() { return this._layerDot }

    /**
     * @return {Position}
     */
    get pacman() { return this._pacman }

    /**
     * This function check if the position is the range of array and it is a wall
     * @param {Position} position 
     * @return {Boolean}
     */
    canWalkOn(position) {
        return this._layerWall.contains(position) && !this._layerWall.hasTile(position);
    }

    /**
     * This function check if the position is the range of array and it is a dot
     * @param {Position} position 
     * @return {Boolean}
     */
    canPick(position) {
        return this._layerDot.contains(position) && this._layerDot.hasTile(position);
    }

    /**
     * This function return the dot of the position in the array
     * @param {Position} position position of array
     * @return {Dot}
     * @throws {string}
     */
    pick(position) {
        try {
            if (this.canPick(position)) {
                let savePosition = this._layerDot.getTile(position);
                this._layerDot._tab[position._row][position._column] = null;
                return savePosition;
            }

            throw new Error("In this position he has no food for pacman");

        } catch (error) {
            console.log(error);
        }

    }

    /**
     * This function checks if all dot were eat
     */
    isEmpty() {
        for (let i = 0; i < this._layerDot._tab.length; i++) {
            for (let j = 0; j < this.layerDot._tab[0].length; j++) {
                if (this._layerDot._tab[i][j] != null) {
                    return false;
                }
            }
        }
        return true;
    }

}