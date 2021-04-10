/**
 * A GameCtrl is made to join the model part with the seen part
 */
class GameCtrl{

    /**
     * To be created, a gameCtrl we just need a game and view
     */
    constructor(){
        this._game = new Game(RAW_MAZE);
        this._view = new GameView(this._game);
    }
}