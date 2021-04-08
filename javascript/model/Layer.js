/**
 * The layers each group together a set of tiles in order to deconstruct a level. 
 */
class Layer {

    /**
     * To be created, a layer we just need a nbRows and nbColumns
     * @param {number} nbRows 
     * @param {number} nbColumns 
     * @param {Tile} tab 
     */
    constructor(nbRows, nbColumns,tab) {
        this._nbRows = nbRows;
        this._nbColumns = nbColumns;
        
        tab = Array(nbRows).fill().map(() => Array(nbColumns));
        this._tab = tab;
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
     * @return {Tile}
     */
    get tab() { return this._tab }


    /**
     * This function check if the position are in the range of array
     * @param {Position} pos 
     * @return {Boolean}
     */
    contains(pos) {
        return (pos.row > 0 && pos.row < this.nbRows) && (pos.column > 0 && pos.column < this.nbColumns);
    }

    /**
     * This function put a tile in the position of array
     * @param {Position} pos 
     */
    setTile(pos, tile) {
        this._tab[pos.row][pos.column] = tile;
    }

    /**
     * This function return a tile of one position from array
     * @param {Position} pos 
     * @return {Tile}
     */
    getTile(pos) {
        return this._tab[pos.row][pos.column];
    }

    /**
     * This function check if the tile are in the position from array
     * @param {Position} pos 
     */
    hasTile(pos) {
        return this._tab[pos.row][pos.column] != null;
    }

}