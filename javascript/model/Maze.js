/**
 * The maze is a modelisation of the maze of pacman
 */
class Maze {

    /**
     * 
     * @param {Array} rawMaze 
     */
    constructor(rawMaze) {
        this._rawMaze = rawMaze;

        this._layerWall = new Layer(RAW_MAZE.table.length, RAW_MAZE.table[0].length);
        this._layerDot = new Layer(RAW_MAZE.table.length, RAW_MAZE.table[0].length);

        let wallId = 0;
        let dotId = 0;

        for (let i = 0; i < RAW_MAZE.table.length; i++) {
            for (let j = 0; j < RAW_MAZE.table[i].length; j++) {

                if (RAW_MAZE.table[i][j] == 1) {
                    this._layerWall.setTile(new Position(i, j), new Wall("w" + wallId));
                    wallId++;
                }

                if (RAW_MAZE.table[i][j] == 2) {
                    this._layerDot.setTile(new Position(i, j), new Dot("d" + dotId));
                    dotId++;
                }

                if (RAW_MAZE.table[i][j] == 3) {
                    this._layerDot.setTile(new Position(i, j), new Dot("d" + dotId));
                    dotId++;
                }
            }
        }


    }

    getWallLayerTile(pos){
        if (this._layerWall.contains(pos)){
            return this._layerWall.getTile(pos);
        }
        
    }
    getDotLayerTile(pos){
        if (this._layerDot.contains(pos)){
            return this._layerDot.getTile(pos);
        }
    }

    /**
     * @return {Array}
     */
    get rawMaze() { return this._rawMaze }

    /**
     * @return {number}
     */
    get nbRows() { return this._rawMaze.nbRows }

    /**
     * @return {number}
     */
    get nbColumns() { return this._rawMaze.nbColumns }

    /**
     * @return {Array}
     */
    get layerWall() { return this._layerWall}
    
    /**
     * @return {Array}
     */
    get layerDot() { return this._layerDot}

}