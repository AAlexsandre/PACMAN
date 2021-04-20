/**
 * A ghost is a mobile element from the game like pacman
 */
class Ghost extends Sprite {
    
    /**
     * 
     * @param {Position} position 
     * @param {Direction} direction 
     * @param {string} id 
     */
    constructor(position, direction, id) {
        super(position, direction, id);
    }

    /**
     * 
     */
    _choiceNewDirection() {
        let timer = setInterval(() => {
            let test = Math.random() * (4 + 1);

            if (test = 1) {
                this._direction = Direction.WEST;
            }
            if (test = 2) {
                this._direction = Direction.NORTH;
            }
            if (test = 3) {
                this._direction = Direction.EAST;
            }
            if (test = 4) {
                this._direction = Direction.SOUTH;
            }
        }, 4000);

    }

    /**
     * 
     * @param {Pacman} pacman 
     */
    canEat(pacman) {
        return ((pacman.position.row == this.position.row && pacman.position.column == this.position.column)
        || (this._previousPosition.row == pacman.position.row && this._previousPosition.column == pacman.position.column)
        && (pacman._previousPosition.row == this.position.row && pacman._previousPosition.column == this.position.column));

    }

    /**
     * 
     */
    notifyIsBlocked() {

    }
}