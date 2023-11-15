# infinity.noSql

Provides non-relational in-memory database functionality.

Module: `infinity.noSql`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [findResultArray](#infinity.noSql.findResultArray_interface)
- [getResultArray](#infinity.noSql.getResultArray_interface)
- [idArray](#infinity.noSql.idArray_interface)
- [queryArray](#infinity.noSql.queryArray_interface)

<div class="doc-toc-heading">Functions:</div>

- [clear](#infinity.noSql.clear_function)
- [count](#infinity.noSql.count_function)
- [create](#infinity.noSql.create_function)
- [drop](#infinity.noSql.drop_function)
- [exists](#infinity.noSql.exists_function)
- [find](#infinity.noSql.find_function)
- [get](#infinity.noSql.get_function)
- [get](#infinity.noSql.get_function)
- [has](#infinity.noSql.has_function)
- [index](#infinity.noSql.index_function)
- [insert](#infinity.noSql.insert_function)
- [lock](#infinity.noSql.lock_function)
- [remove](#infinity.noSql.remove_function)
- [unlock](#infinity.noSql.unlock_function)
- [update](#infinity.noSql.update_function)
- [update](#infinity.noSql.update_function)

<div class="doc-toc-heading">Enums:</div>

- [orderDirection](#infinity.noSql.orderDirection_enum)
- [outputMode](#infinity.noSql.outputMode_enum)

</div>

Example:
```typescript

infinity.loadModule('infinity.noSql');

if (!infinity.noSql.exists('testCollection')) {
  infinity.noSql.create('testCollection');
  infinity.noSql.index('testCollection', 'username', true);
  infinity.noSql.index('testCollection', 'modified');
}

infinity.noSql.insert('testCollection', { "username": "TheUserName1", "email": "theusername@email.com", "rights": ["read", "write", "create", "delete"] });
infinity.noSql.insert('testCollection', { "username": "AnotherUserName2", "email": "someother@email.net", "rights": ["read"] });
infinity.noSql.insert('testCollection', { username: "aUserName3", email: "yetanother@email.com" });

let ids = infinity.noSql.find('testCollection', [['username', 'beginswith', 'a']], '', infinity.noSql.orderDirection.ascending, 0, 0, infinity.noSql.outputMode.ids);
console.debug(ids);

infinity.noSql.update('testCollection', { id: 2, username: "aUserName", email: "yetanother@email.com", modified: Math.floor(Date.now() * 0.001) });

let secondRow = infinity.noSql.get('testCollection', 2);
console.debug(secondRow);
let firstTwoRows = infinity.noSql.get('testCollection', [1, 2]);
console.debug(firstTwoRows);

console.debug(infinity.noSql.has('testCollection', 2));

```

---

<div class="doc-heading">Interfaces</div>

---

## findResultArray {: #infinity.noSql.findResultArray_interface .doc-interface}

Extends: `Array<object|number>`

  >An array of objects or numbers.

---

## getResultArray {: #infinity.noSql.getResultArray_interface .doc-interface}

Extends: `Array<object>`

  >An array of objects.

---

## idArray {: #infinity.noSql.idArray_interface .doc-interface}

Extends: `Array<number>`

  >An array of numbers.

---

## queryArray {: #infinity.noSql.queryArray_interface .doc-interface}

Extends: `Array<string|Array<string|number|boolean>>`

  >An array of strings or of arrays containing strings, numbers or boolean values.



---

<div class="doc-heading">Functions</div>

---

## clear() {: #infinity.noSql.clear_function .doc-function}

Clears all data from the specified collection.

Signature:
```
clear( collection: string ): void
```

Parameters:

- collection: `string`
  >The collection to clear data from.



Example:

```typescript
infinity.loadModule('infinity.noSql');
infinity.noSql.clear('testCollection');
```

---

## count() {: #infinity.noSql.count_function .doc-function}

Returns the number of rows present inside the specified collection.

Signature:
```
count( collection: string ): number
```

Parameters:

- collection: `string`
  >The collection to examine.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let rowsInCollection= myDB.count('testCollection');
```

---

## create() {: #infinity.noSql.create_function .doc-function}

Creates a collection with the specified name in memory.

Signature:
```
create( collection: string, capped?: boolean, maxCount?: number ): void
```

Parameters:

- collection: `string`
  >The name of the collection to create.

- capped: `boolean`, optional
  >Whether the row count of the collection should be limited.

- maxCount: `number`, optional
  >The maximum amount of rows the collection should contain.


Example:

```typescript
infinity.loadModule('infinity.noSql');
infinity.noSql.create('testCollection');
```

---

## drop() {: #infinity.noSql.drop_function .doc-function}

Deletes the specified collection from memory.

Signature:
```
drop( collection: string ): void
```

Parameters:

- collection: `string`
  >The name of the collection to delete.


Example:

```typescript
infinity.loadModule('infinity.noSql');
infinity.noSql.drop('testCollection');
```

---

## exists() {: #infinity.noSql.exists_function .doc-function}

Checks whether a collection with the specified name exists in memory.

Signature:
```
exists( collection: string ): boolean
```

Parameters:

- collection: `string`
  >The collection name to check for.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.noSql');
if ( infinity.noSql.exists('testCollection') ) {
  //...
}
```

---

## find() {: #infinity.noSql.find_function .doc-function}

Allows for querying collections for data in a structured way using a sql-like query language.

Signature:
```
find( collection: string, query: infinity.noSql.queryArray, orderBy?: string, orderDirection?: infinity.noSql.orderDirection, offset?: number, limit?: number, outputMode?: infinity.noSql.outputMode ): infinity.noSql.findResultArray
```

Parameters:

- collection: `string`
  >The name of the collection to be queried.

- query: [`infinity.noSql.queryArray`](#infinity.noSql.queryArray_interface)
  >An array of options for the query, usable with the following operators: =, <>, !=, >, <, >=, <=, beginswith, endswith, contains.

- orderBy: `string`, optional
  >Specifies by which column the result has to be ordered.

- orderDirection: [`infinity.noSql.orderDirection`](#infinity.noSql.orderDirection_enum), optional
  >Specifies the order direction.

- offset: `number`, optional
  >Specifies, how many records have to be skipped.

- limit: `number`, optional
  >Constrains the number of rows to return.

- outputMode: [`infinity.noSql.outputMode`](#infinity.noSql.outputMode_enum), optional
  >Specifies how the data is returned.


Return type: `infinity.noSql.findResultArray`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let ids = infinity.noSql.find('testCollection', [['username', 'beginswith', 'a']], '', infinity.noSql.orderDirection.ascending, 0, 0, infinity.noSql.outputMode.ids);
```

---

## get() {: #infinity.noSql.get_function .doc-function}

Returns a row with the given ID out of the specified collection.

Signature:
```
get( collection: string, id: number ): object
```

Parameters:

- collection: `string`
  >The name of the collection to be queried.

- id: `number`
  >The ID of the row to be returned.


Return type: `object`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let secondRow = infinity.noSql.get('testCollection', 2);
```

---

## get() {: #infinity.noSql.get_function .doc-function}

Returns multiple rows with the given IDs out of the specified collection as an array of objects.

Signature:
```
get( collection: string, ids: infinity.noSql.idArray ): infinity.noSql.getResultArray
```

Parameters:

- collection: `string`
  >The name of the collection to be queried.

- ids: [`infinity.noSql.idsArray`](#infinity.noSql.idsArray_interface)
  >An array containing the IDs of the rows to be returned.


Return type: `infinity.noSql.getResultArray`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let someRows = infinity.noSql.get('testCollection', [2, 3]);
```

---

## has() {: #infinity.noSql.has_function .doc-function}

Indicates whether the specified collection has a row with the given ID.

Signature:
```
has( collection: string, id: number ): boolean
```

Parameters:

- collection: `string`
  >The name of the collection to be checked.

- id: `number`
  >The row to be checked.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.noSql');
if ( infinity.noSql.has('testCollection', 2) ) {
  //...
}
```

---

## index() {: #infinity.noSql.index_function .doc-function}

Creates an index column inside the given collection and specifies the data type to be stored in. Can optionally specify the column to act as an index of the given type.

Signature:
```
index( collection: string, key: string, unique?: boolean ): void
```

Parameters:

- collection: `string`
  >The name of the collection to be altered.

- key: `string`
  >The column to act as an index.

- unique: `boolean`, optional
  >Specifies whether the index has to be unique.


Example:

```typescript
infinity.loadModule('infinity.noSql');
infinity.noSql.index(collection, key);
```

---

## insert() {: #infinity.noSql.insert_function .doc-function}

Inserts the given data into the specified collection. The data has to be passed inside an object.

Signature:
```
insert( collection: string, document: object ): number
```

Parameters:

- collection: `string`
  >The name of the collection to be altered.

- document: `object`
  >An object containing the data to be inserted.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.noSql');
infinity.noSql.insert('testCollection', { "username": "TheUserName1", "email": "theusername@email.com", "rights": ["read", "write", "create", "delete"] });
```

---

## lock() {: #infinity.noSql.lock_function .doc-function}

Attempts to lock the specified collection for writing and or reading access.

Signature:
```
lock( collection: string, readOnly?: boolean ): boolean
```

Parameters:

- collection: `string`
  >The name of the collection to be locked.

- readOnly: `boolean`, optional
  >Specifies whether only reading access is required.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.noSql');
if ( infinity.noSql.lock('testCollection') ) {
  //...
}
```

---

## remove() {: #infinity.noSql.remove_function .doc-function}

Removes rows from the specified collection corresponding to the provided query parameters. Takes query parameters inside an array. Returns the number of rows affected by the query.

Signature:
```
remove( collection: string, query: infinity.noSql.queryArray ): number
```

Parameters:

- collection: `string`
  >The name of the collection to be altered.

- query: [`infinity.noSql.queryArray`](#infinity.noSql.queryArray_interface)
  >An array containing the query parameters.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let rowsAffected = infinity.noSql.remove('testCollection', [['id', '=',  2]]);
```

---

## remove() {: #infinity.noSql.remove_function .doc-function}

Removes a row from a specified collection based on a given row ID.

Signature:
```
remove( collection: string, id: number ): number
```

Parameters:

- collection: `string`
  >The name of the collection to be altered.
- id: `number`
  >The unique identifier of the row to be removed.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let rowsAffected = infinity.noSql.remove('testCollection', 2);
console.log(rowsAffected + ' row(s) removed.');
```

---

## unlock() {: #infinity.noSql.unlock_function .doc-function}

Releases the access lock set previoously through [lock()](#infinity.noSql.lock_function).

Signature:
```
unlock( collection: string ): void
```

Parameters:

- collection: `string`
  >The name of the collection to be unlocked.


Example:

```typescript
infinity.loadModule('infinity.noSql');
infinity.noSql.unlock('testCollection');
```

---

## update() {: #infinity.noSql.update_function .doc-function}

Updates a value in an existing row in the specified collection corresponding to the provided query parameters. Takes query parameters inside an array. The data for the update has to be passed inside an object. Returns the number of rows affected by the query.

Signature:
```
update( collection: string, query: infinity.noSql.queryArray, update: object ): number
```

Parameters:

- collection: `string`
  >The name of the collection to be updated.

- query: [`infinity.noSql.queryArray`](#infinity.noSql.queryArray_interface)
  >An array containing the query parameters.

- update: `object`
  >An object containing the data to be written.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let rowsAffected = infinity.noSql.update('testCollection', query, update);
infinity.noSql.update('test', [['username', '=', 'TheUserName1']], {"email": "somerandom@email.com"});
```

---

## update() {: #infinity.noSql.update_function .doc-function}

Updates a value in an existing row in the specified collection based on a given row id.

Signature:
```
update( collection: string, id: number, update: object ): number
```

Parameters:

- collection: `string`
  >The name of the collection to be updated.

- id: `number`
  >The unique identifier of the row to be updated.

- update: `object`
  >An object containing the data to be written.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let updateData = { username: "newUserName", email: "new@email.com", modified: Math.floor(Date.now() * 0.001) };
let rowsAffected = infinity.noSql.update('testCollection', 2, updateData);
console.log(rowsAffected + ' row(s) updated.');
```

---

## update() {: #infinity.noSql.update_function .doc-function}

Updates a value in an existing row in the specified collection. The data for the update has to be passed inside an object. The row is being identified by the given row id inside the provided data object. Returns the number of rows affected by the query.

Signature:
```
update( collection: string, document: object ): number
```

Parameters:

- collection: `string`
  >The name of the collection to be updated.

- document: `object`
  >An object containing the data to be written.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let rowsAffected = infinity.noSql.update('testCollection', { id: 2, username: "aUserName", email: "yetanother@email.com", modified: Math.floor(Date.now() * 0.001) });
```


---

<div class="doc-heading">Enums</div>

---

## infinity.noSql.orderDirection {: #infinity.noSql.orderDirection_enum .doc-enum}

Specifies the order direction of the returned result set.

Values:

- none: `0`

- ascending: `1`

- descending: `2`

Example:

```typescript
infinity.loadModule('infinity.noSql');
let orderDirection = infinity.noSql.orderDirection.ascending;
```



---

## infinity.noSql.outputMode {: #infinity.noSql.outputMode_enum .doc-enum}

Specifies how the result data has to be returned.

Values:

- objects: `0`
  >As objects.

- ids: `1`
  >As row IDs in a comma-separated string.

- count: `2`
  >As a total count number.

Example:

```typescript
infinity.loadModule('infinity.noSql');
let outputMode = infinity.noSql.outputMode.objects;
```





