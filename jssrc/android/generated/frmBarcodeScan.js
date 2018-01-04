function addWidgetsfrmBarcodeScan() {
    frmBarcodeScan.setDefaultUnit(kony.flex.DP);
    var customScannerAndroid = new customWidget.barcodescanner({
        "id": "customScannerAndroid",
        "isVisible": true,
        "left": "2%",
        "top": "71dp",
        "width": "96%",
        "height": "293dp",
        "zIndex": 1,
        "autoFocusEnabled": true,
        "borderColor": "#1AA4D7",
        "borderLength": 80,
        "flashEnabled": false,
        "scanResultCallback": AS_TPW_d525df10e188464397520e9dbd14c0ab,
        "laserColor": "#FC6621",
        "maskColor": "#60000000",
        "textColor": "#7CB621",
        "textSize": 10,
        "tradeMarkText": "Kony!"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "barcodescanner"
    });
    frmBarcodeScan.add(customScannerAndroid);
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
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};