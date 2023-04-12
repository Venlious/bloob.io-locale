# About Bloob.io

**Bloob.io** is a project of passion consisting of multiplayer browser games. I started to work on these games aiming to make them fun, configurable, and easily accessible.

https://bloob.io

## Translation Editor

The [built in translation editor](https://bloob.io/translation-editor) has been introduced to Bloob.io as of v1.6.0! On this page you are able to make changes, download the file as .csv, and submit them here or by mail to contribute.

# Localisation

While the project itself is not open source, the localisation is. Feel free to create pull requests with improvements, grammar fixes, or support for new languages.

# FAQ

-   **How do I add a new language?**
    -   Please [make a new issue](https://github.com/Venlious/bloob.io-locale/issues/new) requesting the language you would like to see. If approved, the language will be generated and can then be verified by a person.
-   **I found a grammatically error or spelling mistake. What do I do?**
    -   Great! You can go to the [translation editor](https://bloob.io/translation-editor) and find and fix the issue there, resolve the issue in the repository directly, or you can [make a new issue](https://github.com/Venlious/bloob.io-locale/issues/new) with an explanation of the error you found.
-   **I have another question!**
    -   Feel free to [make a new issue](https://github.com/Venlious/bloob.io-locale/issues/new) with your question.

# Local Setup

Running the project locally is easy. Please make sure to use Node version 16.

-   Install all files
    `yarn`
-   Translate (new) language (Note: must configure .env)
    `yarn translate --source "en" --target "nl" --language "informal Dutch"`
-   Automatically fix any fixable and common issues
    `yarn fix`
-   Automatically fix and fill any translations that are missing (Note: must configure .env)
    `yarn fill`
-   Verify if test passes
    `yarn test`
-   Verify if lint passes
    `yarn lint`

You're now good to go. There's no build process. Use `yarn lint:fix` to automatically fix any formatting and linting errors.

# Contributors

-   Tristan Volk ([@Venlious](https://github.com/Venlious))
    -   English (UK)
    -   Dutch (NL)
-   Jay ([@untypedjay](https://github.com/untypedjay))
    -   German (DE)
-   ... you? :)
