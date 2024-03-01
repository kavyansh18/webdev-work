function createcard(title,cname,views,monthsold,duration,thumbnail){
    let viewstr;
    if(views<1000){
        viewstr=views;
    }
    else if(views>1000000){
        viewstr=views/1000000 + "M";
    }
    else{
        viewstr=views/1000 +"K";
    }
    let html = `<div class="card">
    <div class="image">
        <img class="img" src="${thumbnail}" alt="Card image cap"/>
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cname} .${viewstr} views.${monthsold} months ago </p>
    </div>
</div>`

document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

createcard("Introduction to Backend | Sigma WebDev","CodeWithHarry",727000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")