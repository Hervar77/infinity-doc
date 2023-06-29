
## InterBase-specific options

Though UniDAC is components that provide unified interface to work with different database servers, it also lets you tune behaviour for each server individually. For thin setup of a certain database server, UniDAC provides server-specific options. These options can be applied to such components as TUniConnection, TUniQuery, TUniTable, TUniStoredProc, TUniSQL, TUniScript via their SpecificOptions property. SpecificOptions is a string list. Therefore you can use the following syntax to assign an option value:

`TUniConnection.SpecificOptions.Values['CharLength'] := '1';`

Below you will find the description of allowed options grouped by components.

## TUniConnection

|Option name|Description|
|---|---|
|CharLength|Specifies the size in bytes of a single character. Set this option with the number in range [0..6] to reflect InterBase support for the national languages. Setting CharLength to zero will instruct TUniConnection to interrogate InterBase server for the actual character length.The default value is 1.|
|Charset|Sets character set that IBDAC uses to read and write character data.|
|ClientLibrary|Use the ClientLibrary option to set or get the client library location.|
|EnableMemos|If set to True, TMemoField and TWideMemoField will be created for BLOB subtype 1 fields. The default value is False.|
|ForceUnloadClientLibrary|Use the option to force unloading of the client library after the connection is closed. The default value is False.|
|IPVersion|Use the IPVersion property to specify Internet Protocol Version. Supported values:<table><tr><td>ivIPBoth (default)</td><td>Specifies that either Internet Protocol Version 6 (IPv6) or Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv4</td><td>Specifies that Internet Protocol Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv6</td><td>Specifies that Internet Protocol Version 6 (IPv6) will be used.</td></tr></table>Note: Internet Protocol Version support has been added in Firebird 3. To use the IPVersion option, your client library version must be version 3 or higher. When the TIPVersion property is set to ivIPBoth, a connection attempt will be made via IPv6 if it is enabled on the operating system. If the connection attempt fails, a new connection attempt will be made via IPv4. |
|NoDBTriggers|Use the option to enable or disable all database triggers. By default, all triggers are enabled.|
|Params|The option allows to specify custom parameters of the transaction. Refer to InterBase API Guide for more information on this parameters. Custom parameters will be used only when the [TUniTransaction.IsolationLevel](#fn:1) property [^1] is set to ilCustom. Multiple parameters can be separated either with the CRLF or with the ";" character.|
|Protocol|Network protocol of connection with InterBase server. The default value is TCP.|
|Role|InterBase connection role.|
|TrustedAuthentication|Windows "Trusted User" security can be applied for authenticating Firebird users on a Windows host.<br/>When the option is set to True, the Firebird security database is ignored during establishing a connection, and only Windows authentication is used.<br/>The default value is False<br/>More detailed information about this authentication mode is available at <a href="http://firebirdsql.org/rlsnotesh/rlsnotes210.html#rnfb210-wintrusted" target="_blank">http://firebirdsql.org/rlsnotesh/rlsnotes210.html#rnfb210-wintrusted</a>.|
|SQLDialect|Use SQLDialect to set or return SQL Dialect used by InterBase client. The SQLDialect property cannot be set to a value greater than the database SQL dialect when the connection is active. If the connection is inactive, the SQLDialect option will be downgraded to match the database SQL dialect.|
|UseUnicode|Enables or disables Unicode support. Affects on the character data fetched from the server. When set to True all character data is stored as WideStrings, and TStringField is replaced with TWideStringFiled.|
|SimpleNumericMap|Used to create ftBCD fields. When it is set to "False" and EnableBCD to "True", fields like DECIMAL(14, 4) are mapped as ftBCD. The option default value is "True".|


## TUniSQL

|Option name|Description|
|---|---|
|AutoCommit|Used to automatically commit each update, insert or delete statement by database server. When using the option it should be kept in mind that the AutoCommit property of TUniConnection has higher precedence over the same properties in components. When the AutoCommit property of a dataset is True and TUniConnection.AutoCommit is True, each update, insert or delete statement is automatically committed by database server. When TUniConnection.AutoCommit is False, automatic commit does not occur, regardless of the value of the AutoCommit option of the dataset.|
|DescribeParams|Specifies whether to query the Name, ParamType, DataType, Size, and TableTypeName properties from the server when preparing a query. The default value is False.|


## TUniQuery, TUniTable, TUniStoredProc

|Option name|Description|
|---|---|
|AutoCommit|Used to automatically commit each update, insert or delete statement by database server. When using the option it should be kept in mind that the AutoCommit property of TUniConnection has higher precedence over the same properties in components. When the AutoCommit property of a dataset is True and TUniConnection.AutoCommit is True, each update, insert or delete statement is automatically committed by database server. When TUniConnection.AutoCommit is False, automatic commit does not occur, regardless of the value of the AutoCommit option of the dataset.|
|AutoClose|The cursor will be closed after fetching all rows. Allows to reduce the number of opened cursors on the server.|
|BooleanDomainFields|If the BooleanDomainFields property is set to True, TBooleanField objects are created for fields that have domain of the integer data type, and the domain name contains 'BOOLEAN'. The defaut value is True.|
|CacheArrays|If True (the default value), then local memory buffer is allocated to hold a copy of the Array content. See the notes below for further details.|
|CacheBlobs|If True (the default value), then local memory buffer is allocated to hold a copy of the BLOB content. See the notes below for further details.|
|ComplexArrayFields|If the ComplexArrayFields property is set to False, any array field is stored as a single TIBCArrayField object. If the option and ObjectView are set to True, array items are stored hierarchically. If the option is set to True, but ObjectView is False, all aray items are stored as sibling fields.|
|DeferredArrayRead|If True, all InterBase array values are fetched only when they are explicitly requested. Otherwise the entire record set with any array values is returned when dataset is opened. Whether array values are cached locally to be reused later or not is controlled by the CacheArrays option.|
|DeferredBlobRead|If True, all InterBase BLOB values are fetched only when they are explicitly requested. Otherwise the entire record set with any BLOB values is returned when dataset is opened. Whether BLOB values are cached locally to be reused later or not is controlled by the CacheBlobs option.|
|DescribeParams|Specifies whether to query the Name, ParamType, DataType, Size, and TableTypeName properties from the server when preparing a query. The default value is False.|
|FetchAll|If True, all records of the query are requested from database server when the dataset is being opened. If False, records are retrieved when a data-aware component or a program requests it. The default value is False.|
|FieldsAsString|If True, then all non-BLOB fields are treated as being of string data type.|
|GeneratorMode|Set the GeneratorMode property to specify which method is used internally to generate sequenced field.The following values are allowed for this property:<table><tr><td>gmInsert</td><td>New record is inserted into the dataset with the first key field populated with a sequenced value. Application may modify this field before posting the record to the database.</td></tr><tr><td>gmPost</td><td>Database server populates key field with a sequenced value when application posts the record to the database. Any value put into key field before post will be overwritten.</td></tr></table>|
|GeneratorStep|Use the GeneratorStep option to set the increment for increasing or decreasing current generator value when using automatic key field value generation feature. The default value is 1.|
|KeyGenerator|Use the KeyGenerator option to specify the name of a generator that will be used to fill in a key field after a new record is inserted or posted to the database.KeyGenerator is used only if the KeyFields property is assigned.|
|QueryRowsAffected|Use the option to increase the performance of update operations. The default value is True.|
|SetDomainNames|Use the option to enable the TIBCFieldDesc.DomainName property for fields. The default value is False.|
|StreamedBlobs|If True, then all edited BLOBs are saved as streamed BLOBs and all streamed BLOBs are handled as streamed. Otherwise streamed BLOBs are handled as usual segmented BLOBs and all edited BLOBs are saved as segmented BLOBs. Setting this option to True allows using benefits of the CacheBlobs option.|

 >Note: The CacheBlobs option controls the way streamed BLOB objects are handled. If False, application can access streamed BLOB values on the server side without caching BLOBs on the client side. Only requested portions of data are fetched. Setting CacheBlobs to False may bring up the following benefits for time-critical applications: reduced traffic over the network since only required data are fetched, less memory is needed on the client side, because returned record sets do not hold contents of BLOB fields. This feature is available only for streamed BLOBs and only if StreamedBlobs option is set to True. This option doesn't make sense if DefferedBlobRead is set to False because all BLOB values are fetched to the dataset in that case.



## TUniScript

|Option name|Description|
|---|---|
|AutoDDL|Use the AutoDDL property to determine whether DDL statements must be executed in a separate transaction.|


## TUniTransaction

|Option name|Description|
|---|---|
|IsolationLevel|<table><tr><td>ilCustom</td><td>The parameters of the transaction are set manually in the Params property.</td></tr><tr><td>ilSnapshotilRepeatableRead</td><td>The default isolation level. Provides a stable, committed view of the database at the time the transaction starts. Other simultaneous transactions can UPDATE and INSERT rows, but this transaction cannot see these changes. For updated rows, this transaction sees versions of these rows as they existed at the start of the transaction. If this transaction attempts to update or delete rows changed by another transaction, an update conflict is reported.</td></tr><tr><td>ilIsolated</td><td>Provides a transaction read-only access to the tables it uses. Other simultaneous transactions may be able to select rows from these tables, but they can not insert, update, and delete rows from these tables.</td></tr><tr><td>ilReadCommitted</td><td>Enables the transaction to see all committed data in the database and to update rows updated and committed by other simultaneous transactions without causing lost update problems.</td></tr><tr><td>ilReadUnCommitted</td><td>Not supported.</td></tr></table>|
|Params|The option allows to specify custom parameters of the transaction. Refer to InterBase API Guide for more information on this parameters. Custom parameters will be used only when the [TUniTransaction.IsolationLevel](#fn:1) property [^1] is set to ilCustom. Multiple parameters can be separated either with the CRLF or with the ";" character.|


## TUniLoader

|Option name|Description|
|---|---|
|AutoCommit|Used to automatically commit each update, insert or delete statement by database server. When using the option it should be kept in mind that the AutoCommit property of TUniConnection has higher precedence over the same properties in components. When the AutoCommit property of a dataset is True and TUniConnection.AutoCommit is True, each update, insert or delete statement is automatically committed by database server. When TUniConnection.AutoCommit is False, automatic commit does not occur, regardless of the value of the AutoCommit option of the dataset.|
|InsertMode|Use the InsertMode option to specify the type of statement used for loading data to InterBase database. If the value is imInsert (default value), the INSERT INTO statement will be used. If set to imUpdateOrInsert, the UPDATE OR INSERT INTO statement will be used.|
|QuoteNames|Use the QuoteNames option to quote all database object names in automatically generated SQL statements, such as UPDATE statements. The default value is False.|
|RowsPerBatch|Use the RowsPerBatch option to specify the number of records that are sent to the server in a single operation. The default value is 50.|

## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping InterBase/Firebird data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| ibcArray | Maps ARRAY to Delphi data types. |
| ibcBigint | Maps BIGINT to Delphi data types. |
| ibcBlob | Maps BLOB to Delphi data types. |
| ibcBoolean | Maps BOOLEAN to Delphi data types. |
| ibcChar | Maps CHAR to Delphi data types. |
| ibcCharBin | Maps BINARY to Delphi data types. |
| ibcDate | Maps DATE to Delphi data types. |
| ibcDecimal | Maps DECIMAL to Delphi data types. |
| ibcDouble | Maps DOUBLE PRECISION to Delphi data types. |
| ibcFloat | Maps FLOAT to Delphi data types. |
| ibcInteger | Maps INTEGER to Delphi data types. |
| ibcNumeric | Maps NUMERIC to Delphi data types. |
| ibcSmallint | Maps SMALLINT to Delphi data types. |
| ibcText | Maps TEXT to Delphi data types. |
| ibcTime | Maps TIME to Delphi data types. |
| ibcTimestamp | Maps TIMESTAMP to Delphi data types. |
| ibcVarchar | Maps VARCHAR to Delphi data types. |
| ibcVarcharBin | Maps VARCHAR BINARY to Delphi data types. |

## InterBase-specific notes: 
This chapter describes several special cases of using InterBase data provider.

## Parallel transactions management: 
InterBase and Firebird database servers support multiple parallel transactions within one connection. You can use this feature with UniDAC and InterBase provider. You should link the TUniTransaction component to a component you want to interact with the sever within a separate transaction. To link a TUniTransaction object to a component, for example to TUniQuery, assign the TUniTranaction object to the TUniQuery. Transaction property:

`UniQuery1.Transaction := UniTransaction1;`

The Transaction property persists in the following components: TUniQuery , TUniTable , TUniStoredProc , TUniSQL , TUniScript , TUniMetaData .




[^1]: Class `TUniTransaction`. Syntax: `property IsolationLevel: TCRIsolationLevel`; 
Remarks: Use the IsolationLevel property to specify how the transactions containing database modifications are handled.
