# infinity.bcrypt

Provides bcrypt hashing and verifying functionality for strings.

Module: `infinity.crypto`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [hash](#infinity.bcrypt.hash_function)
- [verify](#infinity.bcrypt.verify_function)

</div>


```typescript
infinity.loadModule('infinity.crypto');

let hash = infinity.bcrypt.hash("dataToHash", 10);
console.debug(hash);
//$2a$10$3.ywjLH6iKKThUQl1iWNu.udUXZChZIxqJaVfTVph1LJcKTLUFyFi

console.debug(infinity.bcrypt.verify("dataToHash", hash));
//true
```

---

<div class="doc-heading">Functions</div>

---

## hash() {: #infinity.bcrypt.hash_function .doc-function}

Returns the bcrypt hash of the given string.

Signature:
```
hash( password: string, cost?: number ): string
```

Parameters:

- password: `string`
  >the string to serve as a password

- cost: `number`, optional
  >the number of rounds to run


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');
let hash = infinity.bcrypt.hash(dataToHash, 10);
```

---

## verify() {: #infinity.bcrypt.verify_function .doc-function}

Returns whether the provided hash corresponds to the given string.

Signature:
```
verify( password: string, hash: string ): boolean
```

Parameters:

- password: `string`
  >the original string used for the creation of the hash for the function to return true

- hash: `string`
  >the hash to be checked


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.crypto');
console.debug(infinity.bcrypt.verify(dataToVerify, hash));
```
