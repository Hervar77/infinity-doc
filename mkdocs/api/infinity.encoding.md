# infinity.encoding

Provides access to various encodings.

Module: none (built-in)

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [convert](#infinity.encoding.convert_function)
- [toString](#infinity.encoding.toString_function)

<div class="doc-toc-heading">Enums:</div>

- [encoding](#infinity.encoding.encoding_enum)

</div>

---

<div class="doc-heading">Functions</div>

---

## convert() {: #infinity.encoding.convert_function .doc-function}

Converts a string from one encoding to another.

Signature:
```
convert( value: string, fromEncoding: infinity.encoding, toEncoding: infinity.encoding ): string
```

Parameters:

- value: `string`
  >The string to be converted.

- fromEncoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum)
  >The encoding of the input string.

- toEncoding: `string`
  >he target encoding to which the string will be converted.


Return type: `string`

Example:

```typescript
let originalString = "Hello, world!";
let convertedString = infinity.encoding.convert(originalString, infinity.encoding.UTF8, infinity.encoding.ansi);
console.log(convertedString);
```


---

## toString() {: #infinity.encoding.toString_function .doc-function}

Returns the name of the specified encoding as a string.

Signature:
```
toString( encoding: infinity.encoding ): string
```

Parameters:

- encoding: `infinity.encoding`
  >[infinity.encoding](infinity.encoding.md#enums) enum.


Return type: `string`

Example:

```typescript
console.log(infinity.encoding.toString(infinity.encoding.ansi));
//prints "WINDOWS-1252"
```



---

<div class="doc-heading">Enums</div>

---

## infinity.encoding {: #infinity.encoding_enum .doc-enum}

Values:

- systemDefault: `0`
  >Default encoding, determined by the operating system.


- ansi: `1`
  >ANSI encoding (windows codepage 1252).

- ascii: `2`
  >ASCII encoding.

- bigEndianUnicode: `3`
  >Unicode (big endian) encoding.

- unicode: `4`
  >Unicode encoding.

- utf7: `5`
  >UTF-7 encoding.

- utf8: `6`
  >UTF-8 encoding.

Example:

```typescript
let encoding = infinity.encoding.systemDefault;
```
