/**
 * A component it's an element of the pacman game
 */
class Component {

    /**
     * To be created, a component we just need an id
     * @param {string} id unique Component
     */
    constructor(id) {
        this._id = id;
    }

    /**
     * @returns {string}
     */
    get id() { return this._id; }
}