# infinity.sha512

Provides functionality for creating SHA512-hashes out of strings, files and streams.

Module: `infinity.crypto`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [hash](#infinity.sha512.hash_function)
- [hashFile](#infinity.sha512.hashFile_function)
- [hashStream](#infinity.sha512.hashStream_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.crypto');

let hash = infinity.sha512.hash("dataToHash");
console.debug(hash);
//1c4f93685598ea8a75f247dc9f630b57ca1e690d5d1a1ad8184ffdeb39ba17850b945af4e810f62d2a3ed452519efd863f8d4515503c7682cc2f874d53943e6b
```

---

<div class="doc-heading">Functions</div>

---

## hash() {: #infinity.sha512.hash_function .doc-function}

Returns the SHA512 hash of the given string.

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
let hash = infinity.sha512.hash(dataToHash);
```

---

## hashFile() {: #infinity.sha512.hashFile_function .doc-function}

Returns the SHA512 hash of the contents of the given file.

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
let hash = infinity.sha512.hashFile('dataToHash.txt');
```

---

## hashStream() {: #infinity.sha512.hashStream_function .doc-function}

Returns the SHA512 hash of the given stream.

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
let hash = infinity.sha512.hashStream(stream);
```


---

## hmac() {: #infinity.sha512.hmac_function .doc-function}

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
let hmac = infinity.sha512.hmac(value, key);
```
