let pages = document.getElementById("pages")
let navpage = document.getElementById("navpage")
let go = document.getElementById("subpage")
let find =  document.getElementById("find")
let search = document.getElementById("srch")
let changed = ""
let val  = ""
let tiv = 1
let bal= "&page="+tiv
let list = document.getElementById("list")
let count = 0;


search.addEventListener("input",function(){
    val = search.value.replace(/ /g, '+')
    yal = val
    count++
})
go.addEventListener("click",function(){
    tiv = navpage.value
    changed =val
    
    console.log(val)

let url = "http://openlibrary.org/search.json?q= "+`${changed}`+"&page="+tiv
fetch(url)
.then(function(res){
    return res.json()
})
.then( function(json){
   
    for(let i in json.docs){
        let spanaut = document.createElement("span")
        let li =  document.createElement("li")
       let spanpub = document.createElement("span")
       
       
       let spantag = document.createElement("span")
        if("author_name" in json.docs[i]){
            let author = json.docs[i].author_name[0]
            spanaut.append(" " + " " + author)
            console.log(true)
           
        }
        if("publish_date" in json.docs[i]){
            let publish = json.docs[i].publish_date[0]
            spanpub.append(" " + " " + publish)
            console.log(true)
           
        }

        if("subject" in json.docs[i]){
            let tag = []
            for(let k = 1 ;k<5; k++){
               if(json.docs[i].subject[k] === undefined){
                   break;
               }
                tag.push(" " + "#" + json.docs[i].subject[k])

               
                
            }
            spantag.append(tag)
            spantag.style.backgroundColor = "white"
            console.log(true)
           
        }

        
        
        
        

        
       
        
        
      
        
       li.innerText = json.docs[i].title 
       li.style.cursor = "pointer"
       li.style.color = "orange"
       li.style.backgroundColor = "#143525"
       li.style.fontWeight = "bold"
       spanaut.setAttribute("style","color:black")
       spanaut.style.backgroundColor = "orange"
       spanpub.setAttribute("style","color:white")
       spanpub.style.backgroundColor = "black"
       spantag.style.color = "black"
       li.append(spanaut)
       li.append(spanpub)
       
       li.append(spantag)
        li.style.display = "flex"
        li.style.flexDirection = "column"
       li.style.marginLeft = "200px"
       li.style.border = "1px solid white"
        li.style.width = "500px"
        
        
       list.append(li)
       
        
       
  
       

     

       
       navpage.style.position = "absolute"
       navpage.style.top = document.body.scrollHeight +25 + "px"
       navpage.style.marginLeft = "-290px"
       navpage.style.visibility = "visible"
       go.style.position = "absolute"
       go.style.top = document.body.scrollHeight +25 + "px"
       go.style.visibility = "visible"
       go.style.marginLeft = "-200px"
       pages.style.color = "white"
       
       
       
    }
    


    
})
if(val =="" || count++){
    list.innerText = ""
}
})

find.addEventListener("click",function(){
    
    changed =val
    
    console.log(val)

let url = "http://openlibrary.org/search.json?q= "+`${changed}`+"&page="+tiv
fetch(url)
.then(function(res){
    return res.json()
})
.then( function(json){
   
    for(let i in json.docs){
        let spanaut = document.createElement("span")
        let li =  document.createElement("li")
       let spanpub = document.createElement("span")
       
       
       let spantag = document.createElement("span")
        if("author_name" in json.docs[i]){
            let author = json.docs[i].author_name[0]
            spanaut.append(" " + " " + author)
            console.log(true)
           
        }
        if("publish_date" in json.docs[i]){
            let publish = json.docs[i].publish_date[0]
            spanpub.append(" " + " " + publish)
            console.log(true)
           
        }

        if("subject" in json.docs[i]){
            let tag = []
            for(let k = 1 ;k<5; k++){
               if(json.docs[i].subject[k] === undefined){
                   break;
               }
                tag.push(" " + "#" + json.docs[i].subject[k])

               
                
            }
            spantag.append(tag)
            spantag.style.backgroundColor = "white"
            console.log(true)
           
        }

        
        
        
        

        
       
        
        
      
        
       li.innerText = json.docs[i].title 
       li.style.cursor = "pointer"
       li.style.color = "orange"
       li.style.backgroundColor = "#143525"
       li.style.fontWeight = "bold"
       spanaut.setAttribute("style","color:black")
       spanaut.style.backgroundColor = "orange"
       spanpub.setAttribute("style","color:white")
       spanpub.style.backgroundColor = "black"
       spantag.style.color = "black"
       li.append(spanaut)
       li.append(spanpub)
       
       li.append(spantag)
        li.style.display = "flex"
        li.style.flexDirection = "column"
       li.style.marginLeft = "200px"
       li.style.border = "1px solid white"
        li.style.width = "500px"
        
        
       list.append(li)
       
        
       
  
       

     

       
       navpage.style.position = "absolute"
       navpage.style.top = document.body.scrollHeight +25 + "px"
       navpage.style.marginLeft = "-300px"
       navpage.style.visibility = "visible"
       go.style.position = "absolute"
       go.style.top = document.body.scrollHeight +25 + "px"
       go.style.visibility = "visible"
       go.style.marginLeft = "-200px"
       let linknum = json.numFound
       let pagenum = Math.ceil(json.numFound/100)
       pages.innerText = linknum + " " + "books" + " " + "in" + " " +  pagenum + " "  + "pages"
      pages.style.visibility = "visible"
      pages.style.color = "white"
       
    
    

    }
    
    console.log(json)
    console.log(json.docs.length)
    console.log(json.numFound)
    
    
   
   

    
})
if(val =="" || count++){
    list.innerText = ""
}
})









