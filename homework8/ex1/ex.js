
const list = document.getElementById("list");
let img = document.createElement("img")



img.style.height = "250px"
img.style.width = "300px"
let span = document.createElement("li")

fetch("https://ghibliapi.herokuapp.com/films",)
.then(function (res){
  return res.json()
})
.then(function (json){
  console.log(json)
  for(let i in json){
    let title = document.createElement("li")
    let bl = document.createElement("div")
span.innerText= json[i].producer
    title.append(bl)
    title.style.display = "table"
  
    title.textContent = json[i].title
    list.append(title)

    title.addEventListener("click", function (){
      img.setAttribute("src",json[i].image)
          document.getElementById("image").append(img)
          document.getElementById("desc").innerHTML = json[i].description
          document.getElementById("release").innerText = json[i].release_date
          document.getElementById("director").innerText = json[i].producer
          document.getElementById("cont").style.visibility = 'visible'
    })
    
  }
  
  
})


