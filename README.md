![GitHub package.json version](https://img.shields.io/github/package-json/v/zerodevx/json-pretty-print)

# json-pretty-print

> Convert unformatted JSON into pretty-printed JSON and send it as a shareable web link. That's it!
> 🤪

https://zerodevx.github.io/json-pretty-print/

Simple web app written in Svelte to format ugly JSON strings into a pretty-printed expandable tree
view. The view can then be shared using its web link. Under the hood, it uses
[svelte-json-view](https://github.com/zerodevx/svelte-json-view) to generate the view, and
[zipurl](https://github.com/zerodevx/zipurl) to compress the stringified JSON into a smaller,
URL-safe data string.

This is the V2 branch. If you're looking for the older version, see the
[V1 branch](https://github.com/zerodevx/json-pretty-print/tree/v1).

## Usage

1. Visit the site.
2. Paste your unformatted JSON.
3. Click `PRETTY-PRINT`.

That's it!

### Using `?data=` query param

Unformatted JSON can be directly passed in via the `data` URL query parameter. For example:

```js
const data = zipurl('{ "foo": "bar" }') // H4sIAAAAAAAAA6tWUErLz1eyUlBKSixSUqgFAEo1dwsQAAAA
```

The view can then be immediately displayed at the following URL:

```
https://zerodevx.github.io/json-pretty-print/?data=H4sIAAAAAAAAA6tWUErLz1eyUlBKSixSUqgFAEo1dwsQAAAA
```

`data` strings are generated using a 2-step process: the string is first compressed using `gzip`
into `UInt8Array`, then encoded into a web-safe `base64` string. The package
[zipurl](https://github.com/zerodevx/zipurl) automates this process - view the package for more
info.

Why? Vis-a-vis `encodeURIComponent()`, you can expect `zipurl()` to generate strings that are >70%
smaller in bytes.

## Development

1. Fork/Clone the repo.

2. Install dependencies.

```
$ npm i
```

3. Start the server.

```
$ npm run dev
```

4. Open `http://localhost:5000` in your browser.

5. Lint the code.

```
$ npm run lint
```

Noticed a bug? Have a feature request? Just file an
[issue](https://github.com/zerodevx/json-pretty-print/issues)!

Contributions/Pull requests are welcome!

## License

ISC
