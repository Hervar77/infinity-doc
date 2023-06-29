# infinity.base64

Provides Base64-encoding and decoding functionality for strings, files and streams.

Module: `infinity.encoding`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [decode](#infinity.base64.decode_function)
- [decodeFile](#infinity.base64.decodeFile_function)
- [decodeFile](#infinity.base64.decodeFile_function)
- [decodeStream](#infinity.base64.decodeStream_function)
- [encode](#infinity.base64.encode_function)
- [encodeFile](#infinity.base64.encodeFile_function)
- [encodeFile](#infinity.base64.encodeFile_function)
- [encodeStream](#infinity.base64.encodeStream_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.encoding');

let encodedData = infinity.base64.encode('AUO_ÄÜÖ ß-"+&,?.<=>');
console.debug(encodedData);
//QVVPX8OEw5zDliDDny0iKyYsPy48PT4=

let decodedData = infinity.base64.decode(encodedData);
console.debug(decodedData);
//AUO_ÄÜÖ ß-"+&,?.<=>
```

---

<div class="doc-heading">Functions</div>

---

## decode() {: #infinity.base64.decode_function .doc-function}

Attempts to decode the given string from Base64 and returns the results.

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
let decodedData = infinity.base64.decode(encodedData, infinity.encoding.utf8);
```

---

## decodeFile() {: #infinity.base64.decodeFile_function .doc-function}

Reads out the contents of the given file, attempts to decode them from Base64 and returns the results.

Signature:
```
decodeFile( fileName: string ): string
```

Parameters:

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the encoded file


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.encoding');
let decodedData = infinity.base64.decodeFile('encodedData.txt');
```

---

## decodeFile() {: #infinity.base64.decodeFile_function .doc-function}

Reads out the contents of the given file, attempts to decode them from Base64 and writes the results to a file at the specified location.

Signature:
```
decodeFile( inFileName: string, outFileName: string ): void
```

Parameters:

- inFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the encoded file

- outFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the decoded output


Example:

```typescript
infinity.loadModule('infinity.encoding');
infinity.base64.decodeFile('encodedData.txt', 'decodedData.txt');
```

---

## decodeStream() {: #infinity.base64.decodeStream_function .doc-function}

Reads the contents of the given stream, attempts to decode them from Base64 and writes the results to another given stream.

Signature:
```
decodeStream( inStream: infinity.stream, outStream: infinity.stream ): void
```

Parameters:

- inStream: [`infinity.stream`](infinity.stream.md)
  >the stream object to decode from. See [infinity.stream](infinity.stream.md)

- outStream: [`infinity.stream`](infinity.stream.md)
  >the stream object to write to. See [infinity.stream](infinity.stream.md)


Example:

```typescript
infinity.loadModule('infinity.encoding');
infinity.base64.decodeStream(inStream, outStream);
```

---

## encode() {: #infinity.base64.encode_function .doc-function}

Encodes the given string with Base64 and returns the results.

Signature:
```
encode( value: string, encoding?: infinity.encoding ): string
```

Parameters:

- value: `string`
  >the string to encode

- encoding: [`infinity.encoding`](infinity.encoding.md#enums), optional
  >the source encoding (one of the [infinity.encoding](infinity.encoding.md#enums) enums)


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.encoding');
let encodedData = infinity.base64.encode(dataToEncode, infinity.encoding.utf8);
```

---

## encodeFile() {: #infinity.base64.encodeFile_function .doc-function}

Reads out the contents of the given file, encodes them to Base64 and writes the results to a file at the specified location.

Signature:
```
encodeFile( inFileName: string, outFileName: string ): void
```


- inFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be encoded 

- outFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the encoded output


Example:

```typescript
infinity.loadModule('infinity.encoding');
infinity.base64.encodeFile('dataToEncode.txt', 'encoded.txt');
```

---

## encodeFile() {: #infinity.base64.encodeFile_function .doc-function}

Reads out the contents of the given file, encodes them to Base64 and returns the results.

Signature:
```
encodeFile( fileName: string ): string
```

Parameters:

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be encoded 


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.encoding');
let encodedData = infinity.base64.encodeFile('dataToEncode.txt');
```

---

## encodeStream() {: #infinity.base64.encodeStream_function .doc-function}

Reads the contents of the given stream, encodes them to Base64 and writes the results to another given stream.

Signature:
```
encodeStream( inStream: infinity.stream, outStream: infinity.stream ): void
```

Parameters:

- inStream: [`infinity.stream`](infinity.stream.md)
  >the stream object to encode data from. See [infinity.stream](infinity.stream.md)

- outStream: [`infinity.stream`](infinity.stream.md)
  >the stream object to write to. See [infinity.stream](infinity.stream.md)


Example:

```typescript
infinity.loadModule('infinity.encoding');
infinity.base64.encodeStream(inStream, outStream);
```
