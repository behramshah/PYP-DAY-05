let outputsome = document.getElementById('some');
let outputevery = document.getElementById('every');
let outputfilter = document.getElementById('filter');
let outputreduce = document.getElementById('reduce');
let outputforEach = document.getElementById('forEach');
let outputflat = document.getElementById('flat');
let outputReverse = document.getElementById('reverse');
let outputjoin = document.getElementById('join');
let outputincludes = document.getElementById('includes');

let arr = [1,2,3,4,5,6,7]
let arrJoin = [1,2,3,4,5,6,7]
let arrForEach = [2,4,6,8]
let arrNested = [1,1,1,1, [2,2,2, [3,3, [4]]]]


Array.prototype.customJoin = function(joinWith) {

    result = "";
            
    for (let i = 0; i < this.length-1; i++) {
        this[i] = String(this[i])+joinWith;
    }
    String(this[this.length-1]);

    for (let i = 0; i < this.length; i++) {
        result = result + this[i];
    }

    console.log(result)

    return result;
}


Array.prototype.customFlat = function(depth = 0) {

    let flatDepth = depth;
    let result = this; 

    while (flatDepth) {
        if (flatDepth < 1) {        
            return result;
        }
        for (let i=0; i<this.length; i++) {
            if(Array.isArray(this[i])) {
                let length = this[i].length
                element = this[i]
                start = i;
                j=0
                while (length){
                    this.splice(start, 1, element[j])
                    start++;
                    j++;
                    length--;

                }
            }
        }
        --flatDepth;
    }
    return result;    
}

Array.prototype.customForEach = function(cb) {
            
    for (let i = 0; i < this.length; i++) {
        this[i] = cb(this[i]);
    }
}


Array.prototype.customReduce = function(cb, accumulator) {
            
    for (let i = 0; i < this.length; i++) {
        accumulator = cb(accumulator, this[i]);
    }
    return accumulator;
}


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

Array.prototype.customIncludes = function(element, fromIndex = 0) {
    
     let start = fromIndex ? fromIndex : 0;
        
        for( i = start; i < this.length; i++ ) {
           if(this[i] === element) {
            return true
           }
        }
        
        return false;    
}

outputsome.innerText = `Custom some output is ${arr.customSome( elem => elem > 8)}`;
outputevery.innerText = `Custom every output is ${arr.customEvery( elem => typeof(elem) === 'number')}`;
outputfilter.innerText = `Custom filter output is ${arr.customFilter( elem => elem % 2)}`;
outputreduce.innerText = `Custom reduce output is ${arr.customReduce((elem, acc) => elem + acc, 0)}`;
outputforEach.innerText = `Custom forEach output is ${arrForEach.customForEach( elem => elem *2)} becouse this method doesnt return anything, the value after method ${arrForEach}`;
outputflat.innerText = `Custom flat output for is ${arrNested.customFlat(1)}`;
outputReverse.innerText = `Custom revers output is ${arr.customRevers()}`;
outputjoin.innerText = `Custom join output is ${arrJoin.customJoin('/')}`;
outputincludes.innerText = `Custom includes output is ${arr.customIncludes(5)}`;