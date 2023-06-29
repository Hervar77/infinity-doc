# infinity.lock

Provides functionality for locking a namespace in memory for reading and writing.

Module: none (built-in)

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [beginRead](#infinity.lock.beginRead_function)
- [beginWrite](#infinity.lock.beginWrite_function)
- [endRead](#infinity.lock.endRead_function)
- [endWrite](#infinity.lock.endWrite_function)

</div>


Example:

main.ts:

```typescript
infinity.loadModule('infinity.thread');
infinity.loadModule('infinity.memory');

let thread = new infinity.thread('thread.js');
thread.start();

while (!infinity.terminated) {
  
  infinity.sleep(500);
  infinity.lock.beginRead('res');
  console.debug('main.js: Reading ' + infinity.memory.getNumber('global', 'value') + ' from memory');
  
  infinity.lock.endRead('res');
}

thread.stop();
```

thread.ts:

```typescript
infinity.loadModule('infinity.memory');

while (!infinity.terminated) {

  infinity.sleep(500);
  infinity.lock.beginWrite('res');

  sub();
 
  infinity.lock.endWrite('res');
}


function sub() {

  let v =  infinity.memory.getNumber('global', 'value');
  if(isNaN(v)){
    v = 0;
  } else {
    v++;
  }
  console.debug('thread.js: Writing ' + v + ' to memory');
  infinity.memory.putNumber('global', 'value', v);

}
```
Console output:

```shell
#We see both processes competing for access at roughly the same moment, thus occasionally blocking one another
[I 2021-03-31 19:08:57,993] thread.js: Writing 0 to memory
[I 2021-03-31 19:08:57,993] main.js: Reading 0 from memory
[I 2021-03-31 19:08:58,494] main.js: Reading 0 from memory
[I 2021-03-31 19:08:58,494] thread.js: Writing 1 to memory
[I 2021-03-31 19:08:58,998] main.js: Reading 1 from memory
[I 2021-03-31 19:08:58,998] thread.js: Writing 2 to memory
[I 2021-03-31 19:08:59,500] thread.js: Writing 3 to memory
[I 2021-03-31 19:08:59,500] main.js: Reading 3 from memory
[I 2021-03-31 19:09:00,014] main.js: Reading 3 from memory
[I 2021-03-31 19:09:00,014] thread.js: Writing 4 to memory
[I 2021-03-31 19:09:00,515] main.js: Reading 4 from memory
[I 2021-03-31 19:09:00,515] thread.js: Writing 5 to memory
[I 2021-03-31 19:09:01,030] thread.js: Writing 6 to memory
[I 2021-03-31 19:09:01,030] main.js: Reading 6 from memory
[I 2021-03-31 19:09:01,545] main.js: Reading 6 from memory
[I 2021-03-31 19:09:01,545] thread.js: Writing 7 to memory
[I 2021-03-31 19:09:02,049] thread.js: Writing 8 to memory
[I 2021-03-31 19:09:02,049] main.js: Reading 8 from memory
[I 2021-03-31 19:09:02,551] main.js: Reading 8 from memory
[I 2021-03-31 19:09:02,551] thread.js: Writing 9 to memory
[I 2021-03-31 19:09:03,054] main.js: Reading 9 from memory
[I 2021-03-31 19:09:03,054] thread.js: Writing 10 to memory
[I 2021-03-31 19:09:03,557] thread.js: Writing 11 to memory
[I 2021-03-31 19:09:03,557] main.js: Reading 11 from memory
[I 2021-03-31 19:09:04,061] thread.js: Writing 12 to memory
[I 2021-03-31 19:09:04,061] main.js: Reading 12 from memory
[I 2021-03-31 19:09:04,567] thread.js: Writing 13 to memory
[I 2021-03-31 19:09:04,567] main.js: Reading 13 from memory
[I 2021-03-31 19:09:05,071] thread.js: Writing 14 to memory
[I 2021-03-31 19:09:05,071] main.js: Reading 14 from memory
[I 2021-03-31 19:09:05,573] thread.js: Writing 15 to memory
[I 2021-03-31 19:09:05,573] main.js: Reading 15 from memory
...
```

---

<div class="doc-heading">Functions</div>

---

## beginRead() {: #infinity.lock.beginRead_function .doc-function}

Locks the specified namespace in memory for reading.

Signature:
```
beginRead( nameSpace: string ): void
```

Parameters:

- nameSpace: `string`
  >the namespace to be locked


Example:

```typescript
infinity.lock.beginRead('myNameSpace');
```

---

## beginWrite() {: #infinity.lock.beginWrite_function .doc-function}

Locks the specified namespace in memory for writing.

Signature:
```
beginWrite( nameSpace: string ): boolean
```

Parameters:

- nameSpace: `string`
  >the namespace to be locked


Return type: `boolean`

Example:

```typescript
if ( infinity.lock.beginWrite('myNameSpace') ) {}
```

---

## endRead() {: #infinity.lock.endRead_function .doc-function}

Unlocks the specified namespace in memory for reading.

Signature:
```
endRead( nameSpace: string ): void
```

Parameters:

- nameSpace: `string`
  >the namespace to be unlocked


Example:

```typescript
infinity.lock.endRead('myNameSpace');
```

---

## endWrite() {: #infinity.lock.endWrite_function .doc-function}

Unlocks the specified namespace in memory for writing.

Signature:
```
endWrite( nameSpace: string ): void
```

Parameters:

- nameSpace: `string`
  >the namespace to be unlocked


Example:

```typescript
infinity.lock.endWrite('myNameSpace');
```



