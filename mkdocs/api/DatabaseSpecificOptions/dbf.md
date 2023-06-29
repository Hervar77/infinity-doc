
## DBF-specific options

## TUniConnection

|Option name|Description|
|---|---|
|AllFieldsAsNullable|Used to open DBF tables with incorrect data (tables that have records with null values in non-nullable columns). The default value is False.|
|CodePage|Specifies a code page when working with a database. Available values: dpDefault, dpUnitedStatesOEM, dpGreekDOS, dpWesternEuropeanDOS, dpTurkishDOS, dpCentralEuropeanDOS, dpPortugueseDOS, dpIcelandicDOS, dpFrenchCanadianDOS, dpNordicDOS, dpCyrillicDOS, dpThai, dpJapanese, dpChineseSimplified, dpChineseTraditional, dpKorean, dpCentralEuropeanANSI, dpCyrillicANSI, dpWesternEuropeanANSI, dpGreekANSI, dpTurkishANSI, dpHebrewANSI, dpArabicANSI, dpBalticANSI. Default value is dpDefault.|
|CollatingSequence|Specifies the collation sequence. Available values: ASCII and International. Default value is ASCII.|
|ColumnWiseBinding|If set to True, the option enables <a href="https://msdn.microsoft.com/en-us/library/ms713541(v=vs.85).aspx" target="_blank">Column-Wise Binding</a> mode. The fefault value is False. Note: <a href="https://msdn.microsoft.com/en-us/library/ms711730%28v=vs.85%29.aspx" target="_blank">Row-Wise Binding</a> mode is enabled by default. However, some ODBC drivers don't support this mode. In such case, set the ColumnWiseBinding option to True. |
|Connect Mode|Used to specify how connections access DBF table files.<table><tr><td>Exclusive</td><td>Only one connection can access the table file at a time. The active connection holds read/write lock on the file to prevent other connections from reading or writing to it.</td></tr><tr><td>Shared</td><td>The default value. Multiple concurrent connections can read and write to the table file. This mode should be used with caution because it allows multiple connections to modify the file simultaneously. Since DBF databases do not support transactions, an attempt to change the same file simultaneously by multiple connections can cause data corruption in the table file.</td></tr><tr><td>Unsafe</td><td>Multiple concurrent connections can read/write to the same table. The active connection holds read/write lock on the table file, but releases the lock once it has finished reading or writing the data.</td></tr></table>|
|ConnectionTimeout|The time to wait for a connection to open before raising an exception.|
|DBFFormat|The default database format that will be used when creating new tables and working with indexes. Available values: dfAuto, dfdBaseIII, dfdBaseIV, dfdBaseV, dfdBaseVII, dfFoxPro2, dfVisualFoxPro, dfHiPerSix, dfCodebase and dfClipper. Default value is dfAuto. When using dfAuto, the format is detected by .DBF file header. For any other values, .DBF file header will be ignored. The format from the DBFFormat value will be forced used for all .DBF files in the folder.|
|Direct|If set to True, connection to the database is performed directly, and does not require any additional software on the client side. Otherwise, the provider connects using Microsoft dBase ODBC driver. Default value is False.|
|IdentifierCase|The IdentifierCase property allows you to set the case for field names. Supported values:<table><tr><td>icOriginal</td><td>Field names are returned without changing the case.</td></tr><tr><td>icLower</td><td>Field names are returned in the lowercase.</td></tr><tr><td>icUpper</td><td>Field names are returned in the uppercase.</td></tr></table>|
|IgnoreDataErrors|If set to True, corrupted data errors will be ignored when opening a DBF table and an exception will not be raised. The default value is False.|
|IgnoreMetadataErrors|If set to True, metadata errors will be ignored when opening a DBF table and an exception will not be raised. The default value is False.|
|IndexOnReading|Specifies a mechanism of indexes when fetching tables data. Available values: ikNative and ikLocal. When set to ikNative, UniDAC will use standard DBF indexes. We recommend using it when executing SELECT SQL queries for one table with the WHERE clause. When set to ikLocal, UniDAC will use its internal data indexing mechanism. We recommend using it when the SELECT SQL query is executed for several tables (for example, JOIN) with the WHERE clause.|
|UseUnicode|Enables or disables Unicode support. Affects character data fetched from the database. When set to True, all character data is stored as WideStrings, and TStringField is replaced by TWideStringFiled. Default value is False.|


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

The following table lists the constants for mapping DBF data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| dbfChar | Maps CHAR to Delphi data types. |
| dbfVarChar | Maps VARCHAR to Delphi data types. |
| dbfMemo | Maps MEMO to Delphi data types. |
| dbfAutoincrement | Maps AUTOINCREMENT to Delphi data types. |
| dbfLogical | Maps LOGICAL to Delphi data types. |
| dbfInteger | Maps INTEGER to Delphi data types. |
| dbfFloat | Maps FLOAT to Delphi data types. |
| dbfDouble | Maps DOUBLE to Delphi data types. |
| dbfCurrency | Maps CURRENCY to Delphi data types. |
| dbfNumeric | Maps NUMERIC to Delphi data types. |
| dbfDate | Maps DATE to Delphi data types. |
| dbfTime | Maps TIME to Delphi data types. |
| dbfVarBinary | Maps VARBINARY to Delphi data types. |
| dbfBlob | Maps BLOB to Delphi data types. |