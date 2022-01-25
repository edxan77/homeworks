let mas2 = []
 
 
window.addEventListener("click",function(){
   
    mas2.push("click")
   let b =  document.createElement("li")
   b.innerHTML = mas2[mas2.length-1]
   document.getElementById("list").appendChild(b)
  console.log(mas2)
   
   
})

window.addEventListener("dblclick",function(){
    mas2.push("dblclick")
    let b =  document.createElement("li")
  
    b.innerHTML = mas2[mas2.length-1]
    document.getElementById("list").appendChild(b)
   
    console.log(mas2)
})

window.addEventListener("contextmenu",function(){
    mas2.push("leftclick")
   let b =  document.createElement("li")
   b.innerHTML = mas2[mas2.length-1]
   document.getElementById("list").appendChild(b)
  
   console.log(mas2)
})

window.addEventListener("resize",function(){
    mas2.push("resize")
   let b =  document.createElement("li")
   b.innerHTML = mas2[mas2.length-1]
   document.getElementById("list").appendChild(b)
  
   console.log(mas2)
})



    window.addEventListener("keypress",function(){
        
            mas2.push("keypress")
           let b =  document.createElement("li")
           b.innerHTML = mas2[mas2.length-1]
           document.getElementById("list").appendChild(b)
          
           console.log(mas2)
        })
    
        window.addEventListener("keyup",function(){
        
            mas2.push("keyup")
           let b =  document.createElement("li")
           b.innerHTML = mas2[mas2.length-1]
           document.getElementById("list").appendChild(b)
          
           console.log(mas2)
        })

        window.addEventListener("keydown",function(){
        
            mas2.push("keydown")
           let b =  document.createElement("li")
           b.innerHTML = mas2[mas2.length-1]
           document.getElementById("list").appendChild(b)
          
           console.log(mas2)
        })

        window.addEventListener("scroll",function(){
        
            mas2.push("scroll")
           let b =  document.createElement("li")
           b.innerHTML = mas2[mas2.length-1]
           document.getElementById("list").appendChild(b)
          
           console.log(mas2)
        })

