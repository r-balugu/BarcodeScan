function addWidgetsfrmBarcodeScan() {
    frmBarcodeScan.setDefaultUnit(kony.flex.DP);
    var customScanneriOS = new customWidgets.barcodescanner({
        "id": "customScanneriOS",
        "isVisible": true,
        "left": "65dp",
        "top": "55dp",
        "width": "90%",
        "height": "265dp",
        "centerX": "50%",
        "zIndex": 1,
        "scanResult": AS_TPW_8b880914f42d44a79c50f679ace06426
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "barcodescanner"
    });
    frmBarcodeScan.add(customScanneriOS);
};

function frmBarcodeScanGlobals() {
    frmBarcodeScan = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBarcodeScan,
        "enabledForIdleTimeout": false,
        "id": "frmBarcodeScan",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_5a3062f3393848a080c3f175e9a3aec1,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};