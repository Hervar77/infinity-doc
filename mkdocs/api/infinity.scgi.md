# infinity.scgi

Provides functionality for setting up an INFINITY.JS instance as a SCGI server.

Module: `infinity.scgi`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [server](#infinity.scgi.server_class)

<div class="doc-toc-heading">Namespaces:</div>

- [server](#infinity.scgi.server_namespace)

<div class="doc-toc-heading">Interfaces:</div>

- [methodArray](#infinity.scgi.methodArray_interface)

</div>

---

<div class="doc-heading">Classes</div>

---

## server {: #infinity.scgi.server_class .doc-class}

The class for operations with SCGI servers in INFINITY.JS.

<div class="doc-toc" markdown="1">

**Methods:**

- [constructor()](#infinity.scgi.server.constructor_function)
- [registerHandler()](#infinity.scgi.server.registerHandler_function)
- [registerHandler()](#infinity.scgi.server.registerHandler_function2)
- [registerHandler()](#infinity.scgi.server.registerHandler_function3)
- [registerService()](#infinity.scgi.server.registerService_function)
- [start()](#infinity.scgi.server.start_function)
- [stop()](#infinity.scgi.server.stop_function)
- [unregisterHandler()](#infinity.scgi.server.unregisterHandler_function)
- [unregisterService()](#infinity.scgi.server.unregisterService_function)

</div>


Example:
```typescript
infinity.loadModule('infinity.scgi');

let myScgi = new infinity.scgi.server(false, false, false, 9000);
myScgi.registerHandler(infinity.scgi.server.handler.staticFile, '/', '../web/');
scgi.registerHandler(infinity.scgi.server.handler.jsonRpc, '/v1/jsonrpc');

myScgi.registerService('system', 'system', 'system.js', [
  {name: 'shutdown'},
  {name: 'getVersion', result: 'string'}
]);

myScgi.start();

while (!infinity.terminated) {
  infinity.event.processQueue();
  infinity.sleep(25);
}

myScgi.stop();
```

system.ts:
```typescript
namespace system {

    export function shutdown(): void {
      infinity.terminate();
    }

    export function getVersion(): string {
      return '1.0.0 build 1234';
    }
  }
```

Folder structure:
```
+ example
  + ts
    - main.ts
    - system.ts
  + web
    - index.html
```

---

**Methods**

---

### constructor() {: #infinity.scgi.server.constructor_function .doc-function}

Lets you create an INFINITY.JS SCGI server object instance.

Signature:
```typescript
constructor( allowCrossOrigin?: boolean, compress?: boolean, accessLog?: boolean, port?: number, maxConnections?: number, poolSize?: number, maxContentLength?: number, slowRequestTime?: number, maxRateCounter?: number )
```

Parameters:

- allowCrossOrigin: `boolean`, optional
  >For allowing cross-origin-requests.

- compress: `boolean`, optional
  >For turning compression on or off.

- accessLog: `boolean`, optional
  >For turning on or off the logging of all access events.

- port: `number`, optional
  >Specifies the port to listen on.

- maxConnections: `number`, optional
  >Specifies the number of simultaneous connections.

- poolSize: `number`, optional
  >Specifies the number of worker threads to be held ready.

- maxContentLength: `number`, optional
  >Specifies the maximum number of bytes (content-length header) that the server accepts in http requests.

- slowRequestTime: `number`, optional
  >Specifies how many seconds the processing of a request is allowed to take without being logged as "slow". Accepts decimals with `.` as well.


- maxRateCounter: `number`, optional
  >The maximum number of requests that a client can make in a specific time frame for rate limiting.


Example:

```typescript
infinity.loadModule('infinity.scgi');
let myScgi = new infinity.scgi.server(false, false, false, 9000);
```

---

### registerHandler() {: #infinity.scgi.server.registerHandler_function3 .doc-function}

Registers a handler for processing client requests on the SCGI server, with optional rate limiting.

Signature:
```typescript
registerHandler( handler: infinity.scgi.server.handler, path: string, limit?: number, period?: number, delay?: number ): void
```

Parameters:

- handler: [`infinity.scgi.server.handler`](#infinity.scgi.server.handler_enum)
  >The type of handler to register for handling client requests.

- path: `string`
  >The URL path on which this handler will be activated.

- limit: `number`, optional
  >The maximum number of requests a client can make on this path within the specified time period.

- period: `number`, optional
  >The time frame in seconds for the rate limit.

- delay: `number`, optional
  >The time frame in seconds for the rate limit.


Example:

```typescript
myScgi.registerHandler(infinity.scgi.server.handler.rest, '/api', 100, 3600, 300);
```

---

### registerHandler() {: #infinity.scgi.server.registerHandler_function .doc-function}

Registers a handler for processing client requests on the SCGI server, linking them to local resources and optionally setting rate limits.

Signature:
```typescript
registerHandler( handler: infinity.scgi.server.handler, path: string, alias: string, limit?: number, period?: number, delay?: number ): void
```

Parameters:

- handler: [`infinity.scgi.server.handler`](#infinity.scgi.server.handler_enum)
  >The type of handler to be registered.

- path: `string`
  >The URL path on which the handler will be activated.

- alias: `string`
  >A local path or alias pointing to the resources (such as a folder or file) that the handler will use to serve content or execute routines in response to client requests.

- limit: `number`, optional
  >The maximum number of requests a client can make on this path within the specified time period.

- period: `number`, optional
  >The time frame in seconds for the rate limit.

- delay: `number`, optional
  >The time frame in seconds for the rate limit.


Example:

```typescript
myScgi.registerHandler(infinity.scgi.server.handler.jsonRpc, '/v1/jsonrpc');
```

---

### registerHandler() {: #infinity.scgi.server.registerHandler_function2 .doc-function}

Registers a handler for client requests, invoking local resources, including caching functionality.

Signature:
```typescript
registerHandler( handler: infinity.scgi.server.handler, path: string, alias: string, expire: number, maxCacheSize: number ): void
```

Parameters:

- handler: [`infinity.scgi.server.handler`](#infinity.scgi.server.handler_enum)
  >The type of handler to register.

- path: `string`
  >The request path for the client.

- alias: `string`
  >The path to a local folder or file with contents or defined routines to be served corresponding to the client request.

- expire: `number`, optional
  >Cache expiration time in seconds. After the specified period the file will have to be examined for changes at the next call.

- maxCacheSize: `number`, optional
  >The cache threshold in bytes. Files with sizes exceeding the specified number will not be cached.

- headers: [`infinity.http.headerArray`](#infinity.http.headerArray_interface)
  >The headers to be sent with the response.

- limit: `number`, optional
  >The maximum number of requests that can be made in the defined period. Used for rate limiting.

- period: `number`, optional
  >The rate limit time period in seconds.

- delay: `number`, optional
  >The "cool down" period in seconds that a client must wait after hitting the rate limit before making new requests.


Example:

```typescript
myScgi.registerHandler(infinity.scgi.server.handler.staticFile, '/', '../web/');
```

---

### registerService() {: #infinity.scgi.server.registerService_function .doc-function}

Registers a service, allowing requests for execution of custom defined methods.

Signature:
```typescript
registerService( name: string, namespace: string, path: string, methods: infinity.scgi.methodArray ): void
```

Parameters:

- name: `string`
  >The name of the service.

- namespace: `string`
  >The namespace for the service.

- path: `string`
  >The path to the file with the custom defined methods.

- methods: [`infinity.scgi.methodArray`](#infinity.scgi.methodArray_interface)
  >An array of the method names for the service. Parameters for return types, REST methods and HTTP environment can also be specified.


Example:

```typescript
myScgi.registerService('system', 'system', 'system.js', [
  {name: 'shutdown'},
  {name: 'getVersion', result: 'string'}
]);
```

system.ts:
```typescript
namespace system {

    export function shutdown(): void {
      infinity.terminate();
    }

    export function getVersion(): string {
      return '1.0.0 build 1234';
    }
  }
```

---

### start() {: #infinity.scgi.server.start_function .doc-function}

Starts the server with previously specified parameters.

Signature:
```typescript
start(): void
```

Example:

```typescript
myScgi.start();
```

---

### stop() {: #infinity.scgi.server.stop_function .doc-function}

Shuts down the server.

Signature:
```typescript
stop(): void
```

Example:

```typescript
myScgi.stop();
```

---

### unregisterHandler() {: #infinity.scgi.server.unregisterHandler_function .doc-function}

Unregisters the specified registered handler, making the previously specified functionality unavailable.

Signature:
```typescript
unregisterHandler( path: string ): void
```

Parameters:

- path: `string`
  >The request path for the client, which the handler has previously been registered for.


Example:

```typescript
myScgi.unregisterHandler('/');
```

---

### unregisterService() {: #infinity.scgi.server.unregisterService_function .doc-function}

Unregisters the specified registered service, making the previously specified functionality unavailable.

Signature:
```typescript
unregisterService( name: string ): void
```

Parameters:

- name: `string`
  >The name of the previously registered service.


Example:

```typescript
myScgi.unregisterService('system');
```



---

<div class="doc-heading">Namespaces</div>

---

## infinity.scgi.server {: #infinity.scgi.server_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Enums:</div>

- [handler](#infinity.scgi.server.handler_enum)

</div>


---

<div class="doc-heading">Enums</div>

---

### infinity.scgi.server.handler {: #infinity.scgi.server.handler_enum .doc-enum}

Values:

- custom: `0`
  >A custom handler to be defined in a file, specified in the third function parameter of [registerHandler()](#infinity.scgi.server.registerHandler_function).

- staticFile: `1`
  >A handler for serving static file content. Prefers showing the index.html file.

- jsonRpc: `2`
  >A handler for requests according to the JSON-RPC protocol.

- rest: `3`
  >A handler for REST-requests.

- api: `4`
  >A handler for requests to an API.

- webDav: `5`
  >A handler for requests according to the WebDAV protocol.

- cardDav: `6`
  >A handler for requests according to the CardDAV protocol.

- calDav: `7`
  >A handler for requests according to the CalDAV protocol.

- status: `8`
  >A handler for status requests.

Example:

```typescript
infinity.loadModule('infinity.scgi');
let handler = infinity.scgi.server.handler.custom;
```





---

<div class="doc-heading">Interfaces</div>

---

## headerArray {: #infinity.http.headerArray_interface .doc-interface}

Extends: ` Array<{name: string, value: string}>{}`

An array of objects containing name-value string pairs.

---

## methodArray {: #infinity.scgi.methodArray_interface .doc-interface}

Extends: `Array<{name: string, params?: Array<string>, result?: any, rest?: string, httpEnvironment?: boolean}>`

An array containing objects with data inside its properties.

### Properties:
- #### name
  >Type: `string`. The name of the function.
- #### params
  >Type: `Array<string>`, optional. The function parameters.
- #### result
  >Type: `any`, optional. The return type of the function result.
- #### rest
  >Type: `string`, optional. The implied REST method for the function call.
- #### httpEnvironment
  >Type: `boolean`, optional.  If set to true, the [`infinity.http.request`](#infinity.http.request_namespace) values will be provided.




