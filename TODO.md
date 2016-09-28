# Todo

## Dev processes

* How to stay on the same flux screen on reload
* Automated testing / unit testing
* Release to Apple App Store & Google Play

## Features

* Files:

  * Read/write files and folders in React Native
  * GPG content read/write/encrypt/decrypt via kbgpg (?)
  * Git management (commits, push, pull, history/logs, etc) via GitKit.js (?)
  * Generate passwords following `pass` implementation
  
* GPG:

  * Key management, loading and generation with kbgpg (see <https://keybase.io/kbpgp>)

* Passwords:

  * Favouriting for home page
  * Auto-commit Git on changes like the `pass` bash script
  * Ability to trigger 'git pull' from app (also 'git push' after editing is
    implemented; "sync")
  * Change commit in Git (git checkout)
  * UI:

    * Star icon at right
    * Last modified/accessed date/time
    * Show Git history (git log)
    * Pasteboard copy / automatic clear
    * Show passwords in monotype
    * 2 or 3 buttons: show/copy/QR for password and full file
    * (Optional) QR code display: allowing device-to-device copying of password
    * (Very optional) secure transfer of passwords between phone/laptop

* UI:

  * All listings: letter indexing + search in that listing
  * Global search: recursive search throughout app (separate UI)
  * Splash screen and lock screen (show on app entering background)
  * TouchID access: restrict app access, file access, password viewing
  * Simplify initial setup: enter Git repo URL to clone, paste GPG key etc
  * i18n support: British English + US to start
  * Audit log: what was accessed by whom and when (identify which finger?)
  * OnePassword compatible extension (for loading credentials into
    apps/browsers)

    * See list of apps to test with https://blog.agilebits.com/1password-apps/

* Settings UI and storage

  * Password format configuration (colon separated etc)
  * Secure data management (keys, paswords, SSH/SFTP transport)
  * TouchID enrollment (on/off)
  * Hide app contents in background (enabled by default)
  * Git: Enable/disable git commits, git identity (name/email), push setting
  * Password length and configuration
  * Allow showing passwords on screen rather than copying
  * Store passphrase in keychain
  * Passphrase storage duration (X minutes or forever)
  * Pasteboard reset enabled and time
  * Identities
  * Repositories / stores
  * Metadata associated with each entry (colours, logos etc) -- read from file
    itself?

* Cross platform support:

  * Android compatibility and testing: Nexus Imprint (?)
  * Write a note about other platforms

## Comparison with other options

* ? Install/trial LastPass, 1Password, KeePassX on mobile

  * 1Password:

    * Passwords:
      * Flexible password generation options (set on creating a password)
      * Alert on sharing/copying
    * One main 'settings' area, which configures General, Vaults, Security,
      Sync, Advanced, Erase all 1Password Data (in red), Erase all iCloud Data
      * General:
        * password font (select from all available, shows demo of 0-O-o
          and 1-l-I characters;
        * Show Rich icons: auto search/download unique icons for logins
        * Spotlight search
      * Vaults: which stores are configured for syncing and how many items are present
      * Security:
        * Lock Now
        * Lock on exit
        * Auto-lock after 1,2,5,10,15,30 mins, 1 hour
        * TouchID
        * Clear Clipboard after 45 seconds
        * Conceal Passwords (toggle)
        * Disable/enable custom keyboards on editing (disable by default)
        * Master password after certain time (eg if TouchID fails or number of
          days, restart etc)
      * Sync: iCloud syncing of content, settings
      * Help: user guide, forums, search knowledgebase, newsletter
      * Version number at bottom
