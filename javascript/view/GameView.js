/**
 * A GameView centralize the display of each component of game 
 */
class GameView {

    constructor(game) {
        this._game = game;

        let count = 0;
        let count2 = 0;
        let count3 = 0;

        for (let i = 0; i < game.rawMaze.layerWall.tab.length; i++) {
            for (let j = 0; j < game.rawMaze.layerWall.tab[i].length; j++) {



                if (JSON.stringify(game.rawMaze.layerWall.tab[i][j]) === JSON.stringify(new Wall("w" + count2))) {
                    $("#scene").append("<span id=tile" + count + " class=wall>▀</span>");
                    modifsElements(i, j, count);
                    count2++;
                }


                if (JSON.stringify(game.rawMaze.layerDot.tab[i][j]) === JSON.stringify(new Dot("d" + count3))) {
                    $("#scene").append("<span id=tile" + count + " class=eraser>©</span>");
                    modifsElements(i, j, count);
                    count3++;
                }
                count++;



            }
        }

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
}