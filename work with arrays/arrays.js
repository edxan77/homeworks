//let arr1 = [1,2,3,4,5,6,7,8,9,10]
//let arr2 = [11,12,13,14,15,16,17,18,19,20]
//let arrconc = arr1.concat(arr2)


//let arr = ["Jhon","Alex",1,5,6,4]
//arr.fill("jhon",1)



//let arr = [1,654,4,4,654]
//let arr2 = arr.find(function (n){return n==4}) ## returned 4 what index is 2.


//let arr = [1,1,5,6,]
//let arr2 = arr.findIndex(function(n){return n==0})  ## returned -1



//let arr = [[[[[[[[[[5]]]]]]]]]]
//let arrflat = arr.flat(Infinity)
//console.log(arrflat)


//let arr = [1,2,5,6,4]
//let arr2 = arr.map(function(n){return n*2})


//let arr = [1,65,8,4,6,4]
//let arr2 = arr.reduce(function(total,amount){return total*amount})



function unique(n){
    let word = n.split("")
    let setedword = new Set(word)
    if(setedword.size == word.length){
        return "this word have a unique letters"
    }
    return "letters in this word are repeating"
}

function uniquephrase(n){
    let delspace = n.replace(/\s/g, '');
    let phrase = delspace.split("")
    let setedphrase = new Set(phrase)
    if(setedphrase.size == phrase.length){
        return "Its Unique Phrase"
    }
    return "Its Not Unique Phrase "
}



