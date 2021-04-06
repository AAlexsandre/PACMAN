/**
 * A position of the game components for the moment the tiles
 */
class Position {

    /**
     * 
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