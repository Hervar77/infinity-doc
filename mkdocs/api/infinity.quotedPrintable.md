# infinity.quotedPrintable

Provides Quoted-printable-encoding and decoding functionality for strings, files and streams.

Module: `infinity.encoding`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [decode](#infinity.quotedPrintable.decode_function)
- [decodeFile](#infinity.quotedPrintable.decodeFile_function)
- [decodeFile](#infinity.quotedPrintable.decodeFile_function)
- [decodeStream](#infinity.quotedPrintable.decodeStream_function)
- [encode](#infinity.quotedPrintable.encode_function)
- [encodeFile](#infinity.quotedPrintable.encodeFile_function)
- [encodeFile](#infinity.quotedPrintable.encodeFile_function)
- [encodeStream](#infinity.quotedPrintable.encodeStream_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.encoding');

let encodedData = infinity.quotedPrintable.encode('AUO_ÄÜÖ ß-"+&,?.<=>');
console.debug(encodedData);
//AUO=5F=C4=DC=D6 =DF-"+&,?.<=3D>

encodedData = infinity.quotedPrintable.encode('AUO_ÄÜÖ ß-"+&,?.<=>', true);
console.debug(encodedData);
//AUO=5F=C4=DC=D6_=DF-=22+&=2C=3F.=3C=3D=3E

let decodedData = infinity.quotedPrintable.decode(encodedData, true);
console.debug(decodedData);
//AUO_ÄÜÖ ß-"+&,?.<=>
```

---

<div class="doc-heading">Functions</div>

---

## decode() {: #infinity.quotedPrintable.decode_function .doc-function}

Attempts to decode the given string from quoted-printable and returns the results.

Signature:
```
decode( value: string, headerField?: boolean ): string
```

Parameters:

- value: `string`
  >the string to decode

- headerField: `boolean`, optional
  >true for decoding non-printing characters like spaces as well


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.encoding');
let decodedData = infinity.quotedPrintable.decode(encodedData);
```

---

## decodeFile() {: #infinity.quotedPrintable.decodeFile_function .doc-function}

Reads out the contents of the given file, attempts to decode them from quoted-printable and returns the results.

Signature:
```
decodeFile( fileName: string ): string
```

Parameters:

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to encoded file


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.encoding');
let decodedData = infinity.quotedPrintable.decodeFile('encodedData.txt');
```

---

## decodeFile() {: #infinity.quotedPrintable.decodeFile_function .doc-function}

Reads out the contents of the given file, attempts to decode them from quoted-printable and writes the results to a file at the given location.

Signature:
```
decodeFile( inFileName: string, outFileName: string ): void
```

Parameters:

- inFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to encoded file

- outFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the decoded output


Example:

```typescript
infinity.loadModule('infinity.encoding');
infinity.quotedPrintable.decodeFile('encodedData.txt', 'decodedData.txt');
```

---

## decodeStream() {: #infinity.quotedPrintable.decodeStream_function .doc-function}

Reads the contents of the given stream, attempts to decode them from quoted-printable and writes the results to another given stream.

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
infinity.quotedPrintable.decodeStream(inStream, outStream);
```

---

## encode() {: #infinity.quotedPrintable.encode_function .doc-function}

Encodes the given string with quoted-printable and returns the results.

Signature:
```
encode( value: string, headerField?: boolean ): string
```

Parameters:

- value: `string`
  >the string to encode

- headerField: `boolean`, optional
  >true for encoding non-printing characters like spaces as well


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.encoding');
let encodedData = infinity.quotedPrintable.encode(dataToEncode, true);
```

---

## encodeFile() {: #infinity.quotedPrintable.encodeFile_function .doc-function}

Reads out the contents of the given file, encodes them to quoted-printable and writes the results to a file at the given location.

Signature:
```
encodeFile( inFileName: string, outFileName: string ): void
```

Parameters:

- inFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be encoded 

- outFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the encoded output


Example:

```typescript
infinity.loadModule('infinity.encoding');
infinity.quotedPrintable.encodeFile('dataToEncode.txt', 'encodedData.txt');
```

---

## encodeFile() {: #infinity.quotedPrintable.encodeFile_function .doc-function}

Reads out the contents of the given file, encodes them to quoted-printable and returns the results.

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
let encodedData = infinity.quotedPrintable.encodeFile('dataToEncode.txt');
```

---

## encodeStream() {: #infinity.quotedPrintable.encodeStream_function .doc-function}

Reads the contents of the given stream, encodes them to quoted-printable and writes the results to another given stream.

Signature:
```
encodeStream( inStream: infinity.stream, outStream: infinity.stream ): void
```

Parameters:

- inStream: [`infinity.stream`](#infinity.zip.file.mode_enum)
  >the stream object to encode. See [infinity.stream](infinity.stream.md)

- outStream: [`infinity.stream`](#infinity.zip.file.mode_enum)
  >the stream object to write to. See [infinity.stream](infinity.stream.md)


Example:

```typescript
infinity.loadModule('infinity.encoding');
infinity.quotedPrintable.encodeStream(inStream, outStream);
```
