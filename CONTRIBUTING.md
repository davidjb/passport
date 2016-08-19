# Contributing

All help is greatly appreciated! For small fixes such as documentation updates
or bug fixes, you can fork and submit a pull request on GitHub.

For major changes or new features, please [open an an
issue](https://github.com/davidjb/passport/issues/new) first for discussion.
This will save you time in coding by ensuring you're on the right path and
your goals align with the project.

If you're not sure where to start contributing, take a look at the
[issue tracker](https://github.com/davidjb/pass-ios/issues)
to see the current list of bugs to solve or features to implement, and consult
the [TODO list](https://github.com/davidjb/passport/blob/master/TODO.md).

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

## Support for more devices

React Native is a very active project and many new platforms are being
supported.  At present, this project targets iOS and Android, but are
completely open to supporting any and all new devices.  If you have an
interest in contributing support for your desired platform, get in touch.

## Documentation

At present, documentation is simply located in the `docs/` folder as HTML and
served by GitHub pages.
