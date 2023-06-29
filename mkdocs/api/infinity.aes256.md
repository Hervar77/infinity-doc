# infinity.aes256

Provides AES-256 encryption and decryption functionality for strings, files and streams.

Module: `infinity.crypto`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [decrypt](#infinity.aes256.decrypt_function)
- [decryptFile](#infinity.aes256.decryptFile_function)
- [decryptStream](#infinity.aes256.decryptStream_function)
- [encrypt](#infinity.aes256.encrypt_function)
- [encryptFile](#infinity.aes256.encryptFile_function)
- [encryptStream](#infinity.aes256.encryptStream_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.crypto');

let encryptedData = infinity.aes256.encrypt("dataToEncrypt", 'secretPW123');
console.debug(encryptedData);
//KIePX+E74PscojA/8rkxBDD3Yzgk

let decryptedData = infinity.aes256.decrypt(encryptedData, 'secretPW123');
console.debug(decryptedData);
//dataToEncrypt
```

---

<div class="doc-heading">Functions</div>

---

## decrypt() {: #infinity.aes256.decrypt_function .doc-function}

Attempts to decrypt the given string with AES-256 and returns the results.

Signature:
```
decrypt( value: string, password: string ): string
```

Parameters:

- value: `string`
  >the string to decrypt

- password: `string`
  >the password used previously during encryption


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let decryptedData = infinity.aes256.decrypt(encryptedData, 'secretPW123');
```

---

## decryptFile() {: #infinity.aes256.decryptFile_function .doc-function}

Reads out the contents of the given file, attempts to decrypt them with AES-256 and writes the results to a file at the specified location.

Signature:
```
decryptFile( inFileName: string, outFileName: string, password: string ): void
```

Parameters:

- inFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the encrypted file

- outFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the decrypted output

- password: `string`
  >the password used previously during encryption


Example:

```typescript
infinity.loadModule('infinity.crypto');
infinity.aes256.decryptFile('encryptedData.txt', 'decryptedData.txt', 'secretPW123');
```

---

## decryptStream() {: #infinity.aes256.decryptStream_function .doc-function}

Reads the contents of the given stream, attempts to decrypt them with AES-256 and writes the results to another given stream.

Signature:
```
decryptStream( inStream: infinity.stream, outStream: infinity.stream, password: string ): void
```

Parameters:

- inStream: [`infinity.stream`](infinity.stream.md)
  >the stream object to decrypt data from. See [infinity.stream](infinity.stream.md)

- outStream: [`infinity.stream`](infinity.stream.md)
  >the stream object to write to. See [infinity.stream](infinity.stream.md)

- password: `string`
  >the password used previously during encryption


Example:

```typescript
infinity.loadModule('infinity.crypto');
infinity.aes256.decryptStream(inStream, outStream, 'secretPW123');
```

---

## encrypt() {: #infinity.aes256.encrypt_function .doc-function}

Encrypts the given string with AES-256 and returns the results.

Signature:
```
encrypt( value: string, password: string ): string
```

Parameters:

- value: `string`
  >the string to encrypt

- password: `string`
  >the password to be used later for decryption


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let encryptedData = infinity.aes256.encrypt(dataToEncrypt, 'secretPW123');
```

---

## encryptFile() {: #infinity.aes256.encryptFile_function .doc-function}

Reads out the contents of the given file, encrypts them with AES-256 and writes the results to a file at the specified location.

Signature:
```
encryptFile( inFileName: string, outFileName: string, password: string ): void
```

Parameters:

- inFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be encrypted 

- outFileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the encrypted output

- password: `string`
  >the password to be used later for decryption


Example:

```typescript
infinity.loadModule('infinity.crypto');
infinity.aes256.encryptFile('dataToEncrypt.txt', 'encryptedData.txt', 'secretPW123');
```

---

## encryptStream() {: #infinity.aes256.encryptStream_function .doc-function}

Reads the contents of the given stream, encrypts them with AES-256 and writes the results to another given stream.

Signature:
```
encryptStream( inStream: infinity.stream, outStream: infinity.stream, password: string ): void
```

Parameters:

- inStream: [`infinity.stream`](infinity.stream.md)
  >the stream object to encrypt. See [infinity.stream](infinity.stream.md)

- outStream: [`infinity.stream`](infinity.stream.md)
  >the stream object to write to. See [infinity.stream](infinity.stream.md)

- password: `string`
  >the password to be used later for decryption


Example:

```typescript
infinity.loadModule('infinity.crypto');
infinity.aes256.encryptStream(inStream, outStream, 'secretPW123');
```



