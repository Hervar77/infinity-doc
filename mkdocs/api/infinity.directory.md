# infinity.directory

Provides directory manipulation and examination functionality.

Module: `infinity.fileSystem`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [stringArray](#infinity.directory.stringArray_interface)

<div class="doc-toc-heading">Functions:</div>

- [create](#infinity.directory.create_function)
- [exists](#infinity.directory.exists_function)
- [list](#infinity.directory.list_function)
- [move](#infinity.directory.move_function)
- [remove](#infinity.directory.remove_function)

<div class="doc-toc-heading">Enums:</div>

- [filter](#infinity.directory.filter_enum)

</div>


Example:

```typescript
infinity.loadModule('infinity.fileSystem');

if(!infinity.directory.exists('testDir')){
  
    infinity.directory.create('testDir/testDir2');
    console.debug(infinity.directory.list('testDir', '*', 0));
    //["testDir/testDir2"]

    infinity.directory.move('testDir/testDir2', 'testDir2');
    infinity.directory.remove('testDir2');
    
    console.debug(infinity.directory.list('./', '*', 0));
    //["./testDir"]
    
    infinity.directory.remove('testDir');
}
```

---

<div class="doc-heading">Interfaces</div>

---

## stringArray {: #infinity.directory.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array of strings.


---

<div class="doc-heading">Functions</div>

---

## create() {: #infinity.directory.create_function .doc-function}

Creates a directory with the specified name. Returns a boolean value according to success or failure.

Signature:
```
create( directory: string ): boolean
```

Parameters:

- directory: `string`
  >The name of the directory to be created.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
if ( infinity.directory.create(directory) ) {
  //...
}
```

---

## exists() {: #infinity.directory.exists_function .doc-function}

Indicates whether a directory with the specified name exists.

Signature:
```
exists( directory: string ): boolean
```

Parameters:

- directory: `string`
  >The name of the directory to be checked for.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
if ( infinity.directory.exists(directory) ) {
  //...
}
```

---

## list() {: #infinity.directory.list_function .doc-function}

Returns a [infinity.directory.stringArray](#infinity.directory.stringArray_interface) of contents of the specified directory. Shows only files by default but can be adjusted otherwise through the filter parameter.

Signature:
```
list( directory: string, mask?: string, filter?: infinity.directory.filter ): infinity.directory.stringArray
```

Parameters:

- directory: `string`
  >The directory to look in.

- mask: `string`, optional
  >A search mask.

- filter: [infinity.directory.filter](#infinity.directory.filter_enum), optional
  >A filter, allowing to specify the type of elements to search for, according to [infinity.directory.filter](#infinity.directory.filter_enum),.


Return type: [infinity.directory.stringArray](#infinity.directory.stringArray_interface)

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let directories = infinity.directory.list('c:/', '*',infinity.directory.filter.files | infinity.directory.filter.directories);
console.debug(directories);
```

---

## move() {: #infinity.directory.move_function .doc-function}

Moves the specified directory or its contents to the specified location.

Signature:
```
move( srcDirectory: string, dstDirectory: string ): boolean
```

Parameters:

- srcDirectory: `string`
  >The path to the source directory.

- dstDirectory: `string`
  >The path to the target directory. Will receive the contents of the source directory, unless the name of the source directory is as well specified inside this path.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
if ( infinity.directory.move('c:/tmp/toBeMoved', 'c:/tmp/toHold/toBeMoved') ) {
  //...
}
```

---

## remove() {: #infinity.directory.remove_function .doc-function}

Removes the specified directory, if it is empty.

Signature:
```
remove( directory: string, recursive?: boolean ): boolean
```

Parameters:

- directory: `string`
  >The path of the directory to remove. If the directory has contents, it will not be deleted and the function will return `false`, unless the parameter `recursive` is set to `true`.

- recursive: `boolean`, optional
  >Whether to remove the directory and all its contents, including any subdirectories and files.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
if ( infinity.directory.remove('c:/tmp/toBeDeleted/') ) {
  //...
}
```



---

<div class="doc-heading">Enums</div>

---

## infinity.directory.filter {: #infinity.directory.filter_enum .doc-enum}

Values:

- none: `0`
  >No filter (show all).

- files: `1`
  >To show only files.

- directories: `2`
  >To show only directories.

- hidden: `4`
  >To show only hidden elements.

- system: `8`
  >To show only system elements.

- readOnly: `16`
  >To show only read-only elements.

- symLink: `32`
  >To show only symbolic links.

Example:

```typescript
infinity.loadModule('infinity.fileSystem');
let filter = infinity.directory.filter.files | infinity.directory.filter.directories;
```





