# About Bloob.io

**Bloob.io** is a project of passion consisting of multiplayer browser games. I started to work on these games aiming to make them fun, configurable, and easily accessible.

https://bloob.io

# Localization

While the project itself is not open source, the localization is. Feel free to create pull requests with improvements, grammar fixes, or support for new languages.

# Where the strings live

Each language is a folder under `messages/`, split so that a player only downloads the games they actually open:

```
messages/
    en/
        core.json           everything shared, plus every game's name and description
        games/HOKM.json     Hokm's options, presets, help and gameplay strings
        games/YACHT.json
        games/pool.json     shared by the four pool games
        games/card.json     shared by the games dealing a deck of cards
        ...
```

`pool.json` and `card.json` are not games — they are the strings more than one game says the same way, so a suit is named once rather than four times. Anything shared more widely than that lives in `core.json` under `game.generic`.

`messages/_empty/` is the same tree with every value `null`; the template a brand new language starts from.

Running `bun fix` puts every key in the file it belongs in, so you never have to decide: translate the string where you find it, and let `fix` sort the rest.

# FAQ

-   **How do I add a new language?**
    -   Please [make a new issue](https://github.com/Venlious/bloob.io-locale/issues/new) requesting the language you would like to see. If approved, it will be added to `index.ts` and seeded from `messages/_empty/`, ready to be filled in.
-   **I found a grammatically error or spelling mistake. What do I do?**
    -   Great! You can make a pull request with the edit to the file directly or you can [make a new issue](https://github.com/Venlious/bloob.io-locale/issues/new) with an explanation of the error you found.
-   **How do I make a word bold?**
    -   Write it as `**word**`, the way markdown does. The word inside the asterisks is the one that stands out, so put them around whatever carries the emphasis in your language rather than around the same word English uses. Every other kind of formatting — HTML tags included — is shown to the player exactly as you typed it.
-   **I have another question!**
    -   Feel free to [make a new issue](https://github.com/Venlious/bloob.io-locale/issues/new) with your question.

# Local Setup

Running the project locally is easy. Please make sure to use [Bun](https://bun.sh/).

-   Install all files
    `bun install`
-   Automatically fix any fixable and common issues
    `bun fix`
-   Verify if test passes
    `bun test`
-   Verify if lint passes
    `bun lint`

You're now good to go. There's no build process. Use `bun lint:fix` to automatically fix any formatting and linting errors.

# Contributors

-   Tristan Volk ([@Venlious](https://github.com/Venlious))
    -   English (EN)
    -   Dutch (NL)
-   Jay ([@untypedjay](https://github.com/untypedjay))
    -   German (DE)
-   Eric ([@DerErizzle](https://github.com/DerErizzle))
    -   German (DE)
-   Jeongyeon Park
    -   Korean (KO)
-	Ilsoon Cho
	-	Japanese (JA)
-   玛桶
    -   Simplified Chinese (ZH)
-   ... you? :)
