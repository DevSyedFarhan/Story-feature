let arr = [
    {profleImage : "https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", storyImage : "https://images.unsplash.com/photo-1617031035978-e946aaa6b624?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {profleImage : "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", storyImage : "https://images.unsplash.com/photo-1579528407272-c060e8800465?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {profleImage : "https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", storyImage : "https://images.unsplash.com/photo-1598191840412-9fd49c21f62e?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {profleImage : "https://images.unsplash.com/photo-1707919021498-bf1cebc43aa1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", storyImage : "https://images.unsplash.com/photo-1562207211-a15eca540f4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {profleImage : "https://images.unsplash.com/photo-1558466018-750096b8ead7?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", storyImage : "https://images.unsplash.com/photo-1598707499642-5d10d028a8ae?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

let clutter = "";
arr.forEach(function(val, index){
    clutter += `<div class="story">
                    <img id = "${index}"src="${val.profleImage}">
                </div>`;
})

document.querySelector("#stories").innerHTML = clutter;
let grow = 0;
document.querySelector("#stories").addEventListener("click", function(dets){
    document.querySelector("#full-scr").style.opacity = 1;
    document.querySelector("#full-scr").style.backgroundImage = `url(${arr[dets.target.id].storyImage})`

    setTimeout(function(){
        document.querySelector("#full-scr").style.opacity = 0;
    },3000)

    // setInterval(() => {
    //     document.querySelector("#growth").style.width = `${grow}%`
    //     grow++
    // }, 30);

    if(grow<=100){
        setInterval(function(){
            document.querySelector("#growth").style.width = `${grow++}%`;
        }, 30)
    }else{
        grow = 0;
    }
    
})
