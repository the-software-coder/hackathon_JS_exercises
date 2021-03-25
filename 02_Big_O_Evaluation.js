const test = array => {
    const nb1 = 0;
    const nb2 = 1;
    for (let index = 0; index < array.length; index++) {
       nb1 += array[index];
 
    }
    for (index = 0; index < array.length; index++) {
       nb2 *= array[index];
 
    }
    return `${nb1} & ${nb2}`
 }

console.log(test(1, 2, 3, 4, 5));