# infinity.url

Provides URL-encoding and decoding functionality.

Module: `infinity.encoding`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [decode](#infinity.url.decode_function)
- [encode](#infinity.url.encode_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.encoding');

let encodedData = infinity.url.encode('AUO_ÄÜÖ ß-"+&,?.<=>', infinity.encoding.utf8);
console.debug(encodedData);
//AUO_%C3%84%C3%9C%C3%96%20%C3%9F-"%2B%26%2C%3F.<%3D>

let decodedData = infinity.url.decode(encodedData, infinity.encoding.utf8);
console.debug(decodedData);
//AUO_ÄÜÖ ß-"+&,?.<=>
```

---

<div class="doc-heading">Functions</div>

---

## decode() {: #infinity.url.decode_function .doc-function}

Attempts to decode the given string from URL-encoding and returns the results.

Signature:
```
decode( value: string, encoding?: infinity.encoding ): string
```

Parameters:

- value: `string`
  >the string to decode

- encoding: [`infinity.encoding`](infinity.encoding.md#enums) enums), optional
  >the target encoding (one of the [infinity.encoding](infinity.encoding.md#enums) enums)


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.encoding');
let decodedData = infinity.url.decode(encodedData, infinity.encoding.utf8);
```

---

## encode() {: #infinity.url.encode_function .doc-function}

Encodes the given string to URL-encoding and returns the results.

Signature:
```
encode( value: string, encoding?: infinity.encoding ): string
```

Parameters:

- value: `string`
  >the string to encode

- encoding: [`infinity.encoding`](infinity.encoding.md#enums) enums), optional
  >the source encoding (one of the [infinity.encoding](infinity.encoding.md#enums) enums)


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.encoding');
let encodedData = infinity.url.encode(dataToEncode, infinity.encoding.utf8);
```
