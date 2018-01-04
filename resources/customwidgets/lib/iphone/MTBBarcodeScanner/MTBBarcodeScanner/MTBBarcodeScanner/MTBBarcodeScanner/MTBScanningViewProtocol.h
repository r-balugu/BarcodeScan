//
//  MTBScanningViewProtocol.h
//  BarcodeScannerFFI
//
//  Created by Csaba Csordas on 08/12/2016.
//  Copyright © 2016 Kony Inc. All rights reserved.
//


@protocol MTBScanningViewProtocol <NSObject>

-(void)scanResult:(NSString *)result;

@end
