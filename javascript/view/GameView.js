/**
 * A GameView centralize the display of each component of game 
 */
class GameView {

    /**
     * To be created, a gameView we just need a game
     * @param {Game} game 
     * @param {GameCtrl} controller
     */
    constructor(game, controller) {
        this._game = game;
        this._controller = controller;
        let wallAppearance = Math.floor(Math.random() * 5 + 1);
        for (let i = 0; i < game.rawMaze.layerWall.tab.length; i++) {
            for (let j = 0; j < game.rawMaze.layerWall.tab[i].length; j++) {


                if (JSON.stringify(game.rawMaze.layerWall.tab[i][j]) === JSON.stringify(new Wall(`w${i}_${j}`))) {
                    switch (wallAppearance) {
                        case 1:
                            $("#scene").append(`<div id=w${i}_${j} class=wall>■</div>`);
                            break;
                        case 2:
                            $("#scene").append(`<div id=w${i}_${j} class=wall>♥</div>`);
                            break;
                        case 3:
                            $("#scene").append(`<div id=w${i}_${j} class=wall>♦</div>`);
                            break;
                        case 4:
                            $("#scene").append(`<div id=w${i}_${j} class=wall>♣</div>`);
                            break;
                        case 5:
                            $("#scene").append(`<div id=w${i}_${j} class=wall>♠</div>`);
                            break;


                    }
                    $(`#w${i}_${j}`).css("position", "absolute");
                    $(`#w${i}_${j}`).css("top", 15 * i + "px");
                    $(`#w${i}_${j}`).css("left", 15 * j + "px");
                    $(`#w${i}_${j}`).css("margin-left", "0.1em");

                }


                if (JSON.stringify(game.rawMaze.layerDot.tab[i][j]) === JSON.stringify(new Dot(`d${i}_${j}`, false))) {
                    $("#scene").append(`<div id=d${i}_${j} class=eraser>🍕</div>`);
                    this.LaysOutThePosition(i, j)

                }

                if (JSON.stringify(game.rawMaze.layerDot.tab[i][j]) === JSON.stringify(new Dot(`d${i}_${j}`, true))) {
                    $("#scene").append(`<div id=d${i}_${j} class=superEraser>🥩</div>`);
                    this.LaysOutThePosition(i, j);
                }
            }
        }

        $("#scene").append("<div id=" + PACMAN_ID + "></div>");
        $("#" + PACMAN_ID).before("<span id=pacmanMouthTop></span>");
        $("#" + PACMAN_ID).after("<span id=pacmanMouthBottom></span>");

        for (let index = 0; index < this._game._ghosts.length; index++) {
            $("#scene").append("<div class=ennemy id=" + this._game._ghosts[index]._id + "></div>");
        }

        for (let i = 0; i < this._game._pacman.nbLives; i++) {
            $("#nbLife").append("<div class = pacmanLifes>😀</div>");
        }
        this._game.saveScore();
        this.displayGameOver();

        $("#place").append("<div id=currentScore class=SameThings></div>");
        this.whenYouClicked();

        this.updateFrame();
    }

    /**
     * This function lays out the position of the erasers
     * @param {number} i 
     * @param {number} j 
     */
    LaysOutThePosition(i, j) {
        $(`#d${i}_${j}`).css("position", "absolute");
        $(`#d${i}_${j}`).css("top", 15 * i + "px");
        $(`#d${i}_${j}`).css("left", 15 * j + "px");
        $(`#d${i}_${j}`).css("margin-left", "0.1em");
    }

