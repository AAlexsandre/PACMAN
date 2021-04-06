
function diplayElementsOfScene() {
    for (let i = 0; i < RAW_MAZE.table.length; i++) {
        for (let j = 0; j < RAW_MAZE.table[i].length; j++) {
   
            if (RAW_MAZE.table[i][j] == 1) {
                $("#scene").append("<span class=wall>|'|</span>");
                addElements(i,j);
            }
            
            if (RAW_MAZE.table[i][j] == 2) {
                $("#scene").append("<span class=eraser>$</span>");
                addElements(i,j)
            }
            
        }
    }
}

function addElements(i,j){
    $("span:last").css("position","absolute");
    $("span:last").css("top", 15*i+"px");
    $("span:last").css("left", 15*j+"px");
    $("span:last").css("margin-left","0.2em");
}

$("document").ready(function () {
    diplayElementsOfScene();
});

