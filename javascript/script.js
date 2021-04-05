
function diplayElementsOfScene() {
    for (let i = 0; i < RAW_MAZE.table.length; i++) {
        for (let j = 0; j < RAW_MAZE.table[i].length; j++) {

            
            if (RAW_MAZE.table[i][j] == 1) {
                $("#scene").append("<span class=wall>||</span>");
                $(".wall:last").css("position", "absolute");
                $(".wall:last").css("top", 15*i+"px");
                $(".wall:last").css("left", 15*j+"px");
                $(".wall:last").css("margin-left","0.3em");
            }
            
            
            if (RAW_MAZE.table[i][j] == 2) {
                $("#scene").append("<span class=eraser>0</span>");
                $(".eraser:last").css("position","absolute");
                $(".eraser:last").css("top", 15*i+"px");
                $(".eraser:last").css("left", 15*j+"px");
                $(".eraser:last").css("margin-left","0.3em");
            }
            
        }

    }
}

$("document").ready(function () {
    diplayElementsOfScene();
});

