# infinity.mimeType

Provides functionality for matching MIME-Types to file extensions and vice versa. The MIME-Types have to be configured inside the `[MimeTypes]` block of the infinity.ini file inside the folder of the used infinity executable file (refer to `infinity.default.ini` for a set of default mappings).

Module: `infinity.mimeType`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [getExtension](#infinity.mimeType.getExtension_function)
- [getMimeType](#infinity.mimeType.getMimeType_function)

</div>

```typescript
infinity.loadModule('infinity.mimeType');

let mimeType = infinity.mimeType.getMimeType('.jpg');
console.debug(mimeType);
//image/jpeg


let extension = infinity.mimeType.getExtension('text/javascript');
console.debug(extension);
//.js
```

---

<div class="doc-heading">Functions</div>

---

## getExtension() {: #infinity.mimeType.getExtension_function .doc-function}

Returns the matching file extension for the given MIME-Type.

Signature:
```
getExtension( mimeType: string ): string
```

Parameters:

- mimeType: `string`
  >the MIME-Type to be matched to a file extension


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.mimeType');

let mimeType = infinity.mimeType.getMimeType('.jpg');
console.debug(mimeType);
//application/octet-stream
```

---

## getMimeType() {: #infinity.mimeType.getMimeType_function .doc-function}

Returns the matching MIME-Type for the given file extension.

Signature:
```
getMimeType( extension: string ): string
```

Parameters:

- extension: `string`
  >the file extension to be matched to a MIME-Type


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.mimeType');

let extension = infinity.mimeType.getExtension('text/javascript');
console.debug(extension);
//.js
```



