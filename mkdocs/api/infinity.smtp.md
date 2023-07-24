# infinity.smtp

Module: `infinity.smtp`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [client](#infinity.smtp.client_class)
- [server](#infinity.smtp.server_class)

<div class="doc-toc-heading">Namespaces:</div>

- [client](#infinity.smtp.client_namespace)
- [server](#infinity.smtp.server_namespace)
- [session](#infinity.smtp.session_namespace)

</div>

The `infinity.smtp` namespace contains classes for sending messages through SMTP email servers as a [client](#infinity.smtp.client_namespace) as well as building you own SMTP [server](#infinity.smtp.server_namespace).

---

<div class="doc-heading">Classes</div>

---

## client {: #infinity.smtp.client_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [allowUnsafeLegacyRenegotiation](#infinity.smtp.client.allowUnsafeLegacyRenegotiation_property)
- [authMode](#infinity.smtp.client.authMode_property)
- [encryptMode](#infinity.smtp.client.encryptMode_property)
- [host](#infinity.smtp.client.host_property)
- [password](#infinity.smtp.client.password_property)
- [port](#infinity.smtp.client.port_property)
- [timeout](#infinity.smtp.client.timeout_property)
- [useLegacyServerConnect](#infinity.smtp.client.useLegacyServerConnect_property)
- [username](#infinity.smtp.client.username_property)
- [verifyServerCertificate](#infinity.smtp.client.verifyServerCertificate_property)

**Methods:**

- [constructor()](#infinity.smtp.client.constructor_function)
- [authenticate()](#infinity.smtp.client.authenticate_function)
- [connect()](#infinity.smtp.client.connect_function)
- [disconnect()](#infinity.smtp.client.disconnect_function)
- [free()](#infinity.smtp.client.free_function)
- [sendFile()](#infinity.smtp.client.sendFile_function)
- [sendStream()](#infinity.smtp.client.sendStream_function)
- [sendMail()](#infinity.smtp.client.sendMail_function)
- [verify()](#infinity.smtp.client.verify_function)

</div>

You can use the `infinity.smtp.client` object to connect to an SMTP server and send messages through it.
The first thing you need to do is set the [`host`](#infinity.smtp.client.host_property), [`port`](#infinity.smtp.client.port_property) and [`encryptMode`](#infinity.smtp.client.encryptMode_property) properties to specify how to connect to the server.
Then you'll usually need to set the [`authMode`](#infinity.smtp.client.authMode_property), [`username`](#infinity.smtp.client.username_property) and [`password`](#infinity.smtp.client.password_property) properties to specify how to authenticate yourself towards the server.
You can also set the [`timeout`](#infinity.smtp.client.timeout_property) to limit the time that the client will try to connect to the server.

After setting the properties, you can use the [`connect()`](#infinity.smtp.client.connect_function) method to establish a connection to the SMTP server, followed by calls to the other methods. Make sure to call the [`free()`](#infinity.smtp.client.free_function) method when finished, to release the memory allocated by the client object.

Example:

```typescript
infinity.loadModule('infinity.smtp');
let myClient = new infinity.smtp.client();

try {
  myClient.host = 'smtp.gmail.com';
  myClient.port = 465;
  myClient.encryptMode = infinity.smtp.client.encryptMode.sslTls;
  myClient.authMode = infinity.smtp.client.authMode.default;
  myClient.username = 'youraccount@gmail.com';
  myClient.password = 'yourpassword';

  myClient.connect();

  myClient.authenticate();
  myClient.send('mail.eml');

  myClient.disconnect();
} finally {
  myClient.free();
}
```


mail.eml example:

```
To: recipientName@domain.com
From: youraccount@gmail.com
Subject: The Subject
X-Sender: youraccount@gmail.com
Content-Type: text/plain; charset=US-ASCII;
 format=flowed
Content-Transfer-Encoding: 7bit

Mailbody text
```

---

**Properties**

---

### allowUnsafeLegacyRenegotiation {: #infinity.smtp.client.allowUnsafeLegacyRenegotiation_property .doc-property}

Type: `boolean`

Allows the deprecated ssl unsafe legacy renegotiation. This should be avoided and the server's ssl version should be fixed, instead. If that is not possible, then this option can be used to let the SMTP client establish a connection nonetheless.

---

### authMode {: #infinity.smtp.client.authMode_property .doc-property}

Type: [`infinity.smtp.client.authMode`](#infinity.smtp.client.authMode_enum)

Gets and sets the authorization mode for the SMTP client to use, according to [`infinity.smtp.client.authMode`](#infinity.smtp.client.authMode_enum)

---

### encryptMode {: #infinity.smtp.client.encryptMode_property .doc-property}

Type: [`infinity.smtp.client.encryptMode`](#infinity.smtp.client.encryptMode_enum)

Gets and sets the encryption mode for the SMTP client to use according to [`infinity.smtp.client.encryptMode`](#infinity.smtp.client.encryptMode_enum)

---

### host {: #infinity.smtp.client.host_property .doc-property}

Type: `string`

Gets and sets the SMTP server address to connect to.

---

### password {: #infinity.smtp.client.password_property .doc-property}

Type: `string`

Gets and sets the password for authorization.

---

### port {: #infinity.smtp.client.port_property .doc-property}

Type: `number`

Gets and sets the communication port with the SMTP server.

---

### timeout {: #infinity.smtp.client.timeout_property .doc-property}

Type: `number`

Gets and sets the connection timeout in milliseconds.

---

### useLegacyServerConnect {: #infinity.smtp.client.useLegacyServerConnect_property .doc-property}

Type: `boolean`

Allows deprecated, unsafe ssl connections. This should be avoided and the server's ssl version should be fixed, instead. If that is not possible, then this option can be used to let the SMTP client establish a connection nonetheless.

---

### username {: #infinity.smtp.client.username_property .doc-property}

Type: `string`

Gets and sets the username for authorization.

---

### verifyServerCertificate {: #infinity.smtp.client.verifyServerCertificate_property .doc-property}

Type: `boolean`

This option will turn on ssl certificate validation, which will result in a connection error if the server's ssl certificate is not valid (e.g. self-signed).

---

**Methods**

---

### constructor() {: #infinity.smtp.client.constructor_function .doc-function}

Lets you create an INFINITY.JS SMTP client object instance. Doesn't accept parameters.

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.smtp');
let myClient = new infinity.smtp.client();
```

---

### authenticate() {: #infinity.smtp.client.authenticate_function .doc-function}

Carries out the authentification process with the SMTP server.

Signature:
```typescript
authenticate(): boolean
```

Return type: `boolean`

Example:

```typescript
myClient.authenticate();
```

---

### connect() {: #infinity.smtp.client.connect_function .doc-function}

Connects to the SMTP server. The initial [properties](#infinity.smtp.client.authMode_property) should be set by the time connect() is called.

Signature:
```typescript
connect(): void
```

Example:

```typescript
myClient.connect();
```

---

### disconnect() {: #infinity.smtp.client.disconnect_function .doc-function}

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

### free() {: #infinity.smtp.client.free_function .doc-function}

Frees the memory previously occupied by the SMTP client object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myClient.free();
```

---

### sendFile() {: #infinity.smtp.client.sendFile_function .doc-function}

Sends an email, reading the email data from the specified file.

Signature:
```typescript
send( fileName: string ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file. The file needs to contain an email in RFC822 format. You can use [`infinity.mail`](infinity.mail.md) to create an RFC822 string.



Example:

```typescript
myClient.sendFile('mail.eml');
```

---

### sendStream() {: #infinity.smtp.client.sendStream_function .doc-function}

Sends an email, reading the email data from a stream.

Signature:
```typescript
sendStream( stream: infinity.stream ): void
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >Stream from which to read the email data. The data needs to be in RFC822 format. You can use [`infinity.mail`](infinity.mail.md) to create an RFC822 string.



Example:

```typescript
myClient.sendStream(myStream);
```

---

### sendMail() {: #infinity.smtp.client.sendMail_function .doc-function}

Sends an email, reading the email data from an ['infinity.mail`](infinity.mail.md) object.

Signature:
```typescript
sendMail( mail: infinity.mail ): void
```

Parameters:

- mail: [`infinity.mail`](infinity.mail.md)
  >Mail object from which to read the RFC822 data.



Example:

```typescript
myClient.sendMail(myMail);
```

---

### verify() {: #infinity.smtp.client.verify_function .doc-function}

Verifies an address or username (sending a `VRFY` command to the smtp server).

Signature:
```typescript
verify( username: string ): string
```

Parameters:

- username: `string`
  >Username or encoded address (an address in angle brackets `<...>`).



Return type: `string`

Example:

```typescript
myClient.verify('username');
```



---

## server {: #infinity.smtp.server_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [onConnect](#infinity.smtp.server.onConnect_property)
- [onDisconnect](#infinity.smtp.server.onDisconnect_property)
- [onLogin](#infinity.smtp.server.onLogin_property)
- [onMailFrom](#infinity.smtp.server.onMailFrom_property)
- [onRcptTo](#infinity.smtp.server.onRcptTo_property)
- [onReceive](#infinity.smtp.server.onReceive_property)

**Methods:**

- [constructor()](#infinity.smtp.server.constructor_function)
- [setCertificate()](#infinity.smtp.server.setCertificate_function)
- [start()](#infinity.smtp.server.start_function)
- [stop()](#infinity.smtp.server.stop_function)

</div>

To run an SMTP server using `infinity.smtp.server` you need to set script filenames in the server's `onConnect`, `onLogin`, etc. properties. These script filenames have to be relative to your main script and these scripts will be called when the SMTP server receives the corresponding SMTP command from a client.

Within these scripts, you can access the [`infinity.smtp.session`](#infinity.smtp.session_namespace) object, which will be filled with the parameters of the client's SMTP command. You will also use this SMTP session object to pass back your reply to the client. You can find the specifics per command in the documentation of each `on...` property.

Example:

```typescript
infinity.loadModule('infinity.smtp');
let myServer = new infinity.smtp.server(...);
myServer.onLogin = 'smtp/login.js';
myServer.onReceive = 'smtp/receive.js';
myServer.start();
```

---

**Properties**

---

### onConnect {: #infinity.smtp.server.onConnect_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle SMTP connection requests.
Within that script, you can access the `infinity.smtp.session` object, which will contain the following properties:

- `id`: POP3 session id
- `ip`: IP address of the connecting POP3 client
- `port`: port of the POP3 client connection
- `disconnect`: this is a function that you can call to disconnect the connection.

These properties will remain valid throughout the SMTP session, so you can access these in the other SMTP command handlers, as well. The only exception is the `id` property, which will become invalid in the `onDisconnect` handler.

---

### onDisconnect {: #infinity.smtp.server.onDisconnect_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle SMTP disconnects.

---

### onLogin {: #infinity.smtp.server.onLogin_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle SMTP login requests.
Within that script, you can access the `infinity.smtp.session` object, which will contain the same properties described in the [`onConnect`](#infinity.smtp.server.onConnect_property) handler, plus the following:

- `username`: the username for authentication
- `password`: the password for authentication
- `authenticated`: set this to `true` if the credentials are valid and to `false` to signal invalid credentials

The `username` and `password` properties will remain valid throughout the rest of the POP3 session, in addition to the properties described in the `onConnect` command handler. You should validate these credentials and set the `authenticated` property accordingly. If authentication is successful, you will also need to fill the `items` array and provide information about all the messages that can be retrieved. You can use arbitrary values for the `id` and `uid` properties - the POP3 client will use these values when sending commands to your server, so you will get these values in POP3 session data in the other command handlers.

---

### onMailFrom {: #infinity.smtp.server.onMailFrom_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle SMTP mail-from requests.
Within that script, you can access the `infinity.smtp.session` object, which will contain the same properties described in the [`onConnect`](#infinity.smtp.server.onConnect_property) handler, plus the following:

- `address`: sender address
- `accept`: set this to `true` to accept the sender address, or to `false` to refuse sending from that address.

---

### onRcptTo {: #infinity.smtp.server.onRcptTo_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle SMTP recipient-to requests.
Within that script, you can access the `infinity.smtp.session` object, which will contain the same properties described in the [`onConnect`](#infinity.smtp.server.onConnect_property) handler, plus the following:

- `address`: recipient address
- `accept`: set this to `true` to accept the recipient address, or to `false` to refuse sending to that recipient.

---

### onReceive {: #infinity.smtp.server.onReceive_property .doc-property}

Type: `string`

Script filename (relative to the main script) that will handle SMTP receive requests.
Within that script, you can access the `infinity.smtp.session` object, which will contain the same properties described in the [`onConnect`](#infinity.smtp.server.onConnect_property) handler, plus the following:

- `msg`: RFC822 email message data.
- `receive`: set to `true` to signal successful sending of the message to the client, or `false` to signal that the message has not been sent.

In the `onReceive` handler, you will get the message to be sent in the `infinity.smtp.session.msg` property. This will contain an RFC822 string, containing the message headers and contents. You can use [`infinity.mail`](infinity.mail.md) to parse the string into an object to handle the sender, recipient, subject, content and attachments of the message.

You need to set the 

---

**Methods**

---

### constructor() {: #infinity.smtp.server.constructor_function .doc-function}

Creates an SMTP server object.

Signature:
```typescript
constructor( ssl?: boolean, verifyCertificate?: boolean, port?: number, maxConnections?: number, poolSize?: number, minProtocol?: infinity.smtp.server.protocol, maxProtocol?: infinity.smtp.server.protocol )
```

Parameters:

- ssl: `boolean`, optional
  >`true` to accept encrypted connections (using TLS/SSL), `false` to only accept unencrypted connections (not recommended).

- verifyCertificate: `boolean`, optional
  >`true` to validate the SSL certificate, `false` to ignore certificate problems (e.g. when using self-signed certificates).

- port: `number`, optional
  >The port on which to listen for SMTP client connections. If this is set to `465`, then the server will use implicit SSL, otherwise it will accept unencrypted connections and handle STARTTLS requests by the client to switch to an encrypted connection automatically.


- maxConnections: `number`, optional
  >Maximum number of simultaneous connections.


- poolSize: `number`, optional
  >Pool size. The server will maintain a pool of connections that will be reused for better performance.


- minProtocol: `infinity.smtp.server.protocol`, optional
  >Minimal encryption protocol accepted. You can use this to refuse client connections that are using old (possibly obsolete) encryption protocols.


- maxProtocol: `infinity.smtp.server.protocol`, optional
  >Maximum encryption protocl accepted.



Example:

```typescript
infinity.loadModule('infinity.smtp');
let myServer = new infinity.smtp.server();
```

---

### setCertificate() {: #infinity.smtp.server.setCertificate_function .doc-function}

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

### start() {: #infinity.smtp.server.start_function .doc-function}

Starts the SMTP server. The server will run as a separate thread, listening to incoming SMTP client connections and running the scripts specified in the `on...` command handlers.

Signature:
```typescript
start(): void
```

Example:

```typescript
myServer.start();
```

---

### stop() {: #infinity.smtp.server.stop_function .doc-function}

Stops the SMTP server. The server will close its port and stop listening for SMTP connections.

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

## infinity.smtp.client {: #infinity.smtp.client_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Enums:</div>

- [authMode](#infinity.smtp.client.authMode_enum)
- [encryptMode](#infinity.smtp.client.encryptMode_enum)

</div>

---

<div class="doc-heading">Enums</div>

---

### infinity.smtp.client.authMode {: #infinity.smtp.client.authMode_enum .doc-enum}

Values:

- none: `0`
  >No authentication (allow sending messages without authentication).


- default: `1`
  >Authenticate using the default username and password method.


- sasl: `2`
  >Authenticate using SASL (Simple Authentication and Security Layer).

Example:

```typescript
infinity.loadModule('infinity.smtp');
let authMode = infinity.smtp.client.authMode.default;
```



---

### infinity.smtp.client.encryptMode {: #infinity.smtp.client.encryptMode_enum .doc-enum}

Values:

- none: `0`
  >Unencrypted connection.


- sslTls: `1`
  >SSL/TLS encrypted connection.


Example:

```typescript
infinity.loadModule('infinity.smtp');
let encryptMode = infinity.smtp.client.encryptMode.sslTls;
```





---

## infinity.smtp.server {: #infinity.smtp.server_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Enums:</div>

- [protocol](#infinity.smtp.server.protocol_enum)

</div>

---

<div class="doc-heading">Enums</div>

---

### infinity.smtp.server.protocol {: #infinity.smtp.server.protocol_enum .doc-enum}

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
infinity.loadModule('infinity.smtp.server');
let protocol = infinity.smtp.server.protocol.tls1_2;
```





---

## infinity.smtp.session {: #infinity.smtp.session_namespace .doc-namespace}

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Properties:</div>

- [accept](#infinity.smtp.session.accept_property)
- [authenticated](#infinity.smtp.session.authenticated_property)
- [received](#infinity.smtp.session.received_property)
- [address](#infinity.smtp.session.address_property)
- [id](#infinity.smtp.session.id_property)
- [ip](#infinity.smtp.session.ip_property)
- [msg](#infinity.smtp.session.msg_property)
- [password](#infinity.smtp.session.password_property)
- [port](#infinity.smtp.session.port_property)
- [username](#infinity.smtp.session.username_property)

<div class="doc-toc-heading">Functions:</div>

- [disconnect](#infinity.smtp.session.disconnect_function)

</div>

The `infinity.smtp.session` object will be available in the command handler scripts run by the `infinity.smtp.server`. The properties will be filled depending on the command handler and some of the properties are used to provide results of the handler to be returned back to the client.

---

<div class="doc-heading">Properties</div>

---

### accept {: #infinity.smtp.session.accept_property}

Type: `boolean`

This is a property that you need to set in the [onMailFrom](#infinity.smtp.server.onMailFrom_property) and [onRcptTo](#infinity.smtp.server.onRcptTo_property) command handlers to either accept or refuse the given address.

---

### authenticated {: #infinity.smtp.session.authenticated_property}

Type: `boolean`

In the `onLogin` command handler, you need to set this property to `true` or `false` depending on whether the provided credentials (`username` and `password`) are valid.

---

### received {: #infinity.smtp.session.received_property}

Type: `Boolean`

Set this property to `true` or `false` in the [onReceive](#infinity.smtp.server.onReceive_property) command handler to notify the client of success or failure.

---

### address {: #infinity.smtp.session.address_property .doc-readonly}

Type: `string`

This property will contain the sender or recipient email address in the [onMailFrom](#infinity.smtp.server.onMailFrom_property) and [onRcptTo](#infinity.smtp.server.onRcptTo_property) command handlers.

---

### id {: #infinity.smtp.session.id_property .doc-readonly}

Type: `number`

The SMTP session id. This will remain constant throughout a single SMTP session and will turn invalid on disconnect.

---

### ip {: #infinity.smtp.session.ip_property .doc-readonly}

Type: `string`

The IP address from which the POP3 client connected.

---

### msg {: #infinity.smtp.session.msg_property .doc-readonly}

Type: `string`

In the [onReceive](#infinity.smtp.server.onReceive_property) command handler, this will contain the RFC822 message data to be sent. You can use [`infinity.mail`](infinity.mail.md) to parse this RFC822 string and access the email's addresses, subject, contents and attachments.

---

### password {: #infinity.smtp.session.password_property .doc-readonly}

Type: `string`

The password used to authenticate the SMTP session.

---

### port {: #infinity.smtp.session.port_property .doc-readonly}

Type: `number`

The port used by the SMTP connection with the client.

---

### username {: #infinity.smtp.session.username_property .doc-readonly}

Type: `string`

The username used to authenticate the SMTP session.

---

<div class="doc-heading">Functions</div>

---

### disconnect() {: #infinity.smtp.session.disconnect_function .doc-function}

Disconnnects the current SMTP connection.

Signature:
```typescript
disconnect(): void
```
