function keydown(topic){
    if(event.keyCode == 13){ 
        uploaddata(topic);
     }
}

function uploaddata(topic){
    console.log("ok")
    var data = document.getElementById(topic).value;
    var steps = "1,在business/openplatform/api/logic里面创建一个文件，如果有UI操作，可以借鉴OpenDocument.java<br>"+
    "";
    var DM = 1;
    var CM = 2;
    var SM = 1;
    var CASE = 1;
    var PAGE = 1;

    var OUTPUT = steps+DM+CM+SM+CASE+PAGE;

    document.querySelector('.info').innerHTML = OUTPUT; //显示
}