
/**
 * This function diplay in the web page the pacman maze
 */
function diplayElementsOfScene() {
    let count = 0;
    for (let i = 0; i < RAW_MAZE.table.length; i++) {
        for (let j = 0; j < RAW_MAZE.table[i].length; j++) {

            if (RAW_MAZE.table[i][j] == 1) {
                $("#scene").append("<span id=tile" + count + " class=wall>|'|</span>");
                modifsElements(i, j, count);
                count++;
            }

            if (RAW_MAZE.table[i][j] == 2) {
                $("#scene").append("<span id=tile" + count + " class=eraser>$</span>");
                modifsElements(i, j, count)
                count++;
            }

        }
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
    $("#tile" + count).css("margin-left", "0.2em");
}

$("document").ready(function () {
    diplayElementsOfScene();
});

