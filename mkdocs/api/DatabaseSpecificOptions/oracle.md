

## Oracle-specific options

In addition to providing a unified interface to work with different database server, it also allows you to tune application behavior for each server individually. UniDAC provides server-specific options for fine-tuning specific database servers. These options can be applied to such components as TUniConnection, TUniQuery, TUniTable, TUniStoredProc, TUniSQL, and TUniScript using the SpecificOptions property, which is a string list. You can use the following syntax to assign a value to SpecificOptions:

  `UniConnection.SpecificOptions.Values['CharLength'] := '1';`
Below you will find the description of allowed options grouped by components.

## TUniConnection

|Option|Description|
|---|---|
|CharLength|The size of characters in bytes for national language support. The range of allowed values is between 0 and 6. The default value is 0 — the actual character length is determined by an Oracle server.|
|Charset|The character set for the character data transferred between the client and server. Supported with Oracle 8 client only.|
|ClientIdentifier|The client identifier in the session. The client identifier can be set in the session handle at any time in the session. Then, on the next request to the server, the information is propagated and stored in the server session. The first character of the ClientIdentifier must not be ':'. If it is, an exception will be raised. This property has no effect if you use the version of the server earlier than Oracle 9.|
|ConnectionTimeout|The time to wait for a connection to open before raising an exception. Works only when Direct is set to True. The default value is 0.|
|ConnectMode|The system privilege for the user who connects to the server.<table><tr><td>cmNormal</td><td>The default value. Connect as a normal user.</td></tr><tr><td>cmSysOper</td><td>Connect with the SYSOPER privilege.</td></tr><tr><td>cmSysDBA</td><td>Connect with the SYSDBA privilege.</td></tr><tr><td>cmSysASM</td><td>Connect with the SYSASM privilege.</td></tr><tr><td>cmSysBackup</td><td>Connect with the SysBackup privilege.</td></tr><tr><td>cmSysDG</td><td>Connect with the SysDG privilege.</td></tr><tr><td>cmSysKM</td><td>Connect with the SYSKM privilege.</td></tr></table>The privilege must be granted to the user before connecting to the server. ConnectMode is not supported for OCI 7.|
|DateFormat|The default date format used when Oracle makes conversions from internal date format into string values and vice versa. An example of a valid expression is MM/DD/YYYY.|
|DateLanguage|The default language used when Oracle parses internal date format into strings and vice versa. Examples of valid expressions include French, German, etc.|
|<a name="direct"></a>Direct|Enables the Direct mode. When True, connection is performed directly over TCP/IP, without involving Oracle client software. When False, the Oracle provider connects in the Client mode. The default value is False.|
|EnableIntegers|Represents Oracle NUMBER fields with precision less than 10. When True, fields are represented as TIntegerField. When False, fields are represented as TFloatField. The default value is True.|
|EnableLargeint|Represents Oracle NUMBER fields with precision more than 9 and less than 18. When True, fields are represented as TIntegerField. When False, fields are represented as TFloatField. The default value is False.|
|<a name="homename"></a>HomeName|Specifies which Oracle client to use when two ore more Oracle clients are present on the machine. The Oracle provider searches for available homes in the HKEY_LOCAL_MACHINE\SOFTWARE\ORACLE registry folder. When the option is set to an empty string, the provider uses the first directory from the list of homes found in the PATH environment variable as the default Oracle home.|
|HttpPassword|The password for the password-protected directory that contains the HTTP tunneling script.|
|HttpTrustServerCertificate|Specifies whether to verify the server certificate during an SSL handshake. When True, ODAC bypasses walking the certificate chain to verify the certificate. The default value is False.|
|HttpUrl|The URL of the PHP script for HTTP tunneling.|
|HttpUsername|The username for the password-protected directory that contains the HTTP tunneling script.|
|IPVersion|The Internet Protocol Version.<table><tr><td>ivIPBoth</td><td>Either Internet Protocol Version 6 (IPv6) or Version 4 (IPv4) is used.</td></tr><tr><td>ivIPv4</td><td>The default value. Internet Protocol Version 4 (IPv4) is used.</td></tr><tr><td>ivIPv6</td><td>Internet Protocol Version 6 (IPv6) is used.</td></tr>Note: When the property is set to ivIPBoth, a connection attempt is made via IPv6 if it is enabled in the operating system. If the connection attempt fails, a new connection attempt is made via IPv4.</td></tr></table>|
|OptimizerMode|The default optimizer mode for the connection.<table><tr><td>omDefault</td><td>The session optimizer mode remains unchanged.</td></tr><tr><td>omFirstRowsN</td><td>The optimizer chooses the execution plan that returns the first N rows as quickly as possible. If you use Oracle 9.0 or earlier, these options have the same effect as omFirstRows.</td></tr><tr><td>omFirstRows</td><td>This mode is retained for backward compatibility and plan stability. It optimizes for the best execution plan to return the first row as soon as possible.</td></tr><tr><td>omAllRows</td><td>The optimizer explicitly chooses the cost-based approach to optimize a statement block with a goal of best throughput (that is, minimum total resource consumption).</td></tr><tr><td>omChoose</td><td>The optimizer chooses between the rule-based and cost-based approaches for an SQL statement. The choice of the optimizer depends on the presence of statistics for the tables accessed by the statement: if the data dictionary has statistics for at least one of the tables, the optimizer uses the cost-based approach and optimizes with the goal of the best throughput. Otherwise, it uses the rule-based approach.</td></tr><tr><td>omRule</td><td>The optimizer chooses rule-based optimization (RBO). Any other value causes the optimizer to choose cost-based optimization (CBO). The rule-based optimizer is the archaic optimizer mode from the earliest releases of Oracle Database.</td></tr></table>|
|PoolingType|The connection pooling implementation.<table><tr><td>optLocal</td><td>The default value. Our own connection pooling implementation.</td></tr><tr><td>optOCI</td><td>OCI connection pooling.</td></tr><tr><td>optMTS</td><td>Shared server (MTS) connection pooling.</td></tr></table>|
|PrecisionBCD|Represents Oracle NUMBER fields as TBCDField when their precision and scale are less than or equal to the precision and scale in PrecisionBCD, specified as two comma-separated values (BCD precision and scale). PrecisionBCD cannot be greater than 14,4. The default value is 14,4.|
|PrecisionFloat|Represents Oracle NUMBER fields as TFloatField when their precision is less than or equal to the precision in PrecisionFloat. The default value is 0. |
|PrecisionFMTBCD|Represents Oracle NUMBER fields as TFMTBCDField when their precision and scale are less than or equal to the precision and scale in PrecisionFMTBCD, specified as two comma-separated values (FMTBCD precision and scale). The default value is 39,39.|
|PrecisionInteger|Represents Oracle NUMBER fields as TIntegerField when their precision is less than or equal to the precision in PrecisionInteger. The default value is 9.|
|PrecisionLargeint|Represents Oracle NUMBER fields as TLargeintField when their precision is less than or equal to the precision in PrecisionLargeint. The default value is 18.|
|PrecisionSmallint|Represents Oracle NUMBER fields as TSmallintField when their precision is less than or equal to the precision in PrecisionSmallint. The default value is 4.|
|ProxyHostname|The proxy hostname or IP address.|
|ProxyPassword|The proxy password.|
|ProxyPort|The proxy port.|
|ProxyUsername|The proxy username.|
|Schema|Changes the current schema of the session to the specified schema. This option offers a convenient way to perform operations on objects in a schema other than that of the current user, without having to qualify the objects with the schema name. It changes the current schema, but it does not change the session user or the current user, nor does it give you any additional system or object privileges for the session.If TUniConnection.Connected is True, read this property to get the name of the current schema.|
|SSLCACert|The server CA certificate.|
|SSLCert|The client certificate.|
|SSLCipherList|The list of allowed SSL ciphers.|
|SSLServerCertDN|The server's distinguished name (DN) to enable server DN matching. It checks whether the server is genuine by matching the server's global database name against the DN from the server certificate.|
|StatementCache|Enables statement caching. The default value is False.|
|StatementCacheSize|The size of statement cache. The default value is 20.|
|ThreadSafety|Enables the use of OCI in a multithreaded environment. This option must be set to True before any non-blocking fetch of rows or SQL statement execution takes place. The default value is True.|
|UnicodeEnvironment|Enables the use of OCI Unicode Environment. When True, Unicode characters can be used in SQL statements. Set the option to False if you encounter some issues with Unicode Environment. The default value is False.|
|UseOCI7|Forces TUniConnection to use the OCI 7 call style only. The default value is False.|
|UseUnicode|Enables Unicode support. The option affects character data fetched from the server. When True, all character data is stored as WideString, and TStringField is replaced with TWideStringField. Supported starting with Oracle 8. The default value is False.|


