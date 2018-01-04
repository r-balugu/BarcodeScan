//Type your code here
/**
 * @function
 *
 */
function scanResults(scanResult) {
    frm2.lblBarcode.text = scanResult;
    kony.print("in scan result");
    frm2.show();
    frmBarcodeScan.destroy();
}

function applicationOnBackground() {
    kony.print("=============== App is Background of barcode=======");
    var currForm = kony.application.getCurrentForm();
    if (currForm.id === "frmBarcodeScan") {
        frmBarcodeScan.destroy();
    } else {}
}

function applicationOnForeGround() {
    kony.print("=============== App is ForeGround of barcode =======");
    var currForm = kony.application.getCurrentForm();
    if (currForm.id === "frmBarcodeScan") {
        frmBarcodeScan.show();
    } else {}
}

function applicationEvents() {
    kony.print("======== Initializing call backs of barcode ========");
    var callbacksObj = {
        onbackground: applicationOnBackground,
        onforeground: applicationOnForeGround,
    };
    kony.application.setApplicationCallbacks(callbacksObj);
}

function postShowScanning() {
    //post show function for frmBarcodeScan
    var devName = kony.os.deviceInfo().name;
    if (devName == "android") {
        kony.print("in ifdef android");
        frmBarcodeScan.customScannerAndroid.startCamera();
        kony.print("in ifdef android end");
    } else {}
    applicationEvents();
}
/**
 * @function
 *
 */
function toggleFlash() {
    var flashStatus = frmBarcodeScan.customScannerAndroid.flashEnabled;
    frmBarcodeScan.customScannerAndroid.flashEnabled = !flashStatus;
}