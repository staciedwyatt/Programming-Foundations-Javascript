//average(): This function will take in three arguments and return the average of those three arguments. (Hint: Look up the formula for average)

exports.average = function (x, y, z) {
    return(x +y +z) / 3; 
};

//smallest(): This function will take in three arguments and return the smallest of the three inputted numbers. 
//(Hint: Think about conditionals aka if statements) y =25


exports.smallest = function (x, y, z) {
    if (x < y && x < z) {
      return x;
    } else if (y < x && y < z) {
      return y;
    } else {
      return z;
    }
  };
  


//isEven(): This function will take in three arguments and return an array of all arguments that are even.
// (Hint: How do you know if a number is even?)

exports.isEven = function (x, y, z) {
    let allEven = [];
    if (x % 2 == 0) {
      allEven.push(x);
    }
    if (y % 2 == 0) {
      allEven.push(y);
    }
    if (z % 2 == 0) {
      allEven.push(z);
    }
    return allEven;
  };

  
 
  