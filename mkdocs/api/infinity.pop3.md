# infinity.pop3

Module: `infinity.pop3`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [client](#infinity.pop3.client_class)
- [server](#infinity.pop3.server_class)

<div class="doc-toc-heading">Namespaces:</div>

- [client](#infinity.pop3.client_namespace)
- [server](#infinity.pop3.server_namespace)
- [session](#infinity.pop3.session_namespace)

<div class="doc-toc-heading">Interfaces:</div>

- [itemArray](#infinity.pop3.itemArray_interface)
- [listArray](#infinity.pop3.listArray_interface)
- [uidlArray](#infinity.pop3.uidlArray_interface)

</div>

The `infinity.pop3` namespace contains classes for accessing POP3 email servers as a [client](#infinity.pop3.client_namespace) as well as building your own POP3 [server](#infinity.pop3.server_namespace).

---

<div class="doc-heading">Classes</div>

---

## client {: #infinity.pop3.client_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [allowUnsafeLegacyRenegotiation](#infinity.pop3.client.allowUnsafeLegacyRenegotiation_property)
- [authMode](#infinity.pop3.client.authMode_property)
- [encryptMode](#infinity.pop3.client.encryptMode_property)
- [host](#infinity.pop3.client.host_property)
- [password](#infinity.pop3.client.password_property)
- [port](#infinity.pop3.client.port_property)
- [timeout](#infinity.pop3.client.timeout_property)
- [useLegacyServerConnect](#infinity.pop3.client.useLegacyServerConnect_property)
- [username](#infinity.pop3.client.username_property)
- [verifyServerCertificate](#infinity.pop3.client.verifyServerCertificate_property)

**Methods:**

- [constructor()](#infinity.pop3.client.constructor_function)
- [connect()](#infinity.pop3.client.connect_function)
- [count()](#infinity.pop3.client.count_function)
- [delete()](#infinity.pop3.client.delete_function)
- [disconnect()](#infinity.pop3.client.disconnect_function)
- [free()](#infinity.pop3.client.free_function)
- [list()](#infinity.pop3.client.list_function)
- [retrieve()](#infinity.pop3.client.retrieve_function)
- [size()](#infinity.pop3.client.size_function)
- [top()](#infinity.pop3.client.top_function)
- [uidl()](#infinity.pop3.client.uidl_function)

</div>

You can use the `infinity.pop3.client` object to access a POP3 server and retrieve messages from it.
The first thing you need to do is set the [`host`](#infinity.pop3.client.host_property), [`port`](#infinity.pop3.client.port_property) and [`encryptMode`](#infinity.pop3.client.encryptMode_property) properties to specify how to connect to the server.
Then you'll usually need to set the [`authMode`](#infinity.pop3.client.authMode_property), [`username`](#infinity.pop3.client.username_property) and [`password`](#infinity.pop3.client.password_property) properties to specify how to authenticate yourself towards the server.
You can also set the [`timeout`](#infinity.pop3.client.timeout_property) to limit the time that the client will try to connect to the server.

After setting the properties, you can use the [`connect()`](#infinity.pop3.client.connect_function) method to establish a connection to the POP3 server, followed by calls to the other methods to list or retrieve messages.
Make sure to call the [`free()`](#infinity.pop3.client.free_function) nethod when finished, to release the memory allocated by the client object.

Example:

```typescript
infinity.loadModule('infinity.pop3');
let myClient = new infinity.pop3.client();

try {
  myClient.host = 'pop.gmail.com';
  myClient.port = 995;
  myClient.encryptMode = infinity.pop3.client.encryptMode.sslTls;
  myClient.authMode = infinity.pop3.client.authMode.userPass;
  myClient.username = 'youraccount@gmail.com';
  myClient.password = 'yourpassword';

  myClient.connect();
  console.debug(myClient.list());
  console.debug(myClient.retrieve(1));
  myClient.disconnect();
} finally {
  myClient.free();
}
```

---

**Properties**

---

### allowUnsafeLegacyRenegotiation {: #infinity.pop3.client.allowUnsafeLegacyRenegotiation_property .doc-property}

Type: `boolean`

Allows the deprecated ssl unsafe legacy renegotiation. This should be avoided and the server's ssl version should be fixed, instead. If that is not possible, then this option can be used to let the POP3 client establish a connection nonetheless.

---

### authMode {: #infinity.pop3.client.authMode_property .doc-property}

Type: `infinity.pop3.client.authMode`

Gets and sets the authorization mode for the POP3 client to use, according to [`infinity.pop3.client.authMode`](#infinity.pop3.client.authMode_enum)

---

### encryptMode {: #infinity.pop3.client.encryptMode_property .doc-property}

Type: `infinity.pop3.client.encryptMode`

Gets and sets the encryption mode for the POP3 client to use according to [`infinity.pop3.client.encryptMode`](#infinity.pop3.client.encryptMode_enum)

---

### host {: #infinity.pop3.client.host_property .doc-property}

Type: `string`

Gets and sets the POP3 server address to connect to.

---

### password {: #infinity.pop3.client.password_property .doc-property}

Type: `string`

Gets and sets the password for authorization.

---

### port {: #infinity.pop3.client.port_property .doc-property}

Type: `number`

Gets and sets the communication port of the POP3 server.

---

### timeout {: #infinity.pop3.client.timeout_property .doc-property}

Type: `number`

Gets and sets the connection timeout in milliseconds.

---

### useLegacyServerConnect {: #infinity.pop3.client.useLegacyServerConnect_property .doc-property}

Type: `boolean`

Allows deprecated, unsafe ssl connections. This should be avoided and the server's ssl version should be fixed, instead. If that is not possible, then this option can be used to let the POP3 client establish a connection nonetheless.

---

### useLegacyServerConnect {: #infinity.pop3.client.useLegacyServerConnect_property .doc-property}

Type: `boolean`

Allows deprecated, unsafe ssl connections. This should be avoided and the server's ssl version should be fixed, instead. If that is not possible, then this option can be used to let the POP3 client establish a connection nonetheless.

---

### username {: #infinity.pop3.client.username_property .doc-property}

Type: `string`

Gets and sets the username for authorization.

---

### verifyServerCertificate {: #infinity.pop3.client.verifyServerCertificate_property .doc-property}

Type: `boolean`

This option will turn on ssl certificate validation, which will result in a connection error if the server's ssl certificate is not valid (e.g. self-signed).

---

**Methods**

---

### constructor() {: #infinity.pop3.client.constructor_function .doc-function}

Lets you create an INFINITY.JS POP3 client object instance. Doesn't accept parameters.

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.pop3');
let myClient = new infinity.pop3.client();
```

---

### connect() {: #infinity.pop3.client.connect_function .doc-function}

Connects to the POP3 server. The initial [properties](#infinity.pop3.client.authMode_property) should be set by the time connect() is called.

Signature:
```typescript
connect(): void
```

Example:

```typescript
myClient.connect();
```

---

### count() {: #infinity.pop3.client.count_function .doc-function}

Returns the number of new messages on the POP3 server.

Signature:
```typescript
count(): number
```

Return type: `number`

Example:

```typescript
let newMessagesCount = myClient.count();
```

---

### delete() {: #infinity.pop3.client.delete_function .doc-function}

Deletes a message from the POP3 server.

Signature:
```typescript
delete( msgNum: number ): boolean
```

Parameters:

- msgNum: ``
  >The number of the message to delete.


Return type: `boolean`

Example:

```typescript
myClient.delete(1);
```

---

### disconnect() {: #infinity.pop3.client.disconnect_function .doc-function}

Disconnects from the server.

Signature:
```typescript
disconnect(): void
```

Example:

```typescript
myClient.disconnect();
```

---

### free() {: #infinity.pop3.client.free_function .doc-function}

Frees the memory previously occupied by the POP3 client object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myClient.free();
```

---

### list() {: #infinity.pop3.client.list_function .doc-function}

Returns a [`infinity.pop3.listArray`](#infinity.pop3.listArray_interface) of new messages on the POP3 server.

Signature:
```typescript
list( msgNum?: number ): infinity.pop3.listArray
```

Parameters:

- msgNum: `number`, optional
  >The number of the message for which to return list info. If unspecified, a list of all messages will be returned.



Return type: [`infinity.pop3.listArray`](#infinity.pop3.listArray_interface)

Example:

```typescript
let messageList = myClient.list();
console.debug(messageList[0]['size']);
```

---

### retrieve() {: #infinity.pop3.client.retrieve_function .doc-function}

Retrieves a message from the server.

Signature:
```typescript
retrieve( msgNum: number, fileName?: string ): string
```

Parameters:

- msgNum: `number`
  >The number of the message to retrieve.

- fileName: `string`, optional
  >If a filename is specified, then the message will be saved to that file. The filename can be relative (location relative to the folder with the used INFINITY.JS executable file) or an absolute path.


Return type: `string`

Example:

```typescript
let messageText = myClient.retrieve(1);
myClient.retrieve(msgNum, fileName);
```

---

### size() {: #infinity.pop3.client.size_function .doc-function}

Returns the size of the specified message in bytes.

Signature:
```typescript
size( msgNum?: number ): number
```

Parameters:

- msgNum: `number`, optional
  >The number of the message to examine.


Return type: `number`

Example:

```typescript
myClient.size();
```

---

### top() {: #infinity.pop3.client.top_function .doc-function}

Retrieves the headers of the specified message.

Signature:
```typescript
top( msgNum: number, maxLines?: number, fileName?: string ): string
```

Parameters:

- msgNum: `number`
  >The number of the message to retrieve.

- maxLines: `number`
  >The number of content lines of the message to retrieve (in addition to the message headers).

- fileName: `string`, optional
  >If a filename is specified, then the message headers will be saved to that file. The filename can be relative (location relative to the folder with the used INFINITY.JS executable file) or an absolute path.


Return type: `string`

Example:

```typescript
myClient.top(msgNum);
myClient.top(msgNum, fileName);
```

---

### uidl() {: #infinity.pop3.client.uidl_function .doc-function}

Returns a [`infinity.pop3.uidlArray`](#infinity.pop3.uidlArray_interface) with unique numbers for each new message, or for the specified message.

Signature:
```typescript
uidl( msgNum?: number ): infinity.pop3.uidlArray
```

Parameters:

- msgNum: `number`, optional
  >The number of the message.


Return type: [`infinity.pop3.uidlArray`](#infinity.pop3.uidlArray_interface)

Example:

```typescript
let uidlList = myClient.uidl();
```



---

## server {: #infinity.pop3.server_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [onConnect](#infinity.pop3.server.onConnect_property)
- [onDelete](#infinity.pop3.server.onDelete_property)
- [onDisconnect](#infinity.pop3.server.onDisconnect_property)
- [onLogin](#infinity.pop3.server.onLogin_property)
- [onQuit](#infinity.pop3.server.onQuit_property)
- [onRetrieve](#infinity.pop3.server.onRetrieve_property)
- [onTop](#infinity.pop3.server.onTop_property)

**Methods:**

- [constructor()](#infinity.pop3.server.constructor_function)
- [setCertificate()](#infinity.pop3.server.setCertificate_function)
- [start()](#infinity.pop3.server.start_function)
- [stop()](#infinity.pop3.server.stop_function)

</div>

To run a POP3 server using `infinity.pop3.server` you need to set script filenames in the server's `onConnect`, `onLogin`, etc. properties. These script filenames have to be relative to your main script and these scripts will be called when the POP3 server receives the corresponding POP3 command from a client.

Within these scripts, you can access the [`infinity.pop3.session`](#infinity.pop3.session_namespace) object, which will be filled with the parameters of the client's POP3 command. You will also use this POP3 session object to pass back your reply to the client. You can find the specifics per command in the documentation of each `on...` property.

Example:

```typescript
infinity.loadModule('infinity.pop3');
let myServer = new infinity.pop3.server(...);
myServer.onLogin = 'pop3/login.js';
myServer.onTop = 'pop3/top.js';
myServer.onRetrieve = 'pop3/retrieve.js';
myServer.onDelete = 'pop3/delete.js';
myServer.onQuit = 'pop3/quit.js';
myServer.start();
```

---

**Properties**

---

### onConnect {: #infinity.pop3.server.onConnect_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle POP3 connection requests.
Within that script, you can access the `infinity.pop3.session` object, which will contain the following properties:

- `id`: POP3 session id
- `ip`: IP address of the connecting POP3 client
- `port`: port of the POP3 client connection
- `disconnect`: this is a function that you can call to disconnect the connection.

These properties will remain valid throughout the POP3 session, so you can access these in the other POP3 command handlers, as well. The only exception is the `id` property, which will become invalid in the `onDisconnect` handler.

---

### onDelete {: #infinity.pop3.server.onDelete_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle POP3 delete requests.
Within that script, you can access the `infinity.pop3.session` object, which will contain the same properties described in the [`onConnect`](#infinity.pop3.server.onConnect_property) handler, plus the following:

- `item`: an object containing information about the message to be deleted, with the following properties:
  - `deleted`: `false`, set this to `true` to mark the item as deleted and thus signal success to the delete request. Note that the delete request should not directly delete the message, but rather mark it for deletion (as specified in the POP3 protocol). The message will remain marked as deleted throughout the POP3 session (unless the client resets the delete flag) and you need to handle the `onQuit` request later to actually delete all the messages marked for deletion (as specified in the POP3 protocol).
  - `id`: the message's id
  - `size`: the messages size (in bytes)
  - `uid`: the message's uid

Deleting messages from POP3 works as follows: the client issues a delete request to the server, which will mark the message as deleted. The client can ask the server to reset all delete flags (which the `infinity.pop3.server` will automatically handle for you - you don't have to write your own command handler for that). When the client sends a quit command to the server, then the server is expected to delete all messages that have been marked as deleted. If the client disconnects without sending a quit command, then no messages should be deleted.

---

### onDisconnect {: #infinity.pop3.server.onDisconnect_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle POP3 disconnects.
Within that script, you can access the `infinity.pop3.session` object, which will contain the same properties described in the [`onConnect`](#infinity.pop3.server.onConnect_property) handler (except for the `id` property no longer being valid, because the connection is being disconnected), plus the following:

- `items`: an array containing message items with the following properties:
  - `deleted`: `true` if the message has been marked as deleted, `false` otherwise
  - `id`: the message's id
  - `size`: the messages size (in bytes)
  - `uid`: the message's uid

Note: do not delete messages that have been marked as deleted in the `onDisconnect` handler. Messages should only be deleted in the `onQuit` handler (as specified in the POP3 protocol).

---

### onLogin {: #infinity.pop3.server.onLogin_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle POP3 login requests.
Within that script, you can access the `infinity.pop3.session` object, which will contain the same properties described in the [`onConnect`](#infinity.pop3.server.onConnect_property) handler, plus the following:

- `username`: the username for authentication
- `password`: the password for authentication
- `authenticated`: set this to `true` if the credentials are valid and to `false` to signal invalid credentials
- `items`: an array that you need to fill with information about the messages available:
  - `deleted`: `true` if the message is marked as deleted, `false` otherwise
  - `id`: the message's id
  - `size`: the messages size (in bytes)
  - `uid`: the message's uid

The `username` and `password` properties will remain valid throughout the rest of the POP3 session, in addition to the properties described in the `onConnect` command handler. You should validate these credentials and set the `authenticated` property accordingly. If authentication is successful, you will also need to fill the `items` array and provide information about all the messages that can be retrieved. You can use arbitrary values for the `id` and `uid` properties - the POP3 client will use these values when sending commands to your server, so you will get these values in POP3 session data in the other command handlers.


---

### onQuit {: #infinity.pop3.server.onQuit_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle POP3 quit requests.
Within that script, you can access the `infinity.pop3.session` object, which will contain the same properties described in the [`onConnect`](#infinity.pop3.server.onConnect_property) handler, plus the following:

- `items`: an array containing message items with the following properties:
  - `deleted`: `true` if the message should now be deleted, `false` if the message should not be deleted
  - `id`: the message's id
  - `size`: the messages size (in bytes)
  - `uid`: the message's uid

As specified in the POP3 protocol, all messages that have been marked as deleted should actually be deleted when the client sends the quit command. So you need to iterate through the `infinity.pop3.session.items` array and delete all messages from your storage that are marked as deleted.


---

### onRetrieve {: #infinity.pop3.server.onRetrieve_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle POP3 retrieve requests.
Within that script, you can access the `infinity.pop3.session` object, which will contain the same properties described in the [`onConnect`](#infinity.pop3.server.onConnect_property) handler, plus the following:

- `item`: an object containing information about the message to be retrieved, with the following properties:
  - `deleted`: will be `true` or `false`, depending on whether the message has been marked for deletion
  - `id`: the message's id
  - `size`: the messages size (in bytes)
  - `uid`: the message's uid
  - `lines`: set this property to the number of lines the message has
  - `msg`: set this to the message data (as a string)

The message data (the `infinity.pop3.session.item.msg` property) should be a message according to the RFC822 standard. You can use [`infinity.mail`](infinity.mail.md) to conveniently create RFC822 messages.


---

### onTop {: #infinity.pop3.server.onTop_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle POP3 top requests (requesting the headers and a certain number of lines from the top of the message content).
Within that script, you can access the `infinity.pop3.session` object, which will contain the same properties described in the [`onConnect`](#infinity.pop3.server.onConnect_property) handler, plus the following:

- `item`: an object containing information about the message to be retrieved, with the following properties:
  - `deleted`: will be `true` or `false`, depending on whether the message has been marked for deletion
  - `id`: the message's id
  - `size`: the messages size (in bytes)
  - `uid`: the message's uid
  - `lines`: the number of lines of the message that you should be returning (in addition to the message headers)
  - `msg`: set this to the message data (as a string)

The message data (the `infinity.pop3.session.item.msg` property) should be a message according to the RFC822 standard. You can use [`infinity.mail`](infinity.mail.md) to conveniently create RFC822 messages.
In contrast to the retrieve command handled in `onRetrieve`, the top command asks the server to return only the message headers and a specified number of lines from the top of the message (hence the name of the command). Make sure to return only the message headers plus the top `infinity.pop3.session.lines` lines of the message content in the `infinity.pop3.session.msg` session property.


---

**Methods**

---

### constructor() {: #infinity.pop3.server.constructor_function .doc-function}

Creates a POP3 server object.

Signature:
```typescript
constructor( ssl?: boolean, verifyCertificate?: boolean, port?: number, maxConnections?: number, poolSize?: number, minProtocol?: infinity.pop3.server.protocol, maxProtocol?: infinity.pop3.server.protocol )
```

Parameters:

- ssl: `boolean`, optional
  >`true` to accept encrypted connections (using TLS/SSL), `false` to only accept unencrypted connections (not recommended).

- verifyCertificate: `boolean`, optional
  >`true` to validate the SSL certificate, `false` to ignore certificate problems (e.g. when using self-signed certificates).

- port: `number`, optional
  >The port on which to listen for POP3 client connections. If this is set to `995`, then the server will use implicit SSL, otherwise it will accept unencrypted connections and handle STARTTLS requests by the client to switch to an encrypted connection automatically.


- maxConnections: `number`, optional
  >Maximum number of simultaneous connections.


- poolSize: `number`, optional
  >Pool size. The server will maintain a pool of connections that will be reused for better performance.


- minProtocol: `infinity.pop3.server.protocol`, optional
  >Minimal encryption protocol accepted. You can use this to refuse client connections that are using old (possibly obsolete) encryption protocols.


- maxProtocol: `infinity.pop3.server.protocol`, optional
  >Maximum encryption protocl accepted.



Example:

```typescript
infinity.loadModule('infinity.pop3');
let myServer = new infinity.pop3.server();
```

---

### setCertificate() {: #infinity.pop3.server.setCertificate_function .doc-function}

Sets the SSL certificate for the current server instance using the corresponding files provided in the function parameters.

Signature:
```typescript
setCertificate(certFile: string, keyFile: string, rootCertFile?: string, verify?: boolean): void;
```

Parameters:

- certFile: `string`
  >The path to the certificate file to be used.

- keyFile: `string`
  >The path to the the key file to be used.

- rootCertFile: `string`, optional
  >The path to the the root certificate file to be used.

- verify: `boolean`, optional
  >Whether to verify the validity of the certificate.


Example:

```typescript
myServer.setCertificate('certFile.crt', 'keyFile.key', 'rootCertFile.crt', true);
```

---

### start() {: #infinity.pop3.server.start_function .doc-function}

Starts the POP3 server. The server will run as a separate thread, listening to incoming POP3 client connections and running the scripts specified in the `on...` command handlers.

Signature:
```typescript
start(): void
```

Example:

```typescript
myServer.start();
```

---

### stop() {: #infinity.pop3.server.stop_function .doc-function}

Stops the POP3 server. The server will close its port and stop listening for POP3 connections.

Signature:
```typescript
stop(): void
```

Example:

```typescript
myServer.stop();
```



---

<div class="doc-heading">Namespaces</div>

---

## infinity.pop3.client {: #infinity.pop3.client_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Enums:</div>

- [authMode](#infinity.pop3.client.authMode_enum)
- [encryptMode](#infinity.pop3.client.encryptMode_enum)

</div>


---

<div class="doc-heading">Enums</div>

---

### infinity.pop3.client.authMode {: #infinity.pop3.client.authMode_enum .doc-enum}

Values:

- userPass: `0`
  >Authenticate using username and password.

- apop: `1`
  >Authenticate using APOP (Authenticated Post Office Protocol).


- sasl: `2`
  >Authenticate using SASL (Simple Authentication and Security Layer).

Example:

```typescript
infinity.loadModule('infinity.pop3');
let authMode = infinity.pop3.client.authMode.userPass;
```



---

### infinity.pop3.client.encryptMode {: #infinity.pop3.client.encryptMode_enum .doc-enum}

Values:

- none: `0`
  >Unencrypted connection.


- sslTls: `1`
  >SSL/TLS encrypted connection.


Example:

```typescript
infinity.loadModule('infinity.pop3');
let encryptMode = infinity.pop3.client.encryptMode.sslTls;
```





---

## infinity.pop3.server {: #infinity.pop3.server_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Enums:</div>

- [protocol](#infinity.pop3.server.protocol_enum)

</div>

---

<div class="doc-heading">Enums</div>

---

### infinity.pop3.server.protocol {: #infinity.pop3.server.protocol_enum .doc-enum}

Values:

- tls1_0: `2`
  >TLS 1 encrypted connection.

- tls1_1: `3`
  >TLS 1.1 encrypted connection.

- tls1_2: `4`
  >TLS 1.2 encrypted connection.

- tls1_3: `5`
  >TLS 1.3 encrypted connection.

Example:

```typescript
infinity.loadModule('infinity.pop3.server');
let protocol = infinity.pop3.server.protocol.tls1_2;
```





---

## infinity.pop3.session {: #infinity.pop3.session_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Properties:</div>

- [authenticated](#infinity.pop3.session.authenticated_property)
- [item](#infinity.pop3.session.item_property)
- [items](#infinity.pop3.session.items_property)
- [id](#infinity.pop3.session.id_property)
- [ip](#infinity.pop3.session.ip_property)
- [password](#infinity.pop3.session.password_property)
- [port](#infinity.pop3.session.port_property)
- [username](#infinity.pop3.session.username_property)

<div class="doc-toc-heading">Functions:</div>

- [disconnect](#infinity.pop3.session.disconnect_function)

</div>

The `infinity.pop3.session` object will be available in the command handler scripts run by the `infinity.pop3.server`. The properties will be filled depending on the command handler and some of the properties are used to provide results of the handler to be returned back to the client.

---

<div class="doc-heading">Properties</div>

---

### authenticated {: #infinity.pop3.session.authenticated_property}

Type: `boolean`

In the `onLogin` command handler, you need to set this property to `true` or `false` depending on whether the provided credentials (`username` and `password`) are valid.

---

### item {: #infinity.pop3.session.item_property}

Type: `{id: number, uid: string, size: number, deleted: boolean, msg: string, lines: number}`

This property will be partly filled for command handlers dealing with a specific message item. The properties of this object are:

- `id`: the message id
- `uid`: the message uid
- `size`: the size of the message (in bytes/octets)
- `deleted`: `true` if the message has been marked to be deleted, `false` otherwise
- `msg`: you need to set this property in the `onRetrieve` and `onTop` command handlers. This needs to be a string containing a message in the RFC822 format. You can use [`infinity.mail`](infinity.mail.md) to create messages and convert them to a RFC822 string.
- `lines`: provided in the `onTop` command handler. This is the requested number of lines from the message's content requested by the client.

---

### items {: #infinity.pop3.session.items_property}

Type: `infinity.pop3.itemArray`

This is the current list of messages available in this POP3 session.

---

### id {: #infinity.pop3.session.id_property .doc-readonly}

Type: `number`

The POP3 session id. This will remain constant throughout a single POP3 session and will turn invalid on disconnect.

---

### ip {: #infinity.pop3.session.ip_property .doc-readonly}

Type: `string`

The IP address from which the POP3 client connected.

---

### password {: #infinity.pop3.session.password_property .doc-readonly}

Type: `string`

The password used to authenticate the POP3 session.

---

### port {: #infinity.pop3.session.port_property .doc-readonly}

Type: `number`

The port used by the POP3 connection with the client.

---

### username {: #infinity.pop3.session.username_property .doc-readonly}

Type: `string`

The username used to authenticate the POP3 session.

---

<div class="doc-heading">Functions</div>

---

### disconnect() {: #infinity.pop3.session.disconnect_function .doc-function}

Disconnnects the current POP3 connection.

Signature:
```typescript
disconnect(): void
```



---

<div class="doc-heading">Interfaces</div>

---

## itemArray {: #infinity.pop3.itemArray_interface .doc-interface}

Extends: `Array<{id: number, uid: string, size: number, deleted: boolean}>`

An array of POP3 message items.

---

## listArray {: #infinity.pop3.listArray_interface .doc-interface}

Extends: `Array<{msgNum: number, size: number}>`

An array of POP3 message item id and size information.

---

## uidlArray {: #infinity.pop3.uidlArray_interface .doc-interface}

Extends: `Array<{msgNum: number, id: string}>`

An array of POP3 message id and uid information.
