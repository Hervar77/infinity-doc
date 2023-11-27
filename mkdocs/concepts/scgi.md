# SCGI

The infinity.scgi module in INFINITY.JS introduces the capability to set up an instance as an SCGI (Simple Common Gateway Interface) server, enabling efficient communication between the INFINITY.JS environment and web servers like Nginx or Apache. This functionality is critical for developing web applications and services that require high-performance interactions with web servers.

## Understanding SCGI in INFINITY.JS

SCGI is a protocol designed for interfacing external applications with web servers. It's a simpler alternative to FastCGI, providing an efficient way to handle dynamic web content.

### Key Components

- `SCGI Server Class`: The core of the SCGI functionality in INFINITY.JS, allowing the creation and management of an SCGI server.
- `Handlers and Services`: Mechanisms for defining how different types of requests (e.g., static files, JSON-RPC, REST) are processed.
- `Request Processing`: Handling incoming requests, executing relevant logic, and sending responses.

## Working with the SCGI Server

### Setting Up the Server

The infinity.scgi.server class is used to create an SCGI server instance in INFINITY.JS. It allows configuration of various parameters such as port, cross-origin requests, compression, and logging.

### Constructor Parameters

- `allowCrossOrigin`: Enables cross-origin requests.
- `compress`: Toggles response compression.
- `accessLog`: Controls access logging.
- `port`: Sets the listening port.

Other parameters manage connections, content length, and performance metrics, as described in the [API reference](../api/infinity.scgi.html#infinity.scgi.server.constructor_function)

### Registering Handlers and Services

Handlers and services define the server's response to different types of requests. Handlers can serve static files, handle JSON-RPC or REST requests, and more. Services allow for the execution of custom-defined methods.

### Handler Types

- `staticFile`
- `jsonRpc`
- `rest`
- `custom` handlers for specific functionalities. Further handler types are listed in the [API reference](../api/infinity.scgi.html#infinity.scgi.server.handler_enum)

### Service Registration

Services are registered with a name, namespace, file path, and an array of methods. This allows custom logic to be invoked based on incoming requests.

### Starting and Stopping the Server

The server is started using the start() method and can be stopped with stop(). This controls the lifecycle of the SCGI server.

## Example Implementation

### Creating an SCGI server instance on a specified port.

You initialize the SCGI server with the infinity.scgi.server class, where you can configure various parameters, such as port and request handling options.

```typescript
let myScgi = new infinity.scgi.server(false, false, false, 9000);
```

### Registering handlers for different request types (e.g., serving static files, handling JSON-RPC calls).

Handlers manage different request types, while services allow for the execution of custom methods.

- Example: Registering a Static File Handler
```typescript
myScgi.registerHandler(infinity.scgi.server.handler.staticFile, '/', '../web/');
```

- Example: Registering a JSON-RPC Handler
```typescript
scgi.registerHandler(infinity.scgi.server.handler.jsonRpc, '/v1/jsonrpc');
```

### Defining and registering services with custom methods for specific functionalities.

```typescript
myScgi.registerService('system', 'system', 'system.js', [
  {name: 'shutdown'},
  {name: 'getVersion', result: 'string'}
]);
```
The `system.js` file would be containing the following code:

```typescript
namespace system {

  export function shutdown(): void {
    infinity.terminate();
  }

  export function getVersion(): string {
    return '2.0.0 build 1234';
  }
}
```

### Starting the server to handle incoming requests and stopping it as required.

```typescript
myScgi.start();

while (!infinity.terminated) {
  infinity.event.processQueue();
  infinity.sleep(25);
}

myScgi.stop();
```

This setup enables INFINITY.JS to function as a versatile backend for web applications, capable of handling various request types efficiently.