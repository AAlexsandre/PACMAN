/**
 * a direction is a coordinate from which pacman can move from box to box 
 */
class Direction {
    /**
     * To be created, a Direction just need an deltaRow and DeltaColumn
     * @param {number} deltaRow 
     * @param {number} deltaColumn 
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