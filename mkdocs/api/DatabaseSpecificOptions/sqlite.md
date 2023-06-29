
## SQLite-specific options

Though UniDAC is components that provide unified interface to work with different database servers, it also lets you tune behaviour for each server individually. For thin setup of a certain database server, UniDAC provides server-specific options. These options can be applied to such components as TUniConnection, TUniQuery, TUniTable, TUniStoredProc, TUniSQL, TUniScript via their SpecificOptions property. SpecificOptions is a sting list. Therefore you can use the following syntax to assign an option value:

`UniConnection.SpecificOptions.Values['CharLength'] := '1';`

Below you will find the description of allowed options grouped by components.

## TUniConnection

|Option|Description|
|---|---|
|ASCIIDataBase|Enables or disables ASCII support. The default value is False.<p class="notes mt-10">Note: Set the UseUnicode option to False before enabling ASCII support|
|BusyTimeout|Sets or gets the timeout of waiting for locked resource (database or table). If resource is not unlocked during the time specified in BusyTimeout, then SQlite returns the SQLITE_BUSY error. Default value of this option is 0.|
|CipherLicense|To use the SQLCipher Commercial Edition library for encrypting SQLite database files, insert your SQLCipher license key into the field. Note that the option is not available in the Direct mode.|
|ConnectMode|Specifies which user privileges to use when accessing an SQLite database.<table><tr><td>cmDefault</td><td>The default value. Connect with default permissions.</td></tr><tr><td>cmReadWrite</td><td>Connect with read/write permissions.</td></tr><tr><td>cmReadOnly</td><td>Connect with read-only permissions.</td></tr></table>|
|ClientLibrary|Use the ClientLibrary option to set or get the location of the client library.|
|DateFormat|Defines the format for storing dates in the database. If it is not specified, the default format yyyy-mm-dd is used.|
|DefaultCollations|Enables or disables automatic default collations registration on connection establishing.|
|Direct|If the Direct option is set to True, UniDAC connects to the database directly using the embedded SQLite3 engine and does not use SQLite3 client library.|
|EnableLoadExtension|Enables loading and using an SQLite extension: `UniConnection.ExecSQL('SELECT load_extension(''C:\ext.dll'', ''sqlite3_ext_init'');');`|
|EnableSharedCache|Enables or disables the Shared-Cache mode for SQLite database. Default value of this option is False. |
|EncryptionAlgorithm|Used to specify the encryption algorithm for an encrypted database. |
|EncryptionKey|This property is used for password input and for working with encrypted database. Password can be set or changed using <b>EncryptDatabase</b> method.|
|ForceCreateDatabase|Used to force TLiteConnection to create a new database before opening a connection, if the database does not exist.|
|ForeignKeys|Enables or disables the enforcement of foreign key constraints. Foreign key constraints are disabled by default in SQLite, so this option can be used to force enabling or disabling them by the application. Default value of this option is True.|
|JournalMode|The journal mode.<table><tr><td>jmDelete</td><td>The default value. The rollback journal is deleted at the conclusion of each transaction.</td></tr><tr><td>jmTruncate</td><td>The rollback journal is stored in volatile RAM. It reduces disk I/O, but decreases database safety and integrity. If the application using SQLite crashes in the middle of a transaction, the database file may become corrupt.</td></tr><tr><td>jmPersist</td><td>The rollback journal file is not deleted when the transaction is commited. The header of the journal is filled with zeroes to prevent other connections rolling back from the journal. This mode optimizes performance on platforms where deleting or truncating a file is much more expensive than overwriting the first block of a file with zeros.</td></tr><tr><td>jmMemory</td><td>The rollback journal is stored in volatile RAM. This reduces the disk I/O, but decreases database safety and integrity. If the application using SQLite crashes in the middle of a transaction in this mode, the database file is likely to become corrupt.</td></tr><tr><td>jmWAL</td><td>A write-ahead log is used instead of a rollback journal to implement transactions. When data database is updated, the original content is preserved in the database file and the changes are appended in a separate WAL file. All the transactions that are appended in the WAL file are eventually transferred back into the original database.</td></tr><tr><td>jmOff</td><td>The rollback journal is completely disabled. No rollback journal is created, thus there is no rollback journal to delete. The ROLLBACK command does not work -- it behaves in an undefined way. Avoid using the ROLLBACK command when the journal mode is disabled.</td></tr></table>|
|LockingMode|The database locking mode.<table><tr><td>lmExclusive</td><td>The default value. The database connection never releases file locks. The first time the database is read or written in this mode, a shared lock is obtained and held. Use this mode if you want to prevent other processes from accessing the database file, reduce the number of filesystem operations, or access WAL databases without using the shared memory.</td></tr><tr><td>lmNormal</td><td>The database connection unlocks the database file at the conclusion of each read or write transaction.</td></tr></table>|
|NativeDate|If the option is set to True, the date and time values will be stored in the database in the native SQLite format, and when retrieved, they will be converted to the TDateTime type. If set to False, no conversion to the TDateTime type will be made. The default value is True.|
|ReadUncommitted|Enables or disables Read-Uncommitted isolation mode. A database connection in read-uncommitted mode does not attempt to obtain read-locks before reading from database tables as described above. This can lead to inconsistent query results if another database connection modifies a table while it is being read, but it also means that a read-transaction opened by a connection in read-uncommitted mode can neither block nor be blocked by any other connection. Default value of this option is False. |
|Synchronous|The database synchronization mode when writing to disk.<table><tr><td>smOff</td><td>The default mode. The database engine continues without syncing after handing data off to the operating system. If the application running SQLite crashes, the data will safe, unless the operating system crashes or the computer loses power before data has been written to disk, in which case the database might become corrupted. This is the fastest mode.</td></tr><tr><td>smNormal</td><td>The database engine still syncs at the most critical moments, but less often than in the FULL mode. The Normal mode is faster than the Full mode. When using the WAL mode (and probably the DELETE mode) with synchronous=NORMAL, data is safe from corruption. The synchronous=NORMAL setting is a reasonable choice for most applications running in the WAL mode.</td></tr><tr><td>smFull</td><td>The database engine ensures that all content is safely written to disk before continuing. This preserves database integrity even in case of an operating system failure or power outage. It is a safe, but slower mode, and is most commonly used when not in the WAL mode.</td></tr><tr><td>smExtra</td><td>This mode is similar to the FULL mode, but in the DELETE mode, the directory containing the rollback journal is synced after that journal is unlinked to commit a transaction. This provides additional durability if a power outage occurs right after the commit.</td></tr></table>|
|TimeFormat|Defines the format for storing time in the database. If it is not specified, the default format hh24:mi:ss is used.|
|UseUnicode|Enables or disables Unicode support. Affects character data fetched from the server. When set to True, all character data is stored as WideStrings, and TStringField is replaced by TWideStringFiled.|


