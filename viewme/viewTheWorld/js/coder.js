function keydown(topic){
    if(event.keyCode == 13){ 
        uploaddata(topic);
     }
}
function uploaddata(topic){
    console.log("ok")
    var data = document.getElementById(topic).value;
    var steps = "操作步骤：<br>1,在business/openplatform/api/logic里面创建一个文件，如果有UI操作，可以借鉴OpenDocument.java<br>"+
    "";
    var DM = 1;
    var CM = 2;
    var SM = 1;
    var CASE = 1;
    var PAGE = 1;

    var OUTPUT = steps+DM+CM+SM+CASE+PAGE;
    firstLetterToUpcase(data);
    document.querySelector('.info').innerHTML = getAsyncStep(data); //显示
}

function firstLetterToUpcase(input){
   if(input.length > 2){
      var fisrt = input.substring( 0 ,1 ).toUpperCase();
      var last = input.substring(1);
      var output = fisrt+last;
      console.log(output);
      return output;
   }
}

function getNextLine(blankn){
   var length = blankn.substring(blankn.length-1);
   var output = '<br>';
   for(i = 0;i< length;i++){
      output+= '&nbsp;';
   }
   return output;
}

function getAsyncStep(input){
    var code = ''
    console.log(code);
   return code;
}