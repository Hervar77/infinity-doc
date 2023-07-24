# infinity.regEx

Provides functions for using regular expressions with extended comfort.

Module: `infinity.regEx`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [groupArray](#infinity.regEx.groupArray_interface)
- [matchArray](#infinity.regEx.matchArray_interface)
- [optionArray](#infinity.regEx.optionArray_interface)
- [stringArray](#infinity.regEx.stringArray_interface)

<div class="doc-toc-heading">Functions:</div>

- [extractList](#infinity.regEx.extractList_function)
- [match](#infinity.regEx.match_function)
- [matchList](#infinity.regEx.matchList_function)
- [replace](#infinity.regEx.replace_function)

<div class="doc-toc-heading">Enums:</div>

- [option](#infinity.regEx.option_enum)

</div>


Example:

```typescript
infinity.loadModule('infinity.regEx')

let matches = infinity.regEx.matchList('[0-9]{3}-[0-9]{4}', 'Word 123-4567 \n word', [infinity.regEx.option.multiLine]);

console.debug(matches);
//[{"groups":[{"length":8,"offset":5,"text":"123-4567"}],"length":8,"offset":5,"text":"123-4567"}]
```

---

<div class="doc-heading">Interfaces</div>

---

## groupArray {: #infinity.regEx.groupArray_interface .doc-interface}

Extends: `Array<{text: string, length: number, offset: number}>`

An array containing the match groups.

---

## matchArray {: #infinity.regEx.matchArray_interface .doc-interface}

Extends: `Array<{text: string, length: number, offset: number, groups: infinity.regEx.groupArray}>`

An array containing the matches.

---

## optionArray {: #infinity.regEx.optionArray_interface .doc-interface}

Extends: `Array<infinity.regEx.option>`

An array containing options according to the [`option`](#infinity.regEx.option_enum) enums.

---

## stringArray {: #infinity.regEx.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array of strings.



---

<div class="doc-heading">Functions</div>

---

## extractList() {: #infinity.regEx.extractList_function .doc-function}

Returns the found matches with optional replacements of the searched for string.

Signature:
```
extractList( regEx: string, subject: string, replacement: string, options?: infinity.regEx.optionArray ): infinity.regEx.stringArray
```

Parameters:

- regEx: `string`
  >The regular expression for the searched data.

- subject: `string`
  >The string inside of which the search should be performed.

- replacement: `string`
  >The replacement to be applied to each match.

- options: `infinity.regEx.optionArray`, optional
  >An array of additional options according to [`option`](#infinity.regEx.option_enum) enums.



Return type: `infinity.regEx.stringArray`

Example:

```typescript
infinity.loadModule('infinity.regEx');
let matches = infinity.regEx.extractList(regEx, subject, replacement);
```

---

## match() {: #infinity.regEx.match_function .doc-function}

Returns whether matches for the regular expression exist inside the provided subject.

Signature:
```
match( regEx: string, subject: string, options?: infinity.regEx.optionArray ): boolean
```

Parameters:

- regEx: `string`
  >The regular expression for the searched data.

- subject: `string`
  >The string inside of which the search should be performed.

- options: `infinity.regEx.optionArray`, optional
  >An array of additional options according to [`option`](#infinity.regEx.option_enum) enums.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.regEx');
if ( infinity.regEx.match('[0-9]{3}-[0-9]{4}', 'Word 123-4567 word') ) {
  //...
}
```

---

## matchList() {: #infinity.regEx.matchList_function .doc-function}

Returns a list of matches out of the provided string according to the given regular expression.

Signature:
```
matchList( regEx: string, subject: string, options?: infinity.regEx.optionArray ): matchArray
```

Parameters:

- regEx: `string`
  >The regular expression for the searched data.

- subject: `string`
  >The string inside of which the search should be performed.

- options: `infinity.regEx.optionArray`, optional
  >An array of additional options according to [`option`](#infinity.regEx.option_enum) enums.


Return type: `matchArray`

Example:

```typescript
infinity.loadModule('infinity.regEx')

let matches = infinity.regEx.matchList('[0-9]{3}-[0-9]{4}', 'Word 123-4567 \n word', [infinity.regEx.option.multiLine]);
```

---

## replace() {: #infinity.regEx.replace_function .doc-function}

Returns the provided string with replaced data according to the regular expression and replacement string.

Signature:
```
replace( regEx: string, subject: string, replacement: string, options?: infinity.regEx.optionArray ): string
```

Parameters:

- regEx: `string`
  >The regular expression for the searched data.

- subject: `string`
  >The string inside of which the search should be performed.

- replacement: `string`
  >The replacement data to put instead of the found data.

- options: `infinity.regEx.optionArray`, optional
  >An array of additional options according to [`option`](#infinity.regEx.option_enum) enums.



Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.regEx')

let matches = infinity.regEx.replace('[0-9]', 'Word 123-4567 word', "x");

console.debug(matches);
//Word xxx-xxxx word

```



---

<div class="doc-heading">Enums</div>

---

## infinity.regEx.option {: #infinity.regEx.option_enum .doc-enum}

Values:

- caseLess: `0`
  >Stands for a case insensitive search.

- multiLine: `1`
  >Stands for a search over multiple lines.

- singleLine: `2`
  >Causes the regular expression to treat the input string as if it consists of a single line.

- extended: `3`
  >Specifies, whether the extended regular expression syntax should be recognized.

- anchored: `4`
  >For a search that considers whether the first searched character is located at the start of the search subject and the last search character is located at the end of the search subject.

- unGreedy: `5`
  >Stands for a lazy search that returns with as few contents as needed to be a match, as opposed to a greedy search which tries to capture as much content as possible.

- noAutoCapture: `6`
  >To suppress automatic captures (groups in parentheses will not be mapped to `$1, $2, ...`).

Example:

```typescript
infinity.loadModule('infinity.regEx');
let option = infinity.regEx.option.caseLess;
```





