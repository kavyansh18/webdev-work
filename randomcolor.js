console.log("Random color")
let boxes = document.getElementsByClassName("box")

function getrandomcolor(){
    //to generate random number between a and b -> a r(b-a)
    let val1= Math.ceil(0+Math.random()*255);
    let val2= Math.ceil(0+Math.random()*255);
    let val3= Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`; 
}

Array.from(boxes).forEach(e=>{
    e.computedStyleMap.backgroundColor=getrandomcolor()
    e.computedStyleMap.color=getrandomcolor()
})