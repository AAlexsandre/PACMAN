/**
 * A wall is a fixed object that Pac-Man cannot pass through it
 */
class Wall extends Tile{
    
    /**
     * To be created, a wall just need an id
     * @param {string} id 
     */
    constructor(id){
        super(id);
    }
}