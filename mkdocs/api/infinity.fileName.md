# infinity.fileName

Provides helper functions for extraction of file paths, names and extensions.

Module: `infinity.fileSystem`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [correct](#infinity.fileName.correct_function)
- [extension](#infinity.fileName.extension_function)
- [expand](#infinity.fileName.expand_function)
- [extract](#infinity.fileName.extract_function)
- [extractDirectory](#infinity.fileName.extractDirectory_function)
- [isValid](#infinity.fileName.isValid_function)
- [quote](#infinity.fileName.quote_function)

</div>

---

<div class="doc-heading">Functions</div>

---

## correct() {: #infinity.fileName.correct_function .doc-function}

Returns a valid filename from the given string.

Signature:
```
correct( fileName: string ): string
```

Parameters:

- fileName: `string`
  >The filename to be corrected.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let validFileName = infinity.fileName.correct(fileName);
```

---

## extension() {: #infinity.fileName.extension_function .doc-function}

Returns the extension out of the given filename

Signature:
```
extension( fileName: string ): string
```

Parameters:

- fileName: `string`
  >The filename to examine.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let s = infinity.fileName.extension('test.txt');
console.debug(s);
//.txt
```

---

## expand() {: #infinity.fileName.expand_function .doc-function}

Returns the given relative file path converted to an absolute one.

Signature:
```
expand( fileName: string ): string
```

Parameters:

- fileName: `string`
  >A relative file path.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let s = infinity.fileName.expand('../config.ini');
console.debug(s);
//d:/dev/infinity/bin/config.ini
```

---

## extract() {: #infinity.fileName.extract_function .doc-function}

Strips path data and, optionally, the file extension leaving just the name of the file.

Signature:
```
extract( fileName: string, stripExtension?: boolean ): string
```

Parameters:

- fileName: `string`
  >The data to examine.

- stripExtension: `boolean`, optional
  >Whether to strip the extension too.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let s = infinity.fileName.extract('c:/tmp/test.txt', true);
console.debug(s);
//test
```

---

## extractDirectory() {: #infinity.fileName.extractDirectory_function .doc-function}

Extracts path data from a file path string.

Signature:
```
extractDirectory( fileName: string ): string
```

Parameters:

- fileName: `string`
  >The file path.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let s = infinity.fileName.extractDirectory('c:/tmp/test.txt');
console.debug(s);
//c:/tmp/
```

---

## isValid() {: #infinity.fileName.isValid_function .doc-function}

Returns whether the given filename is a valid for the operating system.

Signature:
```
isValid( fileName: string ): boolean
```

Parameters:

- fileName: `string`
  >The filename to be checked.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
if ( infinity.fileName.isValid(fileName) ) {
  //...
}
```

---

## quote() {: #infinity.fileName.quote_function .doc-function}

Puts if necessary double quotes around file names with spaces.

Signature:
```
quote( fileName: string ): string
```

Parameters:

- fileName: `string`
  >The filename to be checked.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let path = infinity.fileName.quote('c:/tmp 2/test.txt');
console.debug(path);
//"c:/tmp 2/test.txt"
```



