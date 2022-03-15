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

    var OUTPUT = steps+DM+CM+SM+CASE+PAGE+
    getAsyncStep(data)+'<br>'+
    getContext(data)+'<br>'+
    getSM(data)+'<br>'+
    getCase(data)+'<br>'+
    getPage(data);
    firstLetterToUpcase(data);
    document.querySelector('.info').innerHTML = OUTPUT; //显示
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
function getPage(input){

}
function getSM(input){
    var code = '在SM.java中创建：<br>'+
    '    public static '+firstLetterToUpcase(input)+' ' +input+' = new ' + firstLetterToUpcase(input)+';'

    return code
}
function getCase(input){
    var code = '创建case文件： '+firstLetterToUpcase(input)+'Case.java<br>'+
    getNextLine('blank00')+'@Slf4j'+
    getNextLine('blank00')+'public class ' + firstLetterToUpcase(input)+'Case extends BaseOpenPlatformCase {'+
    getNextLine('blank04')+'    @BeforeClass'+
    getNextLine('blank04')+'    public void beforeClass(){'+
    getNextLine('blank08')+'        /*这里是前置条件的编写的地方，比方说图片的预览，需要从网络上获取图片*/'+
    getNextLine('blank08')+'        SM.downloadFile.downloadFile(new Params()'+
    getNextLine('blank16')+'                .addParams("url", "http://tosv.boe.byted.org/obj/lark-qa-yinxiao/testFile/testDoc.doc").build());'+
    getNextLine('blank04')+'    }'+
    getNextLine('blank01')+''+
    getNextLine('blank04')+'    @Override'+
    getNextLine('blank04')+'    public Object[][] params() {'+
    getNextLine('blank08')+'        return new Object[][]{'+
    getNextLine('blank16')+'                new BaseDataBean()'+
    getNextLine('blank24')+'                        .setParam(new Params()'+
    getNextLine('blank24')+'                        /*此处的作用在于根据API的入参进行参数的设置，更改参数就行了，其他可以不用动*/'+
    getNextLine('blank32')+'                                .addParams("filePath", CM.downloadFileContext.tempFilePath)'+
    getNextLine('blank32')+'                                .addParams("fileType", "doc")'+
    getNextLine('blank32')+'                                .addParams("showMenu", true)'+
    getNextLine('blank32')+'                                .build())'+
    getNextLine('blank24')+'                        .setExpect(buildStatusExpect(SM.' +input+'.apiName(),"ok"))'+
    getNextLine('blank24')+'                        .setAssertType(AssertType.STRING)'+
    getNextLine('blank24')+'                        .setDescription("desc")'+
    getNextLine('blank25')+'                         .build(),'+
    getNextLine('blank08')+'        };'+
    getNextLine('blank04')+'    }'+
    getNextLine('blank01')+''+
    getNextLine('blank04')+'    @Override'+
    getNextLine('blank04')+'    public boolean isAsync() {'+
    getNextLine('blank08')+'        return true;'+
    getNextLine('blank04')+'    }'+
    getNextLine('blank01')+''+
    getNextLine('blank04')+'    @Override'+
    getNextLine('blank04')+'    public OpenPlatformBaseStep currentStep() {'+
    getNextLine('blank08')+'        return SM.' +input+';'+
    getNextLine('blank04')+'    }'+
    getNextLine('blank01')+''+
    getNextLine('blank04')+'    @Override'+
    getNextLine('blank04')+'    public void doAsyncStep(Map<String, Object> params,NetCallback callback) {'+
    getNextLine('blank08')+'        SM.' +input+'.' +input+'(params, callback);'+
    getNextLine('blank01')+''+
    getNextLine('blank04')+'    }'+
    getNextLine('blank01')+''+
    getNextLine('blank04')+'    @Override'+
    getNextLine('blank04')+'    public void doAfterStepNow(Map<String, Object> otherParam, Map<String, Object> params) {'+
    getNextLine('blank08')+'        DM.D1().' +input+'Page().clickBack();'+
    getNextLine('blank04')+'    }'+
    getNextLine('blank01')+''+
    getNextLine('blank04')+'    @Override'+
    getNextLine('blank04')+'    public void doBeforeStep(Map<String, Object> otherParam, Map<String, Object> params) {'+
    getNextLine('blank04')+'    }'+
    getNextLine('blank00')+'}'
    return code;

}
function getContext(input){
    var code = '在context文件夹下面新建一个上下文文件   '+firstLetterToUpcase(input)+'Context.java<br>'+
    'public class '+firstLetterToUpcase(input)+'Context {}<br>'+
    '然后在CM.java里面添加：<br>'+
    'public static '+firstLetterToUpcase(input)+'Context '+input+'Context = new '+firstLetterToUpcase(input)+'Context();'
    return code;
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
getNextLine('blank04')+'	public void '+input+'(Map<String, Object> params,NetCallback netCallback) {'+
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