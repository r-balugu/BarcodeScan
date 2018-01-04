# BarcodeScanCustomWidget

Custom widget implementation to use a barcode scanner within a Kony application

Project containing
- JS Modules
  - barcodeScan.js - collection of utility functions that you can include in your project
  - iOS / Android Library configured as Custom Widgets

The project provides an Example how to include Barcode Scanning widgets in your Kony Application.  

## Open with

- [ ] Visualizer Starter 7.1.x
- [ ] Visualizer Starter 7.2.x
- [x] Visualizer Enterprise 7.1.x
- [x] Visualizer Enterprise 7.2.x
- [ ] Other: please indicate, e.g. Eclipse using JDK 1.7

## Type of Repo

- Kony App
  - [ ] B2B
  - [ ] B2C
  - [ ] B2E
  - [x] Sample
- Reusable Javascript
  - [x] Javascript Component or Library
- Foreign Function Interface (FFI)
  - [x] Javascript Interface to an FFI
  - [x] Android
  - [x] iOS
  - [ ] Windows

## Channels Targeted

- Mobile
  - [x] iOS (tested on iOS 10)
  - [x] Android (tested on Android 6.0.1)

- Tablet
  - [x] iOS (not tested)
  - [x] Android (not tested)

- Desktop
  - [ ] Desktop Web
  - [ ] Desktop Windows
- Smart Watch
  - [ ] Apple Watch

## Dependencies

The project has a dependency for Andorid on a open source library. So you need to add the following line under Gradle dependencies.

`compile 'me.dm7.barcodescanner:zxing:1.9'`

## How to Build

NL5428 - to add details about how to add custom Gradle file to the project and how to configure the PreCompileSetup

## What needs to be configured to make this work in your app

Since iOS 10 Apple introduced a new way to request access to camera usage. To make this work you need to add a inoplist_configuration.json file (if does not exists yet) under resources/common and you need to add the following key:

`{
    "NSCameraUsageDescription" : "This application need to access your camera"
 }
`
The value of this key will be presented to the user first time before accessing the camera.

## Implementation Notes

The Android version depends on this custom library: https://engie-src.ci.konycloud.com/ENGIE-Reuse/AndroidBarocodeWidget
Check out the documentation on methods and properties exposed by the library.

Custom barcode scanner been implemented for SMATCH application: https://engie-src.ci.konycloud.com/Engie-Lab/SmartCharging

##Important Note

Feel free to extend the example with additional use-cases and open a PR.
