/**
 * Pacman in the window
 */
class PacmanView {

    /**
     * To be created, a PacmanView we just need a pacmanCtrl
     * @param {PacmanCtrl} pacmanController 
     */
    constructor(pacmanController) {
        this._pacmanController = pacmanController;

        window.addEventListener("keydown", arrow => {
            switch (arrow.code) {
                case "ArrowUp":
                    this._pacmanController.askToChangeDirection(Direction.NORTH);
                    break;
                case "ArrowDown":
                    this._pacmanController.askToChangeDirection(Direction.SOUTH);
                    break;
                case "ArrowLeft":
                    this._pacmanController.askToChangeDirection(Direction.WEST);
                    break;
                case "ArrowRight":
                    this._pacmanController.askToChangeDirection(Direction.EAST);
                    break;
            }
        })
    }

}