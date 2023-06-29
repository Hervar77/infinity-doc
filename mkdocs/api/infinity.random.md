# infinity.random

Provides functionality for creating random strings and numbers.

Module: `infinity.crypto`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [digits](#infinity.random.digits_function)
- [characters](#infinity.random.characters_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.crypto');

let randomDigits = infinity.random.digits();
console.info(randomDigits);
//4.1186039242203947e-19

let randomCharacters = infinity.random.characters(10);
console.info(randomCharacters);
//6d9349f92c
```

---

<div class="doc-heading">Functions</div>

---

## digits() {: #infinity.random.digits_function .doc-function}

Returns a random number.

Signature:
```
digits(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.crypto');

let randomDigits = infinity.random.digits();
console.info(randomDigits);
//4.1186039242203947e-19
```

---

## characters() {: #infinity.random.characters_function .doc-function}

Returns a string of random characters of the given length.

Signature:
```
characters( length: number ): string
```

Parameters:

- length: `number`
  >the number of characters to return


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.crypto');

let randomCharacters = infinity.random.characters(10);
console.info(randomCharacters);
//6d9349f92c
```

