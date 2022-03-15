function keydown(topic){
    if(event.keyCode == 13){ 
        uploaddata(topic);
     }
}
var blank1 = 4;
var blank2 = 8;
var blank3 = 12;
var blank4 = 16;
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

function getNextLine(length){
   var output = '<br>';
   for(i = 0;i< length;i++){
      output+= '&nbsp;';
   }
   return output;
}

function getAsyncStep(input){
    var code = ''+
    'public class '+ firstLetterToUpcase(input)+' extends AsyncStep {' +
     getNextLine(blank1)+'@Override' +
     getNextLine(blank1)+'public String apiName() {' +
     getNextLine(blank2)+'return "' +input+'";}'+
     getNextLine(blank1)+'@Override' +
     getNextLine(blank1)+'public String scope() {return "";}' +
     getNextLine(blank1)+'@Step' +
     getNextLine(blank1)+'public void openDocument(Map<String, Object> params,NetCallback netCallback) {' +
     getNextLine(blank2)+'       asyncStep(params, new NetCallback() {' +
     getNextLine(blank2)+'       @Override' +
     getNextLine(blank2)+'       public void onSuccess(String result) {' +
     getNextLine(blank3)+'           if (netCallback!=null){' +
     getNextLine(blank3)+'            netCallback.onSuccess(result);}' +
     getNextLine(blank3)+            firstLetterToUpcase(input)+'Context '+input+'Context = setData2Context(result, '+firstLetterToUpcase(input)+'Context.class);' +
     getNextLine(blank3)+'             // 将结果赋值给Context' +
     getNextLine(blank3)+'            if ('+input+'Context != null) {CM.'+input+'Context = '+input+'Context;}' +
     getNextLine(blank3)+'                }' +
     getNextLine(blank2)+'        @Override' +
     getNextLine(blank2)+'        public void onFail(String msg) {'+
     getNextLine(blank3)+'        netCallback.onFail(msg);'+
     getNextLine(blank2)+'        }'+
     getNextLine(blank2)+'        });'+
     getNextLine(blank1)+'        }';
    console.log(code);
   return code;
}