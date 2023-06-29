# infinity.iniFile

Provides functionality for reading and writing structured `.ini` files.

Attention: `.ini` files must use the ANSI (windows1252) charset in order to be read and written by these functions.

Module: `infinity.iniFile`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [iniFile](#infinity.iniFile_class)

<div class="doc-toc-heading">Interfaces:</div>

- [stringArray](#infinity.iniFile.stringArray_interface)
- [valueArray](#infinity.iniFile.valueArray_interface)

</div>


Example:

```typescript
infinity.loadModule('infinity.iniFile');

let myIniFile = new infinity.iniFile('../test.ini');
try
{
myIniFile.writeFloat('testSection', 'testSetting', 1.1);
myIniFile.writeBoolean('testSection', 'testConfig', true);
myIniFile.writeString('plusSection', 'plusSetting', 'c:/tmp/');


if(myIniFile.sectionExists('testSection')){
    
    console.debug(myIniFile.readSection('testSection'));
    //["testSetting","testConfig"]

    console.debug(myIniFile.readSectionValues('testSection'));
    //[{"name":"testSetting","value":"1.1"},{"name":"testConfig","value":"1"}]

    console.debug(myIniFile.readFloat('testSection', 'testSetting', 2.2));
    //1.1

    console.debug(myIniFile.readBoolean('testSection', 'testSetting', false ));
    //false
    
    console.debug(myIniFile.readInteger('testSection', 'testConfig', 2));
    //1

    console.debug(myIniFile.readString('plusSection', 'plusSetting', 'D:/'));
    //c:/tmp/
    
    myIniFile.eraseSection('testSection');
} 

console.debug(myIniFile.readSections());
//["plusSection"]

} finally {
  myIniFile.free();
}

```

---

<div class="doc-heading">Classes</div>

---

## iniFile {: #infinity.iniFile_class .doc-class}

The class for operations with ini files.

<div class="doc-toc" markdown="1">

**Methods:**

- [constructor()](#infinity.iniFile.constructor_function)
- [deleteKey()](#infinity.iniFile.deleteKey_function)
- [eraseSection()](#infinity.iniFile.eraseSection_function)
- [free()](#infinity.iniFile.free_function)
- [readBoolean()](#infinity.iniFile.readBoolean_function)
- [readFloat()](#infinity.iniFile.readFloat_function)
- [readInteger()](#infinity.iniFile.readInteger_function)
- [readInt64()](#infinity.iniFile.readInt64_function)
- [readSection()](#infinity.iniFile.readSection_function)
- [readSectionValues()](#infinity.iniFile.readSectionValues_function)
- [readSections()](#infinity.iniFile.readSections_function)
- [readString()](#infinity.iniFile.readString_function)
- [sectionExists()](#infinity.iniFile.sectionExists_function)
- [updateFile()](#infinity.iniFile.updateFile_function)
- [valueExists()](#infinity.iniFile.valueExists_function)
- [writeBoolean()](#infinity.iniFile.writeBoolean_function)
- [writeFloat()](#infinity.iniFile.writeFloat_function)
- [writeInteger()](#infinity.iniFile.writeInteger_function)
- [writeInt64()](#infinity.iniFile.writeInt64_function)
- [writeString()](#infinity.iniFile.writeString_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.iniFile');
let myIniFile = new infinity.iniFile(fileName);
```

---

**Methods**

---

### constructor() {: #infinity.iniFile.constructor_function .doc-function}

Lets you create an INFINITY.JS ini-file object instance. 

Signature:
```typescript
constructor( fileName: string, encoding?: infinity.encoding )
```

Parameters:

- fileName: `string`
  >the name of the ini-file
- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >the encoding of the file contents


Example:

```typescript
infinity.loadModule('infinity.iniFile');
let myIniFile = new infinity.iniFile('../test.ini');
```

---

### deleteKey() {: #infinity.iniFile.deleteKey_function .doc-function}

Deletes an entry with its value from the opened ini-file.

Signature:
```typescript
deleteKey( section: string, ident: string ): void
```

Parameters:

- section: `string`
  >the ini-file section to delete an entry from

- ident: `string`
  >the key of the entry to be deleted


Example:

```typescript
myIniFile.deleteKey('testSection', 'testSetting');
```

---

### eraseSection() {: #infinity.iniFile.eraseSection_function .doc-function}

Erases a whole section from the opened ini-file.

Signature:
```typescript
eraseSection( section: string ): void
```

Parameters:

- section: `string`
  >the section to be erased


Example:

```typescript
myIniFile.eraseSection('testSection');
```

---

### free() {: #infinity.iniFile.free_function .doc-function}

Frees up memory occupied by the ini-file object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myIniFile.free();
```

---

### readBoolean() {: #infinity.iniFile.readBoolean_function .doc-function}

Reads a value out of the specified section and key from the opened ini-file and, if possible, returns it as a boolean, otherwise the default value is returned. 

Signature:
```typescript
readBoolean( section: string, ident: string, defaultValue: boolean ): boolean
```

Parameters:

- section: `string`
  >the section to read from

- ident: `string`
  >the key to be read from

- defaultValue: `boolean`
  >the default value to return in case of the read value being blank or of another type


Return type: `boolean`

Example:

```typescript
myIniFile.readBoolean('testSection', 'testSetting', true );
```

---

### readFloat() {: #infinity.iniFile.readFloat_function .doc-function}

Reads a value out of the specified section and key from the opened ini-file and, if possible, returns it as a float number, otherwise the default value is returned.


Signature:
```typescript
readFloat( section: string, ident: string, defaultValue: number ): number
```

Parameters:

- section: `string`
  >the section to read from

- ident: `string`
  >the key to be read from

- defaultValue: `number`
  >the default value to return in case of the read value being blank or of another type


Return type: `number`

Example:

```typescript
myIniFile.readFloat('testSection', 'testSetting', 1.1);
```

---

### readInteger() {: #infinity.iniFile.readInteger_function .doc-function}

Reads a value (up to 32 bits) out of the specified section and key from the opened ini-file and, if possible, returns it as an integer number, otherwise the default value is returned. 


Signature:
```typescript
readInteger( section: string, ident: string, defaultValue: number ): number
```

Parameters:

- section: `string`
  >the section to read from

- ident: `string`
  >the key to be read from

- defaultValue: `number`
  >the default value to return in case of the read value being blank or of another type


Return type: `number`

Example:

```typescript
myIniFile.readInteger('testSection', 'testSetting', 3);
```

---

### readInt64() {: #infinity.iniFile.readInt64_function .doc-function}

Reads a value (up to 64 bits) out of the specified section and key from the opened ini-file and, if possible, returns it as an integer number, otherwise the default value is returned. 


Signature:
```typescript
readInt64( section: string, ident: string, defaultValue: number ): number
```

Parameters:

- section: `string`
  >the section to read from

- ident: `string`
  >the key to be read from

- defaultValue: `number`
  >the default value to return in case of the read value being blank or of another type


Return type: `number`

Example:

```typescript
myIniFile.readInt64('testSection', 'testSetting', 5147483647);
```

---

### readSection() {: #infinity.iniFile.readSection_function .doc-function}

Returns an array with the names of the setting keys of the specified section.

Signature:
```typescript
readSection( section: string ): infinity.iniFile.stringArray
```

Parameters:

- section: `string`
  >the section to read from


Return type: [`infinity.iniFile.stringArray`](#infinity.iniFile.stringArray_interface)

Example:

```typescript
myIniFile.readSection('testSection');
```

---

### readSectionValues() {: #infinity.iniFile.readSectionValues_function .doc-function}

Returns an array with the section's key names and values.

Signature:
```typescript
readSectionValues( section: string ): infinity.iniFile.valueArray
```

Parameters:

- section: `string`
  >the section to read from


Return type: [`infinity.iniFile.valueArray`](#infinity.iniFile.valueArray_interface)

Example:

```typescript
myIniFile.readSectionValues('testSection');
```

---

### readSections() {: #infinity.iniFile.readSections_function .doc-function}

Returns an array of the sections present in the opened ini-file.

Signature:
```typescript
readSections(): infinity.iniFile.stringArray
```

Return type: [`infinity.iniFile.stringArray`](#infinity.iniFile.stringArray_interface)

Example:

```typescript
myIniFile.readSections();
```

---

### readString() {: #infinity.iniFile.readString_function .doc-function}

Reads a value out of the opened ini-file and returns it as a string. 

Signature:
```typescript
readString( section: string, ident: string, defaultValue: string ): string
```

Parameters:

- section: `string`
  >the section to read from

- ident: `string`
  >the key to be read from

- defaultValue: `string`
  >the default value to return in case of the read value being blank or of another type


Return type: `string`

Example:

```typescript
myIniFile.readString('testSection', 'testSetting', 'c:/tmp/');
```

---

### sectionExists() {: #infinity.iniFile.sectionExists_function .doc-function}

Specifies whether the given section exists inside the opened ini-file.

Signature:
```typescript
sectionExists( section: string ): boolean
```

Parameters:

- section: `string`
  >the section to check for.


Return type: `boolean`

Example:

```typescript
if(myIniFile.sectionExists('testSection')){
  //...
}
```

---

### updateFile() {: #infinity.iniFile.updateFile_function .doc-function}

Flushes the actual state of the file to storage.

Signature:
```typescript
updateFile(): void
```

Example:

```typescript
myIniFile.updateFile();
```

---

### valueExists() {: #infinity.iniFile.valueExists_function .doc-function}

Specifies whether the given value exists at the specified key and section inside the opened ini-file in the.

Signature:
```typescript
valueExists( section: string, ident: string ): boolean
```

Parameters:

- section: `string`
  >the section to check in

- ident: `string`
  >the key to be read from


Return type: `boolean`

Example:

```typescript
myIniFile.valueExists('testSection', 'testSetting');
```

---

### writeBoolean() {: #infinity.iniFile.writeBoolean_function .doc-function}

Writes the given boolean value to the specified key and section of the opened ini-file. 

Signature:
```typescript
writeBoolean( section: string, ident: string, value: boolean ): void
```

Parameters:

- section: `string`
  >the section to write to

- ident: `string`
  >the key to write to

- value: `boolean`
  >the value to write


Example:

```typescript
myIniFile.writeBoolean('testSection', 'testConfig', true);
```

---

### writeFloat() {: #infinity.iniFile.writeFloat_function .doc-function}

Writes the given float value to the specified key and section of the opened ini-file.  

Signature:
```typescript
writeFloat( section: string, ident: string, value: number ): void
```

Parameters:

- section: `string`
  >the section to write to

- ident: `string`
  >the key to write to

- value: `number`
  >the value to write


Example:

```typescript
myIniFile.writeFloat('testSection', 'testSetting', 1.1);
```

---

### writeInteger() {: #infinity.iniFile.writeInteger_function .doc-function}

Writes the given integer value (up to 32 bits) to the specified key and section of the opened ini-file. 

Signature:
```typescript
writeInteger( section: string, ident: string, value: number ): void
```

Parameters:

- section: `string`
  >the section to write to

- ident: `string`
  >the key to write to

- value: `number`
  >the value to write


Example:

```typescript
myIniFile.writeInteger('testSection', 'testSetting', 3);
```

---

### writeInt64() {: #infinity.iniFile.writeInt64_function .doc-function}

Writes the given integer value (up to 64 bits) to the specified key and section of the opened ini-file. 

Signature:
```typescript
writeInt64( section: string, ident: string, value: number ): void
```

Parameters:

- section: `string`
  >the section to write to

- ident: `string`
  >the key to write to

- value: `number`
  >the value to write


Example:

```typescript
myIniFile.writeInt64('testSection', 'testSetting', 5147483647);
```

---

### writeString() {: #infinity.iniFile.writeString_function .doc-function}

Writes the given string value to the specified key and section of the opened ini-file. 

Signature:
```typescript
writeString( section: string, ident: string, value: string ): void
```

Parameters:

- section: `string`
  >the section to write to

- ident: `string`
  >the key to write to

- value: `string`
  >the value to write


Example:

```typescript
myIniFile.writeString('plusSection', 'plusSetting', 'c:/tmp/');
```



---

<div class="doc-heading">Interfaces</div>

---

## stringArray {: #infinity.iniFile.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array of strings.

---

## valueArray {: #infinity.iniFile.valueArray_interface .doc-interface}

Extends: `Array<{name: string, value: string}>`

An array of keys and values.



