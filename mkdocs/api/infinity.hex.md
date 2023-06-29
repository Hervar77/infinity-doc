# infinity.hex

Provides hexadecimal-encoding and decoding functionality.

Module: `infinity.encoding`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [decode](#infinity.hex.decode_function)
- [encode](#infinity.hex.encode_function)

</div>


```typescript
infinity.loadModule('infinity.encoding');

let encodedData = infinity.hex.encode('AUO_ÄÜÖ ß-"+&,?.<=>');
console.debug(encodedData);
//41554F5FC384C39CC39620C39F2D222B262C3F2E3C3D3E

let decodedData = infinity.hex.decode(encodedData);
console.debug(decodedData);
//AUO_ÄÜÖ ß-"+&,?.<=>
```

---

<div class="doc-heading">Functions</div>

---

## decode() {: #infinity.hex.decode_function .doc-function}

Attempts to decode the given string from hex-encoding and returns the results.

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
let decodedData = infinity.hex.decode(encodedData)
```

---

## encode() {: #infinity.hex.encode_function .doc-function}

Converts the given string to corresponding hexadecimal codes and returns the results.

Signature:
```
encode( value: string, encoding?: infinity.encoding ): string
```

Parameters:

- value: `string`
  >the string to encode

- encoding: [`infinity.encoding`](infinity.encoding.md#enums) enums), optional
  >source encoding (one of the [infinity.encoding](infinity.encoding.md#enums) enums)


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.encoding');
let encodedData = infinity.hex.encode(dataToEncode);
```
