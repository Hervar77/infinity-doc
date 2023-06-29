# infinity.memory

Provides a thread-safe shared memory within one INFINITY.JS instance.

All functions in this namespace read and write data to a shared memory in a thread-safe manner, by implicitly locking memory access (multiple-read, single-write). You can, however, also [lock](#infinity.memory.lock_function) shared memory access explicitly, e.g. for grouping multiple read and/or write operations together, without other threads interfering with them. If you use the [lock](#infinity.memory.lock_function) function to do so, always make sure that you [unlock](#infinity.memory.unlock_function) all namespaces you've locked, or otherwise your program will run into deadlocks and will not properly terminate (since the operating system will wait for it to release all locks it holds).

Note: if you are using the expiry parameter when putting data then make sure to call `infinity.memory.flushExpired()` in a regular interval (e.g. in a thread) so that expired values will be cleared.


Module: `infinity.memory`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [cursor](#infinity.memory.cursor_class)

<div class="doc-toc-heading">Interfaces:</div>

- [listArray](#infinity.memory.listArray_interface)

<div class="doc-toc-heading">Functions:</div>

- [add](#infinity.memory.add_function)
- [addBoolean](#infinity.memory.addBoolean_function)
- [addList](#infinity.memory.addList_function)
- [addNumber](#infinity.memory.addNumber_function)
- [addString](#infinity.memory.addString_function)
- [clear](#infinity.memory.clear_function)
- [decrement](#infinity.memory.decrement_function)
- [delList](#infinity.memory.delList_function)
- [dump](#infinity.memory.dump_function)
- [exists](#infinity.memory.exists_function)
- [flushExpired](#infinity.memory.flushExpired_function)
- [get](#infinity.memory.get_function)
- [getBoolean](#infinity.memory.getBoolean_function)
- [getCount](#infinity.memory.getCount_function)
- [getList](#infinity.memory.getList_function)
- [getMaxSize](#infinity.memory.getMaxSize_function)
- [getNumber](#infinity.memory.getNumber_function)
- [getSize](#infinity.memory.getSize_function)
- [getString](#infinity.memory.getString_function)
- [getUpdateExpireOnAccess](#infinity.memory.getUpdateExpireOnAccess_function)
- [increment](#infinity.memory.increment_function)
- [lock](#infinity.memory.lock_function)
- [put](#infinity.memory.put_function)
- [putBoolean](#infinity.memory.putBoolean_function)
- [putList](#infinity.memory.putList_function)
- [putNumber](#infinity.memory.putNumber_function)
- [putString](#infinity.memory.putString_function)
- [remove](#infinity.memory.remove_function)
- [setMaxSize](#infinity.memory.setMaxSize_function)
- [setUpdateExpireOnAccess](#infinity.memory.setUpdateExpireOnAccess_function)
- [unlock](#infinity.memory.unlock_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.memory');

infinity.memory.lock('users');

try {
  infinity.memory.put('users', 'id:1', {id: 1, username: 'tf', name: 'Tobias Frie', email: 'recipientName@domain.com'});
  infinity.memory.putNumber('users', 'u:tf', 1);
  infinity.memory.putNumber('users', 'recipientName@domain.com', 1);
} finally {
  infinity.memory.unlock('users');
}

let id = infinity.memory.getNumber('users', 'u:tf');
console.debug(infinity.memory.get('users', 'id:' + id));

let cursor = new infinity.memory.cursor('users');

if (cursor.first()) {
  do {
    console.debug(cursor.key);
  } while (cursor.next());
}

cursor.free();
```

---

<div class="doc-heading">Classes</div>

---

## cursor {: #infinity.memory.cursor_class .doc-class}

The cursor class serves, similar to database result set cursors, for orientation while iterating through the specified namespace. It points at the current row and can be moved forward, backward and be resetted to start and end positions. As long as the cursor object instance exists, the namespace remains locked.

<div class="doc-toc" markdown="1">

**Properties:**

- [key](#infinity.memory.cursor.key_property)
- [value](#infinity.memory.cursor.value_property)
- [valueAsBoolean](#infinity.memory.cursor.valueAsBoolean_property)
- [valueAsNumber](#infinity.memory.cursor.valueAsNumber_property)
- [valueAsString](#infinity.memory.cursor.valueAsString_property)

**Methods:**

- [constructor()](#infinity.memory.cursor.constructor_function)
- [findFirst()](#infinity.memory.cursor.findFirst_function)
- [findLast()](#infinity.memory.cursor.findLast_function)
- [findNext()](#infinity.memory.cursor.findNext_function)
- [findPrev()](#infinity.memory.cursor.findPrev_function)
- [first()](#infinity.memory.cursor.first_function)
- [free()](#infinity.memory.cursor.free_function)
- [last()](#infinity.memory.cursor.last_function)
- [next()](#infinity.memory.cursor.next_function)
- [prev()](#infinity.memory.cursor.prev_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.memory');
let myCursor = new infinity.memory.cursor('testNamespace');
```

---

**Properties**

---

### key {: #infinity.memory.cursor.key_property .doc-property .doc-readonly}

Type: `string`

Gets the name of the key the curser is currently pointing at.

---

### value {: #infinity.memory.cursor.value_property .doc-property .doc-readonly}

Type: `any`

Gets the value of the key the curser is currently pointing at.

---

### valueAsBoolean {: #infinity.memory.cursor.valueAsBoolean_property .doc-property .doc-readonly}

Type: `boolean`

Gets the value of the key the curser is currently pointing at as a boolean.

---

### valueAsNumber {: #infinity.memory.cursor.valueAsNumber_property .doc-property .doc-readonly}

Type: `number`

Gets the value of the key the curser is currently pointing at as a number.

---

### valueAsString {: #infinity.memory.cursor.valueAsString_property .doc-property .doc-readonly}

Type: `string`

Gets the value of the key the curser is currently pointing at as a string.

---

**Methods**

---

### constructor() {: #infinity.memory.cursor.constructor_function .doc-function}

Lets you create an INFINITY.JS memory cursor object instance.

Signature:
```typescript
constructor( namespace: string )
```

Parameters:

- namespace: `string`
  >the namespace to be read


Example:

```typescript
infinity.loadModule('infinity.memory');
let myCursor = new infinity.memory.cursor('testNamespace');
```

---

### findFirst() {: #infinity.memory.cursor.findFirst_function .doc-function}

Searches for the first entry in memory the key of which starts with the specified characters and puts the cursor on its position.

Signature:
```typescript
findFirst( key: string ): boolean
```

Parameters:

- key: `string`
  >the key to be examined


Return type: `boolean`

Example:

```typescript
myCursor.findFirst('id:1');
```

---

### findLast() {: #infinity.memory.cursor.findLast_function .doc-function}

Searches for the last entry in memory the key of which starts with the specified characters and puts the cursor on its position.

Signature:
```typescript
findLast( key: string ): boolean
```

Parameters:

- key: `string`
  >the key to be examined


Return type: `boolean`

Example:

```typescript
myCursor.findLast('id:1');
```

---

### findNext() {: #infinity.memory.cursor.findNext_function .doc-function}

Can be used with [`findFirst()`](#infinity.memory.cursor.findFirst_function) and [`findLast()`](#infinity.memory.cursor.findLast_function): it searches for the next entry in memory, the key of which starts with the specified characters and puts the cursor on its position. If neither `findFirst()` nor `findLast()` has been used before the call of  `findNext()`, the function behaves just like [`next()`](#infinity.memory.cursor.next_function).

Signature:
```typescript
findNext(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');

infinity.memory.lock('testNamespace');
infinity.memory.add('testNamespace', 'id:1', 'anyData')
infinity.memory.add('testNamespace', 'id:2', 'anyData')
infinity.memory.add('testNamespace', 'key:1', 'anyData')
infinity.memory.add('testNamespace', 'id:3', 'anyData')

let myCursor = new infinity.memory.cursor('testNamespace');

if (myCursor.findFirst('id:')) {
  do {
    console.debug(myCursor.key);
  } while (myCursor.findNext());
}
//id:1
//id:2
//id:3
myCursor.free();
```

---

### findPrev() {: #infinity.memory.cursor.findPrev_function .doc-function}

Can be used with [`findFirst()`](#infinity.memory.cursor.findFirst_function) and [`findLast()`](#infinity.memory.cursor.findLast_function): it searches for the previous entry in memory, the key of which starts with the specified characters and puts the cursor on its position. If neither `findFirst()` nor `findLast()` has been used before the call of  `findPrev()`, the function behaves just like [`prev()`](#infinity.memory.cursor.prev_function).

Signature:
```typescript
findPrev(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');

infinity.memory.lock('testNamespace');
infinity.memory.add('testNamespace', 'id:1', 'anyData')
infinity.memory.add('testNamespace', 'id:2', 'anyData')
infinity.memory.add('testNamespace', 'key:1', 'anyData')
infinity.memory.add('testNamespace', 'id:3', 'anyData')

let myCursor = new infinity.memory.cursor('testNamespace');

if (myCursor.findLast('id:')) {
  do {
    console.debug(myCursor.key);
  } while (myCursor.findPrev());
}
//id:3
//id:2
//id:1
myCursor.free();
```

---

### first() {: #infinity.memory.cursor.first_function .doc-function}

Resets the cursor to the first position of the current namespace.

Signature:
```typescript
first(): boolean
```

Return type: `boolean`

Example:

```typescript
myCursor.first();
```

---

### free() {: #infinity.memory.cursor.free_function .doc-function}

Frees the memory previously occupied by the memory cursor object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myCursor.free();
```

---

### last() {: #infinity.memory.cursor.last_function .doc-function}

Moves the cursor to the last position of the current namespace.

Signature:
```typescript
last(): boolean
```

Return type: `boolean`

Example:

```typescript
myCursor.last();
```

---

### next() {: #infinity.memory.cursor.next_function .doc-function}

Moves the cursor one entry forward.

Signature:
```typescript
next(): boolean
```

Return type: `boolean`

Example:

```typescript
myCursor.next();
```

---

### prev() {: #infinity.memory.cursor.prev_function .doc-function}

Moves the cursor one entry backward.

Signature:
```typescript
prev(): boolean
```

Return type: `boolean`

Example:

```typescript
myCursor.prev();
```



---

<div class="doc-heading">Interfaces</div>

---

## listArray {: #infinity.memory.listArray_interface .doc-interface}

Extends: `Array<any>`

An array of any elements.



---

<div class="doc-heading">Functions</div>

---

## add() {: #infinity.memory.add_function .doc-function}

Writes the given data to the specified namespace and key in memory, only if there is no data yet.

Signature:
```
add( namespace: string, key: string, value: any, expire?: number ): boolean
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write at

- value: `any`
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');
if ( infinity.memory.add('testNamespace', 'id:1', 'anyData') ) {
  //...
}
```

---

## addBoolean() {: #infinity.memory.addBoolean_function .doc-function}

Writes a boolean value to the specified namespace and key in memory, only if there is no data yet.

Signature:
```
addBoolean( namespace: string, key: string, value: boolean, expire?: number ): boolean
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write at

- value: `boolean`
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');
if ( infinity.memory.addBoolean('testNamespace', 'id:1', true) ) {
  //...
}
```

---

## addList() {: #infinity.memory.addList_function .doc-function}

Writes an array to the specified namespace and key in memory, only if there is no data yet.

Signature:
```
addList( namespace: string, key: string, value: any, expire?: number ): void
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write at

- value: `any`
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.addList('testNamespace', 'id:1', [35, 'myStringData', true]);
```

---

## addNumber() {: #infinity.memory.addNumber_function .doc-function}

Writes a number to the specified namespace and key in memory, only if there is no data yet.

Signature:
```
addNumber( namespace: string, key: string, value: number, expire?: number ): boolean
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write at

- value: `number`
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');
if ( infinity.memory.addNumber('testNamespace', 'id:1', 35) ) {
  //...
}
```

---

## addString() {: #infinity.memory.addString_function .doc-function}

Writes a string to the specified namespace and key in memory, only if there is no data yet.

Signature:
```
addString( namespace: string, key: string, value: string, expire?: number ): boolean
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write at

- value: `string`
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');
if ( infinity.memory.addString('testNamespace', 'id:1', 'myStringData') ) {
  //...
}
```

---

## clear() {: #infinity.memory.clear_function .doc-function}

Deletes all entries from the specified namespace.

Signature:
```
clear( namespace: string ): void
```

Parameters:

- namespace: `string`, optional
  >the namespace to be cleared


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.clear('testNamespace');
```

---

## decrement() {: #infinity.memory.decrement_function .doc-function}

Decrements a counter inside the specified namespace and key and returns its value. The value starts at zero and may only be modified using `ìncrement()` and `decrement()` functions.

Signature:
```
decrement( namespace: string, key: string, value?: number ): number
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key which should contain the counter

- value: `number`, optional
  >specifies the value to be substracted from the existing counter


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.memory');
let counter = infinity.memory.decrement('testNamespace', 'id:1');
```

---

## delList() {: #infinity.memory.delList_function .doc-function}

Deletes the given value from the specified list stored in memory.

Signature:
```
delList( namespace: string, key: string, value: any, expire?: number ): boolean
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key containing the list to be altered

- value: `any`
  >the value to be deleted

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');

infinity.memory.lock('testNamespace');

infinity.memory.putList('testNamespace', 'id:1', [35, 'myStringData', true]);
infinity.memory.delList('testNamespace', 'id:1', 'myStringData');
console.debug(infinity.memory.getList('testNamespace', 'id:1'));
infinity.memory.unlock('testNamespace');
//[35,true]
```

---

## dump() {: #infinity.memory.dump_function .doc-function}

Returns the contents of the specified namespace as an object.

Signature:
```
dump( namespace: string ): object
```

Parameters:

- namespace: `string`
  >the namespace to be dumped


Return type: `object`

Example:

```typescript
infinity.loadModule('infinity.memory');
let contents = infinity.memory.dump('testNamespace');
```

---

## exists() {: #infinity.memory.exists_function .doc-function}

Specifies whether the given key does exist in the specified namespace.

Signature:
```
exists( namespace: string, key: string, keyStart?: boolean ): boolean
```

Parameters:

- namespace: `string`
  >the namespace to be examined

- key: `string`
  >the key being searched for

- keyStart: `boolean`, optional
  >whether to search for any key that starts with the characters specified in "key"


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');
if ( infinity.memory.exists('testNamespace', 'id:1') ) {
  //...
}
```

---

## flushExpired() {: #infinity.memory.flushExpired_function .doc-function}

Deletes entries from memory, which expiration timestamps have expired.

Signature:
```
flushExpired( namespace: string ): void
```

Parameters:

- namespace: `string`, optional
  >the namespace to be flushed


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.flushExpired('testNamespace');
```

---

## get() {: #infinity.memory.get_function .doc-function}

Returns the value of the given key and namespace. Resets any expiration setting if present and if [`setUpdateExpireOnAccess()`]( #infinity.memory.setUpdateExpireOnAccess_function) has not been set to false.

Signature:
```
get( namespace: string, key: string ): any
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to read from


Return type: `any`

Example:

```typescript
infinity.loadModule('infinity.memory');
let dataFromMemory = infinity.memory.get('testNamespace', 'id:1');
```

---

## getBoolean() {: #infinity.memory.getBoolean_function .doc-function}

Returns the boolean value of the specified namespace and key, if previously set with [`putBoolean()`](#infinity.memory.putBoolean_function). Resets any expiration setting, if present and if [`setUpdateExpireOnAccess()`]( #infinity.memory.setUpdateExpireOnAccess_function) has not been set to false.

Signature:
```
getBoolean( namespace: string, key: string ): boolean
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to read from


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');
let booleanValueFromMemory = infinity.memory.getBoolean('testNamespace', 'id:1');
```

---

## getCount() {: #infinity.memory.getCount_function .doc-function}

Returns the amount of entries stored inside the specified namespace.

Signature:
```
getCount( namespace: string ): number
```

Parameters:

- namespace: `string`
  >the namespace to be examined


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.memory');
let entriesInMemory = infinity.memory.getCount('testNamespace');
```

---

## getList() {: #infinity.memory.getList_function .doc-function}

Returns the contents of the specified namespace inside a [`infinity.memory.listArray`](#infinity.memory.listArray_interface), if previously stored with [`put()`]( #infinity.memory.put_function) or [`putList()`]( #infinity.memory.putList_function) . Resets any expiration settings, if present and if [`setUpdateExpireOnAccess()`]( #infinity.memory.setUpdateExpireOnAccess_function) has not been set to false.

Signature:
```
getList( namespace: string, key: string ): infinity.memory.listArray
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to read from


Return type: [`infinity.memory.listArray`](#infinity.memory.listArray_interface)

Example:

```typescript
infinity.loadModule('infinity.memory');
let listFromMemory = infinity.memory.getList('testNamespace', 'id:1');
```

---

## getMaxSize() {: #infinity.memory.getMaxSize_function .doc-function}

Gets the maximum possible amount of entries for the specified namespace, if previously set by [`setMaxSize`]( #infinity.memory.setMaxSize_function)

Signature:
```
getMaxSize( namespace: string ): number
```

Parameters:

- namespace: `string`
  >the namespace to specify the limit for


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.memory');
let namespaceMaxSize = infinity.memory.getMaxSize('testNamespace');
```

---

## getNumber() {: #infinity.memory.getNumber_function .doc-function}

Returns the number value of the specified namespace and key, if previously set with [`putNumber()`](#infinity.memory.putNumber_function). Resets any expiration settings, if present and if [`setUpdateExpireOnAccess()`]( #infinity.memory.setUpdateExpireOnAccess_function) has not been set to false.

Signature:
```
getNumber( namespace: string, key: string ): number
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to read from


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.memory');
let numberFromMemory = infinity.memory.getNumber('testNamespace', 'id:1');
```

---

## getSize() {: #infinity.memory.getSize_function .doc-function}

Returns the bytesize of the namespace.

Signature:
```
getSize( namespace: string ): number
```

Parameters:

- namespace: `string`
  >the namespace to be examined


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.memory');
let size = infinity.memory.getSize('testNamespace');
```

---

## getString() {: #infinity.memory.getString_function .doc-function}

Returns the string contents of the specified namespace and key, if previously set with [`putString()`](#infinity.memory.putString_function). Resets any expiration settings, if present and if [`setUpdateExpireOnAccess()`]( #infinity.memory.setUpdateExpireOnAccess_function) has not been set to false.

Signature:
```
getString( namespace: string, key: string ): string
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to read from


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.memory');
let stringFromMemory = infinity.memory.getString('testNamespace', 'id:1');
```

---

## getUpdateExpireOnAccess() {: #infinity.memory.getUpdateExpireOnAccess_function .doc-function}

Gets the value set by [`setUpdateExpireOnAccess()`]( #infinity.memory.setUpdateExpireOnAccess_function).

Signature:
```
getUpdateExpireOnAccess( namespace: string ): boolean
```

Parameters:

- namespace: `string`
  >the namespace to be examined


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');
if ( infinity.memory.getUpdateExpireOnAccess('testNamespace') ) {
  //...
}
```

---

## increment() {: #infinity.memory.increment_function .doc-function}

Increments a counter inside the specified namespace and key and returns its value. The value starts at zero and may only be modified using `ìncrement()` and `decrement()` functions.

Signature:
```
increment( namespace: string, key: string, value?: number ): number
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key which should contain the counter

- value: `number`, optional
  >specifies the value to be added to the existing value


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.memory');
let counter = infinity.memory.increment('testNamespace', 'id:1');
```

---

## lock() {: #infinity.memory.lock_function .doc-function}

Locks the namespace for reading and/or writing. Locking a namespace for read-only access will halt script execution until there is no other thread holding a write-lock on that same namespace. There can be multiple read-only locks by different threads at the same time, but only one write-lock. Locking a namespace for write access will halt script execution until there is no other thread holding a read- or write-lock on that same namespace.

This method can be used to ensure atomic operations on shared memory without threads interfering with each other (much like transactions in a database).

Note: all `infinity.memory` functions are thread-safe, but if you need to read and/or write multiple values without another thread changing data in between, then you can use the `lock` method to explicitly lock a certain namespace.

Attention: you must always unlock a namespace you have locked. Otherwise you will block all other threads, and in addition to that, your program will not terminate correctly, since the operating system will wait for your program to release all locks it holds. Therefore you should always use `try`-`finally` blocks to ensure you release your locks.

Signature:
```
lock( namespace: string, readOnly?: boolean ): boolean
```

Parameters:

- namespace: `string`
  >the namespace to be locked

- readOnly: `boolean`, optional
  >whether to lock the namespace for reading only


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.memory');
if ( infinity.memory.lock(namespace) ) { // lock namespace
  try {
    //...
  } finally {
    infinity.memory.unlock(namespace); // always unlock the namespace
  }
}
```

---

## put() {: #infinity.memory.put_function .doc-function}

Writes the given data to the specified namespace and key in memory, overwriting any data previously stored there.

Signature:
```
put( namespace: string, key: string, value: any, expire?: number ): void
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write to

- value: `any`
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.put('testNamespace', 'id:1', 'anyData');
```

---

## putBoolean() {: #infinity.memory.putBoolean_function .doc-function}

Writes a boolean value to the specified namespace and key in memory, overwriting any data previously stored there. The stored value can only be read with [`getBoolean()`]( #infinity.memory.getBoolean_function).

Signature:
```
putBoolean( namespace: string, key: string, value: boolean, expire?: number ): void
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write to

- value: `boolean`
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.putBoolean('testNamespace', 'id:1', true);
```

---

## putList() {: #infinity.memory.putList_function .doc-function}

Writes a [`infinity.memory.listArray`](#infinity.memory.listArray_interface) to the specified namespace and key in memory, overwriting any data previously stored there. The stored value can only be read with [`getList()`]( #infinity.memory.getList_function).

Signature:
```
putList( namespace: string, key: string, value: infinity.memory.listArray, expire?: number ): void
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write to

- value: [`infinity.memory.listArray`](#infinity.memory.listArray_interface)
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.putList('testNamespace', 'id:1', [35, 'myStringData', true]);
```

---

## putNumber() {: #infinity.memory.putNumber_function .doc-function}

Writes a number to the specified namespace and key in memory, overwriting any data previously stored there. The stored value can only be read with [`getNumber()`]( #infinity.memory.getNumber_function).

Signature:
```
putNumber( namespace: string, key: string, value: number, expire?: number ): void
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write to

- value: `number`
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.putNumber('testNamespace', 'id:1', 35);
```

---

## putString() {: #infinity.memory.putString_function .doc-function}

Writes a string to the specified namespace and key in memory, overwriting any data previously stored there. The stored value can only be read with [`getString()`]( #infinity.memory.getString_function).

Signature:
```
putString( namespace: string, key: string, value: string, expire?: number ): void
```

Parameters:

- namespace: `string`
  >the namespace to operate in

- key: `string`
  >the key to write to

- value: `string`
  >the value to write

- expire: `number`, optional
  >the amount of seconds for the entry to be valid


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.putString('testNamespace', 'id:1', 'myStringData');
```

---

## remove() {: #infinity.memory.remove_function .doc-function}

Removes the given key inside the specified namespace.

Signature:
```
remove( namespace: string, key: string, keyStart?: boolean ): void
```

Parameters:

- namespace: `string`
  >the namespace to remove the key from

- key: `string`
  >the key to remove

- keyStart: `boolean`, optional
  >whether to remove any key that starts with the characters specified in "key"


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.remove('testNamespace', 'id:1');
```

---

## setMaxSize() {: #infinity.memory.setMaxSize_function .doc-function}

Sets the maximum count of the entries for the specified namespace to hold.

Signature:
```
setMaxSize( namespace: string, value: number ): void
```

Parameters:

- namespace: `string`
  >the namespace to be limited

- value: `number`
  >the amount of the entries not to be exceeded


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.setMaxSize('testNamespace', 30);
```

---

## setUpdateExpireOnAccess() {: #infinity.memory.setUpdateExpireOnAccess_function .doc-function}

Sets whether the expiration settings inside the memory entries should be reset on access to them. The default setting is `true`.

Signature:
```
setUpdateExpireOnAccess( namespace: string, value: boolean ): void
```

Parameters:

- namespace: `string`
  >the namespace for the setting to take effect

- value: `boolean`
  >`true` for resetting the expiration settings on access, `false` for keeping them in effect 


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.setUpdateExpireOnAccess('testNamespace', false);
```

---

## unlock() {: #infinity.memory.unlock_function .doc-function}

Unlocks the namespace, allowing other threads to access it.

Signature:
```
unlock( namespace: string ): void
```

Parameters:

- namespace: `string`
  >the namespace to be unlocked


Example:

```typescript
infinity.loadModule('infinity.memory');
infinity.memory.unlock('testNamespace');
```



