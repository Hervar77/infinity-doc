
## Microsoft Access-specific options

## TUniConnection

|Option name|Description|
|---|---|
|ColumnWiseBinding|If set to True, the option enables <a href="https://msdn.microsoft.com/en-us/library/ms713541(v=vs.85).aspx" target="_blank">Column-Wise Binding</a> mode. The fefault value is False. Note: <a href="https://msdn.microsoft.com/en-us/library/ms711730%28v=vs.85%29.aspx" target="_blank">Row-Wise Binding</a> mode is enabled by default. However, some ODBC drivers don't support this mode. In such case, set the ColumnWiseBinding option to True. |
|ConnectionTimeout|The time to wait for a connection to open before raising an exception.|
|DriverVersion|Use the DriverVersion property to specify the version of Microsoft Access Driver (*.mdb, *.accdb). Supported values:<table><tr><td>dvAuto (default)</td><td>The code first tests for the presence of *.accdb driver - if it is not found, *.mdb will be used.</td></tr><tr><td>dvAccdb</td><td>Specifies that *.accdb driver will be used.</td></tr><tr><td>dvMdb</td><td>Specifies that *.mdb driver will be used.</td></tr></table>|
|ExclusiveLock|If True, a database will be opened in the Exclusive mode and can be accessed by only one user at a time. Performance is enhanced when running in the Exclusive mode.|
|ExtendedAnsiSQL|If True, an extended SQL support is enabled.Two new data types are available in Jet 4.0 databases when the ExtendedAnsiSQL flag is turned on: SQL_DECIMAL and SQL_NUMERIC. The default precision and scale are 18 and 0, respectively. Data accessed via ODBC that is typed as SQL_DECIMAL or SQL_NUMERIC will be mapped to Microsoft Jet Decimal instead of Currency.When the ExtendedAnsiSQL flag is turned off, you cannot create tables with decimal or numeric types, and these types will not appear in SQLGetTypeInfo(). However, if the table contains the new data types, they can be used with the correct data types.|
|ForceCreateDatabase|Used to force TLiteConnection to create a new database before opening a connection, if the database does not exist.|
|SystemDatabase|The full path to the Microsoft Access system database to be used with the Microsoft Access database you want to access.|
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

The following table lists the constants for mapping Access data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| accText | Maps Short Text to Delphi data types. |
| accLongText | Maps Long Text to Delphi data types. |
| accByte | Maps Byte to Delphi data types. |
| accInteger | Maps Integer to Delphi data types. |
| accLong | Maps Long to Delphi data types. |
| accSingle | Maps Single to Delphi data types. |
| accDouble | Maps Double to Delphi data types. |
| accNumeric | Maps Numeric to Delphi data types. |
| accDateTime | Maps Date/Time to Delphi data types. |
| accBit | Maps Bit to Delphi data types. |
| accBinary | Maps Binary to Delphi data types. |
| accVarBinary | Maps VarBinary to Delphi data types. |
| accLongBinaryLong Binary | Maps to Delphi data types. |
