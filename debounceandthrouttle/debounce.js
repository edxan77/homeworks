
function debounce (fn,time){
    let timing;
    return function(){
        const fun = function(){fn.apply(this,arguments)}
        clearTimeout(timing)
        timing = setTimeout(fun,time)
    }; 
}

function onChange(e){
    e=document.getElementById("implement")
    console.log(e.value)


}

onChange = debounce(onChange,500)
document.getElementById("implement").addEventListener("keyup",onChange)

