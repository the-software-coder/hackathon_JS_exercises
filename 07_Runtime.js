const addRange = (n) => {
    let sum = 0;
    for(let i = 0; i < n.length; i++){
       sum+=n[i];
    }
    return sum;
}

console.log(addRange([1, 2, 3]));

console.log(addRange([1, 2, 3, 4, 5]));

// What’s the runtime of the following code?
// Iterate through the array once, examine each 
// element once -> looks like O(n) in runtime.

// Space complexity? Actually none, so O(1)