# console

Provides basic console output, unit testing and time measuring functionality.

Module: none (built-in)

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [assert](#console.assert_function)
- [count](#console.count_function)
- [countReset](#console.countReset_function)
- [debug](#console.debug_function)
- [error](#console.error_function)
- [info](#console.info_function)
- [log](#console.log_function)
- [readLn](#console.readLn_function)
- [table](#console.table_function)
- [time](#console.time_function)
- [timeEnd](#console.timeEnd_function)
- [warn](#console.warn_function)
- [write](#console.write_function)
- [writeLn](#console.writeLn_function)

</div>


---

<div class="doc-heading">Functions</div>

---

## assert() {: #console.assert_function .doc-function}

Lets the execution continue if the condition results in boolean `true`. Stops execution and throws a runtime error if the condition results in boolean `false`.

Signature:
```
assert( condition: boolean ): void
```

Parameters:

- condition: `boolean`
  >variable or an expression resulting in a boolean value


Example:

```typescript
let var1 = 3;
let var2 = 4;

console.assert(var1 < var2);
//continues execution
console.assert(var1 > var2);
//throws "Error: Assertion failed: console.assert", stops execution
```

---

## count() {: #console.count_function .doc-function}

Counts up an internal counter on every function call and returns the counter value. Counters can be named through the `name` function parameter. `count()` also prints the counter name and the counter value to the console, unless `disableOutput` is set to `true`.

Signature:
```
count( name?: string, disableOutput?: boolean ): number
```

Parameters:

- name: `string`, optional
  >can serve as an identifier for differentiating between multiple counters

- disableOutput: `boolean`, optional
  >disables the console output

Return type: `number`

Example:

```typescript
console.count();
console.count();
console.count("counterName");
//prints out:
//default: 1
//default: 2
//counterName: 1
```

---

## countReset() {: #console.countReset_function .doc-function}

Resets a counter used previously with `count()`.

Signature:
```
countReset( name?: string ): void
```

Parameters:

- name: `string`, optional
  >can serve as an identifier for differentiating between multiple counters


Example:

```typescript
console.count();
console.count();
console.count('test');
console.countReset();
console.count();
//prints out:
//default: 1
//default: 2
//test: 1
//default: 1
```

---

## debug() {: #console.debug_function .doc-function}

Prints out a message to the console if MinLogLevel &leq;1 is set in infinity.ini

Signature:
```
debug( msg: any ): void
```

Parameters:

- msg: `any`
  >data to print out


Example:

```typescript
console.debug("Process finished");
```

---

## error() {: #console.error_function .doc-function}

Prints out a message to the console if MinLogLevel &leq;3 is set in infinity.ini

Signature:
```
error( msg: any ): void
```

Parameters:

- msg: `any`
  >data to print out


Example:

```typescript
console.error("Process failed");
```

---

## info() {: #console.info_function .doc-function}

Prints out a message to the console if MinLogLevel &leq;1 is set in infinity.ini.

Signature:
```
info( msg: any ): void
```

Parameters:

- msg: `any`
  >data to print out


Example:

```typescript
console.info("Process running");
```

---

## log() {: #console.log_function .doc-function}

Prints out a message to the console if MinLogLevel 0 is set in infinity.ini

Signature:
```
log( msg: any ): void
```

Parameters:

- msg: `any`
  >data to print out


Example:

```typescript
console.log("Process started");
```


---

## readLn() {: #console.readLn_function .doc-function}

Halts the script execution and awaits user input. Returns the user input after the `enter` button is pressed.

Signature:
```
readLn(): string;
```

Example:

```typescript
let input = console.readLn();
```


---

## table() {: #console.table_function .doc-function}

Prints out an ASCII-formatted table containing the passed data to the console.

Signature:
```
table( data: Array<any> ): void
```

Parameters:

- data: `Array<any>`
  >data to format. Every 1st-level array value adds a line. Values in multidimensional arrays add corresponding columns.


Example:

```typescript
console.table(["Data1", ["Data2", "Data3"], "Data4"]);
//prints out:
// | (index) | 0     | 1     |
// +---------+-------+-------+
// | 0       | Data1 |
// | 1       | Data2 | Data3 |
// | 2       | Data4 |
```

---

## time() {: #console.time_function .doc-function}

Starts a timer, measuring execution time since the function call. Timers can be named through the `name` function parameter. See [`timeEnd()`](#console.timeEnd_function) for further information.

Signature:
```
time( name?: string ): void
```

Parameters:

- name: `string`, optional
  >can serve as an identifier for differentiating between multiple timers

Example:

```typescript
console.time();
infinity.sleep(500);
console.timeEnd();
//default: 0,50797710s
```

---

## timeSince() {: #console.timeSince_function .doc-function}

Returns the measured time in nanoseconds since the call of [`time()`](#console.time_function). `timeSince()` also prints the timer name and the measured time to the console, unless `disableOutput` is set to `true`.

Signature:
```
timeSince( name?: string, disableOutput?: boolean ): number
```

Parameters:

- name: `string`, optional
  >can serve as an identifier for differentiating between multiple timers

- disableOutput: `boolean`, optional
  >disables the console output

Return type: `number`

Example:

```typescript
console.time();
infinity.sleep(500);
console.timeSince();
//default: 0,50797710s
```

---

## timeEnd() {: #console.timeEnd_function .doc-function}

Terminates the time measuring for the corresponding timer and returns the measured time in nanoseconds since the call of [`time()`](#console.time_function). `timeEnd()` also prints the timer name and the measured time to the console, unless `disableOutput` is set to `true`.

Signature:
```
timeEnd( name?: string, disableOutput?: boolean ): number
```

Parameters:

- name: `string`, optional
  >can serve as an identifier for differentiating between multiple timers

- disableOutput: `boolean`, optional
  >disables the console output

Return type: `number`

Example:

```typescript
console.time();
infinity.sleep(500);
console.timeEnd();
//default: 0,50797710s
```

---

## warn() {: #console.warn_function .doc-function}

Prints out a message to the console if MinLogLevel &leq;2 is set in infinity.ini

Signature:
```
warn( msg: any ): void
```

Parameters:

- msg: `any`
  >data to print out


Example:

```typescript
console.warn("Process ending");
```


---

## write() {: #console.write_function .doc-function}

Writes the given string to the console.

Signature:
```
write(output: string): void;
```

Parameters:

- output: `string`
  >the string to be written to the console

Example:

```typescript
console.write('Test');
console.write('Test');
//TestTest
```

---

## writeLn() {: #console.writeLn_function .doc-function}

Writes the given string to the console and starts a new line.

Signature:
```
writeLn(output: string): void;
```

Parameters:

- output: `string`
  >the string to be written to the console

Example:

```typescript
console.writeLn('Test');
console.writeLn('Test');
//Test
//Test
```

