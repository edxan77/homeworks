function throtlle (fn,time){
    let thr = false;
    let args;
    let thiss;
    let wrong = false;
    function fc(){
        if(!thr){
                wrong = true;
                
        }
        if(wrong===true &&args){
            console.log("Its Wrong Timing")
            
        }
       
        if(thr){
            args = arguments
            thiss = this
            return;
        }

      
        fn.apply(this,arguments)
        thr = true;
        setTimeout(function(){
            thr = false
            if(args){
                fc.apply(thiss,args)
                args = null
                thiss = null
                wrong = false
                
            }

        },time)
    }
    if(!click){
        return console.log("its not time")
    }
    return fc;
}

function click(){
    console.log("move")

}

click = throtlle(click,3000)

window.addEventListener("click",click)

