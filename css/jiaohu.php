<?php
$a=$_GET["user"];
$b=$_GET["psw"];
$arr=array("asd","abc","aiu");
$arr1=array("asd"=>"123","abc"=>"234","aiu"=>"345");
if(in_array($a,$arr)){
    if($arr1[$a]==$b){
        echo '{"code":2}';
    }else{
        echo '{"code":1}';
    }
}else{
    echo '{"code":0}';
}
?>
