function GameIsOver(player) {
    var result = true;
    for (var j = 0; j < 3; j++) {     //first diagonal
        result= result && (table[j][j] == player);
    }
        if (result) {
            return gameResult = {
                result: result,
                player: player
            };
        }
    result = true;
    for (var j = 0; j < 3; j++) {  //second diagonal
        result= result && (table[2-j][j] == player);
    }
        if (result) {
            return gameResult = {
                result: result,
                player: player
            };
        }
    for (var k = 0; k < 3; k++) {
        result = true;
        for (var j = 0; j < 3; j++) {      //lines 
            result = result && (table[k][j] == player);
        }
        if (result) {
            return gameResult = {
                result: result,
                player: player
            };
        }    
        result = true;
        for (var j = 0; j < 3; j++) {      //colums
            result = result && (table[j][k] == player);
        }
            if (result) {
                return gameResult = {
                    result: result,
                    player: player
                };
            } 
    }
    return false;