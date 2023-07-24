# infinity.zip

Provides ZIP compression and extraction functionality for archives in files and streams.

Module: `infinity.zip`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [file](#infinity.zip.file_class)
- [stream](#infinity.zip.stream_class)

<div class="doc-toc-heading">Namespaces:</div>

- [file](#infinity.zip.file_namespace)
- [stream](#infinity.zip.stream_namespace)

<div class="doc-toc-heading">Interfaces:</div>

- [file.stringArray](#infinity.zip.file.stringArray_interface)
- [stream.fileArray](#infinity.zip.stream.fileArray_interface)

</div>


Example:

```typescript
infinity.loadModule('infinity.zip');
infinity.loadModule('infinity.fileSystem');

infinity.file.writeString('test.txt', '123');
infinity.file.writeString('test2.txt', '321');

let myArchive = new infinity.zip.file();
myArchive.open('archive.zip', infinity.zip.file.mode.write);

myArchive.add('test.txt');
myArchive.add('test2.txt', 'test3.txt');

myArchive.close();
myArchive.open('archive.zip', infinity.zip.file.mode.read);

myArchive.extract('test3.txt', './');
console.debug(infinity.file.readString('test3.txt'));
//321

myArchive.free();
```

---

<div class="doc-heading">Classes</div>

---

## file {: #infinity.zip.file_class .doc-class}

The class for compression and extraction operations on files in INFINITY.JS.

<div class="doc-toc" markdown="1">

**Properties:**

- [comment](#infinity.zip.file.comment_property)
- [fileCount](#infinity.zip.file.fileCount_property)
- [fileNames](#infinity.zip.file.fileNames_property)

**Methods:**

- [constructor()](#infinity.zip.file.constructor_function)
- [add()](#infinity.zip.file.add_function)
- [close()](#infinity.zip.file.close_function)
- [extract()](#infinity.zip.file.extract_function)
- [extract()](#infinity.zip.file.extract_function)
- [free()](#infinity.zip.file.free_function)
- [open()](#infinity.zip.file.open_function)

</div>


---

**Properties**

---

### comment {: #infinity.zip.file.comment_property .doc-property}

Gets or sets comments for the ZIP-archive.

Type: `string`


---

### fileCount (readonly) {: #infinity.zip.file.fileCount_property .doc-property .doc-readonly}

Gets the quantity of files contained inside the ZIP-archive.

Type: `number`


---

### fileNames (readonly) {: #infinity.zip.file.fileNames_property .doc-property .doc-readonly}

Gets the list of files inside the ZIP-archive.

Type: [`infinity.zip.file.stringArray`](#infinity.zip.file.stringArray_interface)

---

**Methods**

---

### constructor() {: #infinity.zip.file.constructor_function .doc-function}

Lets you instantiate an INFINITY.JS ZIP-file object instance for operations on files. Doesn't accept parameters. 

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.zip');
let myArchive = new infinity.zip.file();
```

---

### add() {: #infinity.zip.file.add_function .doc-function}

Adds a file to the ZIP-archive.

Signature:
```typescript
add( fileName: string, archiveFileName?: string ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be opened.

- archiveFileName: `string`, optional
  >The name of the file inside the archive. Can differ from the original file name.



Example:

```typescript
myArchive.add('dataToCompress.txt');
```

---

### close() {: #infinity.zip.file.close_function .doc-function}

Closes the ZIP-archive.

Signature:
```typescript
close(): void
```

Example:

```typescript
myArchive.close();
```

---

### extract() {: #infinity.zip.file.extract_function .doc-function}

Extracts the file indicated by the given index number out of the ZIP-archive and writes it to the specified location.

Signature:
```typescript
extract( index: number, path?: string, createSubDirs?: boolean ): void
```

Parameters:

- index: `number`
  >The zero-based index of the file contained in the archive.

- path: `string`, optional
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the decompressed output.

- createSubDirs: `boolean`, optional
  >Indicates, whether to create subdirectories according to the directory structure inside the ZIP-archive.


Example:

```typescript
myArchive.extract(3, './', true);
```

---

### extract() {: #infinity.zip.file.extract_function .doc-function}

Extracts the file indicated by the given filename out of the ZIP-archive and writes it to the specified location.

Signature:
```typescript
extract( fileName: string, path?: string, createSubDirs?: boolean ): void
```

Parameters:

- fileName: `string`
  >The name of the file contained in the archive.

- path: `string`, optional
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the decompressed output.

- createSubDirs: `boolean`, optional
  >Indicates, whether to create subdirectories according to the directory structure inside the ZIP-archive.



Example:

```typescript
myArchive.extract('toBeExtracted.txt', './', true);
```

---

### free() {: #infinity.zip.file.free_function .doc-function}

Frees up memory occupied by the INFINITY.JS ZIP-file object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myArchive.free();
```

---

### open() {: #infinity.zip.file.open_function .doc-function}

Opens or creates a ZIP-archive inside an INFINITY.JS ZIP-file object instance.

Signature:
```typescript
open( fileName: string, mode: infinity.zip.file.mode ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to zip-archive.

- mode: [`infinity.zip.file.mode`](#infinity.zip.file.mode_enum)
  >Specifies the type of access to the zip-archive according to [infinity.zip.file.mode](#infinity.zip.file.mode_enum). For archive creation the `write`-access is required.


Example:

```typescript
infinity.loadModule('infinity.zip');
let myArchive = new infinity.zip.file();
myArchive.open('archive.zip', infinity.zip.file.readWrite);
```



---

## stream {: #infinity.zip.stream_class .doc-class}

The class for compression and extraction operations on streams.

<div class="doc-toc" markdown="1">

**Properties:**

- [comment](#infinity.zip.stream.comment_property)
- [position](#infinity.zip.stream.position_property)
- [size](#infinity.zip.stream.size_property)
- [fileCount](#infinity.zip.stream.fileCount_property)
- [fileList](#infinity.zip.stream.fileList_property)

**Methods:**

- [constructor()](#infinity.zip.stream.constructor_function)
- [add()](#infinity.zip.stream.add_function)
- [copyFrom()](#infinity.zip.stream.copyFrom_function)
- [free()](#infinity.zip.stream.free_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.zip');
let myStream = new infinity.zip.stream();
```

---

**Properties**

---

### comment {: #infinity.zip.stream.comment_property .doc-property}

Type: `string`

Gets or sets the comment for the ZIP-archive.

---

### position {: #infinity.zip.stream.position_property .doc-property}

Type: `number`

Gets or sets the pointer position

---

### size {: #infinity.zip.stream.size_property .doc-property}

Type: `number`

Gets or sets the stream size.

---

### fileCount (readonly) {: #infinity.zip.stream.fileCount_property .doc-property .doc-readonly}

Type: `number`

Gets the quantity of files contained inside the ZIP-archive.

---

### fileList (readonly) {: #infinity.zip.stream.fileList_property .doc-property .doc-readonly}

Type: [`infinity.zip.stream.fileArray`](#infinity.zip.stream.fileArray_interface)

Gets the list of files inside the ZIP-archive.

---

**Methods**

---

### constructor() {: #infinity.zip.stream.constructor_function .doc-function}

Lets you instantiate an INFINITY.JS ZIP-file object instance for operations on streams. Doesn't accept parameters. 

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.zip');
let myStream = new infinity.zip.stream();
```

---

### add() {: #infinity.zip.stream.add_function .doc-function}

Adds a file to the ZIP-archive.

Signature:
```typescript
add( localFileName: string, archiveFileName?: string, created?: number, modified?: number, lastAccess?: number, comment?: string ): void
```

Parameters:

- localFileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be opened.

- archiveFileName: `string`, optional
  >The name of the file inside the archive.

- created: `number`, optional
  >Sets the file creation timestamp.

- modified: `number`, optional
  >Sets the timestamp of the last file modification.

- lastAccess: `number`, optional
  >Sets the timestamp of the last access to the file.

- comment: `string`, optional
  >Can contain a comment about the file inside the ZIP-archive.



Example:

```typescript
myStream.add('dataToCompress.txt');
```

---

### copyFrom() {: #infinity.zip.stream.copyFrom_function .doc-function}

Copies all or the specified amount of files from the given INFINITY.JS ZIP stream object to the current INFINITY.JS ZIP stream object.

Signature:
```typescript
copyFrom( stream: infinity.zip.stream, count?: number ): number
```

Parameters:

- stream: [`infinity.zip.stream`](infinity.stream.md)
  >INFINITY.JS ZIP stream object to copy from.

- count: `number`, optional
  >The number of files to copy.


Return type: `number`

Example:

```typescript
myStream.copyFrom(stream);
```

---

### free() {: #infinity.zip.stream.free_function .doc-function}

Frees up memory occupied by the INFINITY.JS ZIP stream object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myStream.free();
```



---

<div class="doc-heading">Namespaces</div>

---

## infinity.zip.file {: #infinity.zip.file_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [infinity.zip.file.stringArray](#infinity.zip.file.stringArray_interface)


<div class="doc-toc-heading">Enums:</div>

- [mode](#infinity.zip.file.mode_enum)

</div>

---

<div class="doc-heading">Interfaces</div>

---

## infinity.zip.file.stringArray {: #infinity.zip.file.stringArray_interface .doc-interface}

Extends: `Array<string>`

  >An array of strings.

---

<div class="doc-heading">Enums</div>

---

### infinity.zip.file.mode {: #infinity.zip.file.mode_enum .doc-enum}

The mode enums specify the mode in which a ZIP-archive is being opened.

Values:

- read: `1`
  >Specifies read only acces.

- readWrite: `2`
  >Specifies read and write access.

- write: `3`
  >Specifies write only acces.

Example:

```typescript
infinity.loadModule('infinity.zip');
let myArchive = new infinity.zip.file();
myArchive.open('archive.zip', infinity.zip.file.mode.write)
```






## infinity.zip.stream {: #infinity.zip.stream_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [infinity.zip.stream.fileArray](#infinity.zip.stream.fileArray_interface)

</div>

---

<div class="doc-heading">Interfaces</div>

---

## infinity.zip.stream.fileArray {: #infinity.zip.stream.fileArray_interface .doc-interface}

Extends: `Array<{localFileName: string, archiveFileName: string, created: number, modified: number, lastAccess: number, comment: string, crc32: number, size: number}>`

An array containing information about the files inside the archive as file objects

### Properties:
- #### localFileName 
  >Type: `string`. filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be opened.
- #### archiveFileName
  >Type: `string`. The name of the file inside the archive.
- #### created
  >Type: `number`. The file creation timestamp.
- #### modified
  >Type: `number`. The timestamp of the last file modification.
- #### lastAccess
  >Type: `number`. The timestamp of the last access to the file.
- #### comment
  >Type: `string`. A comment about the file inside the ZIP-archive.

- #### crc32
  >Type: `number`. The crc32 hash s for the file.
- #### size
  >Type: `number`. The file size.

