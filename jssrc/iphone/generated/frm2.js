function addWidgetsfrm2() {
    frm2.setDefaultUnit(kony.flex.DP);
    var lblText = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblText",
        "isVisible": true,
        "skin": "CopyslLabel020ae0af556394d",
        "text": "Barcode info:",
        "top": "15%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblBarcode = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblBarcode",
        "isVisible": true,
        "skin": "CopyslLabel020ae0af556394d",
        "top": "19%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnScanAgain = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossBlue0e8277f20f47545",
        "height": "50dp",
        "id": "btnScanAgain",
        "isVisible": true,
        "left": "38dp",
        "onClick": AS_Button_d9465f49e064401fa9925657a3389adf,
        "skin": "CopyslButtonGlossBlue0e8277f20f47545",
        "text": "Scan Again",
        "top": "251dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frm2.add(lblText, lblBarcode, btnScanAgain);
};

function frm2Globals() {
    frm2 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrm2,
        "enabledForIdleTimeout": false,
        "id": "frm2",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0c5084a8ad6204c"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": true,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};