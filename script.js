let outputsome = document.getElementById('some');
let outputevery = document.getElementById('every');
let outputfilter = document.getElementById('filter');
let outputreduce = document.getElementById('reduce');
let outputforEach = document.getElementById('forEach');
let outputflat = document.getElementById('flat');
let outputReverse = document.getElementById('reverse');
let outputjoin = document.getElementById('join');
let outputincludes = document.getElementById('includes');

// reduce, forEach, flat, reverse, join, includes

let arr = [1,2,3,4,5,6,7]


Array.prototype.customSome = function(cb) {
    let length = this.length;
        
    for (let i= 0; i < length; i++) {
        const value = this[i];
     
        if ( cb(value, i, this)) {
          return true;
        }
    }   

    return false;
}

Array.prototype.customEvery = function(cb) {
    let length = this.length;
        
    for (let i= 0; i < length; i++) {
        const value = this[i];
     
        if (!cb(value, i, this)) {
          return false;
        }
    }   

    return true;
}

Array.prototype.customFilter = function(cb) {

    let resultArray = [];
        
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            resultArray.push(this[i]);
        }
    } 

    return resultArray;
}


Array.prototype.customRevers = function() {
    let revers = [];
        
        for( i = 0; i < this.length; i++ ) {
            revers[this.length - i - 1] = this[i];
        }
        
        return revers;    
}

outputsome.innerText = `Custom some output is ${arr.customSome( elem => elem > 8)}`;
outputevery.innerText = `Custom every output is ${arr.customEvery( elem => typeof(elem) === 'number')}`;
outputfilter.innerText = `Custom filter output is ${arr.customFilter( elem => elem % 2)}`;
outputreduce.innerText = `Custom reduce output is ${arr.customRevers()}`;
outputforEach.innerText = `Custom forEach output is ${arr.customRevers()}`;
outputflat.innerText = `Custom flat output is ${arr.customRevers()}`;
outputReverse.innerText = `Custom revers output is ${arr.customRevers()}`;
outputjoin.innerText = `Custom join output is ${arr.customRevers()}`;
outputincludes.innerText = `Custom includes output is ${arr.customRevers()}`;