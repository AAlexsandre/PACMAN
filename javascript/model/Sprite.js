/**
 * A sprite is a mobile element from the game
 */
class Sprite extends Component {

    /**
     * To be created, a Sprite just need an position, direction and id
     * @param {Position} position 
     * @param {Direction} direction 
     * @param {string} id 
     */
    constructor(position, direction, id) {
        super(id);
        this._position = position;
        this._direction = direction;

        this._askedToChangeDirection = false;
        this._askedDirection;

        this._previousPosition = this._position;

        this._isDead = false;
        this._startPosition = position;
        this._startDirection = direction;
    }


    /**
     * @return {Position}
     */
    get position() { return this._position }

    /**
     * @return {Direction}
     */
    get direction() { return this._direction }

    /**
     * @return {Boolean}
     */
    get directionAskToChangeDirection() { return this._direction.askedToChangeDirection }

    /**
     * @return {Direction}
     */
    get directionAskedDirection() { return this._direction.askedDirection }


    /**
     * This function change the position
     */
    move() {
        this._previousPosition = this._position;
        this._position = this._position.nextPosition(this._direction);
    }

    /**
     * This function allows to signify that the next opportunity, the sprite will have to change direction 
     * @param {Direction} direction 
     */
    askToChangeDirection(direction) {
        this._askedToChangeDirection = true;
        this._askedDirection = direction;
    }

    /**
     * This function makes the change of direction of the sprite effective 
     */
    changeDirection() {
        this._direction = this._askedDirection;
    }

    /**
     * This function change the direction is the ghosts was block by a wall
     */
    notifyIsBlocked() {
        if (this._direction == Direction.WEST){
            this._direction == Direction.NORTH;
        }
        if (this._direction == Direction.NORTH){
            this._direction == Direction.EAST;
        }
        if (this._direction == Direction.EAST){
            this._direction == Direction.SOUTH;
        }
        if (this._direction == Direction.SOUTH){
            this._direction == Direction.WEST;
        }
        

    }

    /**
     * @return {Boolean}
     */
    get isDead() { return this._isDead }

    /**
     * This function change the attributes isDead 
     */
    hasBeenEaten() {
        this._isDead = !this._isDead;
    }

    /**
     * This function gives life to the sprite 
     */
    respawn() {
        this._isDead = !this._isDead;
        this._position = this._startPosition;
        this._direction = this._startDirection;
    }
}