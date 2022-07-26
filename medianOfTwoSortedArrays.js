function mO2SA(arr1, arr2) {
    var concat = arr1.concat(arr2)
    concat = concat.sort(function(a, b){return a - b})
    console.log(concat)
    var length = concat.length;

    if(length%2== 1){
        //odd
        return concat[( length / 2 - .5 )]
    }
    else{
        return (concat[length / 2] + concat[(length / 2) - 1]) / 2
    }
}


arr1 = [1,4,7,9]
arr2 = [2,5,8,10]

console.log(mO2SA(arr1, arr2))

