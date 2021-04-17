/**
 * A direction is a coordinate from which pacman can move from box to box 
 */
class Direction {
    /**
     * To be created, a Direction just need an deltaRow and DeltaColumn
     * @param {number} deltaRow number of row 
     * @param {number} deltaColumn number of column
     */
    constructor(deltaRow, deltaColumn) {
        this._deltaRow = deltaRow;
        this._deltaColumn = deltaColumn;
    }


    /**
     * @return {number}
     */
    get deltaRow() { return this._deltaRow }

    /**
     * @return {number}
     */
    get deltaColumn() { return this._deltaColumn }

}