    /**
     * this function allows you to refresh the game 
     */
    updateFrame() {
        $("#"+ PACMAN_ID).css("position","absolute");
        $("#" + PACMAN_ID).css("top", 15 * this._game._pacman._position._row + "px");
        $("#" + PACMAN_ID).css("left", 15 * this._game._pacman._position._column + "px");
        $("#pacmanMouthTop").css("top", 15 * this._game._pacman._position._row + "px");
        $("#pacmanMouthTop").css("left", 15 * this._game._pacman._position._column + "px");
        $("#pacmanMouthBottom").css("top", 15 * this._game._pacman._position._row + "px");
        $("#pacmanMouthBottom").css("left", 15 * this._game._pacman._position._column + "px");

        
        if (this._game._pacman._direction == Direction.NORTH) {
            $("#pacmanMouthTop").css("border-color", "transparent yellow yellow yellow");
            $("#pacmanMouthBottom").css("border-color", "transparent yellow yellow yellow");
 
        }
        if (this._game._pacman._direction == Direction.EAST) {
            $("#pacmanMouthTop").css("border-color", "yellow transparent yellow yellow");
            $("#pacmanMouthBottom").css("border-color", "yellow transparent yellow yellow");
        }
        if (this._game._pacman._direction == Direction.SOUTH) {
            $("#pacmanMouthTop").css("border-color", "yellow yellow transparent yellow");
            $("#pacmanMouthBottom").css("border-color", "yellow yellow transparent yellow");
        }
        if (this._game._pacman._direction == Direction.WEST) {
            $("#pacmanMouthTop").css("border-color", "yellow yellow yellow transparent");
            $("#pacmanMouthBottom").css("border-color", "yellow yellow yellow transparent");
        }

        

        if (this._game._removedDot != null) {
            if (this._game._pacman._position != this._game.rawMaze.layerDot.tab[this._game._pacman._position.row][this._game._pacman._position.column]) {
                $("#" + this._game._removedDot._id).css("color", "transparent");
            }
        }
        $("#currentScore").text("Score en cours : " + this._game._scores);
        this.toSpawGhostAndChangeDirection();

    }

    /**
     * This function refresh the position of the ghosts
     */
    toSpawGhostAndChangeDirection() {
        $(".ennemy").css("position", "absolute");
        for (let index = 0; index < this._game._ghosts.length; index++) {
            $("#" + this._game._ghosts[index]._id).css("top", 15 * this._game._ghosts[index]._position._row + "px");
            $("#" + this._game._ghosts[index]._id).css("left", 15 * this._game._ghosts[index]._position._column + "px");
        }

    }

    /**
     * This function remove on the view a life point
     */
    updateLives() {
        $(".pacmanLifes:last").remove();
        $(".pacmanLifes:last").text("😰");
    }

    /**
     * This function display the highscore
     */
    displayGameOver() {
        $("#highScore").text("HIGHSCORES : " + this._game._highScore);
        if (this._game.isGameOver()) {
            $("#pacmanMouthTop").remove();
            $("#pacmanMouthBottom").remove();
            $("#scene").append("<div id=gameOver>GAME OVER</div>");
            $("#scene").append("<button id=restart class=button>RESTART</button>");
            this.removeAll();
            this.afterGameOver();
            $("#restart").click(this._controller.startHasBeenRequested.bind(this._controller));
        }
    }

    /**
     * This function remove all elements from the maze and create a new maze
     */
    nextLevel() {
        let nextLevel = this._game;
        this.removeAll();
        let viewNextLevel = new GameView(nextLevel, this._controller);
    }

    /**
     * This function hide the button start
     */
    startGame() {
        $("#start").hide();
        $("#gameOver").remove();
        $("#restart").remove();
    }

    /**
     * This function removes all elements from the pacman game
     * wall, dot, superDot, pacman, ghosts and pacman points lifes
     */
    removeAll() {
        $("#scene .wall").remove();
        $("#scene .eraser").remove();
        $("#scene .superEraser").remove();
        $("#scene #eaterDot").remove();
        $("#scene .ennemy").remove();
        $("#nbLife .pacmanLifes").remove();
    }

    /**
     * This function start the game and calls the startGame function
     */
    whenYouClicked() {
        $("#start").click(this._controller.startHasBeenRequested.bind(this._controller));
        $("#start").click(this.startGame);

    }

    /**
     * This function restart the game
     */
    afterGameOver() {
        this._controller = new GameCtrl();
        $("#restart").click(this.startGame);
    }


}