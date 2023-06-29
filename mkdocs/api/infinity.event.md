# infinity.event

Provides functionality for communicating between processes by registering event handlers, sending and receiving triggers into a queue and processing it.

Module: none (built-in)

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [processQueue](#infinity.event.processQueue_function)
- [register](#infinity.event.register_function)
- [send](#infinity.event.send_function)
- [unregister](#infinity.event.unregister_function)

</div>

Example:

main.ts:
```typescript
infinity.loadModule('infinity.thread');

let thread = new infinity.thread('thread.js');
thread.start();

infinity.sleep(100);
infinity.event.send('message', 'Hello from main.js');
infinity.sleep(1000);
thread.stop();
```

thread.js:
```typescript
infinity.event.register('message', 

  function(params: any): void {
    console.debug('thread.js: Message received: ' + JSON.stringify(params));
  }

);

console.info( 'thread.js: Started' );

while (!infinity.thread.terminated) {

  infinity.sleep(100);
  console.debug('processQueue: '+infinity.event.processQueue());
}

console.info( 'thread.js: Terminated' );

```

Console output:

```shell
[I 2021-04-01 18:41:04,702] thread.js: Message received: "Hello from main.js"
```

---

<div class="doc-heading">Functions</div>

---

## processQueue() {: #infinity.event.processQueue_function .doc-function}

Starts the processing of event triggers collected inside the queue. 

Signature:
```
processQueue(): void
```

Example:

```typescript
infinity.event.processQueue();
```

---

## register() {: #infinity.event.register_function .doc-function}

Registers an event handler under the specified name with the provided callback function. 

Signature:
```
register( name: string, callback: (params: any)=>void ): void
```

Parameters:

- name: `string`
  >the name for the event handler to register

- callback: `(params: any)=>void`
  >the callback function that will be executed in case of the event getting triggered


Example:

```typescript
infinity.event.register('message', 

  function(params: any): void {
    console.debug('event triggered: ' + JSON.stringify(params));
  }

);
```

---

## send() {: #infinity.event.send_function .doc-function}

Sends a message to the queue to trigger the specified event, passing to it the provided function parameters.

Signature:
```
send( name: string, params?: any ): void
```

Parameters:

- name: `string`
  >the event to be triggered

- params: `any`, optional
  >the function parameters to be passed to the callback function specified inside the event handler


Example:

```typescript
infinity.event.send('message');
```

---

## unregister() {: #infinity.event.unregister_function .doc-function}

Unregisters the specified event handler.

Signature:
```
unregister( name: string ): void
```

Parameters:

- name: `string`
  >the name of the event handler to unregister


Example:

```typescript
infinity.event.unregister('message');
```



