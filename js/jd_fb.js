var d1=document.getElementById("d1")
var d2=document.getElementById("d2")
var d3=document.getElementById("d3")
setInterval(function(){
    countDown(2020,1,1)
function countDown(year,month,date ){
    var d=new Date(year,month-1,date);
    var dd=new Date();
    var time_dif=(d.getTime()-dd.getTime())/1000;
    var hours=parseInt(time_dif/60/60);
    var time=parseInt(time_dif%(60*60)/60);
    var sec=parseInt(time_dif%(60))
    var s=`${addZero(hours)}`
    var t=`${addZero(time)}`
    var r=`${addZero(sec)}`
    d1.innerHTML=s;
    d2.innerHTML=t;
    d3.innerHTML=r;
}
function addZero(a){
    if (a<10){
        a="0"+a;
    }
    return a;
}
},1000)
var i=0;
// vat timer=null;
// timer=setInterval(function(){
//     if(i>=4){
//         ul.style.left=0;
//         i=0;
//     }
//     i++
//     move(ul,"left",-590*i)
    // sky();
// },2000)
function move(ak,bk,ck){
    clearInterval(ak.timer);
    if(bk==="left"){
        ak.timer=setInterval(function(){
            ak.style.left=ak.offsetLeft-10+"px";
            if(ak.offsetLeft<=ck){
                ak.style.left=ck+"px";
                clearInterval(ak.timer)
                sky();
            }
        },20)
    }else{
        ak.timer=setInterval(function(){
            ak.style.left=ak.offsetLeft+10+"px";
            if(ak.offsetLeft>=ck){
                ak.style.left=ck+"px";
                clearInterval(ak.timer)
                sky();
            }
        },20)
    }
}
var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
b1.onclick=function(){
    if(i<=0){
        ul.style.left="-2360px";
        i=4;
    }
    i--;
    move(ul,"right",-590*i);
    sky();
}
b2.onclick=function(){
    if(i>=4){
        ul.style.left=0;
        i=0;
    }
    i++;
    move(ul,"left",-590*i);
    sky();
}
var lis=document.querySelectorAll(".sa #kpp li i");
for(var p=0;p<lis.length;p++){
        lis[p].pp=p;
        lis[p].onmouseover=function(){
            if(this.pp>=i){
                move(ul,"left",-590*this.pp);
            }else{
                move(ul,"right",-590*this.pp);
            }
            i=this.pp;
            sky();
        }
    }
    function sky(){
        for(var k=0;k<lis.length;k++){
            lis[k].style.background="white";
        }
        lis[i===4?0:i].style.background="red";
    }
    kpp.onmouseover=function(){
        clearInterval(timer);
        b1.style.opacity=1;
        b2.style.opacity=1;
    }
    kpp.onmouseout=function(){
        timer= setInterval(function(){
            if(i>=3){
                ul.style.left=0;
                i=0;
            }
            i++;
            move(ul,"left",-590*i)
            sky()
        },2000);
        b1.style.opacity=0;
        b2.style.opacity=0;
    }