# infinity.thread

Module: `infinity.thread`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [thread](#infinity.thread_class)

<div class="doc-toc-heading">Enums:</div>

- [priority](#infinity.thread.priority_enum)

</div>

INFINITY.JS engine supports multithreading. You can create threads by using the `infinity.thread` namespace.

---

<div class="doc-heading">Classes</div>

---

## thread {: #infinity.thread_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [terminated](#infinity.thread.terminated_property)

**Methods:**

- [constructor()](#infinity.thread.constructor_function)
- [start()](#infinity.thread.start_function)
- [stop()](#infinity.thread.stop_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.thread');

let thread = new infinity.thread('path/to/script.js');

thread.start();

// main program code

thread.stop();
```

This creates a thread that will execute a given javascript file in parallel to the main program. The `start()` method will start thread execution (running the `script.js` javascript file) and the `thread.stop()` method will signal the thread that it should stop. This will not interrupt the thread - it will only set the global `infinity.threadTerminated` variable in the thread's javascript runtime to `true`. This means that your thread will have to regularly check for that variable to determine, wether it should abort its execution:

```typescript
// script.ts
while (!infinity.threadTerminated) {
    // do something
}
```

Of course, your thread may also terminate on its own when it finishes execution (e.g. some expensive calculation). Calling the `stop()` method on a thread that has already terminated won't cause any negative side effects, since it only sets the `infinity.threadTerminated` variable in the thread's runtime.

> Note: The path to the script that you want to run in a thread has to be relative to the main program folder (and not to the file that creates the thread).

> Note: You do not have to load the `infinity.thread` module inside your thread script. That module is only required to start threads, not within the thread itself.

You can change the thread's priority through the constructor's second argument:

```typescript
infinity.loadModule('infinity.thread');
let thread = new infinity.thread('path/to/script.js', infinity.thread.priority.lower);
```

If you are creating a thread that only needs to perform periodically, then you might want to use the `infinity.sleep()` function inside the thread to yield execution and prevent high cpu load:

```typescript
// script.ts
while (!infinity.threadTerminated) {
    // do something
    sleep(100); // sleep 100 milliseconds
}
```

Keep in mind that the thread won't be able to terminate itself while sleeping, so if you let it sleep for 2 seconds, then it will take up to 2 seconds to terminate the thread when your main program is terminated. So it's usually good practice to keep the sleep time reasonably low within threads, so that they don't linger too long before terminating.

---

**Properties**

---

### terminated {: #infinity.thread.terminated_property .doc-property .doc-readonly}

Type: `boolean`

This value will be `true` if the thread has terminated.

---

**Methods**

---

### constructor() {: #infinity.thread.constructor_function .doc-function}

Creates a new thread. The script path needs to be relative to the main program folder. The thread can be started by calling the `start()` method, while the `stop()` method sets the thread runtime's `infinity.threadTerminated` variable to `true` indicating that the thread should terminate itself. Make sure that the scripts you run as threads check that variable, so that your program is able to terminate the threads properly when the main program terminates.

Signature:
```typescript
constructor( scriptName: string, priority?: infinity.thread.priority )
```

Parameters:

- scriptName: `string`

    Path to the script that should be run as a thread. The path needs to be relative to the main program folder.

- priority: `infinity.thread.priority`, optional

    Thread priority, one of the following constants:

    - `infinity.thread.priority.idle`
    - `infinity.thread.priority.lowest`
    - `infinity.thread.priority.lower`
    - `infinity.thread.priority.normal` (default)
    - `infinity.thread.priority.higher`
    - `infinity.thread.priority.highest`
    - `infinity.thread.priority.timeCritical`

---

### start() {: #infinity.thread.start_function .doc-function}

Starts thread execution.

Signature:
```typescript
start(): void
```

Example:

```typescript
infinity.loadModule('infinity.thread');
let thread = new infinity.thread();
thread.start();
```

---

### stop() {: #infinity.thread.stop_function .doc-function}

Notifies the thread that it should terminate itself, by setting the `infinity.threadTerminated` variable of the thread's javascript runtime to `true`. You will need to make sure that the script you are running as a thread checks this variable and terminates itself. Otherwise your main program won't be able to terminate the thread properly when it is shut down.

Signature:
```typescript
stop(): void
```

Example:

```typescript
infinity.loadModule('infinity.thread');
let thread = new infinity.thread();
thread.start();
infinity.sleep(500);
thread.stop();
```



---

<div class="doc-heading">Enums</div>

---

## infinity.thread.priority {: #infinity.thread.priority_enum .doc-enum}

Thread priority. Lower priority will result in less system load.

Values:

- idle: `0`
- lowest: `1`
- lower: `2`
- normal: `3`
- higher: `4`
- highest: `5`
- timeCritical: `6`

Example:

```typescript
infinity.loadModule('infinity.thread');
let priority = infinity.thread.priority.idle;
```