## TUniQuery, TUniTable, TUniStoredProc

|Option|Description|
|---|---|
|AdvancedTypeDetection|When False, standard metadata retrieval is performed when detecting the field type in a database. When True, a number of trecords will be prefetched from a table, and the field type will be detected based on the type of data stored in the corresponding column in the table. The default value is False.|
|FetchAll|When True, all records of a query are requested from the database server when opening the dataset.If False, records are retrieved when a data-aware component or a program requests it. The default value is False.|
|ExtendedFieldsInfo|If True, the driver performs additional queries to the database when opening a dataset. These queries return information about which fields of the dataset are required or autoincrement. Set this option to True, if you need the Required property of fields be set automatically.|
|UnknownAsString|If set to True, all SQLite data types that are fetched as text and don't have the size limit, are mapped to TStringField with the default size 8192 bytes. If False (default value), such types are mapped to TMemoField. The TEXT data type is always mapped to TMemoField regardless of the value of this option.|


## TUniLoader

|Option|Description|
|---|---|
|AutoCommit|Used to automatically perform a commit after loading a certain amount of records. When the property is set to True, a transaction implicitly starts before loading the block of records and commits automatically after records were loaded. The default value is True.|
|AutoCommitRowCount|Use the AutoCommitRowCount property to specify the number of records, after which the transaction will be commited automatically when the TLiteLoader.AutoCommit property is set to True. The default value is 1000.|
|QuoteNames|Use the QuoteNames option to quote all database object names in automatically generated SQL statements, such as UPDATE statements. The default value is False.|


## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping SQLite data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| liteInteger | Maps INTEGER to Delphi data types. |
| liteReal | Maps REAL to Delphi data types. |
| liteText | Maps TEXT to Delphi data types. |
| liteBlob | Maps BLOB to Delphi data types. |
| liteNull | Maps NULL to Delphi data types. |
| liteBit | Maps BIT to Delphi data types. |
| liteTinyInt | Maps TINYINT to Delphi data types. |
| liteSmallInt | Maps SMALLINT to Delphi data types. |
| liteInt2 | Maps INT2 to Delphi data types. |
| liteInt | Maps INT to Delphi data types. |
| liteMediumInt | Maps MEDIUMINT to Delphi data types. |
| liteBigInt | Maps BIGINT to Delphi data types. |
| liteUBigInt | Maps UNSIGNED BIG INT to Delphi data types. |
| liteInt8 | Maps INT8 to Delphi data types. |
| liteInt64 | Maps INT64 to Delphi data types. |
| liteChar | Maps CHAR to Delphi data types. |
| liteVarChar | Maps VARCHAR to Delphi data types. |
| liteClob | Maps CLOB to Delphi data types. |
| liteFloat | Maps FLOAT to Delphi data types. |
| liteDouble | Maps DOUBLE to Delphi data types. |
| liteNumeric | Maps NUMERIC to Delphi data types. |
| liteDecimal | Maps DECIMAL to Delphi data types. |
| liteNumber | Maps NUMBER to Delphi data types. |
| liteMoney | Maps MONEY to Delphi data types. |
| liteBool | Maps BOOLEAN to Delphi data types. |
| liteBinary | Maps BINARY to Delphi data types. |
| liteVarBinary | Maps VARBINARY to Delphi data types. |
| liteDate | Maps DATE to Delphi data types. |
| liteTime | Maps TIME to Delphi data types. |
| liteDateTime | Maps DATETIME to Delphi data types. |
| liteTimestamp | Maps TIMESTAMP to Delphi data types. |
| liteTimestampTZ | Maps TIMESTAMP WITH TIME ZONE to Delphi data types. |


## Database File Encryption
### What constitutes Database File Encryption
The SQLite architecture provides the functionality for work with encrypted databases. This means that encoding/decoding is applied to a database file, in the moment of execution of the file read/write operations. This is a low-level encryption "on the fly", it is implemented at the level of the SQLite client library and is completely transparent to the applications working with the database.

But, the fact is that in the client libraries available at the official SQLite website, the algorithms of database file encryption are not implemented. Therefore, usually, to work with encrypted databases one has to either use a custom-built client library with encryption support, or create an own library from the source code, available on the SQLite website.

### UniDAC functionality for Database File Encryption
UniDAC provides built-in capabilities for Database File Encryption, which becomes available when working in Direct mode. Database File Encryption, built in UniDAC, allows to:

- encrypt a database;
- create a new encrypted database;
- connect and work with the encrypted database;
- change the encryption key of the encrypted database;
- decrypt the encrypted database.

To encrypt/decrypt the database file, one of the following encryption algorithms can be used:

- the Triple DES encryption algorithm;
- the Blowfish encryption algorithm;
- the AES encryption algorithm with a key size of 128 bits;
- the AES encryption algorithm with a key size of 192 bits;
- the AES encryption algorithm with a key size of 256 bits;
- the Cast-128 encryption algorithm;
- the RC4 encryption algorithm.

Important note: there are no strict standardized requirements for implementation of database file encryption in SQLite. Therefore, implementation of Database File Encryption in UniDAC is incompatible with other implementations. When using UniDAC, it is possible to work only with encrypted databases, created with the use of UniDAC. In turn, no third-party application will be able to work with encrypted databases, created with the use of UniDAC

### The difference between Database File Encryption and Data Encryption.
The functionality of Data Encryption, which is realized with the help of the TUniEncryptor component, allows to encrypt individual fields in database tables. In this case, the database itself is not encrypted. I.e. on the one hand, the information in this database (with the exception of the encrypted fields) is easily accessible for viewing by any SQLite DB-tools. On the other hand, such database is more simple in terms of modification of data structures.

Database File Encryption encrypts all the data file. Both structure and information on such database becomes unavailable for any third-party applications. An indisputable advantage is the increased level of secrecy of information. The disadvantage is that, for making any changes in the structure of the database, developers will have to use only UniDAC.

