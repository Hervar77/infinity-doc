

## SQL Server-specific options

Though UniDAC is components that provide unified interface to work with different database servers, it also lets you tune the behaviour for each server individually. For thin setup of a certain database server, UniDAC provides server-specific options. These options can be applied to such components as TUniConnection, TUniQuery, TUniTable, TUniStoredProc, TUniSQL, TUniScript via their SpecificOptions property. SpecificOptions is a string list. Therefore you can use the following syntax to assign an option value:

`UniConnection.SpecificOptions.Values['ApplicationName'] := 'My application';`

Below you will find the description of allowed options grouped by components.

## TUniConnection

|Option name|Description|
|---|---|
|ApplicationIntent|Specifies the application workload type when connecting to a server.|
|ApplicationName|The name of a client application. The default value is the name of the executable file of your application.|
|Authentication|Use the Authentication property to specify authentication service used by the database server to identify a user. The Authentication property accepts one of the following values:<table><tr><td>auWindows</td><td>Uses Windows NT/2000/XP integrated security, or "SSPI" (Security Support Provider Interface). Username, Password and LoginPrompt properties are ignored.</td></tr><tr><td>auServer (default)</td><td>An alternative way of identifying users by database server. To establish a connection valid Username and Password either hardcoded into application or provided in server login prompt fields are required.</td></tr></table>|
|AutoTranslate|When set to True, character strings sent between the client and server are translated by converting through Unicode to minimize problems in matching extended characters between the code pages on the client and the server.|
|CompactAutoShrinkThreshold|Specifies the amount of free space in the database file before automatic shrink will start. Measured in percents. The default value is 60.|
|CompactDefaultLockEscalation|Specifies how many locks should be performed before trying escalation from row to page or from page to table. The default value is 100.|
|Compact FlushInterval|Specifies the interval at which committed transactions are flushed to disk. Measured in seconds. The default value is 10.|
|CompactInitMode|Use this property to specify the file mode that will be used to open the database file. The InitMode property accepts one of the following values:<table><tr><td>imExclusive</td><td>Database file is opened for exclusive use. This mode prevents others from opening this database file.</td></tr><tr><td>imReadOnly</td><td>Database file is opened for reading. All operations that write to database are unallowable.</td></tr><tr><td>imReadWrite (default)</td><td>Both read and write operations are allowed.</td></tr><tr><td>imShareRead</td><td>Opens a database file preventing others from opening the same file in the read mode.</td></tr></table>|
|CompactLocaleIdentifier|Specifies the locale ID. The default value is the system default locale on Windows systems and 0 on other systems.|
|CompaLockEscalation|Specifies how many locks should be performed before trying escalation from row to page or from page to table. Measured in milliseconds. The default value is 100.|
|CompactLockTimeout|Specifies how much time a transaction will wait for a lock. Measured in milliseconds. The default value is 2000.|
|CompactMaxBufferSize|Specifies how much memory SQL Server Compact Edition can use before flushing changes to disc. Measured in kilobytes. The default value is 640.|
|CompactMaxDatabaseSize|Specified maximum size of the main database file. Measured in megabytes. The default value is 128.|
|CompactTempFileDirectory|Specifies the temp file directory. If this option is not assigned, the current database is used as a temporary database.|
|CompactTempFileMaxSize|Specified maximum size of the temporary database file. Measured in megabytes. The default value is 128.|
|CompactTransactionCommitMode|Specifies in what way the buffer pool will be flushed on transaction commit. The following two values are allowed:<table><tr><td>cmAsynchCommit</td><td>Asynchronous commit to disk.</td></tr><tr><td>cmSynchCommit (default)</td><td>Synchronous commit to disk.</td></tr></table>|
|CompactVersion|Specifies which version of SQL Server Compact Edition will be used.<table><tr><td>cvAuto (default)</td><td>Version of SQL Server Compact Edition will be chosen automatically depending on database version. If database is not provided, the higher available server version will be chosen.</td></tr><tr><td>cv30</td><td>Uses SQL Server Compact Edition Version 3.0 or 3.1.</td></tr><tr><td>cv35</td><td>Uses SQL Server Compact Edition Version 3.5.</td></tr></table>|
|ConnectionTimeout|Use ConnectionTimeout to specify the amount of time, in seconds, that can expire before an attempt to consider a connection unsuccessful. The default value is 15 seconds.|
|Encrypt|Specifies if data should be encrypted before sending it over the network. The default value is False.|
|FailoverPartner|Specifies the SQL Server name to which SQL Native Client will reconnect when a failover of the principal SQL Server occurs. This option is supported only for SQL Server 2005 using SQL Native Client as an OLE DB provider.|
|ForceCreateDatabase|Used to force TLiteConnection to create a new database before opening a connection, if the database does not exist.|
|IPVersion|Use the IPVersion property to specify Internet Protocol Version. Supported values:<table><tr><td>ivIPBoth</td><td>Specifies that either Internet Protocol Version 6 (IPv6) or Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv4 (default)</td><td>Specifies that Internet Protocol Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv6</td><td>Specifies that Internet Protocol Version 6 (IPv6) will be used.</td></tr></table>Note: When the TIPVersion property is set to ivIPBoth, a connection attempt will be made via IPv6 if it is enabled on the operating system. If the connection attempt fails, a new connection attempt will be made via IPv4. |
|InitialFileName|Specifies the name of the main database file. This database will be default database for the connection. SQL Server attaches the database to the server if it has not been attached to the server yet. So, this property can be used to connect to the database that has not been attached to the server yet.|
|Language|A SQL Server language name. Identifies the language used for system message selection and formatting. The language must be installed on the computer running an instance of SQL Server otherwise the connection will fail.|
|LockTimeout|Specifies the number of milliseconds that a transaction will wait to obtain a lock to avoid global deadlocks. The default value is 2000.|
|MultipleActiveResultSets|Enables support for SQL Server 2005 Multiple Active Result Sets (MARS) technology. It allows applications to have more than one pending request per connection, and in particular, to have more than one active default result set per connection. Current session is not blocked when using FetchAll = False, and it is not necessary for OLE DB to create additional sessions for any query executing. MARS is only supported by SQL Server 2005 with using SQL Native Client as OLE DB provider.|
|MultipleConnections|Enables or disables the creation of additional connections to support concurrent sessions, commands and rowset objects.|
|MultiSubnetFailover|Use the MultiSubnetFailover option to configure the prNativeClient or prMSOLEDB provider to faster detect and connect to the currently active server by making simultaneous connection attempts to all IP addresses associated with the group listener of a SQL Server AlwaysOn Availability Group or a SQL Server Failover Cluster Instance. The default value is False.|
|NativeClientVersion|Specifies which version of SQL Native Client will be used. The default value is ncAuto. NativeClientVersion is applied when the Provider property is set to prNativeClient or prAuto.|
|NetworkLibrary|The name of the Net-Library (DLL) used to communicate with an instance of SQL Server. The name should not include the path or the .dll file name extension. The default name is provided by the SQL Server Client Network Utility.|
|PacketSize|Network packet size in bytes. The packet size property value must be between 512 and 32,767. The default network packet size is 4,096.|
|PersistSecurityInfo|The data source object is allowed to persist sensitive authentication information such as password along with other authentication information.|
|Provider|This property allows you to specify a provider from the list of supported providers or use the Direct mode. Some features added to SQL &nbsp;Server 2005 require the SQL Native Client (prNativeClient) provider to be used. If chosen provider is not installed, an exception is raised. Supported values:<table><tr><td>prAuto (default)</td><td>prAuto is the default value of the Provider property. With default value, UniDAC will use the most recent version of one of the supported providers in the following order:<ol><li>prNativeClient</li><li>prMSOLEDB</li><li>prSQL</li></ol>First UniDAC checks whether SQL Server Native Client is installed in the system. If SQL Server Native Client is not found, UniDAC looks for Microsoft OLE DB Driver for SQL Server. If neither SQLNCLI nor MSOLEDBSQL is installed in the system, the driver will use Microsoft OLE DB Provider for SQL Server.</td></tr><tr><td>prSQL</td><td>Uses the provider preinstalled with Windows that has limited functionality.</td></tr><tr><td>prMSOLEDB</td><td>Uses Microsoft OLE DB Driver for SQL Server (MSOLEDBSQL). You need to have the driver installed on your system to use this value for Provider.</td></tr><tr><td>prNativeClient</td><td>Uses the SQL Native Client. It should be installed on the computer to use this Provider value. This provider offers the maximum functionality set.</td></tr><tr><td>prCompact</td><td>SQL Server Compact Edition provider.</td></tr><tr><td>prDirect</td><td>Connect to SQL Server directly via TCP/IP.</td></tr></table>|
|QuotedIdentifier|Causes Microsoft&#174; SQL Server&#8482; to follow the SQL-92 rules regarding quotation mark delimiting identifiers and literal strings. Identifiers delimited by double quotation marks can be either Transact-SQL reserved keywords or can contain characters not usually allowed by the Transact-SQL syntax rules for identifiers.QuotedIdentifier must be True when creating or manipulating indexes on computed columns or indexed views. If QuotedIdentifier is False, CREATE, UPDATE, INSERT, and DELETE statements on tables with indexes on computed columns or indexed views will fail.<table><tr><td>True (default)</td><td>Identifiers can be delimited by double quotation marks, and literals must be delimited by single quotation marks.All strings delimited by double quotation marks are interpreted as object identifiers. Therefore, quoted identifiers do not have to follow the Transact-SQL rules for identifiers. They can be reserved keywords and can include characters not usually allowed in Transact-SQL identifiers. Double quotation marks cannot be used to delimit literal string expressions; single quotation marks must be used to enclose literal strings. If a single quotation mark (') is a part of the literal string, it can be represented by two single quotation marks ("). QuotedIdentifier must be True when reserved keywords are used for object names in the database.</td></tr><tr><td>False (BDE compatibility)</td><td>Identifiers cannot be quoted and must follow all Transact-SQL rules for identifiers. Literals can be delimited by either single or double quotation marks. If a literal string is delimited by double quotation marks, the string can contain embedded single quotation marks, such as apostrophes.</td></tr></table>|
|UseWideMemos|Use the option to manage the field type that will be created for the NTEXT data type. If True (default), TWideMemo fields will be created for the NTEXT data type. If False, TMemo fields will be created.|
|UuidWithBraces|Use the UuidWithBraces option to specify whether the values of UUID fields are returned with braces. The default value is True.|
|TrustServerCertificate|Lets enabling traffic encryption without validation. The default value is False. This option is only supported by SQL Server 2005 with using SQL Native Client as OLE DB provider.|
|WorkstationID|A string identifying the workstation. The default value is the name of your machine.|


