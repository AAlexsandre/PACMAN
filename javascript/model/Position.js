/**
 * A position of the game components
 */
class Position {

    /**
     * To be created, a Position we need row and column
     * @param {number} row index of the row
     * @param {number} column index of the column
     */
    constructor(row, column) {
        this._row = row;
        this._column = column;
    }

    /**
     * @return {number}
     */
    get row() { return this._row; }

    /**
     * @return {number}
     */
    get column() { return this._column; }

    /**
     * this function return the next position in the given direction
     * @param {Direction} dir 
     * @return {Position}
     */
    nextPosition(dir) {

        switch (dir) {
            case Direction.NORTH:
                return new Position(this._row - 1, this._column);
                
            case Direction.SOUTH:
                return new Position(this._row + 1, this._column);

            case Direction.EAST:
                return new Position(this._row, this._column + 1);

            case Direction.WEST:
                return new Position(this._row, this._column - 1);
        }

    }
}