# infinity.md5

Provides functionality for creating MD5-hashes out of strings, files and streams.

Module: `infinity.crypto`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [hash](#infinity.md5.hash_function)
- [hashFile](#infinity.md5.hashFile_function)
- [hashStream](#infinity.md5.hashStream_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.crypto');

let hash = infinity.md5.hash("dataToHash");
console.debug(hash);
//844fb0adcfe50cb7edf8bd26e5575383
```

---

<div class="doc-heading">Functions</div>


---

## hash() {: #infinity.md5.hash_function .doc-function}

Returns the md5 hash of the given string.

Signature:
```
hash( value: string ): string
```

Parameters:

- value: `string`
  >string to serve as the hash creation material


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let hashedData = infinity.md5.hash(dataToHash);
```

---

## hashFile() {: #infinity.md5.hashFile_function .doc-function}

Returns the md5 hash of the contents of the given file.

Signature:
```
hashFile( fileName: string ): string
```

Parameters:

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be hashed


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let hashedData = infinity.md5.hashFile('dataToHash.txt');
```

---

## hashStream() {: #infinity.md5.hashStream_function .doc-function}

Generates the MD5 hash of the given stream.

Signature:
```
hashStream( stream: infinity.stream ): string
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >stream object to hash from. See [infinity.stream](infinity.stream.md)


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let hashedData = infinity.md5.hashStream(stream);
```

---

## hmac() {: #infinity.md5.hmac_function .doc-function}

Returns a keyed hash value using the HMAC method.

Signature:
```
hash( value: string, key: string ): string
```

Parameters:

- value: `string`
  >message to be hashed

- key: `string`
  >shared secret key used for generating the HMAC variant of the message digest


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let hmac = infinity.md5.hmac(value, key);
```
