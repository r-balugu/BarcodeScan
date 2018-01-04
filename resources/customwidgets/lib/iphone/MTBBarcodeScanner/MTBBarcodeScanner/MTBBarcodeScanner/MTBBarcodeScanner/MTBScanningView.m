//
//  MTBScanningView.m
//  BarcodeScannerFFI
//
//  Created by Csaba Csordas on 08/12/2016.
//  Copyright © 2016 Kony Inc. All rights reserved.
//

#import "MTBScanningView.h"
#import "KonyCWIEnvironment.h"
#import "MTBBarcodeScanner.h"
#import "CallBack.h"

@interface MTBScanningView ()

@property (nonatomic, weak) KonyCWIEnvironment *konyEnvironment;
@property (nonatomic, strong) MTBBarcodeScanner *scanner;
@property (nonatomic, strong) id<MTBScanningViewProtocol> scanDelegate;
@property (nonatomic, strong) CallBack *callback;

@end


@implementation MTBScanningView

- (instancetype)init
{
    self = [super init];
    if (self) {
		CGRect screenRect = [[UIScreen mainScreen] bounds];
        CGFloat screenWidth = screenRect.size.width;
        screenWidth = screenWidth-40;
        self.frame  = CGRectMake(0, 0, screenWidth, screenWidth);
		self.scanner = [[MTBBarcodeScanner alloc] initWithPreviewView:self];
        __block MTBScanningView *weakSelf = self;
        [MTBBarcodeScanner requestCameraPermissionWithSuccess:^(BOOL success) {
            
            [self.scanner startScanningWithResultBlock:^(NSArray *codes) {
                AVMetadataMachineReadableCodeObject *code = [codes firstObject];
                NSLog(@"Found code: %@", code.stringValue);
                [weakSelf.scanner stopScanning];
                [weakSelf.scanDelegate scanResult:code.stringValue];

            } error:nil];
        }];
    }
    return self;
}

#pragma mark JS Protocol Methods

-(void)scanResult:(NSString *)result{
    NSLog(@"Barcode scan result callback is executed");
}


#pragma mark Custom Widget Protocols Methods

// Invoked by platform to initialize any object of the custom widget. Initializing the Kony Environment and Custom Widget instance.

- (id) initWithEventDelegate: (id) eventDelegate withKonyEnvironment:(id) env
{
    NSLog(@"***** Entering into initWithEventDelegatewithKonyEnvironment *****");
    
    self = [self init];
    self.konyEnvironment = env;
    
    self.scanDelegate = eventDelegate;
    
    NSLog(@"***** Exiting out of initWithEventDelegatewithKonyEnvironment *****");
    
    return self;
}


// Fetch the preferred size(Height and width) for the widget. The CGSize parameter is the parent width and height of the widget.
- (CGSize) getPreferredSizeForGivenSize: (CGSize) givenSize
{
    NSLog(@"***** Entering into getPreferredSizeForGivenSize %@ **********",NSStringFromCGSize(givenSize));
    
    CGSize preferredSize = givenSize;
    preferredSize.height = 150;
    
    NSLog(@"***** Exiting out of getPreferredSizeForGivenSize %@ **********",NSStringFromCGSize(preferredSize));
    
    return preferredSize;
}


// Set the position of the custom widget with respect to the parent widget. Provides x, y coordinates, height, and width for the custom widget with reference to the parent widget.

- (void) setWidgetViewFrame: (CGRect) frame
{
    NSLog(@"***** Entering into setWidgetViewFrame *****");
    NSLog(@"***** frame: %@ *****" ,NSStringFromCGRect(frame));
    
    self.frame= frame;
    
    NSLog(@"***** Exiting out of setWidgetViewFrame *****");
}

// Returns the view defined for the custom widget.

- (UIView*) getWidgetView
{
    NSLog(@"***** Entering into getWidgetView *****");
    NSLog(@"***** Exiting out of getWidgetView *****");
    
    return self;
    
}


// Invoked by platform when there are any updates in the end user defined properties.

-(void)modelUpdatedForProperty:(NSString *)propertyName withOldValue:(id)oValue newValue:(id)nValue
{
    NSLog(@"***** Entering into modelUpdatedForPropertywithOldValuenewValue *****");
    NSLog(@"***** PropertyName: %@ *****" ,propertyName);
    NSLog(@"***** OldValue: %@ *****" ,oValue);
    NSLog(@"***** NewValue: %@ *****" ,nValue);
    
//    if ([propertyName isEqualToString:@"text"])
//    {
//        NSLog(@"***** Updating the value for the property %@ from %@ to %@ *****",propertyName,oValue,nValue);
//        
//        self.text = [NSString stringWithFormat:@"%@" ,nValue];
//        NSArray *lSubViews = [self subviews];
//        UIButton *lButton = (UIButton *)lSubViews[0];
//        
//        NSLog(@"***** Current title on custom button widget %@ *****",lButton.currentTitle);
//        
//        [lButton setTitle:[NSString stringWithFormat:@"%@", nValue]  forState:UIControlStateNormal];
//        
//        NSLog(@"***** Updated title on custom button widget %@ *****",lButton.currentTitle);
//    }
    NSLog(@"***** Exiting out of modelUpdatedForPropertywithOldValuenewValue *****");
}



-(void)dealloc
{
    NSLog(@"***** Entering into dealloc *****");
    
    [super dealloc];
    
    NSLog(@"***** Exiting out of dealloc *****");
}


@end
