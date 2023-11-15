# infinity.html

Provides utilities for working with HTML content.

Module: `infinity.html`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [parser](#infinity.html.parser_class)

<div class="doc-toc-heading">Functions:</div>

- [decode](#infinity.html.decode_function)
- [encode](#infinity.html.encode_function)
- [toText](#infinity.html.toText_function)


<div class="doc-toc-heading">Interfaces:</div>

- [attributesArray](#infinity.html.parser.attributesArray_interface)

<div class="doc-toc-heading">Enums:</div>

- [partType](#infinity.html.parser.partType_enum)

</div>

---

<div class="doc-heading">Classes</div>

---

## parser {: #infinity.html.parser_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [html](#infinity.html.parser.html_property)
- [normalize](#infinity.html.parser.normalize_property)
- [strict](#infinity.html.parser.strict_property)
- [code](#infinity.html.parser.code_property)
- [curAttributes](#infinity.html.parser.curAttributes_property)
- [curContent](#infinity.html.parser.curContent_property)
- [curPartType](#infinity.html.parser.curPartType_property)
- [curPosition](#infinity.html.parser.curPosition_property)
- [curTagName](#infinity.html.parser.curTagName_property)

**Methods:**

- [constructor()](#infinity.html.parser.constructor_function)
- [clear()](#infinity.html.parser.clear_function)
- [free()](#infinity.html.parser.free_function)
- [loadFromFile()](#infinity.html.parser.loadFromFile_function)
- [loadFromStream()](#infinity.html.parser.loadFromStream_function)
- [parse()](#infinity.html.parser.parse_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.html');
let myParser = new infinity.html.parser();

// Load HTML content
myParser.html = "<div data='test'>Hello <b>world</b>!</div>";

// Parse the HTML
myParser.parse();

// Access parsed data
let tag = myParser.curTagName;
let attributes = myParser.curAttributes;
console.log(`Current Tag: ${tag}, Attributes: ${JSON.stringify(attributes)}`);
//Current Tag: div, Attributes: [{"name":"data","value":"test"}]
```

---

**Properties**

---

### html {: #infinity.html.parser.html_property .doc-property}

Type: `string`

Stores the HTML content to be parsed. This property should be set with the HTML string that needs to be processed before calling the parse() method.

---

### normalize {: #infinity.html.parser.normalize_property .doc-property}

Type: `boolean`

Specifies whether the parser should normalize the HTML content. When set to true, the parser will standardize the HTML by correcting common errors and inconsistencies, making the parsing process more reliable.

---

### strict {: #infinity.html.parser.strict_property .doc-property}

Type: `booleanreadonlytext: string`

Indicates whether the parser should operate in strict mode. In strict mode, the parser enforces more stringent HTML standards compliance, which can be useful for ensuring the quality and correctness of the HTML content.

---

### code {: #infinity.html.parser.code_property .doc-property .doc-readonly}

Type: `string`

Represents the entire HTML code currently loaded in the parser. This property is read-only and provides access to the original HTML content.

---

### curAttributes {: #infinity.html.parser.curAttributes_property .doc-property .doc-readonly}

Type: [`infinity.html.parser.attributesArray`](#infinity.html.parser.attributesArray_interface)

Holds the attributes of the current HTML element being parsed. This read-only property provides an array of attribute names and values for the current element.

---

### curContent {: #infinity.html.parser.curContent_property .doc-property .doc-readonly}

Type: `string`

Contains the inner content of the current HTML element being parsed.

---

### curPartType {: #infinity.html.parser.curPartType_property .doc-property .doc-readonly}

Type: [`infinity.html.parser.partType`](#infinity.html.parser.partType_enum)

Contains the inner content of the current HTML element being parsed. See [`partType`](#infinity.html.parser.partType_enum) for further details.

---

### curPosition {: #infinity.html.parser.curPosition_property .doc-property .doc-readonly}

Type: `string`

Indicates the current position of the parser within the HTML content.

---

### curTagName {: #infinity.html.parser.curTagName_property .doc-property .doc-readonly}

Type: `string`

Stores the name of the current HTML tag being parsed.

---

**Methods**

---

### constructor() {: #infinity.html.parser.constructor_function .doc-function}

Creates a new instance of the HTML parser.

Signature:
```typescript
constructor( html?: string )
```

Parameters:

- html: `string`, optional
  >Initial HTML content to load into the parser.


Example:

```typescript
infinity.loadModule('infinity.html');
let myParser = new infinity.html.parser('<div>Hello World</div>');
```

---

### clear() {: #infinity.html.parser.clear_function .doc-function}

Resets the parser, clearing any loaded HTML content and resetting all internal states.

Signature:
```typescript
clear(): void
```

Example:

```typescript
myParser.clear();
```

---

### free() {: #infinity.html.parser.free_function .doc-function}

Frees up resources used by the parser. This method should be called to properly dispose of the parser when it's no longer needed.

Signature:
```typescript
free(): void
```

Example:

```typescript
myParser.free();
```

---

### loadFromFile() {: #infinity.html.parser.loadFromFile_function .doc-function}

Loads HTML content from a specified file into the parser.

Signature:
```typescript
loadFromFile( fileName: string, encoding?: infinity.encoding ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to examine.

- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >Specifies the character encoding of the file.


Example:

```typescript
myParser.loadFromFile('path/to/file.html');
```

---

### loadFromStream() {: #infinity.html.parser.loadFromStream_function .doc-function}

Loads HTML content from a provided stream into the parser.

Signature:
```typescript
loadFromStream( stream: infinity.stream, encoding?: infinity.encoding, fromBeginning?: boolean ): void
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >The stream from which to read the HTML content. See [infinity.stream](infinity.stream.md)

- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >Specifies the character encoding of the stream content.

- fromBeginning: `boolean`, optional
  >If `true`, reading starts from the beginning of the stream.


Example:

```typescript
myParser.loadFromStream(stream);
```

---

### parse() {: #infinity.html.parser.parse_function .doc-function}

Parses the loaded HTML content.

Signature:
```typescript
parse(): boolean
```

Return type: `boolean`

Example:

```typescript
myParser.parse();
```



---

<div class="doc-heading">Functions</div>

---

## decode() {: #infinity.html.decode_function .doc-function}

Decodes HTML entities in a string.

Signature:
```
decode( html: string ): string
```

Parameters:

- html: `string`
  >The string containing HTML entities to decode.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.html');
let decodedHtml = infinity.html.decode('&lt;div&gt;Hello World&lt;/div&gt;');
```

---

## encode() {: #infinity.html.encode_function .doc-function}

Encodes special characters in a string into HTML entities.

Signature:
```
encode( html: string ): string
```

Parameters:

- html: `string`
  >The string to encode.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.html');
let encodedHtml = infinity.html.encode('<div>Hello World</div>');
```

---

## toText() {: #infinity.html.toText_function .doc-function}

Converts HTML content to plain text, stripping out HTML tags and entities.

Signature:
```
toText( html: string ): string
```

Parameters:

- html: `string`
  >The HTML content to convert to plain text.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.html');
let plainText = infinity.html.toText('<div>Hello <b>World</b></div>');
```


---

<div class="doc-heading">Interfaces</div>

---

## attributesArray {: #infinity.html.parser.attributesArray_interface .doc-interface}

Extends: `Array<{name: string, value: string}>`

An array structure used to store and manage HTML tag attributes. Each element of the array is an object representing a single attribute, with `name` and `value` properties.

### Properties:
- #### name
  >Type: `string`. The name of the attribute.
- #### value
  >Type: `string`. The value assigned to the attribute.


---

<div class="doc-heading">Enums</div>

---

## infinity.html.parser.partType {: #infinity.html.parser.partType_enum .doc-enum}

Values:

- emptyTag: `0`
  >Represents a self-closing tag in HTML, such as `img` or `br`.

- startTag: `1`
  >Indicates an opening HTML tag.

- endTag: `2`
  >Stands for a closing HTML tag.

- content: `3`
  >Represents the textual content within HTML tags.

- comment: `4`
  >Indicates an HTML comment.

- dtd: `5`
  >Denotes the Document Type Declaration in an HTML document.

- xmlProlog: `6`
  >Represents the XML prolog in HTML documents, often used in XHTML.

- script: `7`
  >Indicates a script tag and its content, e.g., <script>.

- style: `8`
  >Represents a style tag and its content, e.g., <style>.

Example:

```typescript
infinity.loadModule('infinity.html.parser');
let partType = infinity.html.parser.partType.emptyTag;
```





