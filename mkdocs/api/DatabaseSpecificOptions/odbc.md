## ODBC-specific options

## TUniConnection

|Option name|Description|
|---|---|
|ColumnWiseBinding|If True - enables <a href="https://msdn.microsoft.com/en-us/library/ms713541(v=vs.85).aspx" target="_blank">Column-Wise Binding</a> mode. Default value is False.<p class="notes"><b>Note:</b> <a href="https://msdn.microsoft.com/en-us/library/ms711730%28v=vs.85%29.aspx" target="_blank">Row-Wise Binding</a> mode is enabled by default. However, some ODBC drivers don't support this mode. In such case, set the ColumnWiseBinding option to True.|
|ConnectionTimeout|The time to wait for a connection to open before raising an exception.|
|DetectFieldsOnPrepare|Detects fields on the Prepare command execution.<br/>The default value is <i>True</i><p class="notes"><b>Note:</b> this functionality is not supported in some ODBC drivers.|
|DriverManager|Specifies the dynamic-link library (DLL) that loads ODBC database drivers on behalf of an application.|
|DSNType|The type of the data source name (DSN) assigned to the Server property.<table><tr><td>ntAuto</td><td>The default value. Automatically identify the type of DSN.</td></tr><tr><td>ntName</td><td>User DSN or System DSN (registered with ODBC Administrator).</td></tr><tr><td>ntFile</td><td>File DSN (a .DSN file containing the data source information).</td></tr><tr><td>ntConnectionString</td><td>ODBC connection string.</td></tr></table>|
|LongVarBinaryAsBlob|Specifies that all binary byte strings represented by the LONGVARBINARY typewill be retrieved as BLOB fields and handled by the TBlobField class. The default value is True.|
|UseUnicode|Enables or disables Unicode support. Affects character data fetched from the server. When set to True, all character data is stored as WideStrings, and TStringField is replaced by TWideStringFiled.|
|VarBinaryAsBlob|If set to True, all binary byte strings represented by the VARBINARY type will be retrieved as BLOB fields and handled by the TBlobField class. The default value is False.|


## TUniSQL

|Option name|Description|
|---|---|
|CommandTimeout|The time to wait for a statement to be executed.|


## TUniQuery, TUniTable, TUniStoredProc

|Option name|Description|
|---|---|
|CommandTimeout|The time to wait for a statement to be executed.|
|ExtendedFieldsInfo|If True, an additional query is performed to get information about the returned fields and tables they belong to. The default value is False.|
|FetchAll|If True, all records of a query are requested from database server when the dataset is being opened.If False, records are retrieved when a data-aware component or a program requests it. The default value is False.</td></tr></tr><tr><td>FieldsAsString|Used to store all non-BLOB fields as string. The default value is False.|
|UnknownAsString|Used to map fields of unknown data types to TStringField (TWideStringField). The default value is False. If False, fields of unknown data types (for example the ifnull function result) are mapped to TMemoField or TWideMemoField depending on the value of the UseUnicode option. Memo is used because maximum length of values from such fields is unknown. If True, fields of unknown data types are mapped to TStringField or TWideStringField depending on the value of the UseUnicode option. Size of fields is set to 8192. Values larger than this size are truncated.|


## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping ODBC data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| odbcChar | Maps SQL_CHAR to Delphi data types. |
| odbcWideChar | Maps SQL_WCHAR to Delphi data types. |
| odbcVarChar | Maps SQL_VARCHAR to Delphi data types. |
| odbcWideVarChar | Maps SQL_WVARCHAR to Delphi data types. |
| odbcLongVarChar | Maps SQL_LONGVARCHAR to Delphi data types. |
| odbcWideLongVarChar | Maps SQL_WLONGVARCHAR to Delphi data types. |
| odbcBit | Maps SQL_BIT to Delphi data types. |
| odbcTinyInt | Maps SQL_TINYINT to Delphi data types. |
| odbcUTinyInt | Maps SQL_TINYINT UNSIGNED to Delphi data types. |
| odbcSmallInt | Maps SQL_SMALLINT to Delphi data types. |
| odbcUSmallInt | Maps SQL_SMALLINT UNSIGNED to Delphi data types. |
| odbcInteger | Maps SQL_INTEGER to Delphi data types. |
| odbcUInteger | Maps SQL_INTEGER UNSIGNED to Delphi data types. |
| odbcBigInt | Maps SQL_BIGINT to Delphi data types. |
| odbcUBigInt | Maps SQL_BIGINT UNSIGNED to Delphi data types. |
| odbcReal | Maps SQL_REAL to Delphi data types. |
| odbcFloat | Maps SQL_FLOAT to Delphi data types. |
| odbcDouble | Maps SQL_DOUBLE to Delphi data types. |
| odbcDecimal | Maps SQL_DECIMAL to Delphi data types. |
| odbcNumeric | Maps SQL_NUMERIC to Delphi data types. |
| odbcDate | Maps SQL_TYPE_DATE to Delphi data types. |
| odbcTime | Maps SQL_TYPE_TIME to Delphi data types. |
| odbcTimeStamp | Maps SQL_TYPE_TIMESTAMP to Delphi data types. |
| odbcBinary | Maps SQL_BINARY to Delphi data types. |
| odbcVarBinary | Maps SQL_VARBINARY to Delphi data types. |
| odbcLongVarBinary | Maps SQL_LONGVARBINARY to Delphi data types. |
| odbcBlob | Maps SQL_BLOB to Delphi data types. |
| odbcClob | Maps SQL_CLOB to Delphi data types. |
| odbcXml | Maps SQL_XML to Delphi data types. |
| odbcVariant | Maps SQL_VARIANT to Delphi data types. |