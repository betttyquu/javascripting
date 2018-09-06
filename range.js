// Create an empty array
    //  var arr = [];
// start array at argument 1;
    // push argument 1
// add argument 3 untill it equals argument 2
    // loop starts at argument 1, add argument 3 until it reaches argument2
// else if start it greater than argument 2, do not push

function range(start, end, step){
    var arr = [];
    if (start,end,step == null) {
        return arr
    } if (start>end) {
        return arr
    } if(step < 0) {
        return arr}
    for (var i = start; i <= end; i+= step){
        arr.push(i)
    }
    return arr
};
console.log(range(0,10,-2));