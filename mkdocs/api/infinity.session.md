# infinity.session

Provides functionality for storing authentification information in session data. It supports the JSON Web Token standard, employing the HS256 and RS256 signing algorithms. When starting a session within an HTTP request or API handler, INFINITY.JS will automatically return a cookie called `ID` in the response headers and will also automatically handle that cookie in subsequent requests and be able to restore the session from that ID. If you don't want to rely on the cookie, you can also send the session ID in the HTTP `Authorization: Bearer` header, passing the session ID in as a bearer token. A third alternative is to pass the session ID as a query parameter called `id` in an HTTP request.

Module: `infinity.session`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Interfaces:</div>

- [objectArray](#infinity.session.objectArray_interface)
- [stringArray](#infinity.session.stringArray_interface)

<div class="doc-toc-heading">Properties:</div>

- [expires](#infinity.session.expires_property)
- [secret](#infinity.session.secret_property)

<div class="doc-toc-heading">Functions:</div>

- [clear](#infinity.session.clear_function)
- [exists](#infinity.session.exists_function)
- [flushExpired](#infinity.session.flushExpired_function)
- [get](#infinity.session.get_function)
- [getDataList](#infinity.session.getDataList_function)
- [getIdList](#infinity.session.getIdList_function)
- [put](#infinity.session.put_function)
- [remove](#infinity.session.remove_function)
- [start](#infinity.session.start_function)

<div class="doc-toc-heading">Enums:</div>

- [algorithm](#infinity.session.algorithm_enum)

</div>


Example:

```typescript
infinity.loadModule('infinity.session');
infinity.loadModule('infinity.crypto');

infinity.session.expires = 60;
infinity.session.secret = 'session secret';


class sessionData {

  public id: string;
  public userId: number;
  public userName: string;
  public name: string;

  public constructor()
  public constructor(id: string)
  public constructor(id: string, userId: number, userName: string, name: string)
  public constructor(id?: string, userId?: number, userName?: string, name?: string) {

    this.id = id || '';
    this.userId = userId || 0;
    this.userName = userName || '';
    this.name = name || '';

  }

}


function login(userId: number, userName: string, name: string): sessionData {

  let session: any = infinity.session.get();

  if (session)
    return session;
  else {
    let session = new sessionData(infinity.sha256.generateUniqueId(), userId, userName, name);
    console.debug(infinity.session.start(session));

    return session;
  }

}

login(1, 'tf', 'Tobias Frie');
```

---

<div class="doc-heading">Interfaces</div>

---

## objectArray {: #infinity.session.objectArray_interface .doc-interface}

Extends: `Array<object>`

An array containing objects.

---

## stringArray {: #infinity.session.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array containing strings.



---

<div class="doc-heading">Functions</div>

---

## clear() {: #infinity.session.clear_function .doc-function}

Clears the session storage.

Signature:
```
clear(): void
```

Example:

```typescript
infinity.loadModule('infinity.session');
infinity.session.clear();
```

---

## exists() {: #infinity.session.exists_function .doc-function}

Reports whether a session with the specified ID is present inside the session storage. Does not consider expiration settings. INFINITY.JS will automatically look for a session ID in the `ID` cookie, `id` query parameter or `Authorization: Bearer` header of an HTTP request. If it finds a valid session ID, it will return `true`. If it doesn't find a session ID or there is no session by that ID, then it will return `false`.

Signature:
```
exists( id: string ): boolean
```

Parameters:

- id: `string`
  >The session ID.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.session');
if ( infinity.session.exists(id) ) {
  //...
}
```

---

## flushExpired() {: #infinity.session.flushExpired_function .doc-function}

Removes expired sessions from the session storage.

Signature:
```
flushExpired(): objectArray
```

Return type: [`objectArray`](#infinity.session.objectArray_interface)

Example:

```typescript
infinity.loadModule('infinity.session');
let x = infinity.session.flushExpired();
```

---

## get() {: #infinity.session.get_function .doc-function}

Returns an existing session. Does not consider expiration settings. INFINITY.JS will automatically look for a session ID in the `ID` cookie, `id` query parameter or `Authorization: Bearer` header of an HTTP request. If it finds a valid session ID, it will return the session data. If it doesn't find a session ID or there is no session by that ID, then it will return `undefined`.

Signature:
```
get( algorithm?: infinity.session.algorithm, checkIfSessionExists?: boolean ): object
```

Parameters:

- algorithm: [`infinity.session.algorithm`](#infinity.session.algorithm_enum), optional
  >If this is set to one of the JWT algorithms, then the session ID will contain actual session data, so that sessions can be shared across servers in a distributed server environment.


- checkIfSessionExists: `boolean`, optional, default: `true`
  >When using JWT sessions (by specifying a JWT algorithm as the first parameter), then this parameter controls whether session data is returned on all servers or only on the server that actually started the session. Setting the parameter to `true` (the default value) will not return session data unless the script is running on the server that actually started the session, thus mimicking non-distributed sessions. It set to `false`, then the session data from the JWT session ID will be returned on all servers, thus acting as a distributed session. Note that in both cases the session's last access timestamp will only be updated when this function is called on the server that started the session, as other servers don't actually contain the session, but take the session data from the session ID.


Return type: `object`

Example:

```typescript
infinity.loadModule('infinity.session');
let session = infinity.session.get();
```

---

## getDataList() {: #infinity.session.getDataList_function .doc-function}

Returns the data out of all stored sessions as an [`objectArray`](#infinity.session.objectArray_interface).

Signature:
```
getDataList(): objectArray
```

Return type: [`objectArray`](#infinity.session.objectArray_interface)

Example:

```typescript
infinity.loadModule('infinity.session');
let sessionData = infinity.session.getDataList();
```

---

## getIdList() {: #infinity.session.getIdList_function .doc-function}

Returns the IDs out of all stored sessions as a [`stringArray`](#infinity.session.stringArray_interface).

Signature:
```
getIdList(): stringArray
```

Return type: [`stringArray`](#infinity.session.stringArray_interface)

Example:

```typescript
infinity.loadModule('infinity.session');
let sessionIds = infinity.session.getIdList();
```

---

## put() {: #infinity.session.put_function .doc-function}

Replaces the data stored in a session with the provided data, if the session IDs are indentical.

Signature:
```
put( sessionData: object ): void
```

Parameters:

- sessionData: `object`
  >Data to serve as the replacement.


Example:

```typescript
infinity.loadModule('infinity.session');
let sessionId = infinity.session.start({'id': '123', 'name': 'TestName'});
infinity.session.put({'id': sessionId, 'name': 'OtherName'});
```

---

## remove() {: #infinity.session.remove_function .doc-function}

Removes the session with the specified ID from the session storage.

Signature:
```
remove( id?: string, algorithm?: infinity.session.algorithm ): void
```

Parameters:

- id: `string`, optional
  >Removes the session with the specified ID.

- algorithm: [`infinity.session.algorithm`](#infinity.session.algorithm_enum), optional
  >The algorithm for signing the JSON Web Token.


Example:

```typescript
infinity.loadModule('infinity.session');
infinity.session.remove();
```

---

## start() {: #infinity.session.start_function .doc-function}

Starts a session with the provided data and returns the session ID, provided inside the data object. The data must come inside an object and contain at least an ID property.

Note: when starting a session using the `start` function, this session will not be returned by the `get` function until the next client request. The `infinity.session.get` method fetches the session from cookie, query parameter or request header data and this will only be available after the client has received the session ID and included it in its next request.

Signature:
```
start( data: object, algorithm?: infinity.session.algorithm ): string
```

Parameters:

- data: `object`
  >An object containing session data.

- algorithm: [`infinity.session.algorithm`](#infinity.session.algorithm_enum), optional
  >The algorithm for signing the JSON Web Token.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.session');
let sessionId = infinity.session.start({'id': '123', 'name': 'TestName'});
```



---

<div class="doc-heading">Properties</div>

---

## expires {: #infinity.session.expires_property .doc-property}

Type: `number`

Specifies, how many seconds a session should be considered as valid.

---

## secret {: #infinity.session.secret_property .doc-property}

Type: `string`

Used during hash creation.



---

<div class="doc-heading">Enums</div>

---

## infinity.session.algorithm {: #infinity.session.algorithm_enum .doc-enum}

Values:

- none: `0`
  >Regular, non-distributed session (without storing session data inside the session token).


- hs256: `1`
  >JWT session, using the HMAC algorithm with SHA-256. In this case, every server will share the same key.


- rs256: `2`
  >JWT session, using an RSA Signature with SHA-256. In this case, every server will have its own key.


Example:

```typescript
infinity.loadModule('infinity.session');
let algorithm = infinity.session.algorithm.hs256;
```



