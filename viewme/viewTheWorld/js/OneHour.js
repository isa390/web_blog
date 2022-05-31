var url = getURL();
function uploaddata(id,topicname){
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
    var data = time2+":"+data;
    xhr.send(data);    
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


function nextpage(id){
    var data = document.getElementById(id).value;
    data += "<br>";
    document.getElementById(id).value = data;
    setPosition(id);
}


function setPosition(id) {
    let ctrl = document.getElementById(id);
    if (ctrl.setSelectionRange) {
          //非ie
          ctrl.focus(); // 获取焦点
          ctrl.setSelectionRange(-1,-1); // 设置选定区的开始和结束点
    } else if (ctrl.createTextRange) {
          var range = ctrl.createTextRange(); // 创建选定区
          range.collapse(true); // 设置为折叠,即光标起点和结束点重叠在一起
          range.moveEnd("character", pos); // 移动结束点
          range.moveStart("character", pos); // 移动开始点
          range.select(); // 选定当前区域
    }
}

function copycontent(id){
    let copyelement = document.getElementById(id);
    copyelement.select();
    document.execCommand("Copy");
}