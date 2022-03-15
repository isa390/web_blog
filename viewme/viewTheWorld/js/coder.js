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
    document.querySelector('.info').innerHTML = OUTPUT; //显示
}

function firstLetterToUpcase(input){
   if(input.length > 2){
      var fisrt = input.substring( 0 ,1 ).toUpperCase();
      var last = input.substring(1);
      var output = fisrt+last;
      console.log(output);
   }
}

function getAsyncStep(input){
    var code = 
    "
    public class OpenDocument extends AsyncStep {
    
        @Override
        public String apiName() {
            return "openDocument";
        }
    
        @Override
        public String scope() {
            return "";
        }
    
        @Step
        public void openDocument(Map<String, Object> params,NetCallback netCallback) {
            asyncStep(params, new NetCallback() {
                @Override
                public void onSuccess(String result) {
                    if (netCallback!=null){
                        netCallback.onSuccess(result);
                    }
                    // 将结果赋值给Context
                    OpenDocumentContext openDocumentContext = setData2Context(result, OpenDocumentContext.class);
                    if (openDocumentContext != null) {
                        CM.openDocumentContext = openDocumentContext;
                    }
                } 
    
                @Override
                public void onFail(String msg) {
                    if (netCallback!=null){
                        netCallback.onFail(msg);
                    }
                }
            });
        }
    }"
}