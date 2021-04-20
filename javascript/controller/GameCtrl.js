/**
 * A GameCtrl is made to join the model part with the seen part
 */
class GameCtrl {

    /**
     * To be created, a gameCtrl we just need a game and view
     */
    constructor() {
        this._game = new Game(RAW_MAZE);
        this._view = new GameView(this._game);

        this._pacmanCtrl = new PacmanCtrl(this._game._pacman);
        this._pacmanView = new PacmanView(this._pacmanCtrl);
        
    }

    /**
     * This function must call the functions at regular intervals of 0.3 seconds
     */
    run(){
        this._timer = setInterval(() => {
            this._game.moveSprites();
            this._view.updateFrame();
        }, RUN_INTERVAL);
    }

}