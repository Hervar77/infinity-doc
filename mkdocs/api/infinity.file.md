# infinity.file

Provides file manipulation and examination functionality.

Module: `infinity.fileSystem`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [age](#infinity.file.age_function)
- [copy](#infinity.file.copy_function)
- [exists](#infinity.file.exists_function)
- [move](#infinity.file.move_function)
- [read](#infinity.file.read_function)
- [readString](#infinity.file.readString_function)
- [remove](#infinity.file.remove_function)
- [size](#infinity.file.size_function)
- [write](#infinity.file.write_function)
- [writeString](#infinity.file.writeString_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.fileSystem');

let filename = 'test.txt';
infinity.file.writeString(filename, 'Hello World');

let string = infinity.file.readString(filename);
let size = infinity.file.size(filename);
let age = infinity.file.age(filename);

console.debug('String: "' + string + '"; Size: ' + size + ' bytes; Changed: ' + new Date(age));
//String: "Hello World"; Size: 14 bytes; Changed: 2021-03-17T16:51:09.604+01:00

infinity.file.remove(filename);
console.debug(infinity.file.exists(filename));
//false
```

---

<div class="doc-heading">Functions</div>

---

## age() {: #infinity.file.age_function .doc-function}

Returns the date of the last change of the specified file as a Unix timestamp

Signature:
```
age( fileName: string ): number
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to examine.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let age = infinity.file.age('test.txt');
```

---

## copy() {: #infinity.file.copy_function .doc-function}

Creates a file with the source file's contents at the specified location.

Signature:
```
copy( srcFileName: string, dstFileName: string ): boolean
```

Parameters:

- srcFileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should be copied.

- dstFileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the copied contents.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
if ( infinity.file.copy('mail.eml', 'test.txt') ) {
  //...
}
```

---

## exists() {: #infinity.file.exists_function .doc-function}

Returns whether the specified file exists.

Signature:
```
exists( fileName: string ): boolean
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file being checked for.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
if ( infinity.file.exists('test.txt') ) {
  //...
}
```

---

## move() {: #infinity.file.move_function .doc-function}

Moves the given file to the specified location.

Signature:
```
move( srcFileName: string, dstFileName: string ): boolean
```

Parameters:

- srcFileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should be moved.

- dstFileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the the new location of the file.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
if ( infinity.file.move('test.txt', '../test.txt') ) {
  //...
}
```

---

## read() {: #infinity.file.read_function .doc-function}

Returns the contents of the given file.

Signature:
```
read( fileName: string, encoding?: infinity.encoding, len?: number ): any
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be read.

- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >The encoding of the file contents.


Return type: `any`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let data = infinity.file.read('test.txt');
```


## readString() {: #infinity.file.readString_function .doc-function}

Returns the contents of the given file as a string.

Signature:
```
readString( fileName: string, encoding?: infinity.encoding ): string
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be read.

- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >The encoding of the file contents.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let string = infinity.file.readString('test.txt');
```

---

## remove() {: #infinity.file.remove_function .doc-function}

Deletes the specified file.

Signature:
```
remove( fileName: string ): boolean
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be deleted.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
if ( infinity.file.remove('test.txt') ) {
  //...
}
```

---

## size() {: #infinity.file.size_function .doc-function}

Returns the size of the specified file in bytes.

Signature:
```
size( fileName: string ): number
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be examined.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let size = infinity.file.size('test.txt');
```

---

## write() {: #infinity.file.write_function .doc-function}

Writes the given data to the specified file.

Signature:
```
write( fileName: string, value: any, encoding?: infinity.encoding, append?: boolean, writeBom?: boolean ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file, to which the string should be written.

- value: `any`
  >The string to be written.

- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >The target encoding of the string.

- append: `boolean`, optional
  >Whether to append the string to the end of the file.

- writeBom: `boolean`, optional
  >Whether to write a Byte Order Mark (BOM) at the beginning of the file.



Example:

```typescript
infinity.loadModule('infinity.fileSystem');
infinity.file.write('test.txt', data);
```

---

## writeString() {: #infinity.file.writeString_function .doc-function}

Writes the given string to the specified file.

Signature:
```
writeString( fileName: string, value: string, encoding?: infinity.encoding, append?: boolean, writeBom?: boolean ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file, to which the string should be written.

- value: `string`
  >The string to be written.

- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >The target encoding of the string.

- append: `boolean`, optional
  >Whether to append the string to the end of the file.

- writeBom: `boolean`, optional
  >Whether to write a Byte Order Mark (BOM) at the beginning of the file.


Example:

```typescript
infinity.loadModule('infinity.fileSystem');
infinity.file.writeString('test.txt', 'Hello World');
```



