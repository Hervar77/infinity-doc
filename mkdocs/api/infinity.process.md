# infinity.process

Module: `infinity.process`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [result](#infinity.process.result_interface)

<div class="doc-toc-heading">Functions:</div>

- [correctCmdLineParam](#infinity.process.correctCmdLineParam_function)
- [exists](#infinity.process.exists_function)
- [kill](#infinity.process.kill_function)
- [start](#infinity.process.start_function)
- [waitFor](#infinity.process.waitFor_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.process')

infinity.process.start('C:/Program Files/Internet Explorer/iexplore.exe', 'https://localhost');
infinity.sleep(3000);
console.debug(infinity.process.kill('iexplore.exe'));
```

---

<div class="doc-heading">Interfaces</div>

---

## result {: #infinity.process.result_interface .doc-interface}

An object according to this interface is being returned by the [`start`](#infinity.process.start_function) function.

<div class="doc-toc" markdown="1">

**Properties:**

- [error](#infinity.process.result.error_property)
- [exitCode](#infinity.process.result.exitCode_property)
- [output](#infinity.process.result.output_property)
- [success](#infinity.process.result.success_property)

</div>

---

**Properties**

---

### error {: #infinity.process.result.error_property .doc-property}

Type: `string`

Indicates whether an error occured while starting a process.

---

### exitCode {: #infinity.process.result.exitCode_property .doc-property}

Type: `number`

Gets the exit code of the previously started process.

---

### output {: #infinity.process.result.output_property .doc-property}

Type: `string`

Gets the output of the previously started process.

---

### success {: #infinity.process.result.success_property .doc-property}

Type: `boolean`

Indicates whether the starting of a process has succeeded.



---

<div class="doc-heading">Functions</div>

---

## correctCmdLineParam() {: #infinity.process.correctCmdLineParam_function .doc-function}

Quotes the string if necessary to ensure that it is interpreted as a single command line parameter (e.g. by enclosing it in quotes if it contains spaces).

Signature:
```
correctCmdLineParam( param: string ): string
```

Parameters:

- param: `string`
  >the string to be corrected


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.process');
let s = infinity.process.correctCmdLineParam(param);
```

---

## exists() {: #infinity.process.exists_function .doc-function}

Specifies, whether there is a process with the provided name running in the moment of the function call.

Signature:
```
exists( processName: string ): boolean
```

Parameters:

- processName: `string`
  >the process name to check for


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.process');
if ( infinity.process.exists('iexplore.exe') ) {
  //...
}
```

---

## kill() {: #infinity.process.kill_function .doc-function}

Attempts to kill the process with the specified name.

Signature:
```
kill( processName: string ): boolean
```

Parameters:

- processName: `string`
  >the name of the process to kill


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.process');
if ( infinity.process.kill('iexplore.exe') ) {
  //...
}
```

---

## start() {: #infinity.process.start_function .doc-function}

Launches the specified executable file as a process with optionally provided parameters. Returns an object with result information according to the [`infinity.process.result`](#infinity.process.result_interface) interface.

Signature:
```
start( fileName: string, params?: string, waitfor?: boolean, timeout?: number ): infinity.process.result
```

Parameters:

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the executable file which should be launched

- params: `string`, optional
  >command line-like parameters which should be provided to the started process

- waitfor: `boolean`, optional
  >specifies whether the function should wait for the launched process to complete or be killed, before returning its results

- timeout: `number`, optional
  >specifies how long the waiting for the process to complete should last


Return type: [`infinity.process.result`](#infinity.process.result_interface)

Example:

```typescript
infinity.loadModule('infinity.process');
let resultObject = infinity.process.start('C:/Program Files/Internet Explorer/iexplore.exe', 'https://localhost');
```

---

## waitFor() {: #infinity.process.waitFor_function .doc-function}

Waits for the given process to finish or terminate. Script execution is paused until the process has terminated or the specified number of seconds has passed.

Signature:
```
waitFor( processName: string, waitFor: number ): boolean
```

Parameters:

- processName: `string`
  >the name of the process to wait for

- waitFor: `number`
  >number of seconds to wait for the process to finish or terminate (attention: this parameter is a number of seconds, not milliseconds)


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.process');
if ( infinity.process.waitFor('iexplore.exe', 5000) ) {
  //...
}
```



