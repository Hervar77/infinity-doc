# infinity.os

Provides information about the operating system and the processor architecture, on which the INFINITY.JS instance is being run.

Module: none (built-in)

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Properties:</div>

- [processorCount](#infinity.os.processorCount_property)
- [hostName](#infinity.os.hostName_property)
- [architecture](#infinity.os.architecture_property)
- [build](#infinity.os.build_property)
- [major](#infinity.os.major_property)
- [minor](#infinity.os.minor_property)
- [name](#infinity.os.name_property)
- [platform](#infinity.os.platform_property)

<div class="doc-toc-heading">Enums:</div>

- [architectures](#infinity.os.architectures_enum)
- [platforms](#infinity.os.platforms_enum)

</div>

---

<div class="doc-heading">Properties</div>

---

## processorCount {: #infinity.os.processorCount_property .doc-property}

Type: `number`

Gets the amount of logical processors on the current system.

---

## hostName {: #infinity.os.hostName_property .doc-property}

Type: `number`

Gets the hostname of the current operating system.

---

## architecture {: #infinity.os.architecture_property .doc-property}

Type: [`infinity.os.architectures`](#infinity.os.architectures_enum)

Gets the processor architecture identifier, which the current operating system is running on, according to [`infinity.os.architectures`](#infinity.os.architectures_enum) enums.

---

## build {: #infinity.os.build_property .doc-property}

Type: `number`

Gets the build number of the current operating system.

---

## major {: #infinity.os.major_property .doc-property}

Type: `number`

Gets the major release number of the current operating system.

---

## minor {: #infinity.os.minor_property .doc-property}

Type: `number`

Gets the minor release number of the current operating system.

---

## name {: #infinity.os.name_property .doc-property}

Type: `string`

Gets the name of the current operating system.

---

## platform {: #infinity.os.platform_property .doc-property}

Type: [`infinity.os.platforms`](#infinity.os.platform_property)

Gets the general platform identifier of the current operating system, according to [`infinity.os.platforms`](#infinity.os.platform_property) enums.



---

<div class="doc-heading">Enums</div>

---

## infinity.os.architectures {: #infinity.os.architectures_enum .doc-enum}

Values:

- intelX86: `0`
  >stands for the x86 processor architecture family

- intelX64: `1`
  >stands for the x64 processor architecture family

- arm32: `2`
  >stands for the 32-bit ARM processor architecture family

- arm64: `3`
  >stands for the 64-bit ARM processor architecture family

Example:

```typescript
infinity.loadModule('infinity.os');
let architectures = infinity.os.architectures.intelX86;
```



---

## infinity.os.platforms {: #infinity.os.platforms_enum .doc-enum}

Values:

- windows: `0`
  >stands for the Microsoft Windows operating systems platform

- macOS: `1`
  >stands for the Apple macOS operating systems platform

- iOS: `2`
  >stands for the Apple iOS operating systems platform

- android: `3`
  >stands for the Google Android operating systems platform

- winRt: `4`
  >stands for the Microsoft Windows Runtime operating systems platform

- linux: `5`
  >stands for the Linux operating systems platform

Example:

```typescript
infinity.loadModule('infinity.os');
let platforms = infinity.os.platforms.windows;
```





