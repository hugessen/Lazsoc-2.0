#Lazaridis Students' Society App v2.0

Yeah baby!! Total code refactor using Ionic 2 and AngularJS 2. Coding in Angular 2 is so freaking awesome!

If you get 

    Error: spawn EACCES

run:

    ionic hooks add

After building iOS, you must run

    cordova prepare

##Notes
* Clubs need to only supply a banner if it is unique
* App sometimes crashes on newsfeed, because event returns before its club, causing it to return a 404 on the banner
* Modals and modal navigation for launch protocol?

###Cloud
- [ ] Deploy
- [ ] Push Notifications
- [ ] Analytics

## Adding a new plugin

To add new plugin:

    cordova plugin add cordova-plugin-calendar
    cordova prepare

To add new plugin to state:

    ionic state reset
    cordova plugin add PLUGINNAME
    cordova prepare
    ionic state save

## Pushing an android build

Keystore Password: 

    np}&zz'h5a5[HcT-

Release building commands:

    cordova build --release android
    keytool -genkey -v -keystore lazsoc-release-key.keystore -alias lazsoc -keyalg RSA -keysize 2048 -validity 10000
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore lazsoc-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk lazsoc
    /usr/local/opt/android-sdk/build-tools/23.0.3/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk LazSoc.apk

## iOS Gotchas
To allow urls such as 
- fb://
- twitter://

Or, open facebook/twitter/snapchat/etc URLs within their respective app on a users phone, we must request permission to do so in our platforms/ios/LazSoc/LazSoc-Info.plist. Rather than manually editing this file, we use cordova-plugin-settings-hook to configure our plist file from our config.xml. To do this we set _LSApplicationQueriesSchemes_. To export to native calendar, we set _NSCalendarsUsageDescription_ as well.