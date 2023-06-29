
## SAP Sybase-specific options

## TUniConnection

|Option name|Description|
|---|---|
|AnsiNull|This option is implemented primarily for Transact-SQL (Adaptive Server Enterprise) compatibility. The AnsiNull option affects the results of comparison predicates with NULL constants, and also affects warnings issued for grouped queries over NULL values.|
|ApplicationName|The name of a client application. The default value is the name of the executable file of your application.|
|Charset| Specifies the character set that will be used to transfer character data between the client and the server.|
|ClientHostName|Specifies the hostname of the client machine.|
|ColumnWiseBinding|If set to True, the option enables <a href="https://msdn.microsoft.com/en-us/library/ms713541(v=vs.85).aspx" target="_blank">Column-Wise Binding</a> mode. The fefault value is False. Note: <a href="https://msdn.microsoft.com/en-us/library/ms711730%28v=vs.85%29.aspx" target="_blank">Row-Wise Binding</a> mode is enabled by default. However, some ODBC drivers don't support this mode. In such case, set the ColumnWiseBinding option to True. |
|ConnectionTimeout|The time to wait for a connection to open before raising an exception.|
|DetectFieldsOnPrepare|Detects fields on the Prepare command execution.<br/>The default value is <i>True</i><p class="notes"><b>Note:</b> this functionality is not supported in some ODBC drivers.|
|<a name="direct"></a>Direct|If set to True, connection is performed directly over TCP/IP, and does not require SAP Sybase ASE software on the client side. Otherwise, provider connects via ODBC.|
|EncryptPassword|Specifies whether the password is transmitted in encrypted format.<br/><i>epDisable</i> - Use plain text password (the default value).<br/><i>epRequire</i> - Use encrypted password. If it is not supported, return an error message.<br/><i>epPrefer</i> - Use encrypted password. If it is not supported, use plain text password.<br/>The default value is <i>epDisable</i><p class="notes"><b>Note:</b> if the server is configured to require clients to use an encrypted password, entering a plain text password will cause login to fail.|
|IPVersion|Use the IPVersion property to specify Internet Protocol Version. Supported values:<table><tr><td>ivIPBoth</td><td>Specifies that either Internet Protocol Version 6 (IPv6) or Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv4 (default)</td><td>Specifies that Internet Protocol Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv6</td><td>Specifies that Internet Protocol Version 6 (IPv6) will be used.</td></tr></table>Note: When the IPVersion property is set to ivIPBoth, a connection attempt will be made via IPv6 if it is enabled on the operating system. If the connection attempt fails, a new connection attempt will be made via IPv4. |
|MultipleConnections|Enables or disables the creation of additional connections to support concurrent sessions, commands and rowset objects.|
|PrepareMethod|Use the option to specify whether stored procedures are created on the server for calls to SQLPrepare. Supported values:<table><tr><td>pmNone</td><td>Stored procedures are created for every call to SQLPrepare, which may decrease performance when processing statements that do not contain parameters.</td></tr><tr><td>pmPartial (default)</td><td>Stored procedures are created only if the statement contains parameters. Otherwise, the statement is cached and executed directly at SQLExecute time.</td></tr><tr><td>pmFull</td><td>Stored procedures are never created. Any syntax or similar errors are reported at the time of SQLExecute.</td></tr><tr><td>pmFullatPrepare</td><td>Stored procedures are never created. Any syntax or similar errors are returned at the time of SQLPrepare instead of SQLExecute. </td></tr></table>|
|SelectMethod |Specifies whether cursors are to be used by the driver. smDirect indicates do not use cursors and smCursor indicates use cursors.<br/>The default value is <i>smDirect</i><br/>|
|QuotedIdentifier|To avoid conflicts in procedures and queries that contain reserved words, you should use the QuotedIdentifier option. The QuotedIdentifier option tells Adaptive Server to consider any character string enclosed in double quotes as an identifier. If this option is disabled (by default), ASE considers everything inside the double quotes as a simple string.|
|UseUnicode|Enables or disables Unicode support. Affects character data fetched from the server. When set to True, all character data is stored as WideStrings, and TStringField is replaced by TWideStringFiled.|


## TUniSQL

|Option name|Description|
|---|---|
|CommandTimeout|The time to wait for a statement to be executed.|


## TUniQuery, TUniTable, TUniStoredProc

|Option name|Description|
|---|---|
|CommandTimeout|The time to wait for a statement to be executed.|
|ExtendedFieldsInfo|If True, an additional query is performed to get information about returned fields and tables they belong to. The default value is True.|
|FetchAll|If True, all records of a query are requested from database server when the dataset is being opened.If False, records are retrieved when a data-aware component or a program requests it. The default value is False.|


## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping SAP ASE data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| aseChar | Maps char to Delphi data types. |
| aseNChar | Maps nchar to Delphi data types. |
| aseUniChar | Maps unichar to Delphi data types. |
| aseNVarChar | Maps nvarchar to Delphi data types. |
| aseVarchar | Maps varchar to Delphi data types. |
| aseUniVarChar | Maps univarchar to Delphi data types. |
| aseTinyInt | Maps tinyint to Delphi data types. |
| aseSmallint | Maps smallint to Delphi data types. |
| aseUSmallint | Maps usmallint to Delphi data types. |
| aseInteger | Maps integer to Delphi data types. |
| aseUInteger | Maps uninteger to Delphi data types. |
| aseBigint | Maps bigint to Delphi data types. |
| aseUBigint | Maps ubigint to Delphi data types. |
| aseDecimal | Maps decimal to Delphi data types. |
| aseFloat | Maps float to Delphi data types. |
| aseDouble | Maps double to Delphi data types. |
| aseReal | Maps real to Delphi data types. |
| aseNumeric | Maps numeric to Delphi data types. |
| aseDate | Maps date to Delphi data types. |
| aseTime | Maps time to Delphi data types. |
| aseDateTime | Maps datetime to Delphi data types. |
| aseBit | Maps bit to Delphi data types. |
| aseBinary | Maps binary to Delphi data types. |
| aseVarBinary | Maps varbinary to Delphi data types. |
| aseImage | Maps image to Delphi data types. |
| aseText | Maps text to Delphi data types. |
| aseUniText | Maps unitext to Delphi data types. |
| aseXml | Maps xml to Delphi data types. |
| aseSmallmoney | Maps smallmoney to Delphi data types. |
| aseMoney | Maps money to Delphi data types. |
| aseSmalldatetime | Maps smalldatetime to Delphi data types. |
| aseTimestamp | Maps timestamp to Delphi data types. |