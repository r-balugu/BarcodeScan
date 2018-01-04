function addWidgetsfrm2() {
    frm2.setDefaultUnit(kony.flex.DP);
    var lblText = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblText",
        "isVisible": true,
        "skin": "CopyslLabel020ae0af556394d",
        "text": "Barcode info:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblBarcode = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblBarcode",
        "isVisible": true,
        "skin": "CopyslLabel020ae0af556394d",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "19%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
    }, {});
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
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};