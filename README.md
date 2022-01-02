# About Bloob.io

**Bloob.io** is a project of passion consisting of multiplayer browser games. I started to work on these games aiming to make them fun, configurable, and easily accessible.

https://bloob.io

# Localisation

While the project itself is not open source, the localisation is. Feel free to create pull requests with improvements, grammar fixes, or support for new languages.

# FAQ

* **If I add a new language, does it need to be complete?**
  * In short, no. While it would be nice for the language to be mostly complete, it does not have to be. The default fallback language for any missing translation is English. You can then copy the `en` folder and rename it to the abbreviation of the language you would like to add. Please do make sure any traces of the English translations aren't included in the pull request for the language. Instead, please change any content to `undefined` if no translation has been made yet so the fallback is properly utilised. E.g. `{ example: 'English text!' }` would be `{ example: undefined }` before it is updated to `{ example: 'Nederlandse tekst!' }` later.
* **How do I add a new language?**
  * In the top right corner of the [Venlious/bloob.io-locale](https://github.com/Venlious/bloob.io-locale) page you can create a "Fork" of this repository. If you're not familiar with it, you essentially make a copy of this repository in its current state. You can then freely make changes to your own fork and later make a [pull request](https://github.com/Venlious/bloob.io-locale/pulls) so the changes can be reviewed before being merged and included in the next release of [Bloob.io](https://bloob.io)!
* **I found a grammatically error or spelling mistake. What do I do?**
  * Great! You can either fork this repository (see above question if you do not know how), fix it, and make a pull request or [make a new issue](https://github.com/Venlious/bloob.io-locale/issues/new) explaining the error you found and what language you had selected so it can be looked at by somebody else.
* **I have another question!**
  * Feel free to [make a new issue](https://github.com/Venlious/bloob.io-locale/issues/new) with your question.

# Contributors
* Tristan Volk ([@Venlious](https://github.com/Venlious))
  * English (UK)
  * Dutch (NL)
* Jay ([@untypedjay](https://github.com/untypedjay))
  * German (DE)
* ... you? :)
