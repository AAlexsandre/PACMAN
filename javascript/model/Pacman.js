/**
 * The powerful, the pleasurable, the indestructible Pacman.
 */
class Pacman extends Sprite {

    /**
     * To created a Pacman we just need a position and direction
     * @param {Position}  position the initial position
     * @param {Direction} direction the initial direction
     */
    constructor(position, direction) {
        super(position, direction, PACMAN_ID);
        this._nbLives = 2;
    }

    /**
     * @return {number}
     */
    get nbLives(){return this._nbLives};

    /**
     * This function indicated pacman is dead and remove one point lifes
     */
    hasBeenEaten(){
        super.hasBeenEaten(this._isDead);
        this._nbLives--;
    }
}