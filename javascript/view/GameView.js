/**
 * A GameView centralize the display of each component of game 
 */
class GameView {

    /**
     * To be created, a gameView we just need a game
     * @param {Game} game 
     */
    constructor(game) {
        this._game = game;
        for (let i = 0; i < game.rawMaze.layerWall.tab.length; i++) {
            for (let j = 0; j < game.rawMaze.layerWall.tab[i].length; j++) {



                if (JSON.stringify(game.rawMaze.layerWall.tab[i][j]) === JSON.stringify(new Wall(`w${i}_${j}`))) {
                    $("#scene").append(`<span id=w${i}_${j} class=wall>■</span>`);
                    $(`#w${i}_${j}`).css("position", "absolute");
                    $(`#w${i}_${j}`).css("top", 15 * i + "px");
                    $(`#w${i}_${j}`).css("left", 15 * j + "px");
                    $(`#w${i}_${j}`).css("margin-left", "0.1em");
                }


                if (JSON.stringify(game.rawMaze.layerDot.tab[i][j]) === JSON.stringify(new Dot(`d${i}_${j}`, false))) {
                    $("#scene").append(`<span id=d${i}_${j} class=eraser>©</span>`);
                    $(`#d${i}_${j}`).css("position", "absolute");
                    $(`#d${i}_${j}`).css("top", 15 * i + "px");
                    $(`#d${i}_${j}`).css("left", 15 * j + "px");
                    $(`#d${i}_${j}`).css("margin-left", "0.1em");
                }

                if (JSON.stringify(game.rawMaze.layerDot.tab[i][j]) === JSON.stringify(new Dot(`d${i}_${j}`, true))) {
                    $("#scene").append(`<span id=d${i}_${j} class=superEraser>©</span>`);
                    $(`#d${i}_${j}`).css("position", "absolute");
                    $(`#d${i}_${j}`).css("top", 15 * i + "px");
                    $(`#d${i}_${j}`).css("left", 15 * j + "px");
                    $(`#d${i}_${j}`).css("margin-left", "0.1em");
                }
            }

        }

        $("#scene").append("<span id=" + PACMAN_ID + "></span>");
        $("#scene").append("<span class=ennemy id=" + GHOST_ONE_ID + "></span>");
        $("#scene").append("<span class=ennemy id=" + GHOST_TWO_ID + "></span>");
        $("#scene").append("<span class=ennemy id=" + GHOST_THREE_ID + "></span>");
        $("#scene").append("<span class=ennemy id=" + GHOST_FOUR_ID + "></span>");
        for (let i = 0; i < this._game._pacman.nbLives; i++) {
            $("#nbLife").append("<span class = pacmanLifes>☺</span>");
        }

        $("#place").append("<div id=currentScore class=SameThings></div>")
        this.updateFrame();
    }

    /**
     * this function allows you to refresh the game 
     */
    updateFrame() {
        $("#" + PACMAN_ID).css("position", "absolute");
        $("#" + PACMAN_ID).css("top", 15 * this._game._pacman._position._row + "px");
        $("#" + PACMAN_ID).css("left", 15 * this._game._pacman._position._column + "px");

        if (this._game._pacman._direction == Direction.NORTH) {
            $("#" + PACMAN_ID).css("border-color", "transparent yellow yellow yellow");
        }
        if (this._game._pacman._direction == Direction.EAST) {
            $("#" + PACMAN_ID).css("border-color", "yellow transparent yellow yellow");
        }
        if (this._game._pacman._direction == Direction.SOUTH) {
            $("#" + PACMAN_ID).css("border-color", "yellow yellow transparent yellow");
        }
        if (this._game._pacman._direction == Direction.WEST) {
            $("#" + PACMAN_ID).css("border-color", "yellow yellow yellow transparent");
        }

        if (this._game._removedDot != null) {
            if (this._game._pacman._position != this._game.rawMaze.layerDot.tab[this._game._pacman._position.row][this._game._pacman._position.column]) {
                $("#" + this._game._removedDot._id).css("color", "transparent");
            }
        }
        $("#currentScore").text("Score en cours : "+this._game._scores);
        this.toSpawGhost();

    }

    /**
     * This function refresh the position of the ghosts
     */
    toSpawGhost() {
        $(".ennemy").css("position", "absolute");
        $("#" + GHOST_ONE_ID).css("top", 15 * this._game._ghostOne._position._row + "px");
        $("#" + GHOST_ONE_ID).css("left", 15 * this._game._ghostOne._position._column + "px");

        $("#" + GHOST_TWO_ID).css("top", 15 * this._game._ghostTwo._position._row + "px")
        $("#" + GHOST_TWO_ID).css("left", 15 * this._game._ghostTwo._position._column + "px")

        $("#" + GHOST_THREE_ID).css("top", 15 * this._game._ghostThree._position._row + "px")
        $("#" + GHOST_THREE_ID).css("left", 15 * this._game._ghostThree._position._column + "px")

        $("#" + GHOST_FOUR_ID).css("top", 15 * this._game._ghostFour._position._row + "px")
        $("#" + GHOST_FOUR_ID).css("left", 15 * this._game._ghostFour._position._column + "px")

    }

    /**
     * This function remove on the view a life point
     */
    updateLives() {
        $(".pacmanLifes:last").remove();
    }

    /**
     * This function display the highscore
     */
    displayGameOver() {
        console.log(this._game._highScore);
        $("#highScore").text("HIGHSCORES : " + this._game._highScore);
    }


}