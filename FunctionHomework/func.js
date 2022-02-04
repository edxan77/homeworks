function zam(){
    let count =0;
let count2=0

return function odd(n){
    let g = n.toString()
    let v = g.split('').map(function(n){return parseInt(n)})
 if(v[count]%2==0){
     return console.log(false)
 }
 count++
if(v[count]%2!=0){
    count2++
}

if(count2==v.length){
    return console.log(true)
}
    return odd(n)

}
}
let func = zam();
func(1359)

function zam2 (){
    let countt = 1;
let countt2 = 0
return function violeted(n){
    let clone = n.slice(0)
    if(n[countt]<clone[countt-1]) return console.log(countt+1)
    countt++
    countt2++
    if(countt2==n.length) return console.log(true)

    return violeted(n)


}
}
let vio = zam2()
vio([1,3,6,7,2])


let counttt=0;
let mass = []
function pos (n){
if(n[counttt]>=0) mass.push(n[counttt])
counttt++
if(counttt==n.length) return console.log(Math.min(...mass))
return pos(n)
}

pos([-5,2,1,9,0])


let hashvich=0;
function remove(n){
    hashvich++
    let himnmas = n;
   let mas= n.reverse()
    mas.length = mas.length-1
    let mas2 = n.reverse()
    if(mas2.length===0){
        return console.log(mas2);
    }
    return remove(n)
}

remove([1,2,3])

function gumarum (n){
    let guma = 0;
   
   let mas =  n.toString().split("").map(function(n){return parseInt(n)})
   for(let i = 0; i<1;i++){
       for(let j = 0; j<mas.length; j++){
           guma=guma+mas[j]
       }
   }
   
        let finaly = guma.toString().charAt(0)
        return console.log(parseInt(finaly))
   }
   

    


gumarum(55565)

let a ={"a":25,
        "b":26,
        "c":27



}
let b= Object.values(a)
let c = Object.keys(a)
console.log(Object.keys(a).length)

let cntkey = 0;
let cntvalue = 0;
let cloned = {}
function clone (n){
    
    let key = Object.keys(n)
    let value = Object.values(n)
    let loopkey = key[cntkey]
    let loopvalue = value[cntvalue]
    cloned[loopkey] = loopvalue

 cntkey ++
 cntvalue ++
if(cntkey ==Object.keys(n).length){
    return console.log(cloned)
}
    return clone(n)

}

clone({"a":25,
"b":26,
"c":27



})


let count = 0; 
function fnc (n,m){ 
  count++ 
let b = n.slice(m) 
let c= b 
console.log(c) 
 let v = c.concat(n) 
  v.length = v.length-c.length; 
 
 if(count==2) return console.log(v) 
return ba(n,m) 
 
}  
fnc(["a","b","c","d","e","f","g"],3) 
 
function zam() { 
    let countt = 0; 
   
    return function fl(n) { 
      let count2 = 0; 
      countt++; 
      
      for (let i = 0; i < n.length; i++) { 
        if (!Array.isArray(n.flat(countt)[i])) { 
          count2++; 
        } 
      } 
   
      if (count2 === n.length) return  console.log(n.flat(countt));; 
   
      return fl(n); 
    }; 
  } 
  countt=55 
   
   
  let fn = zam(); 
  fn([[[[1]]], [[[[[35]]]]], [[5]], [5]])



