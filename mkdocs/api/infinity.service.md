# infinity.service

Provides functionality for checking and controling operating system services.

Module: `infinity.service`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Functions:</div>

- [exists](#infinity.service.exists_function)
- [getStatus](#infinity.service.getStatus_function)
- [setStartupType](#infinity.service.setStartupType_function)
- [start](#infinity.service.start_function)
- [stop](#infinity.service.stop_function)

<div class="doc-toc-heading">Enums:</div>

- [startupType](#infinity.service.startupType_enum)
- [status](#infinity.service.status_enum)

</div>

Example:

```typescript
infinity.loadModule('infinity.service');

console.debug(infinity.service.exists('MariaDB'));
console.debug(infinity.service.getStatus('MariaDB'));
console.debug(infinity.service.start('MariaDB', true));
console.debug(infinity.service.stop('Druckwarteschlange', true, true));
console.debug(infinity.service.setStartupType('MariaDB', infinity.service.startupType.autoStart));
```

---

<div class="doc-heading">Functions</div>

---

## exists() {: #infinity.service.exists_function .doc-function}

Returns whether the specified operating system service exists.

Signature:
```
exists( serviceName: string ): boolean
```

Parameters:

- serviceName: `string`
  >The name of the service to be checked.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.service');
if ( infinity.service.exists('MariaDB') ) {
  //...
}
```

---

## getStatus() {: #infinity.service.getStatus_function .doc-function}

Returns the running status of the operating system service according to [`status`](#infinity.service.status_enum)

Signature:
```
getStatus( serviceName: string ): infinity.service.status
```

Parameters:

- serviceName: `string`
  >The name of the service to be checked.


Return type: [`status`](#infinity.service.status_enum)

Example:

```typescript
infinity.loadModule('infinity.service');
let status = infinity.service.getStatus('MariaDB');
```

---

## setStartupType() {: #infinity.service.setStartupType_function .doc-function}

Attempts to alter the startup type of the specified operating system service. Returns a boolean value indicating success or failure.

Signature:
```
setStartupType( serviceName: string, startupType: infinity.service.startupType ): boolean
```

Parameters:

- serviceName: `string`
  >The name of the service to be altered.

- startupType: [`startupType`](#infinity.service.startupType_enum)
  >The startup type to be set according to [`startupType`](#infinity.service.startupType_enum).


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.service');
if ( infinity.service.setStartupType('MariaDB', infinity.service.startupType.autoStart) ) {
  //...
}
```

---

## start() {: #infinity.service.start_function .doc-function}

Attempts to start the specified operating system service. Returns a boolean value indicating success or failure.

Signature:
```
start( serviceName: string, waitFor?: boolean ): boolean
```

Parameters:

- serviceName: `string`
  >The name of the service to be started.

- waitFor: `boolean`, optional
  >Whether to wait for the operation to complete.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.service');
if ( infinity.service.start('MariaDB') ) {
  //...
}
```

---

## stop() {: #infinity.service.stop_function .doc-function}

Attempts to stop the specified operating system service. Returns a boolean value indicating success or failure.

Signature:
```
stop( serviceName: string, waitFor?: boolean, force?: boolean ): boolean
```

Parameters:

- serviceName: `string`
  >The name of the service to be stopped.

- waitFor: `boolean`, optional
  >Whether to wait for the operation to complete.

- force: `boolean`, optional
  >Whether to attempt a forceful shutdown of the service.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.service');
if ( infinity.service.stop('MariaDB') ) {
  //...
}
```



---

<div class="doc-heading">Enums</div>

---

## infinity.service.startupType {: #infinity.service.startupType_enum .doc-enum}

Values:

- autoStart: `2`
  >Stands for the service starting with the operating system.

- demandStart: `3`
  >Stands for the service starting on manual demand.

- disabled: `4`
  >Stands for a disabled service.

Example:

```typescript
infinity.loadModule('infinity.service');
let startupType = infinity.service.startupType.autoStart;
```



---

## infinity.service.status {: #infinity.service.status_enum .doc-enum}

Values:

- unknown: `0`
  >Stands for a status that can't be determined.

- stopped: `1`
  >Stands for a stopped service.

- startPending: `2`
  >Stands for a service pending to be started.

- stopPending: `3`
  >Stands for a service pending to be shut down.

- running: `4`
  >Stands for a running service.

- continuePending: `5`
  >Stands for a service pending to be continued.

- pausePending: `6`
  >Stands for a service pending to be paused.

- paused: `7`
  >Stands for a paused service.

Example:

```typescript
infinity.loadModule('infinity.service');
let status = infinity.service.status.unknown;
```





