# infinity.sha256

Provides SHA-256 encryption and decryption functionality for strings, files and streams.

Module: `infinity.crypto`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [hash](#infinity.sha256.hash_function)
- [hashFile](#infinity.sha256.hashFile_function)
- [hashStream](#infinity.sha256.hashStream_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.crypto');

let hash = infinity.sha256.hash("dataToHash");
console.debug(hash);
//0e396429f7fb2760a15e7d2326ec64b3d7db2c52b673a77c15a8250d66a94c93
```

---

<div class="doc-heading">Functions</div>


---

## hash() {: #infinity.sha256.hash_function .doc-function}

Returns the SHA256 hash of the given string.

Signature:
```
hash( value: string ): string
```

Parameters:

- value: `string`
  >The string to be hashed.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let hash = infinity.sha256.hash(dataToHash);
```

---

## hashFile() {: #infinity.sha256.hashFile_function .doc-function}

Returns the SHA256 hash of the contents of the given file.

Signature:
```
hashFile( fileName: string ): string
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be hashed.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let hash = infinity.sha256.hashFile('dataToHash.txt');
```

---

## hashStream() {: #infinity.sha256.hashStream_function .doc-function}

Returns the SHA256 hash of the given stream.

Signature:
```
hashStream( stream: infinity.stream ): string
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >The stream object for building the hash. See [infinity.stream](infinity.stream.md).


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let hash = infinity.sha256.hashStream(stream);
```

---

## hmac() {: #infinity.sha256.hmac_function .doc-function}

Returns a keyed hash value using the HMAC method.

Signature:
```
hash( value: string, key: string ): string
```

Parameters:

- value: `string`
  >Message to be hashed.

- key: `string`
  >Shared secret key used for generating the HMAC variant of the message digest.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let hmac = infinity.sha256.hmac(value, key);
```
