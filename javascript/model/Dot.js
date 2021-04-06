/**
 * A point is a fixed object that Pac-Man can eat
 */
class Dot extends Tile {

    /**
     * To be created, a dot just need an id and a boolean
     * @param {string} id unique dot’s id
     * @param {boolean} isEnergizer lets you know if it is a "super eraser"
     */
    constructor(id, isEnergizer) {
        super(id);
        this._isEnergizer = isEnergizer;
    }

    /**
     * @returns {boolean}
     */
    get isEnergizer() { return this._isEnergizer; }
}