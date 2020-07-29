// To find a word in a matrix by doing a search in horizontal, vertical and backward directions.

// Search a word in horizontal direction

const wordSearchHorizontal = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
        
    }
    return false;
}

// Search a word in Backward direction

const wordSearchBackward = (letters, word) => { 
    const horizontalJoinReverse = letters.map(ls => ls.reverse().join(''))
    for (l of horizontalJoinReverse) {
        if (l.includes(word)) return true        
    }
    return false;
}

// Do a transpose of the word matrix

const transpose = function(matrix) {
  
    let temp = []; 
  
    for (let i = 0; i < matrix.length; i++) {    
      for (let j = 0; j < matrix[i].length; j++) {
        if (!temp[j]) {
          temp[j] = [];
        }
        temp[j][i] = matrix[i][j];                  
      }    
    }
   return temp;
  };

// Do a word search in the following directions

const wordSearch = (letters, word) => { 
    if (wordSearchHorizontal(letters,word)) { // Horizontal search
        return true;
    }
    else if (wordSearchBackward(letters,word)) { // Horizontal Backward search
        return true;
    }
    else if (wordSearchHorizontal(transpose(letters),word)) { // Vertical search
        return true;
    }
    else if (wordSearchBackward(transpose(letters),word)) { // Vertical Backward search
        return true;
    }

    return false;    
}


module.exports = { wordSearch }; 
