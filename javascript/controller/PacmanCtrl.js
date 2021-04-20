/**
 * Pacman control
 */
class PacmanCtrl {

    /**
     * To be created, a pacmanCtrl we just need a pacman 
     * @param {Pacman} pacman 
     */
    constructor(pacman) {
        this._pacman = pacman;
    }

    /**
     * This function allows to signify that the next opportunity, the pacman will have to change direction 
     * @param {Direction} direction 
     */
    askToChangeDirection(direction) {
        this._pacman.askToChangeDirection(direction);
    }
}