# infinity.zlib

Provides gzip compression and decompression functionality for strings, files and streams.

Module: `infinity.zlib`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [compress](#infinity.zlib.compress_function)
- [compressFile](#infinity.zlib.compressFile_function)
- [compressStream](#infinity.zlib.compressStream_function)
- [extract](#infinity.zlib.extract_function)
- [extractFile](#infinity.zlib.extractFile_function)
- [extractStream](#infinity.zlib.extractStream_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.zlib');

let compressedData = infinity.zlib.compress('123456_123456_123456_123456_123456_123456_123456');
console.debug(compressedData);
//H4sIAAAAAAAECzM0MjYxNYs3JJYCAKTSqLQwAAAA

let extractedData = infinity.zlib.extract(compressedData);
console.debug(extractedData);
//123456_123456_123456_123456_123456_123456_123456
```

---

<div class="doc-heading">Functions</div>

---

## compress() {: #infinity.zlib.compress_function .doc-function}

Compresses the given string with gzip and returns the results.

Signature:
```
compress( value: string ): string
```

Parameters:

- value: `string`
  >The string to compress.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.zlib');
let compressedData = infinity.zlib.compress(dataToCompress);
```

---

## compressFile() {: #infinity.zlib.compressFile_function .doc-function}

Reads out the contents of a file, compresses them with gzip and writes the results to a file at the given location.

Signature:
```
compressFile( inFileName: string, outFileName: string ): void
```

Parameters:

- inFileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be compressed.

- outFileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the encoded output.


Example:

```typescript
infinity.loadModule('infinity.zlib');
infinity.zlib.compressFile('dataToCompress.txt', 'compressedData.gz');
```

---

## compressStream() {: #infinity.zlib.compressStream_function .doc-function}

Reads the contents of a stream, compresses them with gzip and writes the results to another given stream.

Signature:
```
compressStream( inStream: infinity.stream, outStream: infinity.stream ): void
```

Parameters:

- inStream: [`infinity.stream`](infinity.stream.md)
  >The stream object to compress from. See [infinity.stream](infinity.stream.md).

- outStream: [`infinity.stream`](infinity.stream.md)
  >The stream object to write to. See [infinity.stream](infinity.stream.md).


Example:

```typescript
infinity.loadModule('infinity.zlib');
infinity.zlib.compressStream(inStream, outStream);
```

---

## extract() {: #infinity.zlib.extract_function .doc-function}

Attempts to decompress the given string with gzip and returns the results.

Signature:
```
extract( value: string ): string
```

Parameters:

- value: `string`
  >The gzip-compressed contents to decompress.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.zlib');
let extractedData = infinity.zlib.extract(compressedData);
```

---

## extractFile() {: #infinity.zlib.extractFile_function .doc-function}

Reads out the contents of a file, attempts to decompress them with gzip, and writes the results to a file at the given location.

Signature:
```
extractFile( inFileName: string, outFileName: string ): void
```

Parameters:

- inFileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to compressed file.

- outFileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the decompressed output.


Example:

```typescript
infinity.loadModule('infinity.zlib');
infinity.zlib.extractFile('compressedData.gz', 'extractedData.txt');
```

---

## extractStream() {: #infinity.zlib.extractStream_function .doc-function}

Reads the contents of a stream, attempts to decompress them with gzip, and writes the results to another given stream.

Signature:
```
extractStream( inStream: infinity.stream, outStream: infinity.stream ): void
```

Parameters:

- inStream: [`infinity.stream`](infinity.stream.md)
  >The stream object to compress from. See [infinity.stream](infinity.stream.md).

- outStream: [`infinity.stream`](infinity.stream.md)
  >The stream object to write to. See [infinity.stream](infinity.stream.md).


Example:

```typescript
infinity.loadModule('infinity.zlib');
infinity.zlib.extractStream(inStream, outStream);
```
