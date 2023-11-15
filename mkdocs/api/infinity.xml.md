# infinity.xml

Provides XML data parsing and stringifying functionality.

Module: `infinity.xml`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [parse](#infinity.xml.parse_function)
- [stringify](#infinity.xml.stringify_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.xml');

let xmlData = '<note><to>Venus</to><from>Mars</from><heading>Message</heading><body>Line up!</body></note>';

let parsedData = infinity.xml.parse(xmlData);
console.debug(parsedData);
//{"note":{"body":"Line up!","from":"Mars","heading":"Message","to":"Venus"}}

let stringified = infinity.xml.stringify(parsedData);
console.debug(stringified);
//<?xml version="1.0" encoding="UTF-8" standalone="yes"?><note><body>Line up!</body><from>Mars</from><heading>Message</heading><to>Venus</to></note>
```

---

<div class="doc-heading">Functions</div>

---

## parse() {: #infinity.xml.parse_function .doc-function}

Attempts to parse the given string according to the XML-format and returns the results.

Signature:
```
parse( value: string, normalize?: boolean, strict?: boolean ): any
```

Parameters:

- value: `string`
  >The string to parse.

- normalize: `boolean`, optional
  >Whether to apply normalization.

- strict: `boolean`, optional
  >Whether to operate in strict mode.


Return type: `any`

Example:

```typescript
infinity.loadModule('infinity.xml');
let parsedData = infinity.xml.parse(xmlData);
```

---

## stringify() {: #infinity.xml.stringify_function .doc-function}

Serializes the given data according to the XML-format and returns the results.

Signature:
```
stringify( value: any, omitHeader?: boolean ): string
```

Parameters:

- value: `any`
  >The data to process.

- omitHeader: `boolean`
  >If set true, then the xml header is omitted in the returned result.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.xml');
let xmlData = infinity.xml.stringify(dataToStringify);
```



