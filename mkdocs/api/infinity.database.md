# infinity.database

The `infinity.database` module provides various database operation possibilities and lets you work with classic SQL-queries, as well as with functions like [find()](#infinity.database.find_function), [get()](#infinity.database.get_function), [setParamValue()](#infinity.database.setParamValue_function) and [others](#infinity.database_class) to enhance your comfort in certain scenarios and unify several interactions. Support for ORM and threadsafe NoSQL is offered. Many database providers are supported, including Advantage Database Server, DB2, DBF, InterBase/Firebird, Microsoft Access MySQL, ODBC, Oracle, PostgreSQL,  SAP Sybase Adaptive Server Enterprise, SQL Server and SQLite, while the connection can be customized through the [specificOptions](#infinity.database.specificOptions_property) property.

Module: `infinity.database`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [database](#infinity.database_class)

<div class="doc-toc-heading">Interfaces:</div>

- [findResultArray](#infinity.database.findResultArray_interface)
- [getResultArray](#infinity.database.getResultArray_interface)
- [idsArray](#infinity.database.idsArray_interface)
- [queryArray](#infinity.database.queryArray_interface)
- [resultArray](#infinity.database.resultArray_interface)
- [rowArray](#infinity.database.rowArray_interface)
- [stringArray](#infinity.database.stringArray_interface)

<div class="doc-toc-heading">Enums:</div>

- [columnType](#infinity.database.columnType_enum)
- [indexType](#infinity.database.indexType_enum)
- [isolationLevel](#infinity.database.isolationLevel_enum)
- [orderDirection](#infinity.database.orderDirection_enum)
- [outputMode](#infinity.database.outputMode_enum)
- [provider](#infinity.database.provider_enum)

</div>

---

<div class="doc-heading">Classes</div>

---

## database {: #infinity.database_class .doc-class}

The class for operations on databases in INFINITY.JS.

<div class="doc-toc" markdown="1">

**Properties:**

- [autoCommit](#infinity.database.autoCommit_property)
- [connectionLifetime](#infinity.database.connectionLifetime_property)
- [fieldCount](#infinity.database.fieldCount_property)
- [lastInsertId](#infinity.database.lastInsertId_property)
- [maxPoolSize](#infinity.database.maxPoolSize_property)
- [minPoolSize](#infinity.database.minPoolSize_property)
- [pooling](#infinity.database.pooling_property)
- [recordCount](#infinity.database.recordCount_property)
- [rowsAffected](#infinity.database.rowsAffected_property)
- [specificOptions](#infinity.database.specificOptions_property)
- [sql](#infinity.database.sql_property)

**Methods:**

- [constructor()](#infinity.database.constructor_function)
- [bof()](#infinity.database.bof_function)
- [clear()](#infinity.database.clear_function)
- [commit()](#infinity.database.commit_function)
- [connect()](#infinity.database.connect_function)
- [count()](#infinity.database.count_function)
- [create()](#infinity.database.create_function)
- [disconnect()](#infinity.database.disconnect_function)
- [drop()](#infinity.database.drop_function)
- [eof()](#infinity.database.eof_function)
- [escape()](#infinity.database.escape_function)
- [execute()](#infinity.database.execute_function)
- [exists()](#infinity.database.exists_function)
- [find()](#infinity.database.find_function)
- [first()](#infinity.database.first_function)
- [free()](#infinity.database.free_function)
- [get()](#infinity.database.get_function)
- [get()](#infinity.database.get_function)
- [getDatabaseNames()](#infinity.database.getDatabaseNames_function)
- [getFieldNames()](#infinity.database.getFieldNames_function)
- [getStoredProcNames()](#infinity.database.getStoredProcNames_function)
- [getTableNames()](#infinity.database.getTableNames_function)
- [has()](#infinity.database.has_function)
- [index()](#infinity.database.index_function)
- [insert()](#infinity.database.insert_function)
- [last()](#infinity.database.last_function)
- [next()](#infinity.database.next_function)
- [prev()](#infinity.database.prev_function)
- [remove()](#infinity.database.remove_function)
- [result()](#infinity.database.result_function)
- [result()](#infinity.database.result_function)
- [rollback()](#infinity.database.rollback_function)
- [row()](#infinity.database.row_function)
- [rowObject()](#infinity.database.rowObject_function)
- [setParamValue()](#infinity.database.setParamValue_function)
- [startTransaction()](#infinity.database.startTransaction_function)
- [update()](#infinity.database.update_function)
- [update()](#infinity.database.update_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.database');

let myDB = new infinity.database();
//setting database-specific options
myDB.specificOptions['Direct'] = true;
myDB.specificOptions['UseUnicode'] = true;
//connecting to the database
myDB.connect(infinity.database.provider.mysql, 'localhost', 3306, 'exampleDB', 'root');

//creating a database table
myDB.create('testTable');

//creating table columns
myDB.index('testTable', 'username', infinity.database.indexType.string, true);
myDB.index('testTable', 'email', infinity.database.indexType.string, false);
myDB.index('testTable', 'modified', infinity.database.indexType.int);

//inserting data (note the different notations)
myDB.insert('testTable', { "username": "TheUserName1", "email": "theusername@email.com", "rights": ["read", "write", "create", "delete"] });
myDB.insert('testTable', { "username": "AnotherUserName2", "email": "someother@email.net", "rights": ["read"] });
myDB.insert('testTable', { username: "aUserName3", email: "yetanother@email.com" });

//reading from the table
myDB.execute('SELECT * FROM testTable');
let result = myDB.result();
console.table(result);

//| (index) | 0  | 1                                                 ...|
//+---------+----+---------------------------------------------------...+
//| 0       | id | json                                              ...|
//| 1       | 1  | {"email":"theusername@email.com","rights":["read",...|
//| 2       | 2  | {"email":"someother@email.net","rights":["read"],"...|
//| 3       | 3  | {"email":"yetanother@email.com","username":"aUserN...|

//searching with infinity.database.find()
let ids = myDB.find('testTable', [['email', 'endswith', 'm']], '', infinity.database.orderDirection.ascending, 0, 0, infinity.database.outputMode.ids);
console.debug(ids);
//[1,3]

//updating data with infinity.database.update()
myDB.update('testTable', { id: 2, username: "aUserName", email: "yetanother@email.com", modified: Math.floor(Date.now() * 0.001) });

//reading two rows
let twoRows = myDB.get('testTable', [1, 2]);
console.debug(twoRows);

//[{"email":"theusername@email.com","id":1,"rights":["read","write","create","delete"],"username":"TheUserName1"},{"email":"someother@email.net","id":2,"modified":1613741246,"username":"Somenickname"}]
```

---

**Properties**

---

### autoCommit {: #infinity.database.autoCommit_property .doc-property}

Type: `boolean`

Turns on or off auto-committing database modifications.

---

### connectionLifetime {: #infinity.database.connectionLifetime_property .doc-property}

Type: `number`

Specifies how long a database-connection lives before it is killed and recreated.

---

### fieldCount {: #infinity.database.fieldCount_property .doc-property}

Type: `number`

Gets the number of columns in the current row.

---

### lastInsertId {: #infinity.database.lastInsertId_property .doc-property}

Type: `number`

Gets the value of the ID field after an executed INSERT statement.

---

### maxPoolSize {: #infinity.database.maxPoolSize_property .doc-property}

Type: `number`

Gets or sets the maximum number of connections allowed in the pool.

---

### minPoolSize {: #infinity.database.minPoolSize_property .doc-property}

Type: `number`

Gets or sets the minimum number of connections allowed in the pool.

---

### pooling {: #infinity.database.pooling_property .doc-property}

Type: `boolean`

Gets or sets pooling mode. Not supported by some databases.

---

### recordCount {: #infinity.database.recordCount_property .doc-property}

Type: `number`

Gets number of rows in the result set.

---

### rowsAffected {: #infinity.database.rowsAffected_property .doc-property}

Type: `number`

Specifies the number of rows which were inserted, updated, or deleted during the last query operation.

---

### specificOptions {: #infinity.database.specificOptions_property .doc-property}

Provides extended settings for each database provider. See



- [Advantage Database Server](./DatabaseSpecificOptions/advantage.md)

- [Amazon Redshift](./DatabaseSpecificOptions/amazon_redshift.md)

- [DB2](./DatabaseSpecificOptions/db2.md)

- [DBF](./DatabaseSpecificOptions/dbf.md)

- [InterBase/Firebird](./DatabaseSpecificOptions/interbase.md)

- [Microsoft Access](./DatabaseSpecificOptions/microsoft_access.md)

- [MongoDB](./DatabaseSpecificOptions/mongodb.md)

- [MySQL](./DatabaseSpecificOptions/mysql.md)

- [ODBC](./DatabaseSpecificOptions/odbc.md)

- [Oracle](./DatabaseSpecificOptions/oracle.md)

- [PostgreSQL](./DatabaseSpecificOptions/postgresql.md)

- [SAP Sybase Adaptive Server Enterprise](./DatabaseSpecificOptions/sap_sybase_ase.md)

- [SQLite](./DatabaseSpecificOptions/sqlite.md)

- [SQL Server](./DatabaseSpecificOptions/sql_server.md)


Type: `object`

Example:

```typescript
myDB.specificOptions['UseUnicode'] = true;
```

---

### sql {: #infinity.database.sql_property .doc-property}

Type: `string`

Takes a database-query, which then can be executed with [execute()](#infinity.database.execute_function).

---

**Methods**

---

### constructor() {: #infinity.database.constructor_function .doc-function}

Lets you create an INFINITY.JS database object instance. Doesn't accept parameters.

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.database');
let myDB = new infinity.database();
```

---

### bof() {: #infinity.database.bof_function .doc-function}

Returns true, if the cursor is pointing to the beginning of the current result set.

Signature:
```typescript
bof(): boolean
```

Return type: `boolean`

Example:

```typescript
while( !myDB.bof() ) {
  myDB.prev();
  //...
}
```

---

### clear() {: #infinity.database.clear_function .doc-function}

Clears all data from the specified table.

Signature:
```typescript
clear( table: string ): void
```

Parameters:

- table: `string`
  >The table to clear data from.



Example:

```typescript
myDB.clear('testTable');
```

---

### commit() {: #infinity.database.commit_function .doc-function}

Commits the previously set up database transaction.

Signature:
```typescript
commit(): void
```

Example:

```typescript
myDB.autoCommit = false;
myDB.startTransaction();
try {
  myDB.execute('INSERT...');
  myDB.execute('UPDATE...');
  myDB.commit();
} catch {
  myDB.rollback();
}

```

---

### connect() {: #infinity.database.connect_function .doc-function}

Establishes a connection to the specified database using the provided parameters.

Signature:
```typescript
connect( provider: infinity.database.provider, server: string, port: number, database: string, username?: string, password?: string ): void
```

Parameters:

- provider: [`infinity.database.provider`](#infinity.database.provider_enum)
  >The database provider to be used according to the [`infinity.database.provider`](#infinity.database.provider_enum) enums.


- server: `string`
  >Server address.

- port: `number`
  >Connection port.

- database: `string`
  >The name of the database.

- username: `string`, optional
  >The username for logging in.

- password: `string`, optional
  >The password for logging in.


Example:

```typescript
infinity.loadModule('infinity.database');
let myDB = new infinity.database();
myDB.connect(infinity.database.provider.mysql, 'localhost', 3306, 'exampleDB', 'root');
```

---

### count() {: #infinity.database.count_function .doc-function}

Returns the number of rows present inside the specified table.

Signature:
```typescript
count( table: string ): number
```

Parameters:

- table: `string`
  >The table to examine.


Return type: `number`

Example:

```typescript
let rowsInTable = myDB.count('testTable');
```

---

### create() {: #infinity.database.create_function .doc-function}

Creates a table with the specified name inside the connected database.

Signature:
```typescript
create( table: string ): void
```

Parameters:

- table: `string`
  >The name of the table to create.


Example:

```typescript
myDB.create('testTable');
```

---

### disconnect() {: #infinity.database.disconnect_function .doc-function}

Disconnects from the current database.

Signature:
```typescript
disconnect(): void
```

Example:

```typescript
myDB.disconnect();
myDB.free();
```

---

### drop() {: #infinity.database.drop_function .doc-function}

Deletes the specified table from the connected database.

Signature:
```typescript
drop( table: string ): void
```

Parameters:

- table: `string`
  >The name of the table to delete.


Example:

```typescript
myDB.drop('testTable');
```

---

### eof() {: #infinity.database.eof_function .doc-function}

Returns true, if the cursor is pointing to the end of the current result set.

Signature:
```typescript
eof(): boolean
```

Return type: `boolean`

Example:

```typescript
while( !myDB.eof() ) {
  myDB.next();
  //...
}
```

---

### escape() {: #infinity.database.escape_function .doc-function}

Returns escaped query parameters to prevent SQL-injection-attacks.

Signature:
```typescript
escape( value: any, asLikeString?: boolean ): string
```

Parameters:

- value: `any`
  >The parameters to escape.

- asLikeString: `boolean`, optional
  >Whether to use special escaping for statements with the LIKE operator.


Return type: `string`

Example:

```typescript
db.execute('select i_id, c_title from documents where i_id = ' myDB.escape( id) + ';');
//different notation:
myDB.execute(`SELECT i_id, c_title FROM documents WHERE i_id = ${myDB.escape(id)};`);
//escaping for strings:
myDB.execute(`SELECT i_id, c_title FROM documents WHERE i_id = "${myDB.escape(text)}";`);
```

---

### execute() {: #infinity.database.execute_function .doc-function}

Executes the database query and returns a boolean value according to success or failure.

Signature:
```typescript
execute( sql?: string ): boolean
```

Parameters:

- sql: `string`, optional
  >The database query to execute.


Return type: `boolean`

Example:

```typescript
if( myDB.execute('SELECT i_id, c_title FROM documents ORDER by i_id desc limit 10;') ) {
  //...
}

//Different notations possible:
let id = 1;
myDB.execute('select i_id, c_title from documents where i_id = ' + id + ';');
myDB.execute(`select i_id, c_title from documents where i_id = ${id};`);

//Usage of the sql-property:
myDb.sql = 'select count(*) from documents;';
myDB.execute();
```

---

### exists() {: #infinity.database.exists_function .doc-function}

Checks whether a table with the specified name exists inside the connected database.

Signature:
```typescript
exists( table: string ): boolean
```

Parameters:

- table: `string`
  >The table name to check for.


Return type: `boolean`

Example:

```typescript
if( myDB.exists('testTable') ){
  //...
}
```

---

### find() {: #infinity.database.find_function .doc-function}

Allows querying a database in a more structured way using an sql-like query language.

Signature:
```typescript
find( table: string, query: infinity.database.queryArray, orderBy?: string, orderDirection?: infinity.database.orderDirection, offset?: number, limit?: number, outputMode?: infinity.database.outputMode ): infinity.database.findResultArray
```

Parameters:

- table: `string`
  >The name of the table to be queried.

- query: [`infinity.database.queryArray`](#infinity.database.queryArray_interface)
  >An array of options for the query, usable with the following operators: =, <>, !=, >, <, >=, <=, beginswith, endswith, contains.

- orderBy: `string`, optional
  >Specifies by which column the result has to be ordered.

- orderDirection: [`infinity.database.orderDirection`](#infinity.database.orderDirection_enum), optional
  >Specifies the order direction.

- offset: `number`, optional
  >Specifies, how many row have to be skipped.

- limit: `number`, optional
  >Constrains the number of rows to return.

- outputMode: [`infinity.database.outputMode`](#infinity.database.outputMode_enum), optional
  >Specifies how the data is returned.


Return type: [`infinity.database.findResultArray`](#infinity.database.findResultArray_interface)

Example:

```typescript
let ids = myDB.find('users', [['email', 'endswith', 'e']], '', infinity.database.orderDirection.ascending, 0, 0, infinity.database.outputMode.ids);
```

---

### first() {: #infinity.database.first_function .doc-function}

Places the cursor at the first row of the current result set.

Signature:
```typescript
first(): void
```

Example:

```typescript
myDB.execute('SELECT * FROM testTable');

console.debug(myDB.row());
myDB.next();
console.debug(myDB.row());
myDB.first();
console.debug(myDB.row());
```

---

### free() {: #infinity.database.free_function .doc-function}

Frees the memory previously occupied by the database object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript

myDB.disconnect();
myDB.free();
```

---

### get() {: #infinity.database.get_function .doc-function}

Returns a row with the given ID out of the specified table.

Signature:
```typescript
get( table: string, id: number ): object
```

Parameters:

- table: `string`
  >The name of the table to be queried.

- id: `number`
  >The ID of the row to be returned.


Return type: `object`

Example:

```typescript
let secondRow = myDB.get('testTable', 2);
```

---

### get() {: #infinity.database.get_function .doc-function}

Returns multiple rows with the given IDs out of the specified table.

Signature:
```typescript
get( table: string, ids: infinity.database.idsArray ): infinity.database.getResultArray
```

Parameters:

- table: `string`
  >The name of the table to be queried.

- ids: [`infinity.database.idsArray`](#infinity.database.idsArray_interface)
  >An array containing the IDs of the rows to be returned.


Return type: [`infinity.database.getResultArray`](#infinity.database.getResultArray_interface)

Example:

```typescript
let someRows = myDB.get('testTable', [2, 3]);
```

---

### getDatabaseNames() {: #infinity.database.getDatabaseNames_function .doc-function}

Returns an array of the names of databases on the connected server.

Signature:
```typescript
getDatabaseNames(): infinity.database.stringArray
```

Return type: [`infinity.database.stringArray`](#infinity.database.stringArray_interface)

Example:

```typescript
let dbNames = myDB.getDatabaseNames();
```

---

### getFieldNames() {: #infinity.database.getFieldNames_function .doc-function}

Returns an array of the field names of the specified table.

Signature:
```typescript
getFieldNames( table: string ): infinity.database.stringArray
```

Parameters:

- table: `string`
  >The table to be queried.


Return type: [`infinity.database.stringArray`](#infinity.database.stringArray_interface)

Example:

```typescript
let fieldNames = myDB.getFieldNames('testTable');
```

---

### getStoredProcNames() {: #infinity.database.getStoredProcNames_function .doc-function}

Returns an array of stored procedures from the server.

Signature:
```typescript
getStoredProcNames(): infinity.database.stringArray
```

Return type: [`infinity.database.stringArray`](#infinity.database.stringArray_interface)

Example:

```typescript
let storedProcNames = myDB.getStoredProcNames();
```

---

### getTableNames() {: #infinity.database.getTableNames_function .doc-function}

Returns an array of the names of the tables on the connected database.

Signature:
```typescript
getTableNames(): infinity.database.stringArray
```

Return type: [`infinity.database.stringArray`](#infinity.database.stringArray_interface)

Example:

```typescript
let tableNames = myDB.getTableNames();
```

---

### has() {: #infinity.database.has_function .doc-function}

Indicates whether the specified table has a row with the given ID.

Signature:
```typescript
has( table: string, id: number ): boolean
```

Parameters:

- table: `string`
  >The name of the table to be checked.

- id: `number`
  >The row to be checked.


Return type: `boolean`

Example:

```typescript
if( myDB.has('testTable', 2) ){
  //...
}
```

---

### index() {: #infinity.database.index_function .doc-function}

Creates an index column inside the given table and specifies the data type to be stored in. Can optionally specify the column to act as an index of the given type.

Signature:
```typescript
index( table: string, key: string, indexType: infinity.database.indexType, columnType?: infinity.database.columnType, unique?: boolean ): void
```

Parameters:

- table: `string`
  >The name of the table to be altered.

- key: `string`
  >The column to act as an index.

- key: [`infinity.database.indexType`](#infinity.database.indexType_interface)
  >Specifies the type of data that the index will hold.

- key: [`infinity.database.columnType`](#infinity.database.columnType_interface), optional
  >Defines whether the column is virtual or persistent.

- unique: `boolean`, optional
  >Indicates whether the index should enforce uniqueness.


Example:

```typescript
myDB.index('testTable', 'username', infinity.database.indexType.string, true);
```

---

### insert() {: #infinity.database.insert_function .doc-function}

Inserts new data into a database table. The data has to be passed inside an object.

Signature:
```typescript
insert( table: string, document: object ): number
```

Parameters:

- table: `string`
  >The name of the table to be altered.

- document: `object`
  >An object containing the data to be inserted.


Return type: `number`

Example:

```typescript
myDB.insert('testTable', { "username": "TheUserName1", "email": "theusername@email.com", "rights": ["read", "write", "create", "delete"] });
```

---

### last() {: #infinity.database.last_function .doc-function}

Places the cursor at the last row of the current result set.

Signature:
```typescript
last(): void
```

Example:

```typescript
myDB.execute('SELECT * FROM testTable');

console.debug(myDB.row());
myDB.last();
console.debug(myDB.row());
```

---

### next() {: #infinity.database.next_function .doc-function}

Places the cursor at the next row of the current result set.

Signature:
```typescript
next(): void
```

Example:

```typescript
myDB.execute('SELECT * FROM testTable');

console.debug(myDB.row());
myDB.next();
console.debug(myDB.row());
```

---

### prev() {: #infinity.database.prev_function .doc-function}

Places the cursor at the previous row of the current result set.

Signature:
```typescript
prev(): void
```

Example:

```typescript
myDB.execute('SELECT * FROM testTable');

console.debug(myDB.row());
myDB.next();
console.debug(myDB.row());
myDB.prev();
console.debug(myDB.row());
```

---

### remove() {: #infinity.database.remove_function .doc-function}

Removes rows from the specified table. Takes query parameters as an array. Returns the number of rows affected by the query.

Signature:
```typescript
remove( table: string, query: infinity.database.queryArray ): number
```

Parameters:

- table: `string`
  >The name of the table from which the row will be removed.

- query: [`infinity.database.queryArray`](#infinity.database.queryArray_interface)
  >An array containing the query parameters.


Return type: `number`

Example:

```typescript
let rowsAffected = myDB.remove('testTable', [['id', '=',  2]]);
```

---

### remove() {: #infinity.database.remove_function .doc-function}

Removes a row from the specified table based on the provided row ID. Returns the number of rows affected by the operation.

Signature:
```typescript
remove( table: string, id: number ): number
```

Parameters:

- table: `string`
  >The name of the table from which the row will be removed.

- id: `number`
  >The unique identifier (usually the primary key) of the row to be removed.


Return type: `number`

Example:

```typescript
myDB.remove('testTable', 2);
```

---

### result() {: #infinity.database.result_function .doc-function}

Returns the value at the current cursor position from the specified column of the result set.

Signature:
```typescript
result( field: number|string ): any
```

Parameters:

- field: `number|string`
  >The column of which the field has to be returned. Can be the column name or a numeric index.



Return type: `any`

Example:

```typescript
myDB.execute('SELECT * FROM testTable');
let firstRowSecondColumn = myDB.result(2);
let firstRowOfTitleColumn = myDB.result('email');
```

---

### result() {: #infinity.database.result_function .doc-function}

Returns the result of the last query in the JSON-format.

Signature:
```typescript
result(): infinity.database.resultArray
```

Return type: [`infinity.database.resultArray`](#infinity.database.resultArray_interface)

Example:

```typescript
myDB.execute('SELECT * FROM testTable');
let result = myDB.result();
console.table(result);
```

---

### rollback() {: #infinity.database.rollback_function .doc-function}

The Rollback method is equivalent to the SQL ROLLBACK statement. The transaction can only be rolled back from a pending state (after [`infinity.database.startTransaction`](#infinity.database.startTransaction_function), but before [`infinity.database.commit`](#infinity.database.commit_function) has been called).

Signature:
```typescript
rollback(): void
```

Example:

```typescript
myDB.autoCommit = false;
myDB.startTransaction();
try {
  myDB.execute('INSERT...');
  myDB.execute('UPDATE...');
  myDB.commit();
} catch {
  myDB.rollback();
}
```

---

### row() {: #infinity.database.row_function .doc-function}

Returns a row out of the current result set from the current cursor position as an array.

Signature:
```typescript
row(): infinity.database.rowArray
```

Return type: [`infinity.database.rowArray`](#infinity.database.rowArray_interface)

Example:

```typescript
myDB.execute('SELECT * FROM testTable');
console.debug(myDB.row());
```

---

### rowObject() {: #infinity.database.rowObject_function .doc-function}

Returns a row out of the current result set from the current cursor position as an object.

Signature:
```typescript
rowObject(): object
```

Return type: `object`

Example:

```typescript
myDB.execute('SELECT * FROM testTable')
console.debug(myDB.rowObject());
```

---

### setParamValue() {: #infinity.database.setParamValue_function .doc-function}

Sets identifiers and values for parameters, which can be used in [`infinity.database.execute()`](#infinity.database.execute_function) through a preceding colon and without quotation marks. The parameters passed this way are being escaped automatically.

Signature:
```typescript
setParamValue( name: string, value: any ): void
```

Parameters:

- name: `string`
  >The name of the parameter.

- value: `any`
  >The value of the parameter.


Example:

```typescript
myDB.setParamValue('id', '2');
myDB.setParamValue('text', 'replacement');
myDB.execute('select i_id, c_title from documents where i_id = :id and c_text = :text;');
```

---

### startTransaction() {: #infinity.database.startTransaction_function .doc-function}

Begins a new user transaction against the database server.

Signature:
```typescript
startTransaction( isolationLevel?: infinity.database.isolationLevel, readOnly?: boolean ): void
```

Parameters:

- isolationLevel: [`infinity.database.isolationLevel`](#infinity.database.isolationLevel_enum), optional
  >Specifies the transaction locking behavior.

- readOnly: `boolean`, optional
  >Sets the transaction to read only.


Example:

```typescript
myDB.startTransaction();
try {
  myDB.execute('INSERT...');
  myDB.execute('UPDATE...');
  myDB.commit();
} catch {
  myDB.rollback();
}
```

---

### update() {: #infinity.database.update_function .doc-function}

Updates values in an existing row identified by the provided row id, inside the specified database table. The data has to passed inside an object. Returns the number of rows affected by the query.

Signature:
```typescript
update( table: string, document: object ): number
```

Parameters:

- table: `string`
  >The name of the table to be updated.

- document: `object`
  >An object containing the data to be written.


Return type: `number`

Example:

```typescript
myDB.update('testTable', { id: 2, username: "aUserName", email: "yetanother@email.com", modified: Math.floor(Date.now() * 0.001) });
```

---

### update() {: #infinity.database.update_function .doc-function}

Updates values in an existing row identified by the provided row id, inside the specified database table. The data has to passed inside an object. Returns the number of rows affected by the query.

Signature:
```typescript
update( table: string, id: number, update: object ): number
```

Parameters:

- table: `string`
  >The name of the table to be updated.

- id: `number`
  >The unique identifier of the row to be updated.

- update: `object`
  >An object representing the new values for the specified row.


Return type: `number`

Example:

```typescript
myDB.update('testTable', 2, { username: "newUserName", email: "new@email.com" });
```

---

### update() {: #infinity.database.update_function .doc-function}

Updates values in an existing row identified by the provided query parameters, inside the specified database table. The data has to passed inside an object. Returns the number of rows affected by the query.

Signature:
```typescript
update( table: string, query: infinity.database.queryArray, update: object ): number
```

Parameters:

- table: `string`
  >The name of the table to be updated.

- query: [`infinity.database.queryArray`](#infinity.database.queryArray_interface)
  >An array containing the query parameters.

- update: `object`
  >An object containing the data to be written.


Return type: `number`

Example:

```typescript
myDB.update('testTable', [['username', '=', 'TheUserName1']], { id: 2, username: "aUserName", email: "yetanother@email.com", modified: Math.floor(Date.now() * 0.001) });
```



---

<div class="doc-heading">Interfaces</div>

---

## findResultArray {: #infinity.database.findResultArray_interface .doc-interface}

Extends: `Array<object|number>`

  >An array of objects or numbers.

---

## getResultArray {: #infinity.database.getResultArray_interface .doc-interface}

Extends: `Array<object>`

  >An array of objects.

---

## idsArray {: #infinity.database.idsArray_interface .doc-interface}

Extends: `Array<number>`

  >An array of numbers.

---

## queryArray {: #infinity.database.queryArray_interface .doc-interface}

Extends: `Array<string|Array<string|number|boolean>>`

  >An array of strings or of arrays containing strings, numbers or boolean values.

---

## resultArray {: #infinity.database.resultArray_interface .doc-interface}

Extends: `Array<Array<any>>`

  >An array of arrays, containing any datatype.

---

## rowArray {: #infinity.database.rowArray_interface .doc-interface}

Extends: `Array<any>`

  >An array of any datatypes.

---

## stringArray {: #infinity.database.stringArray_interface .doc-interface}

Extends: `Array<string>`

  >An array of strings.

---


<div class="doc-heading">Enums</div>

---

## infinity.database.columnType {: #infinity.database.columnType_enum .doc-enum}

Used to specify the type of a column within a database context.

Values:

- virtual: `0`

- persistent: `1`

Example:

```typescript
infinity.loadModule('infinity.database');
let columnType = infinity.database.columnType.virtual;
```


---

## infinity.database.indexType {: #infinity.database.indexType_enum .doc-enum}

Used for setting the data type for the index column.

Values:

- boolean: `0`

- string: `1`

- int: `2`

- bigint: `3`

- float: `4`

- double: `5`

Example:

```typescript
infinity.loadModule('infinity.database');
let indexType = infinity.database.indexType.boolean;
```


---

## infinity.database.isolationLevel {: #infinity.database.isolationLevel_enum .doc-enum}

Specifies the transaction locking behavior for a connection.

Values:

- readCommitted: `0`
  >Shared locks are held while the data is being read to avoid dirty reads, but the data can be changed before the end of the transaction, resulting in non-repeatable reads or phantom data.


- readUncommitted: `1`
  >A dirty read is possible, meaning that no shared locks are issued and no exclusive locks are honored.


- repeatableRead: `2`
  >Locks are placed on all data that is used in a query, preventing other users from updating the data. Prevents non-repeatable reads but phantom rows are still possible.


- isolated: `3`
  >A range lock is placed on the dataset, preventing other users from updating or inserting rows into the dataset until the transaction is complete.


- snapshot: `4`
  >Reduces blocking by storing a version of data that one application can read while another is modifying the same data. Indicates that from one transaction you cannot see changes made in other transactions, even if you requery.


Example:

```typescript
infinity.loadModule('infinity.database');
let isolationLevel = infinity.database.isolationLevel.readCommitted;
```



---

## infinity.database.orderDirection {: #infinity.database.orderDirection_enum .doc-enum}

Specifies the order direction of the returned result set.

Values:

- none: `0`

- ascending: `1`

- descending: `2`

Example:

```typescript
infinity.loadModule('infinity.database');
let orderDirection = infinity.database.orderDirection.ascending;
```



---

## infinity.database.outputMode {: #infinity.database.outputMode_enum .doc-enum}

Specifies how the result data has to be returned.

Values:

- objects: `0`
  >As objects.

- ids: `1`
  >As row IDs in a comma-separated string.

- count: `2`
  >As a total count number.

Example:

```typescript
infinity.loadModule('infinity.database');
let outputMode = infinity.database.outputMode.objects;
```



---

## infinity.database.provider {: #infinity.database.provider_enum .doc-enum}

Specifies the database provider to be used. See also [specificOptions](#infinity.database.specificOptions_property) for extended setup possibilities.

Values:

- access: `Access`
  >Microsoft Access

- advantage: `Advantage`
  >Advantage Database Server

- ase: `ASE`
  >SAP Sybase Adaptive Server Enterprise

- db2: `DB2`
  >DB2

- dbf: `DBF`
  >DBF

- interbase: `InterBase`
  >InterBase/Firebird

- mysql: `MySQL`
  >MySQL

- odbc: `ODBC`
  >ODBC

- oracle: `Oracle`
  >Oracle

- postgresql: `PostgreSQL`
  >PostgreSQL

- sqlserver: `SQL Server`
  >SQL Server

- sqlite: `SQLite`
  >SQLite


Example:

```typescript
infinity.loadModule('infinity.database');
let provider = infinity.database.provider.access;
```