## TUniSQL

|Option|Description|
|---|---|
|CommandTimeout|The wait time before a request is sent to the server to terminate the attempt to execute or fetch the current SQL statement. The wait time is specified in seconds. The default value is 0. The value of 0 indicates there are no time limits (an attempt to execute a statement will wait indefinitely).|
|NonBlocking|Executes a SQL statement in a separate thread. The default value is False.|
|StatementCache|Enables statement caching. The default value is False.|
|TemporaryLobUpdate|Enables the use of a temporary LOB to write input and input/output LOB parameter into database when executing dataset's SQL statements. The default value is True.|


## TUniQuery, TUniTable, TUniStoredProc

|Option|Description|
|---|---|
|AutoClose|Closes the OCI cursor after fetching all rows. The option allows to reduce the number of opened cursors on the server. The default value is False.|
|CacheLobs|Allocates a local memory buffer to hold a copy of the LOB content. When False, it is highly recommended to set the DeferredLobRead option to True. Otherwise, LOB values are fetched to the dataset, which may result in performance loss. The default value is True.|
|CommandTimeout|The wait time before a request is sent to the server to terminate the attempt to execute or fetch the current SQL statement. The wait time is specified in seconds. The default value is 0. The default value 0 indicates there are no time limits (an attempt to execute a command will wait indefinitely).|
|DeferredLobRead|When True, all Oracle 8 LOB values are only fetched when they are explicitly requested. When False, an entire record set, including LOB values, is returned when a dataset is opened. The CacheLobs option specifies whether LOB values are cached locallyto be reused later. The default value is False.|
|ExtendedFieldsInfo|Performs an additional query to get information about the returned fields and tables they belong to. This helps to generate correct updating SQL statements but may result in performance decrease. The default value is False.|
|FetchAll|When True, a query requests all records from a database server when opening a dataset. When False, records are retrieved when a data-aware component or an application requests them. The default value is False.|
|FieldsAsString|Treats all non-BLOB fields as strings. The default value is False.|
|HideRowId|Hides the RowId service field (the Visible property is set to False). The default value is True.|
|KeySequence|The name of a sequence that will be used to fill in a key field after a new record is inserted or posted to the database.|
|NonBlocking|Executes a SQL statement in a separate thread. The default value is False.|
|PrefetchLobSize|Retrieves the LOB length and the chunk size, as well as the beginning of the LOB data and the locator during a regular fetch. The option specifies the size of LOB data to be prefetched. If the total LOB size is less than or equal to the value of PrefetchLobSize, then all LOB data is fetched without additional round trips during a regular fetch, which may significantly improve performance. The default value is 0Note: LOB data prefetching is available in Oracle 11 and higher.|
|PrefetchRows|The number of rows that OCI prefetches when executing a query. Setting the property to a value greater than 0 reduces the server round trip count and increases the performance of the application. The default value is 0 — the number of prefetched rows is determined automatically. To disable row prefetching, set the property to -1. Notice that some queries can return invalid rows count when prefetching is enabled — for example, SELECT * FROM DUAL CONNECT BY LEVEL <= 5 returns 1 row when prefetching is enabled, and 5 rows when it is disabled.|
|ProcNamedParams|Specifies a notation method of passing parameter values to the stored PL/SQL object. By default, positional notation is used. To enable named notation, set the option to True. Named notation allows passing parameter values in any order regardless of the position.|
|RawAsString|Treats all RAW fields as hexadecimal strings. The default value is False.|
|ScrollableCursor|When True, TUniDataSet does not cache data on the client side, but uses a scrollable server cursor (available since Oracle 9 only). This option can be used to reduce memory usage, since dataset stores only the current fetched block. Unlike the UniDirectional option, ScrollableCursor allows bidirectional dataset navigation. Note that scrollable cursor is read-only by nature.|
|SequenceMode|Specifies the method to be used internally to generate a sequenced field.<table><tr><td>smInsert</td><td>New record is inserted into the dataset with the first key field populated with a sequenced value. Application may modify this field before posting the record to the database.</td></tr><tr><td>smPost</td><td>The default value. Database server populates key field with a sequenced value when application posts the record to the database. Any value put into key field before post, is overwritten.</td></tr></table>|
|StatementCache|Enables statement caching. The default value is False.|
|TemporaryLobUpdate|Enables the use of a temporary LOB to write input and input/output LOB parameter into database when executing dataset's SQL statements. The default value is True|