## TUniSQL

|Option name|Description|
|---|---|
|CommandTimeout|Use CommandTimeout to specify the amount of time that expires before an attempt to execute a command is considered unsuccessful. Is measured in seconds.If a command is successfully executed prior to the expiration of the seconds specified, CommandTimeout has no effect.The default value is 0 (infinite).|
|DescribeParams|Specifies whether to query the Name, ParamType, DataType, Size, and TableTypeName properties from the server when preparing a query. The default value is False.|
|NonBlocking|Used to execute an SQL statement in a separate thread. Set the NonBlocking option to True to fetch rows in a separate thread.|


## TUniQuery, TUniTable, TUniStoredProc

|Option name|Description|
|---|---|
|CheckRowVersion|Determines whether the dataset checks for rows modifications made by another user on automatic generation of SQL statement for update or delete data. If CheckRowVersion property is False and DataSet has keyfields, the WHERE clause of SQL statement is generated basing on these keyfields. If there is no primary key and no Identity field, then all non-BLOB fields will take part in generating SQL statements. If CheckRowVersion is True and DataSet has TIMESTAMP field, &nbsp;only this field is included into WHERE clause of generated SQL statement. Otherwise, all non BLOB fields are included. All mentioned fields refer to the current UpdatingTable. The default value is False. The CheckRowVersion option requires enabled DMLRefresh.|
|CommandTimeout|Use CommandTimeout to specify the amount of time that expires before an attempt to execute a command is considered unsuccessful. Is measured in seconds.If a command is successfully executed prior to the expiration of the seconds specified, CommandTimeout has no effect.The default value is 0 (infinite).|
|CursorType|Allows choosing cursor types supported by SQL Server. The available values are:<table><tr><td>ctBaseTable</td><td>Base table cursor. This cursor is used for working with Compact Edition.This cursor is the fastest of the SQL server cursors and the only cursor that interacts directly with the storage engine.This allows to increase the speed of data access several times. Data modifications, deletions, and insertions by other users are visible.If UniDirectional=False, the cursor is used only when fetching data, and Data updates are reflected on database by SQL statements execution.In order to use the cursor also for data modification it is necessary to set the UniDirectional property to True.But in this case the cursor does not support bookmarks and cannot be represented in multiline controls such as DBGrid.</td></tr></table><br /><table><tr><td>ctDefaultResultSet (default)</td><td>By the old SQL Server terminology is the Firehose cursor. It serves for the fastest data fetch from server to the client side.Allows to run batches. Data updates are reflected in the database only by SQL statements execution. The default value.</td></tr></table><br /><table><tr><td>ctDynamic</td><td>Dynamic cursor. Used when data is not cached at the server and fetch is performed row by row as required.Doesn't support bookmarks and cannot be represented in multiline controls such as DBGrid.Data modifications, deletions, and insertions by other users are visible. Data updates are reflected on database both bySQL statements execution and server cursors means.</td></tr></table><br /><table><tr><td>ctKeyset</td><td>Allows to cache only keyfields at the server. Fetching is performed row by row when a data-aware component or a program requests it.Records added by other users are not visible, and records deleted by other users are inaccessible. Data updates are reflected in thedatabase both by SQL statements execution and server cursors means.</td></tr></table><br /><table><tr><td>ctStatic</td><td>Static copying of records. Query execution results are cashed at the server. Fetch is performed row by row when a data-aware component ora program requests it. When a cursor is opened, all newly added updates are invisible. Used mostly for reporting.</td></tr></table>|
|CursorUpdate|Specifies what way data updates reflect on database when modifying dataset by using server cursors ctKeySet and ctDynamic. If the CursorUpdate property is True, all dataset modifications pass to database by server cursors. If the CursorUpdate property is False, all dataset updates pass to server by SQL statements generated automatically or specified in SQLUpdate, SQLInsert or SQLDelete. The default value is True.|
|DescribeParams|Specifies whether to query the Name, ParamType, DataType, Size, and TableTypeName properties from the server when preparing a query. The default value is False.|
|DisableMultipleResults|Use the option to disable support for the Multiple Active Result Sets (MARS) technology, which allows applications to have multiple pending requests per connection and multiple default result sets per connection. The default value is False.|
|FetchAll|If True, all records of the query are requested from the database server when the dataset is being opened. If False, records are retrieved when a data-aware component or a program requests it. The default value is True.|
|HideSystemUniqueFields|Used the option to hide system fields for the prSQL, prNativeClient and prMSOLEDB providers. The default value is True.|
|LastIdentityValueFunction|Determines which system function to use to obtain an identifier when adding a record. The available values are:<table><tr><td>vfIdentCurrent</td><td>The IDENT_CURRENT system function is used. It returns the last identity value generated for a specified table or view. The last identity value generatedcan be for any session and any scope.</td></tr></table><br /><table><tr><td>vfIdentity</td><td>The @@IDENTITY system function is used. It returns the last-inserted identity value.</td></tr></table><br /><table><tr><td>vfScopeIdentity</td><td>The SCOPE_IDENTITY system function is used. It returns the last identity value inserted into an identity column in the same scope. A scope is a module:a stored procedure, trigger, function, or batch.</td></tr></table>|
|NonBlocking|Set the NonBlocking option to True to fetch rows in a separate thread. The BeforeFetch event is called in the additional thread context that performs data fetching. This event is called every time on the Fetch method call. The AfterFetch event is called in the main thread context only once after fetching is completely completed.In the NonBlocking mode, as well as if FetchAll = False, an extra connection is created. When setting the NonBlocking option to True, you should keep in mind that execution of such queries blocks the current session. In order to avoid blocking, OLE DB creates an additional session as in FetchAll = False. It causes the same problems when FetchAll = False.This problem can be solved by using MARS (the specific option MultipleActiveResultSets = True). The current session is not blocked and OLE DB is not required to create an addition session to run a query. MARS is supported since SQL Server 2005 if SQL Native Client is used as OLE DB provider.|
|QueryIdentity|Specifies whether to request Identity field value, if such exists, on execution Insert or Append method. If to refuse of getting Identity you can have an impact on performance of Insert or Append by about 20%. Affects only for ctDefaultResultSet cursor. If you are inserting value into SQL_VARIANT field, and QueryIdentity is True then an error is raised. The default value is True.|
|UniqueRecords|Use UniqueRecords to specify whether to query additional key fields from the server. If UniqueRecords is False, keyfields are not queried from the server when they are not included in the query explicitly. For example, the result of the query execution "SELECT ShipName FROM Orders" holds the only field ShipName. When used with [ReadOnly](#fn:1) property [^1] set to True, UniqueRecords option gives insignificant advantage of performance. But in this case SQLRefresh will be generated in simplified way. If UniqueRecord is True, keyfields needed for complete automatic generation of SQLInsert, SQLUpdate, SQLDelete or SQLRefresh statements are queried from the server implicitly. For example, the result of query execution "SELECT ShipName FROM Orders" holds at least two fields ShipName and OrderID. The default value is False. Has effect only for ctDefaultResultSet cursor.|


## TUniScript

The TUniScript component has no SQL Server-specific options.### TUniLoader

|Option name|Description|
|---|---|
|FireTrigger|Use the option to fire table triggers with TMSLoader on SQL Server during insertion operations. The default value is False.|
|KeepIdentity|Use the KeepIdentity property to specify in what way IDENTITY column values must be handled. If KeepIdentity is set to False, IDENTITY columns will be initialized by the server. Any value assigned to such column in your application is ignored. If KeepIdentity is set to True, the IDENTITY property will not be available for all IDENTITY fields accepting NULL. So in this case unique values should be generated and assigned by the client application. The default value of the KeepIdentity property is False.|
|KeepNulls|If this option is set to False, each NULL value inserted into a field with a DEFAULT constraint will be replaced with the default value. If KeepNulls is set to True, NULL values inserted into a field with a DEFAULT constraint will not be replaced with the default values. The default value of the KeepNulls property is False.|
|RowsPerBatch|Use the RowsPerBatch property to specify the number of rows to load in a single batch. Server optimizes loading according to this value. The default value of this option is Unknown.|
|KilobytesPerBatch|Use the KilobytesPerBatch option to specify the size of data in kilobytes to load in a single batch. The default value of this option is Unknown.|
|LockTable|Use the LockTable property to specify if the table-level lock is performed while loading is in progress. Setting this option to True should improve the performance greatly. If this option is set to False, the locking behaviour is determined by the table option. The default value of the LockTable option is False.|
|CheckConstraints|Use the CheckConstraints property to specify if the table constraints are checked during loading. If this option is set to False, the table constraints are not checked. The default value of the CheckConstraints option is False.|
|QuoteNames|Use the QuoteNames option to quote all database object names in automatically generated SQL statements, such as UPDATE statements. The default value is False.|


## TUniDump

|Option name|Description|
|---|---|
|IdentityInsert|Use the IdentityInsert property to add SET IDENTITY_INSERT TableName ON at the beginning of the script and SET IDENTITY_INSERT TableName OFF at the end of the script. The first line allows explicit values to be inserted into the identity column of a table and INSERT statements are generated with IDENTITY field values. Otherwise the IDENTITY field will not be included to the INSERT statements. SET IDENTITY_INSERT will not be added while the option is ON if the table does not have a field identified as IDENTITY or there are no records in the table.|


## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping SQL Server data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| msBigint | Maps bigint to Delphi data types. |
| msBinary | Maps binary to Delphi data types. |
| msBit | Maps bit to Delphi data types. |
| msChar | Maps char to Delphi data types. |
| msDate | Maps date to Delphi data types. |
| msDatetime | Maps datetime to Delphi data types. |
| msDatetime2 | Maps datetime2 to Delphi data types. |
| msDatetimeoffset | Maps datetimeoffset to Delphi data types. |
| msDecimal | Maps decimal to Delphi data types. |
| msFloat | Maps float to Delphi data types. |
| msImage | Maps image to Delphi data types. |
| msInt | Maps int to Delphi data types. |
| msMoney | Maps money to Delphi data types. |
| msNChar | Maps nchar to Delphi data types. |
| msNText | Maps ntext to Delphi data types. |
| msNumeric | Maps numeric to Delphi data types. |
| msNVarchar | Maps nvarchar to Delphi data types. |
| msReal | Maps real to Delphi data types. |
| msSmalldatetime | Maps smalldatetime to Delphi data types. |
| msSmallint | Maps smallint to Delphi data types. |
| msSmallmoney | Maps smallmoney to Delphi data types. |
| msSqlVariant | Maps sql_variant to Delphi data types. |
| msText | Maps text to Delphi data types. |
| msTime | Maps time to Delphi data types. |
| msTimestamp | Maps timestamp to Delphi data types. |
| msTinyint | Maps tinyint to Delphi data types. |
| msUniQueIdentifier | Maps uniqueidentifier to Delphi data types. |
| msVarbinary | Maps varbinary to Delphi data types. |
| msVarchar | Maps varchar to Delphi data types. |
| msXml | Maps xml to Delphi data types. |

## SQL Server specific notes

### Connecting in Direct mode

By default, the OLE DB interface is used directly through a set of COM-based interfaces to connect to server. Such approach allows using client applications on Windows workstations only.

To overcome these problems, the prDirect value for the Provider property was added for ability to connect to SQL Server directly over the network using the TCP/IP protocol. This is referred to as connecting in the Direct mode. Connection in the Direct mode does not require OLEDB provider or SQL Native Client provider to be installed on target machines. The only requirement for running an UniDAC-based application that uses the Direct mode is that the operating system must support the TCP/IP protocol.

### Setting up Direct mode connections
Here is an example that illustrates connecting to SQL Server in the Direct mode. The server's IP address is 205.227.44.44, its port number is 1433 (this is the most commonly used port for SQL Server).

```delphi
var
  UniConnection: TUniConnection;
. . .

  UniConnection.ProviderName := 'SQL Server';
  UniConnection.SpecificOptions.Values['Provider'] := 'prDirect';
  UniConnection.SpecificOptions.Values['Authentication'] := 'auServer';
  UniConnection.Username := 'sa';
  UniConnection.Password := '';
  UniConnection.Server := '205.227.44.44';
  UniConnection.Port := 1433;
  UniConnection.Connect;
```
All we have to do is to set the `TUniConnection.Options.Provider` property to prDirect to enable Direct mode connections in your application. You do not have to rewrite other parts of your code.


[^1]: Class `TCustomDADataSet`. Syntax `property ReadOnly: boolean default False`;
Remarks:
Use the ReadOnly property to prevent users from updating, inserting, or deleting data in the dataset. By default, ReadOnly is False, meaning that users can potentially alter data stored in the dataset.
To guarantee that users cannot modify or add data to a dataset, set ReadOnly to True.
When ReadOnly is True, the dataset's CanModify property is False.