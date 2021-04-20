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

        this._previousPosition;
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

    notifyIsBlocked(){}


    _toKnowBeforePosition(direction) {
        switch (direction) {
            case Direction.WEST:
                this._previousPosition = Direction.EAST;
                break;
            case Direction.NORTH:
                this._previousPosition = Direction.SOUTH;
                break;
            case Direction.EAST:
                this._previousPosition = Direction.WEST;
                break;
            case Direction.SOUTH:
                this._previousPosition = Direction.NORTH;
                break;
        }
    }
}