function computer() {
    return Math.floor(Math.random() * 3);
}
function change(x,y){
    let i, j;
    if(x===0)
    i="../images/rock.png"
    else if(x===1)
        i="../images/paper.png"
    else
        i="../images/scissor.png"

    if(y===0)
    j="../images/rock.png"
    else if(y===1)
        j="../images/paper.png"
    else
        j="../images/scissor.png"

    document.getElementById("ply").src=i
    document.getElementById("com").src=j
    document.getElementById("ki").style.align="center"

}
function rock(){
    change(0,computer())
    document.getElementById("ki").style.display="block"
}
function paper(){
   change(1,computer())
     document.getElementById("ki").style.display="block"
}
function scissor(){
   change(2,computer())
     document.getElementById("ki").style.display="block"
}