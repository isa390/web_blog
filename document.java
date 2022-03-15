getNextLine('blank00')+'public class OpenDocumentPage extends BasePage {'+
getNextLine('blank04')+'    public OpenDocumentPage(DriverAdapter driver) {'+
getNextLine('blank08')+'        super(driver);'+
getNextLine('blank04')+'    }'+
getNextLine('blank04')+'    public void clickBack() {'+
getNextLine('blank08')+'        Element element = new Element(driver, new PlatformElementCallback() {'+
getNextLine('blank12')+'            @Override'+
getNextLine('blank12')+'            public BaseAction ios() {'+
getNextLine('blank16')+'                Action action = new Action.Builder().setUPath("UPath(type_ == 'XCUIElementTypeApplication')/0/0/0/0/0/0/0/0/0/0/0/2/0")'+
getNextLine('blank24')+'                        .setConstType(ViewType.CONTROL)'+
getNextLine('blank24')+'                        .setAssertType(AssertType.WAIT_FOR_INVISIBLE)'+
getNextLine('blank24')+'                        .setTip("根据upath进行点击").build();'+
getNextLine('blank16')+'                return action;'+
getNextLine('blank12')+'            }'+
getNextLine('blank01')+''+
getNextLine('blank12')+'            @Override'+
getNextLine('blank12')+'            public BaseAction android() {'+
getNextLine('blank16')+'                Action action = new Action.Builder().setUPath("UPath(id_ == 'title_bar_back')")'+
getNextLine('blank24')+'                        .setConstType(ViewType.CONTROL)'+
getNextLine('blank24')+'                        .setAssertType(AssertType.WAIT_FOR_INVISIBLE)'+
getNextLine('blank24')+'                        .setTip("根据upath进行点击").build();'+
getNextLine('blank16')+'                return action;'+
getNextLine('blank01')+''+
getNextLine('blank12')+'            }'+
getNextLine('blank00')+'//            @Override'+
getNextLine('blank00')+'//            public BaseAction mac(){'+
getNextLine('blank00')+'//                PCAction action = new PCAction.Builder().setActionMode(ActionMode.Native).mac_bundle_id("");'+
getNextLine('blank00')+'//                return action;'+
getNextLine('blank00')+'//            }'+
getNextLine('blank08')+'        });'+
getNextLine('blank08')+'        element.click();'+
getNextLine('blank04')+'    }'+
getNextLine('blank01')+''+
getNextLine('blank00')+'}'+
ument.openDocument(params, callback);'+
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


public class OpenDocumentPage extends BasePage {
    public OpenDocumentPage(DriverAdapter driver) {
        super(driver);
    }
    public void clickBack() {
        Element element = new Element(driver, new PlatformElementCallback() {
            @Override
            public BaseAction ios() {
                Action action = new Action.Builder().setUPath("UPath(type_ == 'XCUIElementTypeApplication')/0/0/0/0/0/0/0/0/0/0/0/2/0")
                        .setConstType(ViewType.CONTROL)
                        .setAssertType(AssertType.WAIT_FOR_INVISIBLE)
                        .setTip("根据upath进行点击").build();
                return action;
            }

            @Override
            public BaseAction android() {
                Action action = new Action.Builder().setUPath("UPath(id_ == 'title_bar_back')")
                        .setConstType(ViewType.CONTROL)
                        .setAssertType(AssertType.WAIT_FOR_INVISIBLE)
                        .setTip("根据upath进行点击").build();
                return action;

            }
//            @Override
//            public BaseAction mac(){
//                PCAction action = new PCAction.Builder().setActionMode(ActionMode.Native).mac_bundle_id("");
//                return action;
//            }
        });
        element.click();
    }

}