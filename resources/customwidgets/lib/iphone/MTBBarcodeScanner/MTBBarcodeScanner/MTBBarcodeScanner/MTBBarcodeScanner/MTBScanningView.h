//
//  MTBScanningView.h
//  BarcodeScannerFFI
//
//  Created by Csaba Csordas on 08/12/2016.
//  Copyright © 2016 Kony Inc. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "MTBBarcodeScanner.h"
#import "MTBScanningViewProtocol.h"
#import "CWIWidget.h"

@interface MTBScanningView : UIView <MTBScanningViewProtocol, CWIWidget>

@end