## TUniLoader

|Option|Description|
|---|---|
|DirectPath|When True, data is loaded using the Oracle Direct Path Load interface. When False, data is loaded by executing an INSERT statement. The default value is True.|
|QuoteNames|Quotes all database object names in automatically generated SQL statements, such as UPDATE statements. The default value is False.|

TUniLoader has the following limitations when Oracle Direct Path Load is used:

- triggers are not supported
- check constraints are not supported
- referential integrity constraints are not supported
- clustered tables are not supported
- loading of remote objects is not supported
- user-defined types are not supported
- LOBs must be specified after all scalar columns
- LONGs must be specified last
- You cannot use TUniLoader in a threaded OCI environment with Oracle client 8.17 or lower.


## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping Oracle data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| oraAnyData | Maps ANYDATA to Delphi data types. |
| oraBFile | Maps BFILE to Delphi data types. |
| oraBinaryDouble | Maps BINARY_DOUBLE to Delphi data types. |
| oraBinaryFloat | Maps BINARY_FLOAT to Delphi data types. |
| oraBlob | Maps BLOB to Delphi data types. |
| oraCFile | Maps CFILE to Delphi data types. |
| oraChar | Maps CHAR to Delphi data types. |
| oraClob | Maps CLOB to Delphi data types. |
| oraCursor | Maps CURSOR to Delphi data types. |
| oraDate | Maps DATE to Delphi data types. |
| oraDoublePrecision | Maps DOUBLE PRECISION to Delphi data types. |
| oraFloat | Maps FLOAT to Delphi data types. |
| oraInteger | Maps INTEGER to Delphi data types. |
| oraIntervalDS | Maps INTERVAL DAY TO SECOND to Delphi data types. |
| oraIntervalYM | Maps INTERVAL YEAR TO MONTH to Delphi data types. |
| oraLabel | Maps MLSLABEL to Delphi data types. |
| oraLong | Maps LONG to Delphi data types. |
| oraLongRaw | Maps LONG RAW to Delphi data types. |
| oraNChar | Maps NCHAR to Delphi data types. |
| oraNClob | Maps NCLOB to Delphi data types. |
| oraNumber | Maps NUMBER to Delphi data types. |
| oraNVarchar2 | Maps NVARCHAR2 to Delphi data types. |
| oraObject | Maps OBJECT to Delphi data types. |
| oraRaw | Maps RAW to Delphi data types. |
| oraReference | Maps REF to Delphi data types. |
| oraRowID | Maps ROWID to Delphi data types. |
| oraTimeStamp | Maps TIMESTAMP to Delphi data types. |
| oraTimeStampWithLocalTimeZone | Maps TIMESTAMP WITH LOCAL TIME ZONE to Delphi data types. |
| oraTimeStampWithTimeZone | Maps TIMESTAMP WITH TIME ZONE to Delphi data types. |
| oraUndefined | Maps UNDEFINED to Delphi data types. |
| oraURowID | Maps UROWID to Delphi data types. |
| oraVarchar2 | Maps VARCHAR2 to Delphi data types. |
| oraXML | Maps XML to Delphi data types. |

