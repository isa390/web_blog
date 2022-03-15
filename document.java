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