Both Database File Encryption and Data Encryption methods are not mutually exclusive and can be used at the same time.

### The usage of Database File Encryption in UniDAC
To control database encryption in UniDAC, the following properties and methods of the TUniConnection component are used:

The TUniConnection.Options.EncryptionAlgorithm property - specifies the encryption algorithm that will be used to connect to an encrypted database, or to create a new encrypted database.
The TUniConnection.EncryptionKey property - specifies the encryption key that will be used to connect to an encrypted database, or to create a new encrypted database.
The TUniConnection.EncryptDatabase method - is used to change the encryption key in an encrypted database, or to decrypt the database.

### Encrypt a database
The following example shows how to encrypt an existing database:

```delphi
UniConnection.Database := 'C:\sqlite.db3';                                  
// the name of the database to be encrypted
UniConnection.SpecificOptions.Values['ForceCreateDatabase'] := 'False';     
// to check that the database exists
UniConnection.SpecificOptions.Values['Direct'] := 'True';                   
// database file encryption is supported in the Direct mode only
UniConnection.SpecificOptions.Values['EncryptionAlgorithm'] := 'leBlowfish';
// the database will be encrypted with the Blowfish encryption algorithm
UniConnection.SpecificOptions.Values['EncryptionKey'] := '';                
// no encryption key specified, because the database is not encrypted yet
UniConnection.Open;                                                         
// connect to the database
TLiteUtils.EncryptDatabase(UniConnection, '11111');                         
// encrypt the database using the "11111" encryption key
```

### Creating of a new encrypted database
The following example shows creating a new encrypted database:

```delphi
UniConnection.Database : = 'C:\sqlite_encoded.db3';                         
// the name of the database to be created
UniConnection.SpecificOptions.Values['ForceCreateDatabase'] := 'True';      
// this will allow to create the new database
UniConnection.SpecificOptions.Values['Direct'] := 'True';                   
// database file encryption is supported in the Direct mode only
UniConnection.SpecificOptions.Values['EncryptionAlgorithm'] := 'leBlowfish';
// the database will be encrypted with the Blowfish encryption algorithm
UniConnection.SpecificOptions.Values['EncryptionKey'] := '11111';           
// the encryption key for the database
UniConnection.Open;                                                         
// create and connect to the database
```

### Connecting to an encrypted database
To connect to an existing encrypted database, the following should be performed:

```delphi
UniConnection.Database := 'C:\sqlite_encoded.db3';                          
// the name of the database to connect to
UniConnection.SpecificOptions.Values['ForceCreateDatabase'] := 'False';     
// to check that the database exists
UniConnection.SpecificOptions.Values['Direct'] := 'True';                   
// database file encryption is supported in the Direct mode only
UniConnection.SpecificOptions.Values['EncryptionAlgorithm'] := 'leBlowfish';
// the encryption algorithm of the database
UniConnection.SpecificOptions.Values['EncryptionKey'] := '11111';           
// the encryption key for the database
UniConnection.Open;                                                         
// connect to the database
```

### Changing the encryption key for the database
To change the encryption key in the encrypted database, you must perform the following:

```delphi
UniConnection.Database := 'C:\sqlite_encoded.db3';                          
// the name of the database to connect to
UniConnection.SpecificOptions.Values['ForceCreateDatabase'] := 'False';     
// to check that the database exists
UniConnection.SpecificOptions.Values['Direct'] := 'True';                   
// database file encryption is supported in the Direct mode only
UniConnection.SpecificOptions.Values['EncryptionAlgorithm'] := 'leBlowfish';
// the encryption algorithm of the database
UniConnection.SpecificOptions.Values['EncryptionKey'] := '11111';           
// the encryption key for the database
UniConnection.Open;                                                         
// connect to the database
TLiteUtils.EncryptDatabase(UniConnection, '22222');                         
// change the database encryption key to '22222'
```

After changing the encryption key, the database connection remains open and the further work with the database can continue. However, if disconnected from the database and for subsequent connection, the new value of the encryption key should be assigned to the UniConnection.EncryptionKey property.

### Decryption of the database
The encrypted database can be decrypted, after that it becomes available for viewing and editing in third-party applications. To decrypt the database you must first connect to it, as shown in the examples above, and then execute the UniConnection.EncryptDatabase('') method, specifying an empty string as a new key.




