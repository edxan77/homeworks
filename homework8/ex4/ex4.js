let main = document.getElementById("main")


fetch("https://ghibliapi.herokuapp.com/films",)
.then(function (res){
  return res.json()
})
.then(function (json){
  console.log(json)
  for(let i in json){
   let blok = document.createElement("div")
   let list = document.createElement("ul")
   let li1 = document.createElement("li")
   let li2 = document.createElement("li")
   let li3 = document.createElement("li")
   let li4 = document.createElement("li")
   let li5 = document.createElement("li")
   let image = document.createElement("img")
   let span =document.createElement("span")
   let descrip = document.createElement("span")
   image.setAttribute("src",json[i].image)
    descrip.innerText = "Description"
    
    li5.style.marginTop = "20px"
   li1.innerText = " Director" + "`" + " " + json[i].director
   li2.innerText ="Producer" + "`" + " " + json[i].producer
   li3.innerText = "Recording year" + "`" + " " + json[i].release_date + " " 
   li4.innerText =json[i].running_time + " " + "m"
   
   span.innerText = json[i].title
   span.style.fontSize = "18px"
   span.style.fontWeight = "bold"
   span.style.display = "flex"
   span.style.justifyContent = "center"
   span.style.marginTop = "25px"
   li5.innerText = json[i].description
   descrip.style.marginTop = "20px"
   blok.style.backgroundColor = "black"
   blok.style.color = "white"
   
   blok.style.border = "1px solid red"
   image.style.width = "300px"
   image.style.height = "300px"
   
   list.append(li1)
   list.append(li2)
   list.append(li3)
   list.append(li4)
   list.append(descrip)
   list.append(li5)
   main.append(blok) 
   
   blok.append(image)
   blok.append(span)
   blok.append(list)  

   descrip.style.marginLeft = "58px"
    
  }
  
  
})