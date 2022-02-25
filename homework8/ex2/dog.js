




 document.getElementById("btn").addEventListener("click",function(){
        name = document.getElementById("cars").value
                                                                                                                                                                                                                                                                        
        console.log(name)

        fetch(`https://dog.ceo/api/breed/${name}/images/random`,)
  .then(function(res){
      return res.json()
  })
  .then(function(json){
      console.log(json)
     
      document.getElementById("ff").setAttribute("src",json.message)
      document.getElementById("d").append(document.getElementById("ff"))
  })


  
 })