## Oracle-specific notes
This section describes how to connect to Oracle in the Direct mode.

### Connecting in Direct mode

By default the Oracle provider uses the Oracle Call Interface (OCI) to connect to the Oracle database server. This is referred to as connecting in the Client mode, and is the usual way to develop Oracle applications with a third-generation language. All OCI routines are stored in external libraries, so the executables for applications that work through OCI are small. However, working through OCI requires the Oracle client software to be installed on client machines. It is rather inconvenient and causes additional installation and administration expenses. Furthermore, there are some situations where the installation of the Oracle client is not advisable or may be even impossible—for example, if you deploy an application to remote machines that are not overseen by a proficient system administrator.

To overcome these challenges, the Oracle provider includes an option to connect to Oracle directly over the network using the TCP/IP protocol. This is referred to as connecting in the Direct mode. Connecting in the Direct mode does not require Oracle client software to be installed on client machines. The only requirement for running an application that uses ODAC in the Direct mode, is that the operating system must support the TCP/IP protocol.

To connect to Oracle server in the Direct mode, set the Direct property of your TUniConnection instance to True, and the Server property to a string that contains the host address of the database server, port number, and Oracle Service Name (SN) or Oracle System Identifier (SID) in the following format:

if you connect to Oracle using Service Name:

`Host:Port/ServiceName`

