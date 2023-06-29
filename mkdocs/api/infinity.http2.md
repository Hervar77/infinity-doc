# infinity.http2

Povides HTTP/2 server and session functionality.

Module: `infinity.http2`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [server](#infinity.http2.server_class)

<div class="doc-toc-heading">Namespaces:</div>

- [request](#infinity.http2.request_namespace)
- [response](#infinity.http2.response_namespace)
- [server](#infinity.http2.server_namespace)
- [session](#infinity.http2.session_namespace)

<div class="doc-toc-heading">Interfaces:</div>

- [cookiesArray](#infinity.http2.cookiesArray_interface)
- [filesArray](#infinity.http2.filesArray_interface)
- [headerArray](#infinity.http2.headerArray_interface)
- [methodArray](#infinity.http2.methodArray_interface)
- [rangeArray](#infinity.http2.rangeArray_interface)
- [stringArray](#infinity.http2.stringArray_interface)
- [valuesArray](#infinity.http2.valuesArray_interface)

</div>



---

<div class="doc-heading">Classes</div>

---

## server {: #infinity.http2.server_class .doc-class}

Allows for your instance of INFINITY.JS to act as an HTTP/2-server. Lets you receive requests and send data. Can register handlers for static files, REST requests, the JSON-RPC protocol and API calls (require the simultaneous usage of [registerHandler()](#infinity.http2.server.registerHandler_function) and [registerService()](#infinity.http2.server.registerService_function)). JSON-RPC and REST handlers can be combined in one service.

<div class="doc-toc" markdown="1">

**Properties:**

- [onBinary](#infinity.http2.server.onBinary_property)
- [onMessage](#infinity.http2.server.onMessage_property)

**Methods:**

- [constructor()](#infinity.http2.server.constructor_function)
- [broadcast()](#infinity.http2.server.broadcast_function)
- [broadcast()](#infinity.http2.server.broadcast_function)
- [broadcast()](#infinity.http2.server.broadcast_function)
- [registerHandler()](#infinity.http2.server.registerHandler_function)
- [registerService()](#infinity.http2.server.registerService_function)
- [setCertificate()](#infinity.http2.server.setCertificate_function)
- [start()](#infinity.http2.server.start_function)
- [stop()](#infinity.http2.server.stop_function)
- [unregisterHandler()](#infinity.http2.server.unregisterHandler_function)
- [unregisterService()](#infinity.http2.server.unregisterService_function)
- [write()](#infinity.http2.server.write_function)
- [writeStream()](#infinity.http2.server.writeStream_function)
- [writeString()](#infinity.http2.server.writeString_function)

</div>



Example:

```typescript
infinity.loadModule('infinity.http2');
let myServer = new infinity.http2.server(true, false, false, false, false, false, 443, 1024, 64, 104857600, 5.0);

myServer.registerHandler(infinity.http2.server.handler.status, '/status');
myServer.registerHandler(infinity.http2.server.handler.staticFile, '/', '../web/', 60.0, 256144);
myServer.registerHandler(infinity.http2.server.handler.jsonRpc, '/v1/jsonrpc');
myServer.registerService('system', 'system', 'system.js', [
  {name: 'shutdown'},
  {name: 'getVersion', result: 'string'}
]);

myServer.start();

while (!infinity.terminated) {
  infinity.event.processQueue();
  infinity.sleep(25);
}

myServer.stop();
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
```


Example POST-request against `/v1/jsonrpc`:

```json
{"jsonrpc": "2.0", "method": "system.getVersion"}
```


---

**Properties**

---

### onBinary {: #infinity.http2.server.onBinary_property .doc-property}

Type: `string`

The filename (relative to the main script) of the script that will handle binary requests. Within that script, you can access the infinity.http2.session object, which will contain (among others) the following properties:

- [`message`](#infinity.http2.session.message_property): the message data that has been sent by the client
- [`fileName`](#infinity.http2.session.fileName_property): the absolute path to the file containing the binary data sent by the client

---

### onMessage {: #infinity.http2.server.onMessage_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle message requests. Within that script, you can access the infinity.http2.session object, which will contain (among others) the following property:

- [`message`](#infinity.http2.session.message_property): the message data that has been sent by the client

---

**Methods**

---

### constructor() {: #infinity.http2.server.constructor_function .doc-function}

Lets you create an INFINITY.JS HTTP/2 server object instance. Takes the most important parameters for the server to function.

Signature:
```typescript
constructor( ssl?: boolean, verifyCertificate?: boolean, allowCrossOrigin?: boolean, compress?: boolean, accessLog?: boolean, iocp?: boolean, port?: number, maxConnections?: number, poolSize?: number, maxContentLength?: number, slowRequestTime?: number, protocol?: infinity.http2.server.protocol )
```

Parameters:

- ssl: `boolean`, optional
  >for using SSL connections

- verifyCertificate: `boolean`, optional
  >whether to verify the SSL-Certificate

- allowCrossOrigin: `boolean`, optional
  >for allowing cross-origin-requests

- compress: `boolean`, optional
  >for turning compression on or off

- accessLog: `boolean`, optional
  >for turning on or off the logging of all access events

- iocp: `boolean`, optional
  >specifies the usage of the input/output completion port

- port: `number`, optional
  >specifies the port to listen on

- maxConnections: `number`, optional
  >specifies the number of simultaneous connections

- poolSize: `number`, optional
  >specifies the number of worker threads to be held ready

- maxContentLength: `number`, optional
  >specifies the maximum number of bytes (content-length header) that the server accepts in http requests

- slowRequestTime: `number`, optional
  >specifies how many seconds the processing of a request is allowed to take without being logged as "slow". Accepts decimals with `.` as well.

- protocol: [`infinity.http2.server.protocol`](#infinity.http2.server.protocol_enum), optional
  >specifies the encryption protocol to be used


Example:

```typescript
infinity.loadModule('infinity.http2');
let myServer = new infinity.http2.server(true, false, false, false, false, false, 443, 1024, 64, 104857600, 5.0);
```

---

### broadcast(data) {: #infinity.http2.server.broadcast_function .doc-function}

Sends data to all clients that have subscribed to a specific channel. The channel name can be chosen arbitrarily and the data will be sent to all clients that are subscribed to the channel by this name.

Signature:
```typescript
broadcast( data: any, channel?: string, exclude?: string, include?: string ): void
```

Parameters:

- data: `any`
  >data to be sent (can be any object, number, string, etc.).

- channel: `string`, optional
  >channel name

- exclude: `string`, optional
  >comma-separated list of client ids to exclude from the broadcast

- include: `string`, optional
  >comma-separated list of client ids to include from the broadcast (in addition to those subscribed to the given channel)


Example:

```typescript
myServer.broadcast(data);
```

---

### broadcast(stream) {: #infinity.http2.server.broadcast_function .doc-function}

Sends data from a stream to all clients that have subscribed a specific channel. The channel name can be chosen arbitrarily and the data will be sent to all clients that are subscribed to the channel by this name.

Signature:
```typescript
broadcast( stream: infinity.stream, channel?: string, exclude?: string, include?: string ): void
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >a stream from which to read data and send it to the clients.

- channel: `string`, optional
  >channel name

- exclude: `string`, optional
  >comma-separated list of client ids to exclude from the broadcast

- include: `string`, optional
  >comma-separated list of client ids to include from the broadcast (in addition to those subscribed to the given channel)


Example:

```typescript
myServer.broadcast(stream);
```

---

### broadcast(message) {: #infinity.http2.server.broadcast_function .doc-function}

Sends a string message to all clients that have subscribed to a specific channel. The channel name can be chosen arbitrarily and the data will be sent to all clients that are subscribed to the channel by this name.

Signature:
```typescript
broadcast( message: string, channel?: string, exclude?: string, include?: string ): void
```

Parameters:

- message: `string`
  >message to send to the clients.

- channel: `string`, optional
  >channel name

- exclude: `string`, optional
  >comma-separated list of client ids to exclude from the broadcast

- include: `string`, optional
  >comma-separated list of client ids to include from the broadcast (in addition to those subscribed to the given channel)


Example:

```typescript
myServer.broadcast(message);
```

---

### registerHandler() {: #infinity.http2.server.registerHandler_function .doc-function}

Registers a handler for client requests, invoking additional resources, including caching functionality.

Signature:
```typescript
registerHandler( handler: infinity.http2.server.handler, path: string, alias?: string, expire?: number, maxCacheSize?: number, headers?: infinity.http2.headerArray ): void
```

Parameters:

- handler: [`infinity.http2.server.handler`](#infinity.http2.server.handler_enum)
  >the type of handler to register

- path: `string`
  >the request path for the client

- alias: `string`, optional
  >the path to a local folder or file with contents or defined routines to be served corresponding to the client request

- expire: `number`, optional
  >the cache expiration time in seconds. After the specified period the file will have to be examined for changes at the next call.

- maxCacheSize: `number`, optional
  >the cache threshold in bytes. Files with sizes exceeding the specified number will not be cached

- headers: [`infinity.http2.headerArray`](#infinity.http2.headerArray_interface), optional
  >the headers to be sent with the response


Example:

```typescript
myServer.registerHandler(infinity.http2.server.handler.status, '/status');
myServer.registerHandler(infinity.http2.server.handler.staticFile, '/', '../web/');
myServer.registerHandler(infinity.http2.server.handler.staticFile, '/', '../web/', 60.0, 256144);
```

---

### registerService() {: #infinity.http2.server.registerService_function .doc-function}

Registers a service, allowing requests for execution of custom defined methods.

Signature:
```typescript
registerService( name: string, namespace: string, path: string, methods: infinity.http2.methodArray ): void
```

Parameters:

- name: `string`
  >the name of the service

- namespace: `string`
  >the namespace for the service

- path: `string`
  >the path to the file with the custom defined methods

- methods: [`infinity.http2.methodArray`](#infinity.http2.methodArray_interface)
  >an array of the method names for the service. Parameters for return types, REST methods and HTTP environment can also be specified


Example:

```typescript
myServer.registerHandler(infinity.http2.server.handler.jsonRpc, '/v1/jsonrpc');
myServer.registerService('system', 'system', 'system.js', [
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

Folder structure:
```
+ example
  + ts
    - main.ts
    - system.ts
```

POST-request against `/v1/jsonrpc`:

```json
{"jsonrpc": "2.0", "method": "system.getVersion"}
```

---

### setCertificate() {: #infinity.http2.server.setCertificate_function .doc-function}

Sets the SSL certificate for the current server instance using the corresponding files provided in the function parameters.

Signature:
```typescript
setCertificate(certFile: string, keyFile: string, rootCertFile?: string, verify?: boolean): void;
```

Parameters:

- certFile: `string`
  >the path to the certificate file to be used

- keyFile: `string`
  >the path to the the key file to be used

- rootCertFile: `string`, optional
  >the path to the the root certificate file to be used

- verify: `boolean`, optional
  >whether to verify the validity of the certificate


Example:

```typescript
myServer.setCertificate('certFile.crt', 'keyFile.key', 'rootCertFile.crt', true);
```

---

### start() {: #infinity.http2.server.start_function .doc-function}

Starts the server instance with previously specified parameters.

Signature:
```typescript
start(): void
```

Example:

```typescript
myServer.start();
```

---

### stop() {: #infinity.http2.server.stop_function .doc-function}

Shuts down the server instance.

Signature:
```typescript
stop(): void
```

Example:

```typescript
myServer.stop();
```

---

### unregisterHandler() {: #infinity.http2.server.unregisterHandler_function .doc-function}

Unregisters the specified registered handler, making the previously defined functionality unavailable.

Signature:
```typescript
unregisterHandler( path: string ): void
```

Parameters:

- path: `string`
  >the request path for the client, which the handler has previously been registered for


Example:

```typescript
myServer.unregisterHandler('/');
```

---

### unregisterService() {: #infinity.http2.server.unregisterService_function .doc-function}

Unregisters the specified registered service, making the previously defined functionality unavailable.

Signature:
```typescript
unregisterService( name: string ): void
```

Parameters:

- name: `string`
  >the name of the previously registered service


Example:

```typescript
myServer.unregisterService('system');
```

---

### write() {: #infinity.http2.server.write_function .doc-function}

Sends data to a specific client connection.

Signature:
```typescript
write( id: string, data: any ): boolean
```

Parameters:

- id: `string`
  >session id of the client connection.

- data: `any`
  >data to be sent (can be any object, number, string, etc.).


Return type: `boolean`

Example:

```typescript
myServer.write(id, data);
```

---

### writeStream() {: #infinity.http2.server.writeStream_function .doc-function}

Sends data from a stream to a specific client connection.

Signature:
```typescript
writeStream( id: string, stream: infinity.stream ): boolean
```

Parameters:

- id: `string`
  >session id of the client connection.

- stream: [`infinity.stream`](infinity.stream.md)
  >a stream from which to read data and send it to the client.


Return type: `boolean`

Example:

```typescript
myServer.writeStream(id, stream);
```

---

### writeString() {: #infinity.http2.server.writeString_function .doc-function}

Sends a string message to a specific client connection.

Signature:
```typescript
writeString( id: string, message: string ): boolean
```

Parameters:

- id: `string`
  >session id of the client connection.

- message: `string`
  >message to send to the client.


Return type: `boolean`

Example:

```typescript
myServer.writeString(id, message);
```


---

<div class="doc-heading">Namespaces</div>

---


## infinity.http2.request {: #infinity.http2.request_namespace .doc-namespace}

Read-only properties containing information from the incoming HTTP/2 request. 

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Properties:</div>

- [contentBoundary](#infinity.http2.request.contentBoundary_property)
- [contentDisposition](#infinity.http2.request.contentDisposition_property)
- [contentEncoding](#infinity.http2.request.contentEncoding_property)
- [contentFilename](#infinity.http2.request.contentFilename_property)
- [contentLength](#infinity.http2.request.contentLength_property)
- [contentText](#infinity.http2.request.contentText_property)
- [contentTransferEncoding](#infinity.http2.request.contentTransferEncoding_property)
- [contentType](#infinity.http2.request.contentType_property)
- [cookies](#infinity.http2.request.cookies_property)
- [destination](#infinity.http2.request.destination_property)
- [files](#infinity.http2.request.files_property)
- [gatewayInterface](#infinity.http2.request.gatewayInterface_property)
- [get](#infinity.http2.request.get_property)
- [httpAccept](#infinity.http2.request.httpAccept_property)
- [httpAcceptCharSet](#infinity.http2.request.httpAcceptCharSet_property)
- [httpAcceptEncoding](#infinity.http2.request.httpAcceptEncoding_property)
- [httpAcceptLanguage](#infinity.http2.request.httpAcceptLanguage_property)
- [httpAuthorization](#infinity.http2.request.httpAuthorization_property)
- [httpConnection](#infinity.http2.request.httpConnection_property)
- [httpHost](#infinity.http2.request.httpHost_property)
- [httpIfMatch](#infinity.http2.request.httpIfMatch_property)
- [httpIfModifiedSince](#infinity.http2.request.httpIfModifiedSince_property)
- [httpIfNonMatch](#infinity.http2.request.httpIfNonMatch_property)
- [httpReferer](#infinity.http2.request.httpReferer_property)
- [httpUserAgent](#infinity.http2.request.httpUserAgent_property)
- [method](#infinity.http2.request.method_property)
- [pathInfo](#infinity.http2.request.pathInfo_property)
- [pathTranslated](#infinity.http2.request.pathTranslated_property)
- [post](#infinity.http2.request.post_property)
- [range](#infinity.http2.request.range_property)
- [remoteAddr](#infinity.http2.request.remoteAddr_property)
- [remoteHost](#infinity.http2.request.remoteHost_property)
- [remoteIdent](#infinity.http2.request.remoteIdent_property)
- [remotePort](#infinity.http2.request.remotePort_property)
- [remoteUser](#infinity.http2.request.remoteUser_property)
- [scgi](#infinity.http2.request.scgi_property)
- [scheme](#infinity.http2.request.scheme_property)
- [scriptFilename](#infinity.http2.request.scriptFilename_property)
- [scriptName](#infinity.http2.request.scriptName_property)
- [serverAddr](#infinity.http2.request.serverAddr_property)
- [serverAdmin](#infinity.http2.request.serverAdmin_property)
- [serverName](#infinity.http2.request.serverName_property)
- [serverPort](#infinity.http2.request.serverPort_property)
- [serverProtocol](#infinity.http2.request.serverProtocol_property)
- [serverSignature](#infinity.http2.request.serverSignature_property)
- [serverSoftware](#infinity.http2.request.serverSoftware_property)
- [uri](#infinity.http2.request.uri_property)

</div>

---

<div class="doc-heading">Properties</div>

---

### contentBoundary {: #infinity.http2.request.contentBoundary_property .doc-property}

Type: `string`

Gets the boundary delimiter string.

---

### contentDisposition {: #infinity.http2.request.contentDisposition_property .doc-property}

Type: `string`

Gets the `content-disposition` HTTP/2-header value.

---

### contentEncoding {: #infinity.http2.request.contentEncoding_property .doc-property}

Type: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum)

Gets the `content-encoding` HTTP-header value.

---

### contentFilename {: #infinity.http2.request.contentFilename_property .doc-property}

Type: `string`

Gets the filename parameter of the `Content-Disposition` HTTP-header value.

---

### contentLength {: #infinity.http2.request.contentLength_property .doc-property}

Type: `number`

Gets the `content-length` HTTP-header value.

---

### contentText {: #infinity.http2.request.contentText_property .doc-property}

Type: `string`

Gets the contents of the body of the request.

---

### contentTransferEncoding {: #infinity.http2.request.contentTransferEncoding_property .doc-property}

Type: `string`

Gets the `transfer-encoding` HTTP-header value.

---

### contentType {: #infinity.http2.request.contentType_property .doc-property}

Type: `string`

Gets or sets the `content-type` HTTP-header value.

---

### cookies {: #infinity.http2.request.cookies_property .doc-property}

Type: [`infinity.http2.cookiesArray`](#infinity.http2.cookiesArray_interface)

Gets or sets cookie data.

---

### destination {: #infinity.http2.request.destination_property .doc-property}

Type: `string`

Gets the destination of the HTTP request

---

### files {: #infinity.http2.request.files_property .doc-property}

Type: [`infinity.http2.filesArray`](#infinity.http2.filesArray_interface)

Gets information about the files sent with the HTTP request.

---

### gatewayInterface {: #infinity.http2.request.gatewayInterface_property .doc-property}

Type: `string`

Gets the name and version of the gateway interface (only during SCGI operations).

---

### get {: #infinity.http2.request.get_property .doc-property}

Type: [`infinity.http2.valuesArray`](#infinity.http2.valuesArray_interface)

Gets the information out of the GET-part of the HTTP request.

---

### httpAccept {: #infinity.http2.request.httpAccept_property .doc-property}

Type: `string`

Gets the `accept` HTTP-header value.

---

### httpAcceptCharSet {: #infinity.http2.request.httpAcceptCharSet_property .doc-property}

Type: `string`

Gets the `accept-charset` HTTP-header value.

---

### httpAcceptEncoding {: #infinity.http2.request.httpAcceptEncoding_property .doc-property}

Type: `string`

Gets the `accept-encoding` HTTP-header value.

---

### httpAcceptLanguage {: #infinity.http2.request.httpAcceptLanguage_property .doc-property}

Type: `string`

Gets the `accept-language` HTTP-header value.

---

### httpAuthorization {: #infinity.http2.request.httpAuthorization_property .doc-property}

Type: `string`

Gets the `authorization` HTTP-header value.

---

### httpConnection {: #infinity.http2.request.httpConnection_property .doc-property}

Type: `string`

Gets the `connection` HTTP-header value.

---

### httpHost {: #infinity.http2.request.httpHost_property .doc-property}

Type: `string`

Gets the `Host` value of the HTTP request.

---

### httpIfMatch {: #infinity.http2.request.httpIfMatch_property .doc-property}

Type: `string`

Gets the `if-match` HTTP-header value.

---

### httpIfModifiedSince {: #infinity.http2.request.httpIfModifiedSince_property .doc-property}

Type: `number`

Gets the `if-modified-since` HTTP-header value.

---

### httpIfNonMatch {: #infinity.http2.request.httpIfNonMatch_property .doc-property}

Type: `string`

Gets the `if-none-match` HTTP-header value.

---

### httpReferer {: #infinity.http2.request.httpReferer_property .doc-property}

Type: `string`

Gets the `referer` HTTP-header value.

---

### httpUserAgent {: #infinity.http2.request.httpUserAgent_property .doc-property}

Type: `string`

Gets the `user-agent` HTTP-header value.

---

### method {: #infinity.http2.request.method_property .doc-property}

Type: `string`

Gets the HTTP request method.

---

### pathInfo {: #infinity.http2.request.pathInfo_property .doc-property}

Type: `string`

Reports the value of the path information (if any) of the URL specified in the HTTP request message.

---

### pathTranslated {: #infinity.http2.request.pathTranslated_property .doc-property}

Type: `string`

Represents a translation of the `PathInfo` property to a fully qualified path on the Web server.

---

### post {: #infinity.http2.request.post_property .doc-property}

Type: [`infinity.http2.valuesArray`](#infinity.http2.valuesArray_interface)

Gets the information out of the POST-part of the HTTP request.

---

### range {: #infinity.http2.request.range_property .doc-property}

Type: [`infinity.http2.rangeArray`](#infinity.http2.rangeArray_interface)

Gets the `range` HTTP-header value.

---

### remoteAddr {: #infinity.http2.request.remoteAddr_property .doc-property}

Type: `string`

Gets the IP address of the remote machine making this request.

---

### remoteHost {: #infinity.http2.request.remoteHost_property .doc-property}

Type: `string`

Gets the hostname of the remote machine making this request (only during SCGI operations).

---

### remoteIdent {: #infinity.http2.request.remoteIdent_property .doc-property}

Type: `string`

Gets the remote user name retrieved from the server (only during SCGI operations).

---

### remotePort {: #infinity.http2.request.remotePort_property .doc-property}

Type: `number`

Gets the port over which the remote machine communicates.

---

### remoteUser {: #infinity.http2.request.remoteUser_property .doc-property}

Type: `string`

Gets the authenticated remote user name (only during SCGI operations).

---

### scgi {: #infinity.http2.request.scgi_property .doc-property}

Type: `boolean`

Indicates whether scgi is being used.

---

### scheme {: #infinity.http2.request.scheme_property .doc-property}

Type: `string`

Gets the `:scheme:` HTTP-header value.

---

### scriptFilename {: #infinity.http2.request.scriptFilename_property .doc-property}

Type: `string`

Gets the filename of the script being executed (only during SCGI operations).

---

### scriptName {: #infinity.http2.request.scriptName_property .doc-property}

Type: `string`

Gets the name of the script being executed.

---

### serverAddr {: #infinity.http2.request.serverAddr_property .doc-property}

Type: `string`

Gets the local server address.

---

### serverAdmin {: #infinity.http2.request.serverAdmin_property .doc-property}

Type: `string`

Gets or sets server administrator information (only during SCGI operations).

---

### serverName {: #infinity.http2.request.serverName_property .doc-property}

Type: `string`

Gets the domain name of the local server.

---

### serverPort {: #infinity.http2.request.serverPort_property .doc-property}

Type: `number`

Gets the port over which the local server communicates.

---

### serverProtocol {: #infinity.http2.request.serverProtocol_property .doc-property}

Type: `string`

Gets the protocol over which the local server communicates.

---

### serverSignature {: #infinity.http2.request.serverSignature_property .doc-property}

Type: `string`

Gets the signature of the local server (only during SCGI operations).

---

### serverSoftware {: #infinity.http2.request.serverSoftware_property .doc-property}

Type: `string`

Gets the name representing the local server software.

---

### uri {: #infinity.http2.request.uri_property .doc-property}

Type: `string`

Gets the URI of the HTTP request.




## infinity.http2.response {: #infinity.http2.response_namespace .doc-namespace}

The properties of the outgoing response from the INFINITY.JS HTTP/2 server. Can be read and set. Undefined, unless used inside the file specified in the "alias" parameter of [registerHandler()](#infinity.http2.server.registerHandler_function).


<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Properties:</div>

- [acceptRanges](#infinity.http2.response.acceptRanges_property)
- [cacheControl](#infinity.http2.response.cacheControl_property)
- [code](#infinity.http2.response.code_property)
- [contentEncoding](#infinity.http2.response.contentEncoding_property)
- [contentFilename](#infinity.http2.response.contentFilename_property)
- [contentLanguage](#infinity.http2.response.contentLanguage_property)
- [contentRange](#infinity.http2.response.contentRange_property)
- [contentStream](#infinity.http2.response.contentStream_property)
- [contentText](#infinity.http2.response.contentText_property)
- [contentType](#infinity.http2.response.contentType_property)
- [cookies](#infinity.http2.response.cookies_property)
- [date](#infinity.http2.response.date_property)
- [encoding](#infinity.http2.response.encoding_property)
- [etag](#infinity.http2.response.etag_property)
- [expires](#infinity.http2.response.expires_property)
- [headers](#infinity.http2.response.headers_property)
- [ignoreSlowRequest](#infinity.http2.response.ignoreSlowRequest_property)
- [lastModified](#infinity.http2.response.lastModified_property)
- [location](#infinity.http2.response.location_property)
- [pragma](#infinity.http2.response.pragma_property)
- [proxyAuthenticate](#infinity.http2.response.proxyAuthenticate_property)
- [refresh](#infinity.http2.response.refresh_property)
- [server](#infinity.http2.response.server_property)
- [transferEncoding](#infinity.http2.response.transferEncoding_property)
- [wwwAuthenticate](#infinity.http2.response.wwwAuthenticate_property)

</div>


---

<div class="doc-heading">Properties</div>

---

### acceptRanges {: #infinity.http2.response.acceptRanges_property .doc-property}

Type: `string`

Gets or sets the `accept-ranges` HTTP-header value.

---

### cacheControl {: #infinity.http2.response.cacheControl_property .doc-property}

Type: `string`

Gets or sets the `cache-control` HTTP-header value.

---

### code {: #infinity.http2.response.code_property .doc-property}

Type: `number`

Gets or sets the HTTP response code.

---

### contentEncoding {: #infinity.http2.response.contentEncoding_property .doc-property}

Type: `string`

Gets or sets the `content-encoding` HTTP-header value.

---

### contentFilename {: #infinity.http2.response.contentFilename_property .doc-property}

Type: `string`

Gets or sets the filename parameter of the `content-disposition` HTTP-header value.

---

### contentLanguage {: #infinity.http2.response.contentLanguage_property .doc-property}

Type: `string`

Gets or sets the `content-language` HTTP-header value.

---

### contentRange {: #infinity.http2.response.contentRange_property .doc-property}

Type: `string`

Gets or sets the `content-range` HTTP-header value.

---

### contentStream {: #infinity.http2.response.contentStream_property .doc-property}

Type: [`infinity.stream`](infinity.stream.md)

Gets or sets the contents of the body of the response using a [infinity.stream](infinity.stream.md).

---

### contentText {: #infinity.http2.response.contentText_property .doc-property}

Type: `string`

Gets or sets the contents of the body of the response.

---

### contentType {: #infinity.http2.response.contentType_property .doc-property}

Type: `string`

Gets or sets the `content-type` HTTP-header value.

---

### cookies {: #infinity.http2.response.cookies_property .doc-property}

Type: [`infinity.http2.cookiesArray`](#infinity.http2.cookiesArray_interface)

Gets or sets cookie data.

---

### date {: #infinity.http2.response.date_property .doc-property}

Type: `number`

Gets or sets the `date` HTTP-header value.

---

### encoding {: #infinity.http2.response.encoding_property .doc-property}

Type: `infinity.encoding`

Gets or sets the encoding of the HTTP response.

---

### etag {: #infinity.http2.response.etag_property .doc-property}

Type: `string`

Gets or sets the `etag` HTTP-header value.

---

### expires {: #infinity.http2.response.expires_property .doc-property}

Type: `number`

Gets or sets the `expires` HTTP-header value.

---

### headers {: #infinity.http2.response.headers_property .doc-property}

Type: [`infinity.http2.valuesArray`](#infinity.http2.valuesArray_interface)

Gets or sets additional headers inside a [valuesArray](#infinity.http2.valuesArray_interface).

---

### ignoreSlowRequest {: #infinity.http2.response.ignoreSlowRequest_property .doc-property}

Type: `boolean`

Gets or sets the setting for not logging the request if it takes longer than the slowRequestTime setting, set during the server instance creation.

---

### lastModified {: #infinity.http2.response.lastModified_property .doc-property}

Type: `number`

Gets or sets the `last-modified` HTTP-header value.

---

### location {: #infinity.http2.response.location_property .doc-property}

Type: `string`

Gets or sets the `location` HTTP-header value.

---

### pragma {: #infinity.http2.response.pragma_property .doc-property}

Type: `string`

Gets or sets the `pragma` HTTP-header value.

---

### proxyAuthenticate {: #infinity.http2.response.proxyAuthenticate_property .doc-property}

Type: `string`

Gets or sets the `proxy-authenticate` HTTP-header value.

---

### refresh {: #infinity.http2.response.refresh_property .doc-property}

Type: `string`

Gets or sets the undocumented `refresh` HTTP-header value.

---

### server {: #infinity.http2.response.server_property .doc-property}

Type: `string`

Gets or sets the `server` HTTP-header value.

---

### transferEncoding {: #infinity.http2.response.transferEncoding_property .doc-property}

Type: `string`

Gets or sets the `transfer-encoding` HTTP-header value.

---

### wwwAuthenticate {: #infinity.http2.response.wwwAuthenticate_property .doc-property}

Type: `string`

Gets or sets the `WWW-Authenticate` HTTP-header value.




## infinity.http2.server {: #infinity.http2.server_namespace .doc-namespace}


<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Enums:</div>

- [handler](#infinity.http2.server.handler_enum)
- [protocol](#infinity.http2.server.protocol_enum)

</div>


---

<div class="doc-heading">Enums</div>

---

### infinity.http2.server.handler {: #infinity.http2.server.handler_enum .doc-enum}

Values:

- custom: `0`
  >a custom handler to be defined in a file, specified in the third function parameter of [registerHandler()](#infinity.http2.server.registerHandler_function)

- staticFile: `1`
  >a handler for serving static file content. Prefers showing the index.html file.

- jsonRpc: `2`
  >a handler for requests according to the JSON-RPC protocol

- rest: `3`
  >a handler for REST-requests

- api: `4`
  >a handler for requests to an API

- webDav: `5`
  >a handler for requests according to the WebDAV protocol (not implemented yet)

- cardDav: `6`
  >a handler for requests according to the CardDAV protocol (not implemented yet)

- calDav: `7`
  >a handler for requests according to the CalDAV protocol (not implemented yet)

- status: `8`
  >a handler for server-status requests, showing server and resource usage information

Example:

```typescript
infinity.loadModule('infinity.http2');
let handler = infinity.http2.server.handler.custom;
```



---

### infinity.http2.server.protocol {: #infinity.http2.server.protocol_enum .doc-enum}

Values:

- all: `0`
  >allows the usage of all available protocols

- tls1_0: `1`
  >specifies the usage of TLS 1.0

- tls1_1: `2`
  >specifies the usage of TLS 1.1

- tls1_2: `3`
  >specifies the usage of TLS 1.2

- tls1_3: `4`
  >specifies the usage of TLS 1.3

Example:

```typescript
infinity.loadModule('infinity.http2');
let protocol = infinity.http2.server.protocol.tls1_2;
```





## infinity.http2.session {: #infinity.http2.session_namespace .doc-namespace}

The `infinity.http2.session` object will be available in the handler scripts run by the `infinity.http2.server`. The properties will be filled depending on the handler and some of the properties are used to provide results of the handler to be returned back to the client.

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Properties:</div>

- [fileName](#infinity.http2.session.fileName_property)
- [id](#infinity.http2.session.id_property)
- [ip](#infinity.http2.session.ip_property)
- [message](#infinity.http2.session.message_property)
- [port](#infinity.http2.session.port_property)

<div class="doc-toc-heading">Functions:</div>

- [disconnect](#infinity.http2.session.disconnect_function)
- [subscribe](#infinity.http2.session.subscribe_function)
- [subscribed](#infinity.http2.session.subscribed_function)
- [unsubscribe](#infinity.http2.session.unsubscribe_function)
- [write](#infinity.http2.session.write_function)
- [writeStream](#infinity.http2.session.writeStream_function)
- [writeString](#infinity.http2.session.writeString_function)

</div>


---

<div class="doc-heading">Functions</div>

---

### disconnect() {: #infinity.http2.session.disconnect_function .doc-function}

Disconnects the current connection.

Signature:
```
disconnect(): void
```

Example:

```typescript
infinity.loadModule('infinity.http2');
infinity.http2.session.disconnect();
```

---

### subscribe() {: #infinity.http2.session.subscribe_function .doc-function}

Subscribes this instance to a specific channel. The channel name can be chosen arbitrarily and the server can use the [`broadcast()`](#infinity.http2.server.broadcast_function) methods to send data to all instances that are subscribed to a specific channel.

Signature:
```
subscribe( channel: string ): void
```

Parameters:

- channel: `string`
  >channel name


Example:

```typescript
infinity.loadModule('infinity.http2');
infinity.http2.session.subscribe(channel);
```

---

### subscribed() {: #infinity.http2.session.subscribed_function .doc-function}

Checks whether this instance has been subscribed to a specific channel.

Signature:
```
subscribed( channel: string ): boolean
```

Parameters:

- channel: `string`
  >channel name


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.http2');
if ( infinity.http2.session.subscribed(channel) ) {}
```

---

### unsubscribe() {: #infinity.http2.session.unsubscribe_function .doc-function}

Unsubscribes this instance from a specific channel.

Signature:
```
unsubscribe( channel: string ): void
```

Parameters:

- channel: `string`
  >channel name


Example:

```typescript
infinity.loadModule('infinity.http2');
infinity.http2.session.unsubscribe(channel);
```

---

### write() {: #infinity.http2.session.write_function .doc-function}

Sends data to a specific connection.

Signature:
```
write( data: any ): boolean
```

Parameters:

- data: `any`
  >data to be sent (can be any object, number, string, etc.)


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.http2');
if ( infinity.http2.session.write(data) ) {
  //...
}
```

---

### writeStream() {: #infinity.http2.session.writeStream_function .doc-function}

Sends data from a stream to a specific connection.

Signature:
```
writeStream( stream: infinity.stream ): boolean
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >a stream from which to read and send data


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.http2');
if ( infinity.http2.session.writeStream(stream) ) {
  //...
}
```

---

### writeString() {: #infinity.http2.session.writeString_function .doc-function}

Sends a string message to a specific connection.

Signature:
```
writeString( message: string ): boolean
```

Parameters:

- message: `string`
  >message to send


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.http2');
if ( infinity.http2.session.writeString(message) ) {
  //...
}
```



---

<div class="doc-heading">Properties</div>

---

### fileName {: #infinity.http2.session.fileName_property .doc-property}

Type: `string`

In the [`onBinary`](#infinity.http2.server.onBinary_property) request handler, this property will contain the absolute path to the file containing the binary data sent by the client.

---

### id {: #infinity.http2.session.id_property .doc-property}

Type: `string`

The session id. This will remain constant throughout a single session and will turn invalid on disconnect.

---

### ip {: #infinity.http2.session.ip_property .doc-property}

Type: `string`

The IP address from which the client connected.

---

### message {: #infinity.http2.session.message_property .doc-property}

Type: `string`

In the [`onBinary`](#infinity.http2.server.onBinary_property) and [`onMessage`](#infinity.http2.server.onMessage_property) request handlers, this property will contain the data sent by the client.

---

### port {: #infinity.http2.session.port_property .doc-property}

Type: `number`

The port used by the connection with the client.









---

<div class="doc-heading">Interfaces</div>

---

## cookiesArray {: #infinity.http2.cookiesArray_interface .doc-interface}

Extends: `Array<{name: string, value: string, expires: number, path: string, domain: string}>`

An array containing objects with cookie data inside its properties.

### Properties:
- #### name 
  >Type: `string`. The name of a cookie field
- #### value
  >Type: `string`. The value of a cookie field
- #### expires
  >Type: `number`. The expiration date for the cookie
- #### path
  >Type: `string`. The storage path for the cookie
- #### domain
  >Type: `string`. The domain the cookie is set from

---

## filesArray {: #infinity.http2.filesArray_interface .doc-interface}

Extends: `Array<{controlName: string, fileName: string, tempFilename: string, size: number, contentType: string}>`

An array containing objects with data inside its properties.

### Properties:
- #### controlName 
  >Type: `string`. The name of the used HTML form control
- #### fileName
  >Type: `string`. The name of the file
- #### tempFilename
  >Type: `string`. The temporary filename, the file is available under. Is only set during the actual request
- #### size
  >Type: `number`. The size of the file
- #### contentType
  >Type: `string`. The MIME-Type of the file

---

## headerArray {: #infinity.http2.headerArray_interface .doc-interface}

Extends: `Array<{name: string, value: string}>`

An array containing objects with data inside its properties.

### Properties:
- #### name 
  >Type: `string`. The field name
- #### value
  >Type: `string`. The field value

---

## methodArray {: #infinity.http2.methodArray_interface .doc-interface}

Extends: `Array<{name: string, params?: Array<string>, result?: any, rest?: string, httpEnvironment?: boolean}>`

An array containing objects with data inside its properties.

### Properties:
- #### name 
  >Type: `string`. The name of the function
- #### params
  >Type: `Array<string>`, optional. The function parameters
- #### result
  >Type: `any`, optional. The return type of the function result
- #### rest
  >Type: `string`, optional. The implied REST method for the function call
- #### httpEnvironment
  >Type: `boolean`, optional.  If set to true, the [`infinity.http2.request`](#infinity.http2.request_namespace) values will be provided.

---

## rangeArray {: #infinity.http2.rangeArray_interface .doc-interface}

Extends: `Array<{firstOffset: number, lastOffset: number}>`

An array containing objects with data inside its properties.

### Properties:
- #### firstOffset 
  >Type: `number`. The start offset
- #### lastOffset
  >Type: `number`, optional. The end offset

---

## stringArray {: #infinity.http2.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array of strings.

---

## valuesArray {: #infinity.http2.valuesArray_interface .doc-interface}

Extends: `Array<{name: string, value: string}>`

An array containing objects with data inside its properties.

### Properties:
- #### name 
  >Type: `string`. The field name
- #### value
  >Type: `string`. The field value



