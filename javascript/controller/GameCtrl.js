/**
 * A GameCtrl is made to join the model part with the seen part
 */
class GameCtrl {

    /**
     * To be created, a gameCtrl we just need a game and view
     */
    constructor() {
        this._game = new Game(RAW_MAZE);
        this._view = new GameView(this._game,this);

        this._pacmanCtrl = new PacmanCtrl(this._game._pacman);
        this._pacmanView = new PacmanView(this._pacmanCtrl, this._view._start);
    }
    

    /**
     * This function must call the functions at regular intervals of 0.3 seconds
     */
    run() {
        this._game.saveScore();
        this._view.displayGameOver();
        this._timer = setInterval(() => {
            if (!this._game.pacmanHasBeenEaten()) {
                this._game.moveSprites();
                this._view.updateFrame();
                if(this._game.lvlSucceed()){
                    this._game.nextLevel();
                    this._view.nextLevel();
                }

            } else {
                this._game.respawn();
                this._view.updateLives();

                if (this._game.isGameOver()) {
                    this._game.saveScore();
                    this._view.displayGameOver();
                    clearInterval(this._timer);
                }
                
            }
        }, RUN_INTERVAL);
    }

    /**
     * This function calls the function run()
     */
    startHasBeenRequested(){
        this.run();
    }


}