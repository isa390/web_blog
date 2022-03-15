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
   var length = blankn.substring(blankn.length-2);
   var output = '<br>';
   for(i = 0;i< length;i++){
      output+= '&nbsp;';
   }
   return output;
}

function getAsyncStep(input){
   var upCase = firstLetterToUpcase(input);
    var code = ''+
    getNextLine('blank00')+'public class '+upCase+' extends AsyncStep {'+
getNextLine('blank020')+'    '+
getNextLine('blank04')+'	@Override'+
getNextLine('blank04')+'	public String apiName() {'+
getNextLine('blank08')+'		return "'+input+'";'+
getNextLine('blank04')+'	}'+
getNextLine('blank04')+''+
getNextLine('blank04')+'	@Override'+
getNextLine('blank04')+'	public String scope() {'+
getNextLine('blank08')+'		return "";'+
getNextLine('blank04')+'	}'+
getNextLine('blank04')+''+
getNextLine('blank04')+'	@Step'+
getNextLine('blank04')+'	public void openDocument(Map<String, Object> params,NetCallback netCallback) {'+
getNextLine('blank08')+'		asyncStep(params, new NetCallback() {'+
getNextLine('blank012')+'			@Override'+
getNextLine('blank012')+'			public void onSuccess(String result) {'+
getNextLine('blank016')+'				if (netCallback!=null){'+
getNextLine('blank020')+'					netCallback.onSuccess(result);'+
getNextLine('blank016')+'				}'+
getNextLine('blank016')+'				// 将结果赋值给Context'+
getNextLine('blank016')+'				'+upCase+'Context '+input+'Context = setData2Context(result, '+upCase+'Context.class);'+
getNextLine('blank016')+'				if ('+input+'Context != null) {'+
getNextLine('blank020')+'					CM.'+input+'Context = '+input+'Context;'+
getNextLine('blank016')+'				}'+
getNextLine('blank012')+'			} '+
getNextLine('blank04')+''+
getNextLine('blank012')+'			@Override'+
getNextLine('blank012')+'			public void onFail(String msg) {'+
getNextLine('blank016')+'				if (netCallback!=null){'+
getNextLine('blank020')+'					netCallback.onFail(msg);'+
getNextLine('blank016')+'				}'+
getNextLine('blank012')+'			}'+
getNextLine('blank08')+'		});'+
getNextLine('blank04')+'	}'+
getNextLine('blank00')+'}'


   return code
}