/**
 * A ghost is a mobile element from the game like pacman
 */
class Ghost extends Sprite {

    /**
     * To be created, a ghost we just need a position, direction and the id
     * @param {Position} position 
     * @param {Direction} direction 
     * @param {string} id 
     */
    constructor(position, direction, id) {
        super(position, direction, id);
        this._choiceNewDirection();
    }

    /**
     * This function choose the direction for ghosts
     */
    _choiceNewDirection() {
        this._interval = setInterval(() => {
            let numberToChangeDirection = Math.floor(Math.random() * 4 + 1);
                if (numberToChangeDirection == 1) {
                    this._direction = Direction.WEST;
                }
                if (numberToChangeDirection == 2) {
                    this._direction = Direction.NORTH;
                }
                if (numberToChangeDirection == 3) {
                    this._direction = Direction.EAST;
                }
                if (numberToChangeDirection == 4) {
                    this._direction = Direction.SOUTH;
                }
            
        }, 4000);

    }

    /**
     * This function checks if pacman position are the same with a ghost
     * @param {Pacman} pacman 
     */
    canEat(pacman) {

        return ((pacman.position.row == this.position.row && pacman.position.column == this.position.column)
            || (this._previousPosition.row == pacman.position.row && this._previousPosition.column == pacman.position.column)
            && (pacman._previousPosition.row == this.position.row && pacman._previousPosition.column == this.position.column));


    }

    /**
     * This function checks if the ghosts was block by wall
     */
    notifyIsBlocked() {
        super.notifyIsBlocked();
    }
}