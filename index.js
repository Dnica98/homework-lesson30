const arr = [1, 2, 3, 4]


Array.prototype.mySome = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            return true;
        }}
     return false;
}


console.log(arr.mySome(item => item % 2 === 0))
console.log(arr.mySome(item => item > 5))


Array.prototype.myEvery = function(callback){
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i], i, this)){
            return false;
        }}
     return true;
}

console.log(arr.myEvery(item => item > 0 ))
console.log(arr.myEvery(item => item % 2 === 0))
