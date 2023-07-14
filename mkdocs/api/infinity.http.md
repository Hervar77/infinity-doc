# infinity.http

Povides HTTP client and server functionality.

Module: `infinity.http`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [client](#infinity.http.client_class)
- [server](#infinity.http.server_class)

<div class="doc-toc-heading">Namespaces:</div>

- [client](#infinity.http.client_namespace)
- [request](#infinity.http.request_namespace)
- [response](#infinity.http.response_namespace)
- [server](#infinity.http.server_namespace)

<div class="doc-toc-heading">Interfaces:</div>

- [cookiesArray](#infinity.http.cookiesArray_interface)
- [filesArray](#infinity.http.filesArray_interface)
- [formDataArray](#infinity.http.formDataArray_interface)
- [methodArray](#infinity.http.methodArray_interface)
- [paramArray](#infinity.http.paramArray_interface)
- [rangeArray](#infinity.http.rangeArray_interface)
- [stringArray](#infinity.http.stringArray_interface)
- [valuesArray](#infinity.http.valuesArray_interface)

</div>



---

<div class="doc-heading">Classes</div>

---

## client {: #infinity.http.client_class .doc-class}

Allows for your instance of INFINITY.JS to act as an http-client. Lets you send requests and receive data.

<div class="doc-toc" markdown="1">

**Properties:**

- [allowUnsafeLegacyRenegotiation](#infinity.http.client.allowUnsafeLegacyRenegotiation_property)
- [authMode](#infinity.http.client.authMode_property)
- [charset](#infinity.http.client.charset_property)
- [contentDisposition](#infinity.http.client.contentDisposition_property)
- [contentLength](#infinity.http.client.contentLength_property)
- [contentType](#infinity.http.client.contentType_property)
- [date](#infinity.http.client.date_property)
- [etag](#infinity.http.client.etag_property)
- [expires](#infinity.http.client.expires_property)
- [handleProtocolErrorContent](#infinity.http.client.handleProtocolErrorContent_property)
- [lastModified](#infinity.http.client.lastModified_property)
- [location](#infinity.http.client.location_property)
- [maxContentLength](#infinity.http.client.maxContentLength_property)
- [password](#infinity.http.client.password_property)
- [proxyPort](#infinity.http.client.proxyPort_property)
- [proxyServer](#infinity.http.client.proxyServer_property)
- [responseCode](#infinity.http.client.responseCode_property)
- [responseText](#infinity.http.client.responseText_property)
- [timeout](#infinity.http.client.timeout_property)
- [useLegacyServerConnect](#infinity.http.client.useLegacyServerConnect_property)
- [userAgent](#infinity.http.client.userAgent_property)
- [username](#infinity.http.client.username_property)
- [verifyServerCertificate](#infinity.http.client.verifyServerCertificate_property)

**Methods:**

- [constructor()](#infinity.http.client.constructor_function)
- [free()](#infinity.http.client.free_function)
- [get()](#infinity.http.client.get_function)
- [getAllRequestHeaders()](#infinity.http.client.getAllRequestHeaders_function)
- [getAllResponseHeaders()](#infinity.http.client.getAllResponseHeaders_function)
- [getFile()](#infinity.http.client.getFile_function)
- [getRequestHeader()](#infinity.http.client.getRequestHeader_function)
- [getResponseHeader()](#infinity.http.client.getResponseHeader_function)
- [getStream()](#infinity.http.client.getStream_function)
- [head()](#infinity.http.client.head_function)
- [jsonRpc()](#infinity.http.client.jsonRpc_function)
- [options()](#infinity.http.client.options_function)
- [patch()](#infinity.http.client.patch_function)
- [patchFile()](#infinity.http.client.patchFile_function)
- [patchStream()](#infinity.http.client.patchStream_function)
- [post()](#infinity.http.client.post_function)
- [postFile()](#infinity.http.client.postFile_function)
- [postMultipartFormData()](#infinity.http.client.postMultipartFormData_function)
- [postStream()](#infinity.http.client.postStream_function)
- [put()](#infinity.http.client.put_function)
- [putFile()](#infinity.http.client.putFile_function)
- [putStream()](#infinity.http.client.putStream_function)
- [remove()](#infinity.http.client.remove_function)
- [reset()](#infinity.http.client.reset_function)
- [setRequestHeader()](#infinity.http.client.setRequestHeader_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.http');

let myClient = new infinity.http.client();
let html = myClient.get('https://localhost');
console.debug(html);
//<!doctype html>
//<html lang="de_DE"...

```

---

**Properties**

---

### allowUnsafeLegacyRenegotiation {: #infinity.http.client.allowUnsafeLegacyRenegotiation_property .doc-property}

Type: `boolean`

Allows the deprecated ssl unsafe legacy renegotiation. This should be avoided and the server's ssl version should be fixed, instead. If that is not possible, then this option can be used to let the http client establish a connection nonetheless.

---

### authMode {: #infinity.http.client.authMode_property .doc-property}

Type: [`infinity.http.client.authMode`](#infinity.http.client.authMode_enum)

Specifies the authentification mode for the connection to the server.

---

### charset {: #infinity.http.client.charset_property .doc-property}

Type: [`infinity.http.client.charset`](#infinity.http.client.charset_enum)

Gets or sets the `charset` value of the `content-type` header.

---

### contentDisposition {: #infinity.http.client.contentDisposition_property .doc-property}

Type: `string`

Gets or sets the `Content-Disposition` header value.

---

### contentLength {: #infinity.http.client.contentLength_property .doc-property}

Type: `number`

Gets the `Content-Length` header value.

---

### contentType {: #infinity.http.client.contentType_property .doc-property}

Type: `string`

Gets or sets the `Content-Type` header value.

---

### date {: #infinity.http.client.date_property .doc-property}

Type: `number`

Gets the `Date` header value as a Unix-timestamp.

---

### etag {: #infinity.http.client.etag_property .doc-property}

Type: `string`

Gets the `Etag` header value.

---

### expires {: #infinity.http.client.expires_property .doc-property}

Type: `number`

Gets the `Expires` header value.


---

### handleProtocolErrorContent {: #infinity.http.client.handleProtocolErrorContent_property .doc-property}

Type: `boolean`

If set to `true`, then http error codes (http status codes 400 or higher) will no longer throw an exception.
Instead, the `responseCode` and `responseText` properties will contain the http status code and body.

---

### lastModified {: #infinity.http.client.lastModified_property .doc-property}

Type: `number`

Gets the `Last-Modified` header value as a Unix-timestamp.

---

### location {: #infinity.http.client.location_property .doc-property}

Type: `string`

Gets the `Location` header value.

---

### maxContentLength {: #infinity.http.client.maxContentLength_property .doc-property}

Type: `number`

If this property is set to a value other than zero (the default), then the client will truncate the server's response at the given maximum content length.

---

### password {: #infinity.http.client.password_property .doc-property}

Type: `string`

Sets the password for the chosen authentification type.

---

### proxyPort {: #infinity.http.client.proxyPort_property .doc-property}

Type: `number`

Sets the port number for the connection with a proxy.

---

### proxyServer {: #infinity.http.client.proxyServer_property .doc-property}

Type: `string`

Sets the IP or URL address for the connection with a proxy.

---

### responseCode {: #infinity.http.client.responseCode_property .doc-property}

Type: `number`

Gets the HTTP response code.

---

### responseText {: #infinity.http.client.responseText_property .doc-property}

Type: `string`

Gets the HTTP response text.

---

### timeout {: #infinity.http.client.timeout_property .doc-property}

Type: `number`

Sets the timeout for requests in milliseconds.

---

### useLegacyServerConnect {: #infinity.http.client.useLegacyServerConnect_property .doc-property}

Type: `boolean`

Allows deprecated, unsafe ssl connections. This should be avoided and the server's ssl version should be fixed, instead. If that is not possible, then this option can be used to let the http client establish a connection nonetheless.

---

### userAgent {: #infinity.http.client.userAgent_property .doc-property}

Type: `number`

Gets or sets the `userAgent` header value.

---

### username {: #infinity.http.client.username_property .doc-property}

Type: `string`

Sets the user name for the chosen authentification type.

---

### verifyServerCertificate {: #infinity.http.client.verifyServerCertificate_property .doc-property}

Type: `boolean`

This option will turn on ssl certificate validation, which will result in a connection error if the server's ssl certificate is not valid (e.g. self-signed).

---

**Methods**

---

### constructor() {: #infinity.http.client.constructor_function .doc-function}

Lets you create an INFINITY.JS HTTP client object instance. Doesn't accept parameters.

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.http');
let myClient = new infinity.http.client();
```

---

### free() {: #infinity.http.client.free_function .doc-function}

Frees the memory previously occupied by the HTTP client object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myClient.free();
```

---

### get() {: #infinity.http.client.get_function .doc-function}

Sends a `GET` HTTP request for the given URL, including the previously set HTTP-headers.

Signature:
```typescript
get( url: string ): string
```

Parameters:

- url: `string`
  >the URL to send the request for


Return type: `string`

Example:

```typescript
let html = myClient.get('https://greyhound-software.com');
console.debug(html);
```

---

### getAllRequestHeaders() {: #infinity.http.client.getAllRequestHeaders_function .doc-function}

Returns an array containing the names of all set HTTP request headers.

Signature:
```typescript
getAllRequestHeaders(): infinity.http.stringArray
```

Return type: [`infinity.http.stringArray`](#infinity.http.stringArray_interface)

Example:

```typescript
let html = myClient.get('https://greyhound-software.com');
let requestHeaders = myClient.getAllRequestHeaders();
console.debug(requestHeaders);
```

---

### getAllResponseHeaders() {: #infinity.http.client.getAllResponseHeaders_function .doc-function}

Returns an array containing the names of all set HTTP response headers.

Signature:
```typescript
getAllResponseHeaders(): infinity.http.stringArray
```

Return type: [`infinity.http.stringArray`](#infinity.http.stringArray_interface)

Example:

```typescript
let html = myClient.get('https://greyhound-software.com');
let responseHeaders = myClient.getAllResponseHeaders();
console.debug(responseHeaders);
```

---

### getFile() {: #infinity.http.client.getFile_function .doc-function}

Retrieves contents from the given URL and writes them to the file at the specified location.

Signature:
```typescript
getFile( url: string, fileName: string ): void
```

Parameters:

- url: `string`
  >the URL from which the contents have to be saved

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the retrieved contents


Example:

```typescript
myClient.getFile('https://greyhound-software.com', 'index.html');
```

---

### getRequestHeader() {: #infinity.http.client.getRequestHeader_function .doc-function}

Returns the value of the specified HTTP request header.

Signature:
```typescript
getRequestHeader( name: string ): string
```

Parameters:

- name: `string`
  >the name of the request header to be examined


Return type: `string`

Example:

```typescript
let requestHeader = myClient.getRequestHeader('User-Agent');
console.debug(requestHeader);
```

---

### getResponseHeader() {: #infinity.http.client.getResponseHeader_function .doc-function}

Returns the value of the specified HTTP response header.

Signature:
```typescript
getResponseHeader( name: string ): string
```

Parameters:

- name: `string`
  >the name of the response header to be examined


Return type: `string`

Example:

```typescript
let responseHeader = myClient.getResponseHeader('Expires');
console.debug(responseHeader);
```

---

### getStream() {: #infinity.http.client.getStream_function .doc-function}

Writes received data from the specified URL to a given stream after sending a GET-request.

Signature:
```typescript
getStream( url: string, stream: infinity.stream ): void
```

Parameters:

- url: `string`
  >the url to save from

- stream: [`infinity.stream`](infinity.stream.md)
  >the stream object to write to. See [infinity.stream](infinity.stream.md)


Example:

```typescript
myClient.getStream(url, stream);
```

---

### head() {: #infinity.http.client.head_function .doc-function}


Sends a HEAD-request to the given URL and returns the response.

Signature:
```typescript
head( url: string ): infinity.http.stringArray
```

Parameters:

- url: `string`
  >the URL to send the request to


Return type: [`infinity.http.stringArray`](#infinity.http.stringArray_interface)

Example:

```typescript
let headers = myClient.head('https://localhost');
console.debug(headers);
```

---

### jsonRpc() {: #infinity.http.client.jsonRpc_function .doc-function}

Sends a JSON-RPC call to the specified URL and returns the response.

Signature:
```typescript
jsonRpc( url: string, method: string, params?: infinity.http.paramArray, version?: infinity.http.client.version ): object
```

Parameters:

- url: `string`
  >the URL to send the request to

- method: `string`
  >the remote procedure to be executed on the other endpoint

- params: [`infinity.http.paramArray`](#infinity.http.paramArray_interface), optional
  >the parameters to be passed to the remote procedure

- version: [`infinity.http.client.version`](#infinity.http.client.version_enum), optional
  >specifies the version of JSON-RPC to use


Return type: `object`

Example:

```typescript
let result = myClient.jsonRpc('https://team.greyhound-software.com/json', 'RpcInfoServer.GetServerInfo', [], infinity.http.client.version.jsonRpc1_1);
console.debug(JSON.stringify(result));
```

---

### options() {: #infinity.http.client.options_function .doc-function}

Sends a OPTIONS request to the given URL.

Signature:
```typescript
options( url: string ): string;
```

Parameters:

- url: `string`
  >the URL to send the request to


Return type: `string`

Example:

```typescript
myClient.options('http://localhost/');
```

---

### post() {: #infinity.http.client.post_function .doc-function}

Sends a POST resquest to the given URL with the specified parameters.

Signature:
```typescript
post( url: string, value: string, encoding?: infinity.encoding ): string
```

Parameters:

- url: `string`
  >the URL to send the request to

- value: `string`
  >the POST request parameters

- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >the encoding for the request


Return type: `string`

Example:

```typescript
let response = myClient.post('http://localhost/', "postRequestDataString");
console.debug(response);
```

---

### postFile() {: #infinity.http.client.postFile_function .doc-function}

Sends a POST request for uploading the specified file to the given URL.

Signature:
```typescript
postFile( url: string, fileName: string ): string
```

Parameters:

- url: `string`
  >the URL to send the request to

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be uploaded


Return type: `string`

Example:

```typescript
let response = myClient.postFile('http://localhost/', "test.txt");
console.debug(response);
```

---

### postMultipartFormData() {: #infinity.http.client.postMultipartFormData_function .doc-function}

Sends a multipart/form-data POST request to the given URL.

Signature:
```typescript
postMultipartFormData( url: string, data: infinity.http.formDataArray ): string
```

Parameters:

- url: `string`
  >the URL to send the request to

- data: [`infinity.http.formDataArray`](#infinity.http.formDataArray_interface)
  >an array containing the data to be uploaded


Return type: `string`

Example:

```typescript
let formData = [ { fieldName: 'fieldName1', fileName:'test.txt', fieldValue: 'fieldValue1', charset: 'ISO-8859-1', contentType: 'text/html' } ];
let response = myClient.postMultipartFormData('http://localhost/', formData);
console.debug(response);

```

---

### postStream() {: #infinity.http.client.postStream_function .doc-function}

Sends a POST request for uploading the specified stream to the given URL.

Signature:
```typescript
postStream( url: string, stream: infinity.stream ): string
```

Parameters:

- url: `string`
  >the url to save from
- stream: [`infinity.stream`](infinity.stream.md)
  >the stream to be uploaded. See [infinity.stream](infinity.stream.md)


Return type: `string`

Example:

```typescript
myClient.postStream(url, stream);
```



---

### patch() {: #infinity.http.client.patch_function .doc-function}

Sends a PATCH resquest to the given URL with the specified parameters.

Signature:
```typescript
patch( url: string, value: string, encoding?: infinity.encoding ): string;
```

Parameters:

- url: `string`
  >the URL to send the request to

- value: `string`
  >the PATCH request parameters

- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >the encoding for the request


Return type: `string`

Example:

```typescript
let response = myClient.patch('http://localhost/', "patchRequestDataString");
console.debug(response);
```

---

### patchFile() {: #infinity.http.client.patchFile_function .doc-function}

Sends a PATCH request for uploading the specified file to the given URL.

Signature:
```typescript
patchFile( url: string, fileName: string ): string;
```

Parameters:

- url: `string`
  >the URL to send the request to

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be uploaded


Return type: `string`

Example:

```typescript
let response = myClient.patchFile('http://localhost/', "test.txt");
console.debug(response);
```

---

### patchStream() {: #infinity.http.client.patchStream_function .doc-function}

Sends a PATCH request for uploading the specified stream to the given URL.

Signature:
```typescript
patchStream( url: string, stream: infinity.stream ): string;
```

Parameters:

- url: `string`
  >the url to save from
- stream: [`infinity.stream`](infinity.stream.md)
  >the stream to be uploaded. See [infinity.stream](infinity.stream.md)


Return type: `string`

Example:

```typescript
myClient.patchStream(url, stream);
```

---

### put() {: #infinity.http.client.put_function .doc-function}

Sends a PUT resquest to the given URL with the specified parameters.

Signature:
```typescript
put( url: string, value: string, encoding?: infinity.encoding ): string;
```

Parameters:

- url: `string`
  >the URL to send the request to

- value: `string`
  >the PUT request parameters

- encoding: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum), optional
  >the encoding for the request


Return type: `string`

Example:

```typescript
let response = myClient.put('http://localhost/', "putRequestDataString");
console.debug(response);
```

---

### putFile() {: #infinity.http.client.putFile_function .doc-function}

Sends a PUT request for uploading the specified file to the given URL.

Signature:
```typescript
putFile( url: string, fileName: string ): string;
```

Parameters:

- url: `string`
  >the URL to send the request to

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be uploaded


Return type: `string`

Example:

```typescript
let response = myClient.putFile('http://localhost/', "test.txt");
console.debug(response);
```

---

### putStream() {: #infinity.http.client.putStream_function .doc-function}

Sends a PUT request for uploading the specified stream to the given URL.

Signature:
```typescript
putStream( url: string, stream: infinity.stream ): string;
```

Parameters:

- url: `string`
  >the url to save from
- stream: [`infinity.stream`](infinity.stream.md)
  >the stream to be uploaded. See [infinity.stream](infinity.stream.md)


Return type: `string`

Example:

```typescript
myClient.putStream(url, stream);
```

---

### remove() {: #infinity.http.client.remove_function .doc-function}

Sends a DELETE request to the given URL.

Signature:
```typescript
remove( url: string ): string;
```

Parameters:

- url: `string`
  >the URL to send the request to


Return type: `string`

Example:

```typescript
myClient.remove('http://localhost/');
```

---

### reset() {: #infinity.http.client.reset_function .doc-function}

Resets the current object to the state of a newly instantiated INFINITY.JS client object.

Signature:
```typescript
reset(): void;
```

Example:

```typescript
myClient.reset();
```

---

### setRequestHeader() {: #infinity.http.client.setRequestHeader_function .doc-function}

Sets the value of the specified header for future requests.

Signature:
```typescript
setRequestHeader( name: string, value: string ): void
```

Parameters:

- name: `string`
  >the name of the header to be set

- value: `string`
  >the value of the header to be set


Example:

```typescript
myClient.setRequestHeader('accept-encoding', 'gzip, deflate, br');
```


---

## server {: #infinity.http.server_class .doc-class}

Allows for your instance of INFINITY.JS to act as an HTTP-server. Lets you receive requests and send data. Can register handlers for static files, REST requests, the JSON-RPC protocol and API calls (require the simultaneous usage of [registerHandler()](#infinity.http.server.registerHandler_function) and [registerService()](#infinity.http.server.registerService_function)). JSON-RPC and REST handlers can be combined in one service. Supports the `range` HTTP header for streaming files. Supports the CalDAV, CardDAV and WebDAV protocol.

<div class="doc-toc" markdown="1">

**Methods:**

- [constructor()](#infinity.http.server.constructor_function)
- [registerHandler()](#infinity.http.server.registerHandler_function)
- [registerService()](#infinity.http.server.registerService_function)
- [setCertificate()](#infinity.http.server.setCertificate_function)
- [start()](#infinity.http.server.start_function)
- [stop()](#infinity.http.server.stop_function)
- [unregisterHandler()](#infinity.http.server.unregisterHandler_function)
- [unregisterService()](#infinity.http.server.unregisterService_function)

</div>


**Example for a static file server and status report functionality:**

```typescript
infinity.loadModule('infinity.http');

let myServer = new infinity.http.server(false, false, false, false, false, 80, 1024, 64, 104857600, 5.0);

myServer.registerHandler(infinity.http.server.handler.staticFile, '/', '../web/', 60.0, 256144);

myServer.registerHandler(infinity.http.server.handler.status, '/status');

myServer.start();

while (!infinity.terminated) {
  infinity.event.processQueue();
  infinity.sleep(25);
}

myServer.stop();
```
Folder structure:
```
+ example
  + ts
    - main.ts
  + web
    - index.html
```
Can be viewed in a webbrowser under, for example `http://localhost/status`, or by a GET-request.

---

**Example for a server with custom options:**

```typescript
infinity.loadModule('infinity.http');

let myServer = new infinity.http.server(false, false, false, false, false, 80, 1024, 64, 104857600, 5.0);

myServer.registerHandler(infinity.http.server.handler.custom, '/custom', '/custom.js');

myServer.start();

while (!infinity.terminated) {
  infinity.event.processQueue();
  infinity.sleep(25);
}

myServer.stop();
```

custom.ts:

```typescript
console.debug(infinity.http.request.httpAcceptEncoding);
infinity.http.response.contentType = 'text/plain; charset="utf-8"';
infinity.http.response.encoding = infinity.encoding.utf8;
infinity.http.response.contentText = 'Hello World! ü ö ä ß €';
```

Folder structure:
```
+ example
  + ts
    - main.ts
    - custom.ts
```

Can be viewed in a webbrowser under for example `http://localhost/`  or by a GET-request.

---

**Example for a JSON-RPC endpoint with a custom defined service:**

```typescript
infinity.loadModule('infinity.http');

let myServer = new infinity.http.server();

myServer.registerHandler(infinity.http.server.handler.jsonRpc, '/v1/jsonrpc');

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

Can be used by a POST-request
```json
{"jsonrpc": "2.0", "method": "system.getVersion"}
```
against, for example `http://localhost/v1/jsonrpc`.

---

**Example for a combined REST and JSON-RPC endpoint with a custom defined service:**

```typescript
infinity.loadModule('infinity.http');

let myServer = new infinity.http.server();

myServer.registerHandler(infinity.http.server.handler.staticFile, '/', '../web/');

myServer.registerHandler(infinity.http.server.handler.jsonRpc, '/v1/jsonrpc');

myServer.registerHandler(infinity.http.server.handler.rest, '/v1/rest');

myServer.registerService('users', 'users', 'users.js', [
  {name: 'add', params: ['user: object'], result: 'number', rest: 'post'},
  {name: 'put', params: ['user: object'], rest: 'put'},
  {name: 'get', params: ['id: number'], result: 'object', rest: 'get'},
  {name: 'list', result: 'array', rest: 'getList'},
  {name: 'remove', params: ['id: number'], rest: 'delete'}
]);

myServer.start();

while (!infinity.terminated) {
  infinity.event.processQueue();
  infinity.sleep(25);
}
```

users.ts:

```typescript
namespace users {

  export function add(user: object): number {
    console.debug('users.add: ' + JSON.stringify(user));
    return 1;
  }

  export function put(user: object): void {
    console.debug('users.put: ' + JSON.stringify(user));
  }

  export function get(id: number): object {
    console.debug('users.get: ' + id);
    return {id: 1, username: 'user1', name: 'The User Name'};
  }

  export function remove(id: number): void {
    console.debug('users:remove: ' + id);
  }

  export function list(): Array<object> {
    console.debug('users.list');
    let users = [];
    users.push({id: 1, username: 'user1', name: 'The User Name'});
    users.push({id: 2, username: 'user2', name: 'Some User Name'});
    users.push({id: 3, username: 'user3', name: 'Another User Name'});

    return users;
  }

}
```

Folder structure:
```
+ example
  + ts
    - main.ts
    - users.ts
```
Can be used by REST requests like `http://localhost/v1/rest/users/1` or JSON-RPC POST-requests like
```json
{"jsonrpc": "2.0", "method": "users.get", "params": [1], "id": 1}
```
against, for example `http://localhost/v1/jsonrpc`.

---

**Methods**

---

### constructor() {: #infinity.http.server.constructor_function .doc-function}

Lets you create an INFINITY.JS HTTP server object instance. Takes the most important parameters for the server to function.

Signature:
```typescript
constructor( ssl?: boolean, verifyCertificate?: boolean, allowCrossOrigin?: boolean, compress?: boolean, accessLog?: boolean, port?: number, maxConnections?: number, poolSize?: number, maxContentLength?: number, slowRequestTime?: number, minProtocol?: infinity.http.server.protocol, maxProtocol?: infinity.http.server.protocol, maxRateCounter?: number )
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

- minProtocol: [`infinity.http.server.protocol`](#infinity.http.server.protocol_enum), optional
  >the minimum SSL/TLS version to support

- maxProtocol: [`infinity.http.server.protocol`](#infinity.http.server.protocol_enum), optional
  >the maximum SSL/TLS version to support

- maxRateCounter: `number`, optional
  >the maximum number of requests that a client can make in a specific time frame for rate limiting


Example:

```typescript
infinity.loadModule('infinity.http');
let myServer = new infinity.http.server(false, false, false, false, true, 80, 1024, 64, 1024 * 1024, 5.0);
```

---

### registerHandler() {: #infinity.http.server.registerHandler_function .doc-function}

Registers a handler for client requests, invoking additional resources, including caching functionality.

Signature:
```typescript
registerHandler( handler: infinity.http.server.handler, path: string, alias: string, expire?: number, maxCacheSize?: number, headers?: infinity.http.headerArray, limit?: number, period?: number, delay?: number ): void
```

Parameters:

- handler: [`infinity.http.server.handler`](#infinity.http.server.handler_enum)
  >the type of handler to register

- path: `string`
  >the request path for the client

- alias: `string`
  >the path to a local folder or file with contents or defined routines to be served corresponding to the client request

- expire: `number`, optional
  >the cache expiration time in seconds. After the specified period the file will have to be examined for changes at the next call.

- maxCacheSize: `number`, optional
  >the cache threshold in bytes. Files with sizes exceeding the specified number will not be cached

- headers: [`infinity.http.headerArray`](#infinity.http.headerArray_interface)
  >the headers to be sent with the response

- limit: `number`, optional
  >the maximum number of requests that can be made in the defined period. Used for rate limiting.

- period: `number`, optional
  >the rate limit time period in seconds

- delay: `number`, optional
  >the "cool down" period in seconds that a client must wait after hitting the rate limit before making new requests


Example:

```typescript
myServer.registerHandler(infinity.http.server.handler.status, '/status');
http.registerHandler(infinity.http.server.handler.staticFile, '/', '../web/', 60.0, 256144, [{name: "Cache-Control", value: "must-revalidate"}]);
```

Folder structure:
```
+ example
  + ts
    - main.ts
  + web
    - index.html
```

---

### registerService() {: #infinity.http.server.registerService_function .doc-function}

Registers a service, allowing requests for execution of custom defined methods.

Signature:
```typescript
registerService( name: string, namespace: string, path: string, methods: infinity.http.methodArray ): void
```

Parameters:

- name: `string`
  >the name of the service

- namespace: `string`
  >the namespace for the service

- path: `string`
  >the path to the file with the custom defined methods

- methods: [`infinity.http.methodArray`](#infinity.http.methodArray_interface)
  >an array of the method names for the service. Parameters for return types, REST methods and HTTP environment can also be specified


Example:

```typescript
myServer.registerHandler(infinity.http.server.handler.jsonRpc, '/v1/jsonrpc');
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

### setCertificate() {: #infinity.http.server.setCertificate_function .doc-function}

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

### start() {: #infinity.http.server.start_function .doc-function}

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

### stop() {: #infinity.http.server.stop_function .doc-function}

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

### unregisterHandler() {: #infinity.http.server.unregisterHandler_function .doc-function}

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

### unregisterService() {: #infinity.http.server.unregisterService_function .doc-function}

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

<div class="doc-heading">Namespaces</div>

---

## infinity.http.client {: #infinity.http.client_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Enums:</div>

- [authMode](#infinity.http.client.authMode_enum)
- [version](#infinity.http.client.version_enum)

</div>

---

<div class="doc-heading">Enums</div>

---

### infinity.http.client.authMode {: #infinity.http.client.authMode_enum .doc-enum}

Values:

- none: `0`
  >none of the below

- basic: `1`
  >basic access authentication

- digest: `2`
  >digest access authentication

Example:

```typescript
infinity.loadModule('infinity.http');
let authMode = infinity.http.client.authMode.none;
```

---

### infinity.http.client.version {: #infinity.http.client.version_enum .doc-enum}

Values:

- jsonRpc1_1: `0`
  >JSON-RPC version 1.1

- jsonRpc2_0: `1`
  >JSON-RPC version 2.0

Example:

```typescript
infinity.loadModule('infinity.http');
let version = infinity.http.client.version.jsonRpc1_1;
```





---

## infinity.http.request {: #infinity.http.request_namespace .doc-namespace}

Read-only properties containing information from the incoming HTTP request.

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Properties:</div>

- [contentBoundary](#infinity.http.request.contentBoundary_property)
- [contentDisposition](#infinity.http.request.contentDisposition_property)
- [contentEncoding](#infinity.http.request.contentEncoding_property)
- [contentFilename](#infinity.http.request.contentFilename_property)
- [contentLength](#infinity.http.request.contentLength_property)
- [contentText](#infinity.http.request.contentText_property)
- [contentTransferEncoding](#infinity.http.request.contentTransferEncoding_property)
- [contentType](#infinity.http.request.contentType_property)
- [cookies](#infinity.http.request.cookies_property)
- [destination](#infinity.http.request.destination_property)
- [files](#infinity.http.request.files_property)
- [gatewayInterface](#infinity.http.request.gatewayInterface_property)
- [get](#infinity.http.request.get_property)
- [httpAccept](#infinity.http.request.httpAccept_property)
- [httpAcceptCharSet](#infinity.http.request.httpAcceptCharSet_property)
- [httpAcceptEncoding](#infinity.http.request.httpAcceptEncoding_property)
- [httpAcceptLanguage](#infinity.http.request.httpAcceptLanguage_property)
- [httpAuthorization](#infinity.http.request.httpAuthorization_property)
- [httpConnection](#infinity.http.request.httpConnection_property)
- [httpHost](#infinity.http.request.httpHost_property)
- [httpIfMatch](#infinity.http.request.httpIfMatch_property)
- [httpIfModifiedSince](#infinity.http.request.httpIfModifiedSince_property)
- [httpIfNonMatch](#infinity.http.request.httpIfNonMatch_property)
- [httpReferer](#infinity.http.request.httpReferer_property)
- [httpUserAgent](#infinity.http.request.httpUserAgent_property)
- [method](#infinity.http.request.method_property)
- [pathInfo](#infinity.http.request.pathInfo_property)
- [pathTranslated](#infinity.http.request.pathTranslated_property)
- [post](#infinity.http.request.post_property)
- [range](#infinity.http.request.range_property)
- [remoteAddr](#infinity.http.request.remoteAddr_property)
- [remoteHost](#infinity.http.request.remoteHost_property)
- [remoteIdent](#infinity.http.request.remoteIdent_property)
- [remotePort](#infinity.http.request.remotePort_property)
- [remoteUser](#infinity.http.request.remoteUser_property)
- [scgi](#infinity.http.request.scgi_property)
- [scheme](#infinity.http.request.scheme_property)
- [scriptFilename](#infinity.http.request.scriptFilename_property)
- [scriptName](#infinity.http.request.scriptName_property)
- [serverAddr](#infinity.http.request.serverAddr_property)
- [serverAdmin](#infinity.http.request.serverAdmin_property)
- [serverName](#infinity.http.request.serverName_property)
- [serverPort](#infinity.http.request.serverPort_property)
- [serverProtocol](#infinity.http.request.serverProtocol_property)
- [serverSignature](#infinity.http.request.serverSignature_property)
- [serverSoftware](#infinity.http.request.serverSoftware_property)
- [uri](#infinity.http.request.uri_property)

</div>

---

<div class="doc-heading">Properties</div>

---

### contentBoundary {: #infinity.http.request.contentBoundary_property .doc-readonly}

Type: `string`


---

### contentDisposition {: #infinity.http.request.contentDisposition_property .doc-readonly}

Type: `string`

Gets the `content-disposition` HTTP-header value.

---

### contentEncoding {: #infinity.http.request.contentEncoding_property .doc-readonly}

Type: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum)

Gets the `content-encoding` HTTP-header value.

---

### contentFilename {: #infinity.http.request.contentFilename_property .doc-readonly}

Type: `string`

Gets the filename parameter of the `Content-Disposition` HTTP-header value.

---

### contentLength {: #infinity.http.request.contentLength_property .doc-readonly}

Type: `number`

Gets the `content-length` HTTP-header value.

---

### contentText {: #infinity.http.request.contentText_property .doc-readonly}

Type: `string`

Gets the contents of the body of the request.

---

### contentTransferEncoding {: #infinity.http.request.contentTransferEncoding_property .doc-readonly}

Type: `string`

Gets the `transfer-encoding` HTTP-header value.

---

### contentType {: #infinity.http.request.contentType_property .doc-readonly}

Type: `string`

Gets the `content-type` HTTP-header value.

---

### cookies {: #infinity.http.request.cookies_property .doc-readonly}

Type: [`infinity.http.cookiesArray`](#infinity.http.cookiesArray_interface)

Gets cookie data.

---

### destination {: #infinity.http.request.destination_property .doc-readonly}

Type: `string`

Gets the destination of the HTTP request

---


### files {: #infinity.http.request.files_property .doc-readonly}

Type: [`infinity.http.filesArray`](#infinity.http.filesArray_interface)

Gets information about the files sent with the HTTP request.

---

### gatewayInterface {: #infinity.http.request.gatewayInterface_property .doc-readonly}

Type: `string`

Gets the name and version of the gateway interface (only during SCGI operations).

---

### get {: #infinity.http.request.get_property .doc-readonly}

Type: [`infinity.http.valuesArray`](#infinity.http.valuesArray_interface)

Gets the information out of the GET-part of the HTTP request.

---

### httpAccept {: #infinity.http.request.httpAccept_property .doc-readonly}

Type: `string`

Gets the `accept` HTTP-header value.

---

### httpAcceptCharSet {: #infinity.http.request.httpAcceptCharSet_property .doc-readonly}

Type: `string`

Gets the `accept-charset` HTTP-header value.

---

### httpAcceptEncoding {: #infinity.http.request.httpAcceptEncoding_property .doc-readonly}

Type: `string`

Gets the `accept-encoding` HTTP-header value.

---

### httpAcceptLanguage {: #infinity.http.request.httpAcceptLanguage_property .doc-readonly}

Type: `string`

Gets the `accept-language` HTTP-header value.

---

### httpAuthorization {: #infinity.http.request.httpAuthorization_property .doc-readonly}

Type: `string`

Gets the `authorization` HTTP-header value.

---

### httpConnection {: #infinity.http.request.httpConnection_property .doc-readonly}

Type: `string`

Gets the `connection` HTTP-header value.

---

### httpHost {: #infinity.http.request.httpHost_property .doc-readonly}

Type: `string`

Gets the `Host` value of the HTTP request.

---

### httpIfMatch {: #infinity.http.request.httpIfMatch_property .doc-readonly}

Type: `string`

Gets the `if-match` HTTP-header value.

---

### httpIfModifiedSince {: #infinity.http.request.httpIfModifiedSince_property .doc-readonly}

Type: `number`

Gets the `if-modified-since` HTTP-header value.

---

### httpIfNonMatch {: #infinity.http.request.httpIfNonMatch_property .doc-readonly}

Type: `string`

Gets the `if-none-match` HTTP-header value.

---

### httpReferer {: #infinity.http.request.httpReferer_property .doc-readonly}

Type: `string`

Gets the `referer` HTTP-header value.

---

### httpUserAgent {: #infinity.http.request.httpUserAgent_property .doc-readonly}

Type: `string`

Gets the `user-agent` HTTP-header value.

---

### method {: #infinity.http.request.method_property .doc-readonly}

Type: `string`

Gets the HTTP request method.

---

### pathInfo {: #infinity.http.request.pathInfo_property .doc-readonly}

Type: `string`

Reports the value of the path information (if any) of the URL specified in the HTTP request message.

---

### pathTranslated {: #infinity.http.request.pathTranslated_property .doc-readonly}

Type: `string`

Represents a translation of the `PathInfo` property to a fully qualified path on the Web server.

---

### post {: #infinity.http.request.post_property .doc-readonly}

Type: [`infinity.http.valuesArray`](#infinity.http.valuesArray_interface)

Gets the information out of the POST-part of the HTTP request.

---

### range {: #infinity.http.request.range_property .doc-readonly}

Type: [`infinity.http.rangeArray`](#infinity.http.rangeArray_interface)

Gets the `range` HTTP-header value.

---

### remoteAddr {: #infinity.http.request.remoteAddr_property .doc-readonly}

Type: `string`

Gets the IP address of the remote machine making this request.

---

### remoteHost {: #infinity.http.request.remoteHost_property .doc-readonly}

Type: `string`

Gets the hostname of the remote machine making this request (only during SCGI operations).

---

### remoteIdent {: #infinity.http.request.remoteIdent_property .doc-readonly}

Type: `string`

Gets the remote user name retrieved from the server (only during SCGI operations).

---

### remotePort {: #infinity.http.request.remotePort_property .doc-readonly}

Type: `number`

Gets the port over which the remote machine communicates.

---

### remoteUser {: #infinity.http.request.remoteUser_property .doc-readonly}

Type: `string`

Gets the authenticated remote user name (only during SCGI operations).

---

### scgi {: #infinity.http.request.scgi_property .doc-readonly}

Type: `boolean`

Indicates whether scgi is being used.

---

### scheme {: #infinity.http.request.scheme_property .doc-readonly}

Type: `string`

Gets the `:scheme:` HTTP-header value.

---

### scriptFilename {: #infinity.http.request.scriptFilename_property .doc-readonly}

Type: `string`

Gets the filename of the script being executed (only during SCGI operations).

---

### scriptName {: #infinity.http.request.scriptName_property .doc-readonly}

Type: `string`

Gets the name of the script being executed.

---

### serverAddr {: #infinity.http.request.serverAddr_property .doc-readonly}

Type: `string`

Gets the local server address.

---

### serverAdmin {: #infinity.http.request.serverAdmin_property .doc-readonly}

Type: `string`

Gets or sets server administrator information (only during SCGI operations).

---

### serverName {: #infinity.http.request.serverName_property .doc-readonly}

Type: `string`

Gets the domain name of the local server.

---

### serverPort {: #infinity.http.request.serverPort_property .doc-readonly}

Type: `number`

Gets the port over which the local server communicates.

---

### serverProtocol {: #infinity.http.request.serverProtocol_property .doc-readonly}

Type: `string`

Gets the protocol over which the local server communicates.

---

### serverSignature {: #infinity.http.request.serverSignature_property .doc-readonly}

Type: `string`

Gets the signature of the local server (only during SCGI operations).

---

### serverSoftware {: #infinity.http.request.serverSoftware_property .doc-readonly}

Type: `string`

Gets the name representing the local server software.

---

### uri {: #infinity.http.request.uri_property .doc-readonly}

Type: `string`

Gets the URI of the HTTP request.



---

## infinity.http.response {: #infinity.http.response_namespace .doc-namespace}

The properties of the outgoing response from the INFINITY.JS server. Can be read and set. Undefined, unless used inside the file specified in the "alias" parameter of [registerHandler()](#infinity.http.server.registerHandler_function).

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Properties:</div>

- [acceptRanges](#infinity.http.response.acceptRanges_property)
- [cacheControl](#infinity.http.response.cacheControl_property)
- [code](#infinity.http.response.code_property)
- [contentEncoding](#infinity.http.response.contentEncoding_property)
- [contentFilename](#infinity.http.response.contentFilename_property)
- [contentLanguage](#infinity.http.response.contentLanguage_property)
- [contentRange](#infinity.http.response.contentRange_property)
- [contentStream](#infinity.http.response.contentStream_property)
- [contentText](#infinity.http.response.contentText_property)
- [contentType](#infinity.http.response.contentType_property)
- [cookies](#infinity.http.response.cookies_property)
- [date](#infinity.http.response.date_property)
- [encoding](#infinity.http.response.encoding_property)
- [etag](#infinity.http.response.etag_property)
- [expires](#infinity.http.response.expires_property)
- [headers](#infinity.http.response.headers_property)
- [ignoreSlowRequest](#infinity.http.response.ignoreSlowRequest_property)
- [lastModified](#infinity.http.response.lastModified_property)
- [location](#infinity.http.response.location_property)
- [pragma](#infinity.http.response.pragma_property)
- [proxyAuthenticate](#infinity.http.response.proxyAuthenticate_property)
- [refresh](#infinity.http.response.refresh_property)
- [server](#infinity.http.response.server_property)
- [transferEncoding](#infinity.http.response.transferEncoding_property)
- [wwwAuthenticate](#infinity.http.response.wwwAuthenticate_property)

</div>

---

<div class="doc-heading">Properties</div>

---

### acceptRanges {: #infinity.http.response.acceptRanges_property}

Type: `string`

Gets or sets the `accept-ranges` HTTP-header value.

---

### cacheControl {: #infinity.http.response.cacheControl_property}

Type: `string`

Gets or sets the `cache-control` HTTP-header value.

---

### code {: #infinity.http.response.code_property}

Type: `number`

Gets or sets the HTTP response code.

---

### contentEncoding {: #infinity.http.response.contentEncoding_property}

Type: `string`

Gets or sets the `content-encoding` HTTP-header value.

---

### contentFilename {: #infinity.http.response.contentFilename_property}

Type: `string`

Gets or sets the filename parameter of the `content-disposition` HTTP-header value.

---

### contentLanguage {: #infinity.http.response.contentLanguage_property}

Type: `string`

Gets or sets the `content-language` HTTP-header value.

---

### contentRange {: #infinity.http.response.contentRange_property}

Type: `string`

Gets or sets the `content-range` HTTP-header value.

---

### contentStream {: #infinity.http.response.contentStream_property}

Type: `infinity.stream`

Gets or sets the contents of the body of the response using a [infinity.stream](infinity.stream.md).

---

### contentText {: #infinity.http.response.contentText_property}

Type: `string`

Gets or sets the contents of the body of the response.

---

### contentType {: #infinity.http.response.contentType_property}

Type: `string`

Gets or sets the `content-type` HTTP-header value.

---

### cookies {: #infinity.http.response.cookies_property}

Type: [`infinity.http.cookiesArray`](#infinity.http.cookiesArray_interface)

Gets or sets cookie data.

---

### date {: #infinity.http.response.date_property}

Type: `number`

Gets or sets the `date` HTTP-header value.

---

### encoding {: #infinity.http.response.encoding_property}

Type: [`infinity.encoding`](infinity.encoding.md#infinity.encoding_enum)

Gets or sets the encoding of the HTTP response.

---

### etag {: #infinity.http.response.etag_property}

Type: `string`

Gets or sets the `etag` HTTP-header value.

---

### expires {: #infinity.http.response.expires_property}

Type: `number`

Gets or sets the `expires` HTTP-header value.

---

### headers {: #infinity.http.response.headers_property}

Type: [`infinity.http.valuesArray`](#infinity.http.valuesArray_interface)

Gets or sets additional headers inside a [valuesArray](#infinity.http.valuesArray_interface).

---

### ignoreSlowRequest {: #infinity.http.response.ignoreSlowRequest_property}

Type: `boolean`

Gets or sets the setting for not logging the request if it takes longer than the slowRequestTime setting, set during the server instance creation.

---

### lastModified {: #infinity.http.response.lastModified_property}

Type: `number`

Gets or sets the `last-modified` HTTP-header value.

---

### location {: #infinity.http.response.location_property}

Type: `string`

Gets or sets the `location` HTTP-header value.

---

### pragma {: #infinity.http.response.pragma_property}

Type: `string`

Gets or sets the `pragma` HTTP-header value.

---

### proxyAuthenticate {: #infinity.http.response.proxyAuthenticate_property}

Type: `string`

Gets or sets the `proxy-authenticate` HTTP-header value.

---

### refresh {: #infinity.http.response.refresh_property}

Type: `string`

Gets or sets the undocumented `refresh` HTTP-header value.

---

### server {: #infinity.http.response.server_property}

Type: `string`

Gets or sets the `server` HTTP-header value.

---

### transferEncoding {: #infinity.http.response.transferEncoding_property}

Type: `string`

Gets or sets the `transfer-encoding` HTTP-header value.

---

### wwwAuthenticate {: #infinity.http.response.wwwAuthenticate_property}

Type: `string`

Gets or sets the `WWW-Authenticate` HTTP-header value.



---

## infinity.http.server {: #infinity.http.server_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Enums:</div>

- [handler](#infinity.http.server.handler_enum)
- [protocol](#infinity.http.server.protocol_enum)

</div>


---

<div class="doc-heading">Enums</div>

---

### infinity.http.server.handler {: #infinity.http.server.handler_enum .doc-enum}

Values:

- custom: `0`
  >a custom handler to be defined in a file, specified in the third function parameter of [registerHandler()](#infinity.http.server.registerHandler_function)

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
infinity.loadModule('infinity.http');
let handler = infinity.http.server.handler.custom;
```



---

### infinity.http.server.protocol {: #infinity.http.server.protocol_enum .doc-enum}

Values:

- tls1_0: `2`
  >specifies the usage of TLS 1.0

- tls1_1: `3`
  >specifies the usage of TLS 1.1

- tls1_2: `4`
  >specifies the usage of TLS 1.2

- tls1_3: `5`
  >specifies the usage of TLS 1.3

Example:

```typescript
infinity.loadModule('infinity.http');
let protocol = infinity.http.server.protocol.tls1_2;
```





---

<div class="doc-heading">Interfaces</div>

---

## cookiesArray {: #infinity.http.cookiesArray_interface .doc-interface}

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

## filesArray {: #infinity.http.filesArray_interface .doc-interface}

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

## formDataArray {: #infinity.http.formDataArray_interface .doc-interface}

Extends: `Array<{fieldName: string, fileName: string, fieldValue: string, charset: string, contentType: string}>`

An array containing objects with data inside its properties.

### Properties:
- #### fieldName
  >Type: `string`. The name of a form field
- #### fileName
  >Type: `string`. The name of a file attachment transmitted with the form data
- #### fieldValue
  >Type: `string`. The value of a form field
- #### charset
  >Type: `string`. The character encoding of the transmission
- #### contentType
  >Type: `string`. The MIME-Type of the transmission

---

## headerArray {: #infinity.http.headerArray_interface .doc-interface}

Extends: ` Array<{name: string, value: string}>{}`

An array of objects containing name-value string pairs.

---

## methodArray {: #infinity.http.methodArray_interface .doc-interface}

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
  >Type: `boolean`, optional.  If set to true, the [`infinity.http.request`](#infinity.http.request_namespace) values will be provided.

---

## paramArray {: #infinity.http.paramArray_interface .doc-interface}

Extends: `Array<any>`

An array of data of any type.

---

## rangeArray {: #infinity.http.rangeArray_interface .doc-interface}

Extends: `Array<{firstOffset: number, lastOffset: number}>`

An array containing objects with data inside its properties.

### Properties:
- #### firstOffset
  >Type: `number`. The start offset
- #### lastOffset
  >Type: `number`, optional. The end offset

---

## stringArray {: #infinity.http.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array of strings.

---

## valuesArray {: #infinity.http.valuesArray_interface .doc-interface}

Extends: `Array<{name: string, value: string}>`

An array containing objects with data inside its properties.

### Properties:
- #### name
  >Type: `string`. The field name
- #### value
  >Type: `string`. The field value



