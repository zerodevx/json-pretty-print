# json-pretty-print

JSON Pretty Print is a ridiculously simple online web app that converts **unformatted** JSON into **pretty-printed** JSON. That's it! 🤪

https://zerodevx.github.io/json-pretty-print/


## Install locally

1. Fork this repo.

2. Clone your fork.

```
git clone https://github.com/your-username/json-pretty-print
```

3. Install dependencies.

```
npm i
```


## Develop

1. Checkout your new branch.

2. Launch the server.

```
npm run dev
```

3. Run in browser.

```
http://localhost:8000/src/
```

4. Edit the HTML at `src/index.html`, CSS at `src/styles/tailwind.css`, and JS at `src/app.js`.


## Build

1. Run build step. This generates the distribution at `dist/`.

```
npm run build
```

2. Make sure it works. Run in browser:

```
http://localhost:8000/dist/
```

3. Commit your changes and raise a PR.


## License

ISC

## Changelog

**v1.1.2 | 2020-02-26**
* Really add break-word rule to wrapped output.

**v1.1.1 | 2020-02-25**
* Add break-all rule to wrapped output.

**v1.1.0 | 2020-02-25**
* Add support for base64 encoded JSON in query string.

**v1.0.3 | 2019-12-26**
* Better ripple animation.

**v1.0.2 | 2019-12-26**
* Add toast message for Copy button.

**v1.0.1 | 2019-12-25**
* Do not index URLs with query string.

**v1.0.0 | 2019-12-23**
* Initial release.
