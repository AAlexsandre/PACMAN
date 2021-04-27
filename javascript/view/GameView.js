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

        let count = 0;
        let count2 = 0;
        let count3 = 0;

        for (let i = 0; i < game.rawMaze.layerWall.tab.length; i++) {
            for (let j = 0; j < game.rawMaze.layerWall.tab[i].length; j++) {



                if (JSON.stringify(game.rawMaze.layerWall.tab[i][j]) === JSON.stringify(new Wall("w" + count2))) {
                    $("#scene").append("<span id=tile" + count + " class=wall>■</span>");
                    modifsElements(i, j, count);
                    count2++;
                }


                if (JSON.stringify(game.rawMaze.layerDot.tab[i][j]) === JSON.stringify(new Dot("d" + count3, false))) {
                    $("#scene").append("<span id=tile" + count + " class=eraser>©</span>");
                    modifsElements(i, j, count);
                    count3++;
                }

                if (JSON.stringify(game.rawMaze.layerDot.tab[i][j]) === JSON.stringify(new Dot("d" + count3, true))) {
                    $("#scene").append("<span id=tile" + count + " class=superEraser>¢</span>");
                    modifsElements(i, j, count);
                    count3++;
                }


                count++;
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
        this.updateFrame();


        /**
        * This function add a tile
        * @param {number} i row of array
        * @param {number} j column of array
        * @param {number} count id of span
         */
        function modifsElements(i, j, count) {
            $("#tile" + count).css("position", "absolute");
            $("#tile" + count).css("top", 15 * i + "px");
            $("#tile" + count).css("left", 15 * j + "px");
            $("#tile" + count).css("margin-left", "0.1em");
        }
    }

    /**
     * this function allows you to refresh the game 
     */
    updateFrame() {
        $("#" + PACMAN_ID).css("position", "absolute");
        $("#" + PACMAN_ID).css("top", 15 * this._game._pacman._position._row + "px");
        $("#" + PACMAN_ID).css("left", 15 * this._game._pacman._position._column + "px");
        
        if(this._game._pacman._direction == Direction.NORTH){
            $("#" + PACMAN_ID).css("border-color", "transparent yellow yellow yellow");
        }
        if(this._game._pacman._direction == Direction.EAST){
            $("#" + PACMAN_ID).css("border-color", "yellow transparent yellow yellow");
        }
        if(this._game._pacman._direction == Direction.SOUTH){
            $("#" + PACMAN_ID).css("border-color", "yellow yellow transparent yellow");
        }
        if(this._game._pacman._direction == Direction.WEST){
            $("#" + PACMAN_ID).css("border-color", "yellow yellow yellow transparent");
        }
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


}