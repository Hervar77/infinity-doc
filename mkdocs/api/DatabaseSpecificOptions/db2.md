## DB2-specific options

## TUniConnection

|Option name|Description|
|---|---|
|ColumnWiseBinding|If set to True, the option enables <a href="https://msdn.microsoft.com/en-us/library/ms713541(v=vs.85).aspx" target="_blank">Column-Wise Binding</a> mode. The fefault value is False. Note: <a href="https://msdn.microsoft.com/en-us/library/ms711730%28v=vs.85%29.aspx" target="_blank">Row-Wise Binding</a> mode is enabled by default. However, some ODBC drivers don't support this mode. In such case, set the ColumnWiseBinding option to True. |
|ConnectionTimeout|The time to wait for a connection to open before raising an exception.|
|FunctionPath|Use the FunctionPath property to change the current function path of the connection to the specified value. You can specify several names separated by comma. This option can be used to call stored procedures from a schema other than that of the current user without having to qualify the objects with the schema name.|
|Schema|Use the Schema property to change the current schema of the connection to the specified schema. This setting offers a convenient way to perform operations on objects in a schema other than that of the current user without having to qualify the objects with the schema name.|
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
|KeySequence|Use the KeySequence property to specify the name of the sequence that will be used to fill in a key field after a new record is inserted or posted to the database.|
|FetchAll|If True, all records of a query are requested from database server when the dataset is being opened.If False, records are retrieved when a data-aware component or a program requests it. The default value is False.|
|SequenceMode|Set the SequenceMode property to specify which method is used internally to generate sequenced field.The following values are allowed for this property:<table><tr><td>smInsert</td><td>New record is inserted into the dataset with the first key field populated with a sequenced value. Application may modify this field before posting the record to the database.</td></tr><tr><td>smPost</td><td>Database server populates the key field with a sequenced value when application posts the record to the database. Any value put into the key field before post will be overwritten.</td></tr></table>|


## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping DB2 data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| db2Char | Maps CHARACTER to Delphi data types. |
| db2VarChar | Maps VARCHAR to Delphi data types. |
| db2SmallInt | Maps SMALLINT to Delphi data types. |
| db2Integer | Maps INTEGER to Delphi data types. |
| db2BigInt | Maps BIGINT to Delphi data types. |
| db2Decimal | Maps DECIMAL to Delphi data types. |
| db2Float | Maps FLOAT to Delphi data types. |
| db2Double | Maps DOUBLE to Delphi data types. |
| db2Real | Maps REAL to Delphi data types. |
| db2Numeric | Maps NUMERIC to Delphi data types. |
| db2Date | Maps DATE to Delphi data types. |
| db2Time | Maps TIME to Delphi data types. |
| db2TimeStamp | Maps TIMESTAMP to Delphi data types. |
| db2Binary | Maps BINARY to Delphi data types. |
| db2VarBinary | Maps VARBINARY to Delphi data types. |
| db2Blob | Maps BLOB to Delphi data types. |
| db2Clob | Maps CLOB to Delphi data types. |