or

`Host:Port:sn=ServiceName`

if you connect to Oracle using SID that is the same as Service Name:

`Host:Port:SID`

if you connect to Oracle using SID that is different from Service Name:

`Host:Port:sid=SID`

`Host` is the server's IP address or DNS name.

`Port` is the port number that the server listens to.

`SID` is a system identifier that specifies the name of an Oracle database instance.

`ServiceName` is a system alias to an Oracle database instance (or multiple instances).

Note that the syntax used to set up the Server property in the Direct mode is different from the Client mode. In the Client mode, this property must be set to the TNS name of the Oracle server.

Note that if `sid=` or `sn=` is not defined, the connection will be established using SID. If SID and Service Name are the same, then either of them can be used to set the `TUniConnection.Server` property.

An example below illustrates the connection to Oracle in the Direct mode. The IP address of the Oracle server is 205.227.44.44, the port number is 1521 (the most commonly used port for Oracle), and the SID is `orcl` (standard Oracle SID):

```delphi
var
  UniConnection: TUniConnection;
. . .
UniConnection.Username := 'Scott';
UniConnection.Password := 'tiger';
UniConnection.Server := '205.227.44.44:1521:orcl'; 
UniConnection.SpecificOptions.Values['Direct'] := 'True';
UniConnection.Connect;
```
connecting to Oracle with Service Name:

```delphi
...
UniConnection.Server := '205.227.44.44:1521/orcl';
...
or
...
UniConnection.Server := '205.227.44.44:1521:sn=orcl';
...
```
connecting to Oracle with SID:

```delphi
...
UniConnection.Server := '205.227.44.44:1521:orcl';
...
or
...
UniConnection.Server := '205.227.44.44:1521:sid=orcl';
...
```
This is all you need to do to enable the Direct mode in your application. You do not have to rewrite other parts of your code.

To return to the OCI mode, set UniConnection.SpecificOptions.Values['Direct'] to 'False' and UniConnection.Server to the TNS name of your server.

You can connect to Multi-Threaded Server using the Direct mode. The server must be configured to use a specific port and the TTC protocol. This can help you avoid firewall conflicts.

 >Note: The Direct mode is available in ODAC Professional Edition and Oracle Trial Edition. An attempt to set the UniConnection.SpecificOptions.Values['Direct'] property to 'True' in ODAC Standard Edition will generate a "Feature is not supported" error.

### Client Mode vs. Direct Mode
Applications that use the Client mode and those that use the Direct mode have similar performance and file size. In terms of security, using the Direct mode is the same as using Oracle Client without Oracle Advanced Security. In the Direct mode, ODAC uses DES authentication and does not support Oracle Advanced Security.

Advantages of the Direct mode:

- No need to install and administer Oracle client.
- Reduced system requirements.
Limitations of the Direct mode:

- only TCP/IP connections are supported;
- some issues may occur when using firewalls;
- NLS conversion on the client side is not supported;
- Transparent Application Failover is not supported;
- statement caching is not supported;
- OS Authentication and password changing are not supported;
- Oracle Advanced Security is not supported;
- stable operation of multithreaded applications is not guaranteed; it is highly recommended that you use a separate TUniConnection component for each thread when multiple threads use UniDAC.

A connection in the Direct mode is managed transparently by an instance of TUniConnection, and you can easily switch back to OCI in the Client mode at any time if the above limitations become critical to you.

We tested the Direct mode with all versions of Oracle server for Windows in a local network, but we do not guarantee compatibility with all Oracle servers on other platforms in different networks.


