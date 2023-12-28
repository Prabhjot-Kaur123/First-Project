setInterval( function(){
    let today=new Date()
let h=today.getHours()
let m=today.getMinutes()
let s=today.getSeconds()
let time="AM"
s=checktime(s)
m=checktime(m)
if(h==0){
    h=12
}
else{
    h=h-12
    time="PM"
}
document.getElementById("o").innerHTML=h +":"+ m +":"+ s + " "+time

},1000)
function checktime(i){
    if(i<10){
        i="0"+i
    }
    else{
        i=i
    }
    return i
}


