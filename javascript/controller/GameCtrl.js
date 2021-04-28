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
    run() {
        this._timer = setInterval(() => {
            if (!this._game.pacmanHasBeenEaten()) {
                this._game.moveSprites();
                this._view.updateFrame();
                if(this._game._rawMaze.isEmpty()){
                    clearInterval(this._timer);
                }

            } else {
                console.log("pacman a été manger")
                this._game.respawn();
                this._view.updateLives();

                if (this._game.isGameOver()) {
                    console.log("GAME OVER");
                    clearInterval(this._timer);
                }
                
            }
        }, RUN_INTERVAL);
    }


}