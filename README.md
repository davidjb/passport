# Passport

![Icon](https://raw.github.com/davidjb/passport/master/App/Images/icon.svg)

[![JavaScript Style
Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

View and manage your [pass password store](https://www.passwordstore.org/)
passwords on your iOS and Android devices.

## Features

* Access and decrypt GPG-based files within your Pass-compatible store
* Copy passwords to pasteboard or display on screen
* View or copy multi-line Pass content
* Resets pasteboard contents after 45 seconds when copying data
* TouchID authentication for storing GPG passphrase
* Written in React Native and utilises [Ignite](https://github.com/infinitered/ignite)`

## Quick start

1. Download the app from the [App Store](#) or compile for your own device and
   side-load to your device.

1. Copy your `pass` password-store onto your device

   The simplest way to do this is to store your passwords in a `git` repository,
   which you can then clone onto your device. Alternatively, you can use SCP,
   iFile or any other method to transfer the passwords over.

1. Set up your GPG key:

   1. Export your *private* key from your desktop, laptop or other computer:

     ```
     (desktop)$ gpg --export-secret-key --armor ${KEY_ID} > ${KEY_ID}.asc
     ```

   1. Copy this file to your iOS device

   1. On the device, import the key:

     ```
     (device)$ gpg --import ${KEY_ID}.asc
     ```

   1. Delete the key file

   1. Test decrypting one of your passwords

     ```
     (device)$ gpg -d ~/.password-store/ENTRY.gpg
     ```

1. Launch and begin using the Pass app!

## Using the app

After launching the app, you will be presented with a listing of files and
directories in `~/.password-store`. Files starting with '.' are hidden, and
`.gpg` extensions are stripped.

![Main Screen](https://raw.github.com/davidjb/pass-ios/screenshots/screenshots/1_main_screen.png)

Clicking on a directory will show its contents.

![Subdirectory Listing](https://raw.github.com/davidjb/pass-ios/screenshots/screenshots/2_subdir.png)

Clicking on a password file will show a screen with the password file details (name and \*'d out password).

![Subdirectory Listing](https://raw.github.com/davidjb/pass-ios/screenshots/screenshots/3_entry.png)

Clicking on the name or password box will copy the respective contents to the pasteboard (clipboard). Since the password is encrypted, you will have to enter you passphrase before it can be copied.

![Subdirectory Listing](https://raw.github.com/davidjb/pass-ios/screenshots/screenshots/4_gpg.png)

## Building

1. Obtain the source code and install dependencies:

   ```
      git clone https://github.com/davidjb/passport.git
      cd passport
      npm install
   ```

1. Run the build for either mobile OS.

   For iOS, run:

      react-native run-ios

   For Android, run Genymotion and then run:

      react-native run-android

1. Optionally, install to your physical device using either Xcode or
   (Android).

## Contributing

Thanks, all help is greatly appreciated! Check out the
[CONTRIBUTING.md](https://github.com/davidjb/passport/blob/master/CONTRIBUTING.md)
for details on what to help with and how to easily get started.

## Related Articles

* [Ignite Documentation](https://github.com/infinitered/ignite/wiki)
* <https://github.com/dabit3/react-native-fonts>
