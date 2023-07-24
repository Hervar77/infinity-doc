# infinity.html

Provides encoding and decoding functionality for entities.

Module: `infinity.html`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [decode](#infinity.html.decode_function)
- [encode](#infinity.html.encode_function)
- [toText](#infinity.html.toText_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.html');

let encodedData = infinity.html.encode('AUO_ÄÜÖ ß-"+&,?.<=>');
console.debug(encodedData);
//AUO_&auml;&uuml;&ouml; &szlig;-&quot;+&amp;,?.&lt;=&gt;

let decodedData = infinity.html.decode(encodedData);
console.debug(decodedData);
//AUO_ÄÜÖ ß-"+&,?.<=>
```

---

<div class="doc-heading">Functions</div>

---

## decode() {: #infinity.html.decode_function .doc-function}

Attempts to decode HTML-entities from the given string and returns the results.

Signature:
```
decode( html: string ): string
```

Parameters:

- html: `string`
  >String containing HTML-entities.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.html');
let decodedData = infinity.html.decode(dataToDecode);
```

---

## encode() {: #infinity.html.encode_function .doc-function}

Returns the given string with the corresponding characters encoded to HTML-entities.

Signature:
```
encode( html: string ): string
```

Parameters:

- html: `string`
  >String with HTML-entities.



Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.html');
let encodedData = infinity.html.encode(dataToEncode);
```

---

## toText() {: #infinity.html.toText_function .doc-function}

Strips HTML tags out of the given string.

Signature:
```
toText( html: string ): string
```

Parameters:

- html: `string`
  >String with HTML tags to remove.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.html');
let s = infinity.html.toText(html);
```



