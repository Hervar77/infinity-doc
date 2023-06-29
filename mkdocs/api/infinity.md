# infinity

Provides system-level information and functionality as well as script inclusion, module loading, process delaying and error reporting possibilities.

Module: none (built-in)

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [stringArray](#infinity.stringArray_interface)

<div class="doc-toc-heading">Properties:</div>

- [nullTimestamp](#infinity.nullTimestamp_property)
- [terminated](#infinity.terminated_property)
- [threadTerminated](#infinity.threadTerminated_property)

<div class="doc-toc-heading">Functions:</div>

- [beep](#infinity.beep_function)
- [gc](#infinity.gc_function)
- [getArgs](#infinity.getArgs_function)
- [getGlobal](#infinity.getGlobal_function)
- [include](#infinity.include_function)
- [loadModule](#infinity.loadModule_function)
- [sendSentryEvent](#infinity.sendSentryEvent_function)
- [sleep](#infinity.sleep_function)
- [terminate](#infinity.terminate_function)

</div>

---

<div class="doc-heading">Interfaces</div>

---

## stringArray {: #infinity.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array of strings.



---

<div class="doc-heading">Functions</div>

---

## beep() {: #infinity.beep_function .doc-function}

Plays a notifying system sound.

Signature:
```
beep(): void
```

Example:

```typescript
infinity.beep();
```

---

## gc() {: #infinity.gc_function .doc-function}

Triggers the garbage collector.

Signature:
```
gc(): void
```

Example:

```typescript
infinity.gc();
```

---

## getArgs() {: #infinity.getArgs_function .doc-function}

Returns the arguments, which the INFINITY.JS executable file has been started with.

Signature:
```
getArgs(): stringArray
```

Return type: `stringArray`

Example:

```typescript
let x = infinity.getArgs();
```

---

## getGlobal() {: #infinity.getGlobal_function .doc-function}

Returns the value of the specified global variable.

Signature:
```
getGlobal( name: string ): any
```

Parameters:

- name: `string`
  >the name of the global variable


Return type: `any`

Example:

```typescript
let value = infinity.getGlobal(name);
```

---

## include() {: #infinity.include_function .doc-function}

Includes the specified script file and executes its contents at the position `include()` has been called.

Signature:
```
include( fileName: string ): void
```

Parameters:

- fileName: `string`
  >the name of the file to be included. The position is automatically assumed at the `js` - output folder inside the project folder. Keep in mind that output - files with the ending `.js` should be referenced. 


Example:

```typescript
infinity.include('includeTest.js');
```

---

## loadModule() {: #infinity.loadModule_function .doc-function}

Loads the specified INFINITY.JS module, making its functionality usable for the current process.

Signature:
```
loadModule( moduleName: string ): void
```

Parameters:

- moduleName: `string`
  >the identifier of the module to be loaded


Example:

```typescript
infinity.loadModule(moduleName);
```

---

## sendSentryEvent() {: #infinity.sendSentryEvent_function .doc-function}

INFINITY.JS supports error reporting to the remote error monitoring service [sentry.io](https://sentry.io/){:target="_blank"}. Settings like the `DSN` as well as the  `HandleNativeExceptions`, `HandleRuntimeExceptions` and `HandleScriptExceptions` flags have to be placed inside the [Sentry] - block of your `.ini` configuration file in the folder containing the used INFINITY.JS executable file.

Signature:
```
sendSentryEvent( message: string, level?: string, processInfo?: boolean ): void
```

Parameters:

- message: `string`
  >the error message to be sent to `sentry.io`

- level: `string`, optional
  >the error level on the occurance of which the message should be sent

- processInfo: `boolean`, optional
  >specifies whether additional technical debug data should be sent with the message


Example:

```typescript
infinity.sendSentryEvent('Error 123');
```

ini-file:

```
[Sentry]
HandleNativeExceptions=0
HandleRuntimeExceptions=0
HandleScriptExceptions=0
DSN="https://public@sentry.example.com/1"
```

---

## sleep() {: #infinity.sleep_function .doc-function}

Delays the further execution of the current INFINITY.JS process for the specified amount of milliseconds. 

Signature:
```
sleep( milliSeconds: number ): void
```

Parameters:

- milliSeconds: `number`
  >the amount of milliseconds for the delay


Example:

```typescript
infinity.sleep(1000);
//a 1-second delay
```

---

## terminate() {: #infinity.terminate_function .doc-function}

Sets the `infinity.terminated` property for the running INFINITY.JS instance to true. This way, the message for process termination can be sent throughout multiple threads. Through corresponding checks, the actual termination of the process can be carried out.

Signature:
```
terminate(): void
```

Example:

```typescript
console.debug(infinity.terminated);//false
infinity.terminate();
console.debug(infinity.terminated);//true
```



---

<div class="doc-heading">Properties</div>

---

## terminated {: #infinity.terminated_property .doc-property}

Type: `boolean`

Indicates whether the `infinity.terminate()` has been called.


---

## threadTerminated {: #infinity.threadTerminated_property .doc-property}

Type: `boolean`

Indicates whether the thread has been terminated. This value only has meaning inside a script that is executed as a thread.
Inside a thread, make sure that you check this value in your thread's main loop and let your thread terminate gracefully when the value is `true`.


