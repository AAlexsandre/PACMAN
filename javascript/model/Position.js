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
}