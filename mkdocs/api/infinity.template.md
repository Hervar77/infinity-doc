# infinity.template

Provides extended HTML templating functionality with variables, conditional execution, and loops by using a special syntax and tag names.

Module: `infinity.template`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [template](#infinity.template_class)

</div>


Example:

main.ts:
```typescript
infinity.loadModule('infinity.http');

let myServer = new infinity.http.server(false, false, false, false, 80, 1024, 64, 104857600, 5.0);

myServer.registerHandler(infinity.http.server.handler.custom, '/', '/custom.js');

myServer.start();

while (!infinity.terminated) {
  infinity.event.processQueue();
  infinity.sleep(25);
}

myServer.stop();
```


custom.ts:
```typescript
infinity.loadModule('infinity.template');

let myTemplate = new infinity.template(infinity.current.root + '../templates/');

myTemplate.loadFromFile('index.html');

myTemplate.vars['content'] = 'Loaded variable content';
myTemplate.vars['muchdata'] = ['Data1', 'Data2', 'Data3'];
myTemplate.vars['muchinfo'] = [{title:'Title1', key:'Info1'}, {title:'Title2', key:'Info2'}, {title:'Title3', key:'Info3'}];

infinity.http.response.contentText = myTemplate.render();
```


index.html:
```html
<html>
<head>
<title>INFINITY.JS Template</title>
</head>
<body>
<if:write if:set-content="vars['content']">Default content</if:write>


<if:if if:condition="vars['muchdata'] && Array.isArray(vars['muchdata'])">
  <ul>
    <if:loop if:items="vars['muchdata']" if:element="item" if:info="info">
      <li>
        <if:write if:set-content="item">Default Data</if:write>
      </li>
    </if:loop>
  </ul>
</if:if>

<if:if if:condition="vars['muchinfo'] && Array.isArray(vars['muchinfo'])">
  <table border="1" cellspacing="0">
    <if:loop if:items="vars['muchinfo']" if:element="item" if:info="info">
      <tr>
        <td>
          <if:write if:set-content="item['title']">Default Title</if:write>
        </td>
        <td>
          <if:write if:set-content="item['key']">Default Info</if:write>
        </td>
      </tr>
    </if:loop>
  </table>
</if:if>

</body>
</html>
```

Folder structure:
```
+ example
  + ts
    - main.ts
    - custom.ts
  + templates
    - index.html
```

---

<div class="doc-heading">Classes</div>

---

## template {: #infinity.template_class .doc-class}

The class for operating with HTML templates in INFINITY.JS.

<div class="doc-toc" markdown="1">

**Properties:**

- [caching](#infinity.template.caching_property)
- [debug](#infinity.template.debug_property)
- [expire](#infinity.template.expire_property)
- [vars](#infinity.template.vars_property)
- [documentRoot](#infinity.template.documentRoot_property)

**Methods:**

- [constructor()](#infinity.template.constructor_function)
- [clear()](#infinity.template.clear_function)
- [free()](#infinity.template.free_function)
- [invalidate()](#infinity.template.invalidate_function)
- [isCached()](#infinity.template.isCached_function)
- [loadFromFile()](#infinity.template.loadFromFile_function)
- [loadFromStream()](#infinity.template.loadFromStream_function)
- [render()](#infinity.template.render_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.template');
let myTemplate = new infinity.template(documentRoot);
```

---

**Properties**

---

### caching {: #infinity.template.caching_property .doc-property}

Type: `boolean`

Specifies whether template caching should be used.

---

### debug {: #infinity.template.debug_property .doc-property}

Type: `boolean`

Prints out the template file content directly to the output

---

### expire {: #infinity.template.expire_property .doc-property}

Type: `number`

Gets or sets the cache expiration time in seconds.

---

### html {: #infinity.template.html_property .doc-property}

Type: `object`

Holds the compiled HTML output of a template.

---

### vars {: #infinity.template.vars_property .doc-property}

Type: `object`

This property acts as a global array across templates. It can be filled with data and used for output throughout the templates.

---

### documentRoot {: #infinity.template.documentRoot_property .doc-property .doc-readonly}

Type: `string`

Gets the path to the root folder for the template files.

---

**Methods**

---

### constructor() {: #infinity.template.constructor_function .doc-function}

Lets you create an INFINITY.JS template object instance.

Signature:
```typescript
constructor( documentRoot: string )
```

Parameters:

- documentRoot: `string`
  >The path to the root folder for the template files.


Example:

```typescript
infinity.loadModule('infinity.template');
let myTemplate = new infinity.template(infinity.current.root + '../templates/');
```

---

### clear() {: #infinity.template.clear_function .doc-function}

Clears the current loaded template from memory.

Signature:
```typescript
clear(): void
```

Example:

```typescript
myTemplate.clear();
```

---

### free() {: #infinity.template.free_function .doc-function}

Frees the memory previously occupied by the template object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myTemplate.free();
```

---

### invalidate() {: #infinity.template.invalidate_function .doc-function}

Clears the template cache for the specified template.

Signature:
```typescript
invalidate( templateName: string ): void
```

Parameters:

- templateName: `string`
  >The templateName which should be invalidated inside the cache.



Example:

```typescript
myTemplate.invalidate('index.html');
```

---

### isCached() {: #infinity.template.isCached_function .doc-function}

Reports whether there is a cached template for the specified script.

Signature:
```typescript
isCached( templateName: string ): boolean
```

Parameters:

- templateName: `string`
  >The script for which the template cache should be checked.


Return type: `boolean`

Example:

```typescript
myTemplate.isCached('index.html');
```

---

### loadFromFile() {: #infinity.template.loadFromFile_function .doc-function}

Loads a template from the specified file into memory.

Signature:
```typescript
loadFromFile( templateName: string ): boolean
```

Parameters:

- templateName: `string`
  >The templateName to be loaded.


Return type: `boolean`

Example:

```typescript
myTemplate.loadFromFile('index.html');
```

---

### loadFromStream() {: #infinity.template.loadFromStream_function .doc-function}

Loads a template from the specified stream into memory.

Signature:
```typescript
loadFromStream( stream: infinity.stream, scriptName: string ): boolean
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >The stream object to load from.

- scriptName: `string`
  >The scriptName to be loaded.


Return type: `boolean`

Example:

```typescript
myTemplate.loadFromStream(stream, scriptName);
```

---

### render() {: #infinity.template.render_function .doc-function}

Outputs the template contents to the client with its instructions carried out.

Signature:
```typescript
render(): string
```

Return type: `string`

Example:

```typescript
myTemplate.render();
```



