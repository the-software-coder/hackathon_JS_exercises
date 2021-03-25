// What’s the runtime of the following code?

const addRange = (n) => {
    let sum = 0;
    for(let i = 0; i < n.length; i++){
     for(let j = 0; j< n.length; j++){
       sum+=n[i];
     }
    }
    return sum;
}

console.log(addRange([1, 2, 3, 4, 5]));
// Result in this case is: 75

console.log(addRange([1, 2, 3]));
// Result in this case is: 18

// IN MY OPINION IT LOOKS LIKE A RECURSIVE METHOD, SO 
// I WOULD SAY IT'S AN O(N^2)

// quadratic complexity. Doubling the input set multiplies 
// the operation count by four. A problem 10 times larger takes 
// 100 times more work. Not that great