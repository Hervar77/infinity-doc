# infinity.fts

Provides in-memory fulltext search functionality within one infinity instance.

Module: `infinity.fts`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [resultArray](#infinity.fts.resultArray_interface)
- [stringArray](#infinity.fts.stringArray_interface)

<div class="doc-toc-heading">Functions:</div>

- [add](#infinity.fts.add_function)
- [clear](#infinity.fts.clear_function)
- [close](#infinity.fts.close_function)
- [find](#infinity.fts.find_function)
- [open](#infinity.fts.open_function)
- [remove](#infinity.fts.remove_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.fts');

infinity.fts.open('books');

let doc = {title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', genre: 'Fantasy'};
infinity.fts.add('books', 1, 0, doc);
infinity.fts.add('books', 2, 0, {title: 'The Adventures of Pinocchio', author: 'Carlo Collodi', genre: 'Fantasy'});
infinity.fts.add('books', 3, 0, {title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Drama'});

//Simple search:
console.debug(infinity.fts.find('books', 'little'));

//Phrase search: all search terms must occur in the exact same order
console.debug(infinity.fts.find('books', '"The Adventures of Pinocchio"'));

//And search: all search terms must occur, the order is not considered (+)
console.debug(infinity.fts.find('books', 'Adventures + Pinocchio'));

//Or search: at least one search term must occur (|)
console.debug(infinity.fts.find('books', 'Adventures | Pinocchio'));

//Search with exclusion: the search term before the hyphen must occur, the term after the hyphen must not occur (-)
console.debug(infinity.fts.find('books', 'Adventures - Pinocchio'));

//Wildcard search: the search term must start with the characters before the asterisk (*)
console.debug(infinity.fts.find('books', 'Pin*'));

//Searching within specified fields
console.debug(infinity.fts.find('books', 'fantasy', 0, 10, ['genre']));

infinity.fts.remove('books', 3);
console.debug(infinity.fts.find('books', 'drama', 0, 10, ['genre']));

infinity.fts.close('books');
```


---

<div class="doc-heading">Interfaces</div>

---

## resultArray {: #infinity.fts.resultArray_interface .doc-interface}

Extends: `Array<{id: number, relevance: number}>`

An array of objects containing the search results of [find()](#infinity.fts.find_function).

---

## stringArray {: #infinity.fts.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array of strings. 



---

<div class="doc-heading">Functions</div>

---

## add() {: #infinity.fts.add_function .doc-function}

Adds the given dataset to the fulltext search library under the specified namespace.

Signature:
```
add( namespace: string, docId: number, group: number, document: object ): void
```

Parameters:

- namespace: `string`
  >specifies the namespace for the dataset to be stored under

- docId: `number`
  >the unique document identification number

- group: `number`
  >an additional property for the document. Can be used to group documents (e.g. for separating documents by different tenants)

- document: `object`
  >the data to be stored


Example:

```typescript
let doc = {title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', genre: 'Fantasy'};
infinity.fts.add('books', 1, 0, doc);
infinity.fts.add('books', 2, 0, {title: 'The Adventures of Pinocchio', author: 'Carlo Collodi', genre: 'Fantasy'});
```

---

## clear() {: #infinity.fts.clear_function .doc-function}

Clears the fulltext search library under the specified namespace.

Signature:
```
clear( namespace: string ): void
```

Parameters:

- namespace: `string`
  >the namespace under which the data has to be cleared


Example:

```typescript
infinity.fts.clear('books');
```

---

## close() {: #infinity.fts.close_function .doc-function}

Closes the fulltext search library under the specified namespace.

Signature:
```
close( namespace: string ): void
```

Parameters:

- namespace: `string`
  >the namespace of the library to be closed


Example:

```typescript
infinity.fts.close('books');
```

---

## find() {: #infinity.fts.find_function .doc-function}

Returns the results of a search with the given query parameters under the specified namespace.

Signature:
```
find( namespace: string, query: string, group?: number, maxResults?: number, attributes?: infinity.fts.stringArray ): infinity.fts.resultArray
```

Parameters:

- namespace: `string`
  >the namespace for the search

- query: `string`
  >the search term. Simple term searches, "and" searches, "or" searches, searches with term exclusion and wildcard searches are supported.

- group: `number`
  >an additional property for the document. Can be used to find only documents by the given group

- maxResults: `number`, optional
  >the maximum limit of results to be returned

- attributes: [`infinity.fts.stringArray`](#infinity.fts.stringArray_interface), optional
  >attributes (e.g. data field names) of the dataset to be considered


Return type: [`infinity.fts.resultArray`](#infinity.fts.resultArray_interface)

Example:

```typescript
console.debug(infinity.fts.find('books', 'fantasy', 0, 10, ['genre']));
```

---

## open() {: #infinity.fts.open_function .doc-function}

Initializes a fulltext search library under the specified namespace.

Signature:
```
open( namespace: string ): void
```

Parameters:

- namespace: `string`
  >the namespace under which the fulltext search library should be initialized


Example:

```typescript
infinity.fts.open('books');
```

---

## remove() {: #infinity.fts.remove_function .doc-function}

Removes the specified dataset from the fulltext search library under the specified namespace.

Signature:
```
remove( namespace: string, docId: number ): void
```

Parameters:

- namespace: `string`
  >the namespace under which the dataset should be removed

- docId: `number`
  >the document identification number of the dataset to be removed


Example:

```typescript
infinity.fts.remove('books', 2);
```



