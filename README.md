# Pass for iOS

![Icon](https://raw.github.com/davidjb/passport/master/App/Images/icon.svg)

[![JavaScript Style
Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

View and manage your [pass password store](https://www.passwordstore.org/)
passwords on your iOS or Android device.

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

2. Run the build for either mobile OS.

   For iOS, run:

      react-native run-ios

   For Android, run Genymotion and then run:

      react-native run-android

3. Optionally, install to your physical device using either Xcode or
   (Android).

## Contributing

You're awesome -- all help is greatly appreciated!  Just fork and submit a
pull request on GitHub. For major changes or new features, consider opening
an issue first for discussion; this may save you a bunch of time in coding!

If you're not sure where to start contributing, take a look at the
[issue tracker](https://github.com/davidjb/pass-ios/issues)
to see the current list of bugs to solve or features to implement, and consult
the todo list below.

## Coding standards

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)
This project adheres to the JavaScript Standard Style.  Our CI enforces this,
so we suggest you enable linting to keep your project compliant during
development.

### Linting on commit

This is implemented using [ghooks](https://github.com/gtramontina/ghooks).
There is no additional setup needed.

### Bypassing linting

If you have to bypass lint for a special commit that you will come back and
clean (pushing something to a branch etc.) then you can bypass git hooks with
adding `--no-verify` to your commit command.

### Understanding linting errors

The linting rules are from Standard and React-Standard.  Regular JS errors
can be found with descriptions [here](http://eslint.org/docs/rules/), while
[React errors and descriptions can be found
here](https://github.com/yannickcr/eslint-plugin-react).

## Todo

* Simplify initial setup

  * enter git repo url to clone
  * paste gpg key
  * investigate becoming an official App Store app

* Better details screen

  * Change UI table cells when displaying passwords (temporarily)

* Configurable Settings

  * allow showing passwords on screen rather than copying
  * base directory location (other than /var/mobile/.password-store)
  * whether to store passphrase in keychain
  * passphrase storage duration (X minutes or forever)
  * pasteboard reset time

* Password editing / adding

  * auto-commit ala pass bash script
  * trigger 'git pull' from app (also 'git push' after editing is implemented)

* Android compatibility and testing

## Related Articles

* [Ignite Documentation](https://github.com/infinitered/ignite/wiki)
