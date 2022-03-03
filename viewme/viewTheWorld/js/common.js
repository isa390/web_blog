var url = "https://3fe5-115-192-20-43.ngrok.io";

function keydown(){
    if(event.keyCode == 13){ //按下回车键
        //do something
        uploaddata("jilu","spltalk");
     }
}
var myVar = "001";
function uploaddata(id,topicname){
    
    var obj = document.getElementById("name"); //定位id
    var index = obj.selectedIndex; // 选中索引
    var text = obj.options[index].text; // 选中文本
    console.log("ok")
    var data = document.getElementById(id).value;
    document.getElementById(id).value= '';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", topicname);
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
       }};
    var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
    console.log(time2)
    console.log(data)
    var data = time2+"  "+text+":"+data;
    xhr.send(data);    
    setTimeout(function() { downloaddata("spltalk"); }, 500);
    console.log("myVar");
    console.log(myVar); 
    if(myVar == "001"){
        myVar ="002";
        console.log(myVar);
        setInterval("downloaddata('spltalk')","2000"); 
    }
}
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

var cachebeifen ="123";
function downloaddata(topicname){
    console.log("ok")
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "get"+topicname);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = xhr.responseText;      
            if(cachebeifen == r){}
            else{
                cachebeifen = r;
                document.querySelector('.info').innerHTML = r; //显示
            }
        }
    };
    xhr.send(null);  
}