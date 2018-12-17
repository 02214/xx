// 2楼右1计时器
var ii=0;
var w=null;
w=setInterval(function(){
    if(ii>=4){
        ii=0;
        klk.style.left=0;
    }
    ii++;
    plk(klk,"left",-800*ii)
},3000)
var klk=document.getElementById("klk")
function plk(aa,bb,cc){
    clearInterval(aa.w); 
    if (bb==="left") {
    aa.w=setInterval(function(){
            aa.style.left=aa.offsetLeft-10+"px";
            if (aa.offsetLeft<=cc) {
                aa.style.left=cc+"px";
                clearInterval(aa.w)
            }
        },10)
    }else{
        aa.w=setInterval(function(){
            aa.style.left=aa.offsetLeft+10+"px";
            if (aa.offsetLeft>=cc) {
                aa.style.left=cc+"px";
                clearInterval(aa.w)
            }
        },10)
    }
}
var bt1=document.getElementById("bt1");
var bt2=document.getElementById("bt2");
bt1.onclick=function(){
    if(ii<=0){
        ii=4;
        klk.style.left="-4000px";
    }
    ii--;
    plk(klk,"right",-800*ii);
}
bt2.onclick=function(){
    if (ii>=4) {
        ii=0;
        klk.style.left=0;
    }
    ii++;
    plk(klk,"left",-800*ii);
}
 
// 2楼右2计时器

var kkk=0;
var tt=null;
var a2=document.getElementById("ppop")
tt=setInterval(function(){
    if(kkk>=2){
        kkk=0;
        a2.style.left=0;
    }
    kkk++;
    skk(a2,"left",-180*kkk)
},2000)
function skk(aaa,bbb,ccc){
    clearInterval(aaa.tt)
    if(bbb==="left"){
        aaa.tt=setInterval(function(){
            aaa.style.left=aaa.offsetLeft-10+"px";
            if (aaa.offsetLeft<=ccc) {
                aaa.style.left=ccc+"px";
                clearInterval(aaa.tt)
            };
        },20)
    }else{
        aaa.tt=setInterval(function(){
            aaa.style.left=aaa.offsetLeft+10+"px";
            if (aaa.offsetLeft>=ccc) {
                aaa.style.left=ccc+"px";
                clearInterval(aaa.tt)
            };
        },20)
    }
}
var a1=document.querySelectorAll("#ne .bkb i");
for(var ka=0;ka<a1.length;ka++){
    a1[ka].aa1=ka;
    a1[ka].onclick=function(){
        // console.log(this.aa1,kkk)
        if(this.aa1>=kkk){
            skk(a2,"left",-180*this.aa1)
        }else{
            skk(a2,"right",-180*this.aa1)
        }
        kkk=this.aa1;
    }
}
var ne=document.getElementById("ne");
ne.onmouseover=function(){
    clearInterval(tt);
}
ne.onmouseout=function(){
    tt=setInterval(function(){
    if(kkk>=2){
        kkk=0;
        a2.style.left=0;
    }
    kkk++;
    skk(a2,"left",-180*kkk)
    },2000)
}
// 小点切图片
$(".bpb1").mouseover(function(){
    $(".bpb1").css("background","white").eq($(this).index()).css("background","red");
    $(".bpb1").css("borderColor","#b9beba").eq($(this).index()).css("borderColor","red");
    $(".bo1").css("display","none").eq($(this).index()).css("display","block");
})
$(".bpb2").mouseover(function(){
    $(".bpb2").css("background","white").eq($(this).index()).css("background","red");
    $(".bpb2").css("borderColor","#b9beba").eq($(this).index()).css("borderColor","red");
    $(".bo2").css("display","none").eq($(this).index()).css("display","block");
})
$(".bpb3").mouseover(function(){
    $(".bpb3").css("background","white").eq($(this).index()).css("background","red");
    $(".bpb3").css("borderColor","#b9beba").eq($(this).index()).css("borderColor","red");
    $(".bo3").css("display","none").eq($(this).index()).css("display","block");
})
$(".bpb4").mouseover(function(){
    $(".bpb4").css("background","white").eq($(this).index()).css("background","red");
    $(".bpb4").css("borderColor","#b9beba").eq($(this).index()).css("borderColor","red");
    $(".bo4").css("display","none").eq($(this).index()).css("display","block");
})
$(".bpb5").mouseover(function(){
    $(".bpb5").css("background","white").eq($(this).index()).css("background","red");
    $(".bpb5").css("borderColor","#b9beba").eq($(this).index()).css("borderColor","red");
    $(".bo5").css("display","none").eq($(this).index()).css("display","block");
})
// span切图片
$(".ma .a .f span").mouseover(function(){
    $(".ma .a .f span").css("color","black").eq($(this).index()).css("color","red")
    $(".ma .a .g").css("display","none").eq($(this).index()).css("display","block")
})
$(".ma .b .a .a6 li").mouseover(function(){
    $(".ma .b .a .a6 li").css("background","white").eq($(this).index()).css("background","red");
    $(".ma .b .a .a6 li").css("borderColor","#b9beba").eq($(this).index()).css("borderColor","red");
    $(".ma .b .a .a2").css("display","none").eq($(this).index()).css("display","block");
})
$(".ma .b .a .a7 li").mouseover(function(){
    $(".ma .b .a .a7 li").css("background","white").eq($(this).index()).css("background","red");
    $(".ma .b .a .a7 li").css("borderColor","#b9beba").eq($(this).index()).css("borderColor","red");
    $(".ma .b .a .a2").css("display","none").eq($(this).index()).css("display","block");
})
$(".ma .b .a .a8 li").mouseover(function(){
    $(".ma .b .a .a8 li").css("background","white").eq($(this).index()).css("background","red");
    $(".ma .b .a .a8 li").css("borderColor","#b9beba").eq($(this).index()).css("borderColor","red");
    $(".ma .b .a .a2").css("display","none").eq($(this).index()).css("display","block");
})



















































// var ajax=new XMLHttpRequest();
// ajax.open("get","jd.php",true);
// ajax.send(null);
// ajax.onreadystatechange=function(){
//     if(ajax.readyState===4&&ajax.status===200){
//         console.log(ajax.responseText);
//         var res=JSON.parse(ajax.responseText);
//         var str="";
//         var php=document.getElementById("php")
//         res.forEach(item=>{
//             str+=`<li>
//                         <a href=""><div class="a5">
//                             <div class="a6">找相似</div>
//                         </div>
//                         </a>
//                         <img src="${item.imgurl}" alt="">
//                         <div class="a4">
//                             <span class="opo">${item.content}</span>
//                         </div>
//                         <div class="a1">
//                             <span class="a2">￥</span>
//                             <span class="a3">${item.price}</span>
//                         </div>
//                     </li>`
//         })
//         php.innerHTML=str;
//     }
// }
