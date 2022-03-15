getNextLine('blank01')+''+
getNextLine('blank00')+'@Slf4j'+
getNextLine('blank00')+'public class OpenDocumentDocCase extends BaseOpenPlatformCase {'+
getNextLine('blank04')+'    @BeforeClass'+
getNextLine('blank04')+'    public void beforeClass(){'+
getNextLine('blank08')+'        SM.downloadFile.downloadFile(new Params()'+
getNextLine('blank16')+'                .addParams("url", "http://tosv.boe.byted.org/obj/lark-qa-yinxiao/testFile/testDoc.doc").build());'+
getNextLine('blank04')+'    }'+
getNextLine('blank01')+''+
getNextLine('blank04')+'    @Override'+
getNextLine('blank04')+'    public Object[][] params() {'+
getNextLine('blank08')+'        return new Object[][]{'+
getNextLine('blank16')+'                new BaseDataBean()'+
getNextLine('blank24')+'                        .setParam(new Params()'+
getNextLine('blank32')+'                                .addParams("filePath", CM.downloadFileContext.tempFilePath)'+
getNextLine('blank32')+'                                .addParams("fileType", "doc")'+
getNextLine('blank32')+'                                .addParams("showMenu", true)'+
getNextLine('blank32')+'                                .build())'+
getNextLine('blank24')+'                        .setExpect(buildStatusExpect(SM.openDocument.apiName(),"ok"))'+
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
getNextLine('blank08')+'        return SM.openDocument;'+
getNextLine('blank04')+'    }'+
getNextLine('blank01')+''+
getNextLine('blank04')+'    @Override'+
getNextLine('blank04')+'    public void doAsyncStep(Map<String, Object> params,NetCallback callback) {'+
getNextLine('blank08')+'        SM.openDocument.openDocument(params, callback);'+
getNextLine('blank01')+''+
getNextLine('blank04')+'    }'+
getNextLine('blank01')+''+
getNextLine('blank04')+'    @Override'+
getNextLine('blank04')+'    public void doAfterStepNow(Map<String, Object> otherParam, Map<String, Object> params) {'+
getNextLine('blank08')+'        DM.D1().openDocumentPage().clickBack();'+
getNextLine('blank04')+'    }'+
getNextLine('blank01')+''+
getNextLine('blank04')+'    @Override'+
getNextLine('blank04')+'    public void doBeforeStep(Map<String, Object> otherParam, Map<String, Object> params) {'+
getNextLine('blank04')+'    }'+
getNextLine('blank00')+'}'+
'+
getNextLine('blank00')+'}'+




@Slf4j
public class OpenDocumentDocCase extends BaseOpenPlatformCase {
    @BeforeClass
    public void beforeClass(){
        SM.downloadFile.downloadFile(new Params()
                .addParams("url", "http://tosv.boe.byted.org/obj/lark-qa-yinxiao/testFile/testDoc.doc").build());
    }

    @Override
    public Object[][] params() {
        return new Object[][]{
                new BaseDataBean()
                        .setParam(new Params()
                                .addParams("filePath", CM.downloadFileContext.tempFilePath)
                                .addParams("fileType", "doc")
                                .addParams("showMenu", true)
                                .build())
                        .setExpect(buildStatusExpect(SM.openDocument.apiName(),"ok"))
                        .setAssertType(AssertType.STRING)
                        .setDescription("desc")
                         .build(),
        };
    }

    @Override
    public boolean isAsync() {
        return true;
    }

    @Override
    public OpenPlatformBaseStep currentStep() {
        return SM.openDocument;
    }

    @Override
    public void doAsyncStep(Map<String, Object> params,NetCallback callback) {
        SM.openDocument.openDocument(params, callback);

    }

    @Override
    public void doAfterStepNow(Map<String, Object> otherParam, Map<String, Object> params) {
        DM.D1().openDocumentPage().clickBack();
    }

    @Override
    public void doBeforeStep(Map<String, Object> otherParam, Map<String, Object> params) {
    }
}