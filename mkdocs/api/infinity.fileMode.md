# infinity.fileMode

Provides enums for file access modes.

Module: none (built-in)

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Enums:</div>

- [fileMode](#infinity.fileMode.fileMode_enum)

</div>

---

<div class="doc-heading">Enums</div>

---

## infinity.fileMode {: #infinity.fileMode_enum .doc-enum}

Values:

- create: `65280`
  >

- read: `0`
  >Opens the file for reading only.

- write: `1`
  >Opens the file for writing only.


- readWrite: `2`
  >Opens the file for reading and writing.

- exclusive: `4`
  >Locks the file exclusively (no other processes may open the file for reading or writing).

- shareExclusive: `16`
  >Denies read and write access to all others.

- shareDenyWrite: `32`
  >Denies write access to all others.

- shareDenyNone: `64`
  >No sharing restrictions.

Example:

```typescript
let fileMode = infinity.fileMode.create;
```





