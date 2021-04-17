/**
 * The layers each group together a set of tiles in order to deconstruct a level. 
 */
class Layer {

    /**
     * To be created, a layer we just need a nbRows and nbColumns
     * @param {number} nbRows 
     * @param {number} nbColumns 
     */
    constructor(nbRows, nbColumns) {
        this._nbRows = nbRows;
        this._nbColumns = nbColumns;
        this._tab = Array(nbRows).fill().map(() => Array(nbColumns));
    }

    /**
     * @return {number}
     */
    get nbRows() { return this._nbRows }

    /**
     * @return {number}
     */
    get nbColumns() { return this._nbColumns }

    /**
     * @return {Array}
     */
    get tab() { return this._tab }


    /**
     * This function check if the position are in the range of array
     * @param {Position} pos Position
     * @return {Boolean}
     */
    contains(pos) {
        return (pos._row >= 0 && pos._row < this._nbRows) && (pos._column >= 0 && pos._column < this._nbColumns);
    }

    /**
     * This function put a tile in the position of array
     * @param {Position} pos Position
     */
    setTile(pos, tile) {
        this._tab[pos._row][pos._column] = tile;
    }

    /**
     * This function return a tile of one position from array
     * @param {Position} pos Position
     * @return {Tile}
     */
    getTile(pos) {
        return this._tab[pos._row][pos._column];
    }

    /**
     * This function check if the tile are in the position from array
     * @param {Position} pos Position
     * @return {Boolean}
     */
    hasTile(pos) {
        return this._tab[pos._row][pos._column] != null;
    }

}