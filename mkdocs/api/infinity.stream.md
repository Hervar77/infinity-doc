# infinity.stream

Provides functionality for reading and writing data from and to streams.

Module: `infinity.stream`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [stream](#infinity.stream_class)

</div>


Example:

```typescript
infinity.loadModule('infinity.stream');
infinity.loadModule('infinity.http');

let memStream = new infinity.stream();
let fileStream = new infinity.stream(infinity.current.root + '../stream.dat', infinity.fileMode.create | infinity.fileMode.shareDenyWrite, true);

try {
  let http = new infinity.http.client();

  try {
    http.timeout = 1000;
    http.getStream('https://localhost', fileStream);
  } finally {
    http.free();
    http = null;
  }

  fileStream.position = 0;
  console.debug(memStream.copyFrom(fileStream, fileStream.size) + ' bytes copied');
  //52430 bytes copied

  console.debug(memStream.readString(infinity.encoding.ansi, true, fileStream.size));
  //<!DOCTYPE html>
  //...

} finally {
  fileStream.free();
  fileStream = null;
  
  memStream.free();
  memStream = null;
}
```


---

<div class="doc-heading">Classes</div>

---

## stream {: #infinity.stream_class .doc-class}

The class for operating with streams in INFINITY.JS.

<div class="doc-toc" markdown="1">

**Properties:**

- [position](#infinity.stream.position_property)
- [size](#infinity.stream.size_property)
- [fileName](#infinity.stream.fileName_property)

**Methods:**

- [constructor()](#infinity.stream.constructor_function)
- [constructor()](#infinity.stream.constructor_function)
- [copyFrom()](#infinity.stream.copyFrom_function)
- [free()](#infinity.stream.free_function)
- [read()](#infinity.stream.read_function)
- [readBoolean()](#infinity.stream.readBoolean_function)
- [readNumber()](#infinity.stream.readNumber_function)
- [readString()](#infinity.stream.readString_function)
- [write()](#infinity.stream.write_function)
- [writeBoolean()](#infinity.stream.writeBoolean_function)
- [writeNumber()](#infinity.stream.writeNumber_function)
- [writeString()](#infinity.stream.writeString_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.stream');
let myStream = new infinity.stream(fileName, fileMode);
```

---

**Properties**

---

### position {: #infinity.stream.position_property .doc-property}

Type: `number`

Gets or sets the position within the current stream.

---

### size {: #infinity.stream.size_property .doc-property}

Type: `number`

Gets or sets the size of the stream in bytes. The stream will allocate memory as needed, when written to. You can set the size (in bytes) beforehand, however, so reduce memory re-allocation and increase performance.

---

### fileName {: #infinity.stream.fileName_property .doc-property .doc-readonly}

Type: `string`

Gets the filename provided during stream object initialization.

---

**Methods**

---

### constructor() {: #infinity.stream.constructor_function .doc-function}

Lets you create an INFINITY.JS stream object instance with input/output to a file with the possibility of specifying whether the file should be deleted automatically after object destruction.

Signature:
```typescript
constructor( fileName: string, fileMode: infinity.fileMode, autoDelete?: boolean )
```

Parameters:

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should be used

- fileMode: `infinity.fileMode`
  >the mode for opening or creating the file according to [infinity.fileMode](infinity.fileMode.md)

- autoDelete: `boolean`, optional
  >specifies whether the file should be deleted automatically after object destruction


Example:

```typescript
infinity.loadModule('infinity.stream');
let fileStream = new infinity.stream(infinity.current.root + '../stream.dat', infinity.fileMode.create | infinity.fileMode.shareDenyWrite);
```

---

### constructor() {: #infinity.stream.constructor_function .doc-function}

Lets you create an INFINITY.JS stream object instance. Doesn't accept parameters.

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.stream');
let myStream = new infinity.stream();
```

---

### copyFrom() {: #infinity.stream.copyFrom_function .doc-function}

Copies the specified amount of the contents of the provided stream to the current stream. Returns the amount of bytes copied.

Signature:
```typescript
copyFrom( stream: infinity.stream, count?: number ): number
```

Parameters:

- stream: `infinity.stream`
  >the stream object to copy from

- count: `number`, optional
  >the number of bytes to copy


Return type: `number`

Example:

```typescript
myStream.copyFrom(fileStream, fileStream.size)
```

---

### free() {: #infinity.stream.free_function .doc-function}

Frees the memory previously occupied by the INFINITY.JS stream object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myStream.free();
```

---

### read() {: #infinity.stream.read_function .doc-function}

Reads and returns data from the current stream, if it was previously written to it with [write()](#infinity.stream.write_function).

Signature:
```typescript
read(): any
```

Return type: `any`

Example:

```typescript
myStream.read();
```

---

### readBoolean() {: #infinity.stream.readBoolean_function .doc-function}

Reads and returns a boolean value from current the stream, if it was previously written to it with [writeBoolean()](#infinity.stream.writeBoolean_function).

Signature:
```typescript
readBoolean(): boolean
```

Return type: `boolean`

Example:

```typescript
if( myStream.readBoolean() ){
  //..
}
```

---

### readNumber() {: #infinity.stream.readNumber_function .doc-function}

Reads and returns a number from the current stream, if it was previously written to it with [writeNumber()](#infinity.stream.writeNumber_function).

Signature:
```typescript
readNumber(): number
```

Return type: `number`

Example:

```typescript
let number = myStream.readNumber();
```

---

### readString() {: #infinity.stream.readString_function .doc-function}

Reads and returns a number from the current stream, if it was previously written to it with [writeNumber()](#infinity.stream.writeNumber_function).

Signature:
```typescript
readString( encoding?: infinity.encoding, fromBeginning?: boolean, count?: number ): string
```

Parameters:

- encoding: `infinity.encoding`, optional
  >the encoding of the string

- fromBeginning: `boolean`, optional
  >whether to start reading from the beginning of the stream

- count: `number`, optional
  >the number of bytes to read


Return type: `string`

Example:

```typescript
let string = myStream.readString();
```

---

### write() {: #infinity.stream.write_function .doc-function}

Writes the provided data to the current stream. Reading will then be possible with [read()](#infinity.stream.read_function).

Signature:
```typescript
write( value: any ): void;
```

Parameters:

- value: `any`
  >the data to be written


Example:

```typescript
myStream.write({data1: 'abc', 'code': 321, 'flag': true});
```

---

### writeBoolean() {: #infinity.stream.writeBoolean_function .doc-function}

Writes the provided a boolean value to the current stream. Reading will then be possible with [readNumber()](#infinity.stream.readNumber_function).

Signature:
```typescript
writeBoolean( value: boolean ): void
```

Parameters:

- value: `boolean`
  >the boolean value to be written


Example:

```typescript
myStream.writeBoolean(true);
```

---

### writeNumber() {: #infinity.stream.writeNumber_function .doc-function}

Writes the provided a number to the current stream. Reading will then be possible with [readNumber()](#infinity.stream.readNumber_function).

Signature:
```typescript
writeNumber( value: number ): void
```

Parameters:

- value: `number`
  >the number to be written


Example:

```typescript
myStream.writeNumber(321);
```

---

### writeString() {: #infinity.stream.writeString_function .doc-function}

Writes the provided a string to the current stream. Reading will then be possible with [readString()](#infinity.stream.readString_function).

Signature:
```typescript
writeString( value: string, encoding?: infinity.encoding, append?: boolean ): void
```

Parameters:

- value: `string`
  >the string to be written

- encoding: [`infinity.encoding`](infinity.encoding.md), optional
  >an [infinity.encoding](infinity.encoding.md) enum for the string

- append: `boolean`, optional
  >whether to append the string to previously written data or to overwrite it


Example:

```typescript
myStream.writeString('abc');
```



