
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