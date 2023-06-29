# infinity.rsa

Provides RSA encryption, decryption, signing and verification functionality for strings, files and streams.

Module: `infinity.crypto`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [keys](#infinity.rsa.keys_interface)

<div class="doc-toc-heading">Functions:</div>

- [decrypt](#infinity.rsa.decrypt_function)
- [encrypt](#infinity.rsa.encrypt_function)
- [generateKeys](#infinity.rsa.generateKeys_function)
- [sign](#infinity.rsa.sign_function)
- [verify](#infinity.rsa.verify_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.crypto');
let data = "Hello World";
let key = infinity.rsa.generateKeys(1024);
let asymKey = infinity.rsa.encrypt(data, key.public);
console.debug(asymKey);
//IAAAAFYyQRxvX3f/zyzw3k0ZBbkFRUOALP9ZUOzBUyOuB0k3kUnFuL5ZEDiNvDbjw398jF3LW41HBeuxdxysWpgoeVp/iGrHZ3avDXjI/AFjr+RjPB6CRYqOb6iQeHuxqghgouz6fGqx33K9FkIrcaaiCSuyMk0CxuXNJxpPj3iAsczw3BqsKoy5Qu9qpko2yJ1g7Yj2Bg==
console.debug(infinity.rsa.decrypt(asymKey, key.private)); 
//Hello World
```

---

<div class="doc-heading">Interfaces</div>

---

## keys {: #infinity.rsa.keys_interface .doc-interface}

<div class="doc-toc" markdown="1">

**Properties:**

- [private](#infinity.rsa.keys.private_property)
- [public](#infinity.rsa.keys.public_property)

</div>


---

**Properties**

---

### private {: #infinity.rsa.keys.private_property .doc-property}

Type: `string`

Contains the private rsa key.

---

### public {: #infinity.rsa.keys.public_property .doc-property}

Type: `string`

Contains the public rsa key.



---

<div class="doc-heading">Functions</div>

---

## decrypt() {: #infinity.rsa.decrypt_function .doc-function}

Attempts to decrypt the given string with RSA using the provided private key and returns the results.

Signature:
```
decrypt( value: string, privateKey: string ): string
```

Parameters:

- value: `string`
  >the string to decrypt

- privateKey: `string`
  >the private rsa key


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let decryptedData = infinity.rsa.decrypt(encryptedData, privateKey);
```

---

## encrypt() {: #infinity.rsa.encrypt_function .doc-function}

Encrypts the given string with RSA using the provided public key and returns the results.

Signature:
```
encrypt( value: string, publicKey: string ): string
```

Parameters:

- value: `string`
  >the data to encrypt

- publicKey: `string`
  >the password to be used later for decryption


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let encryptedData = infinity.rsa.encrypt(dataToEncrypt, publicKey);
```

---

## generateKeys() {: #infinity.rsa.generateKeys_function .doc-function}

Returns a public and a private RSA key, generated according to the specified modulus bit length.

Signature:
```
generateKeys( bits: number ): infinity.rsa.keys
```

Parameters:

- bits: `number`
  >the number of bits in the modulus


Return type: `infinity.rsa.keys`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let keys = infinity.rsa.generateKeys(1024);
console.debug(keys.private);
console.debug(keys.public);
```

---

## sign() {: #infinity.rsa.sign_function .doc-function}

Returns the RSA-signature for a provided string, generated with the provided private key.

Signature:
```
sign( value: string, privateKey: string ): string
```

Parameters:

- value: `string`
  >the string to create the signature for

- privateKey: `string`
  >the private rsa key


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let signature = infinity.rsa.sign(dataToSign, privateKey);
```

---

## verify() {: #infinity.rsa.verify_function .doc-function}

Returns whether the given string can be verified with RSA using the provided signature and public key.

Signature:
```
verify( value: string, publicKey: string, signature: string ): boolean
```

Parameters:

- value: `string`
  >the data to verify

- publicKey: `string`
  >the public rsa key

- signature: `string`
  >the provided signature


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.crypto');
if ( infinity.rsa.verify(dataToVerify, publicKey, signature) ) {
  //...
}
```



