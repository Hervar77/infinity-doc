## Advantage-specific options

## TUniConnection

|Option name|Description|
|---|---|
|DefaultType|Specifies the type of database files to be used. Supported values:<table><tr><td>dtAdvantage (default)</td><td>Specifies that proprietary ADT tables with ADI index and ADM memo file formats will be used. </td></tr><tr><td>dtFoxPro</td><td>Specifies that FoxPro-compatible DBF tables with CDX index and FPT memo file formats will be used. </td></tr><tr><td>dtVisualFoxPro</td><td>Specifies that Visual FoxPro-compatible DBF tables with CDX index and FPT memo file formats will be used.</td></tr><tr><td>dtClipper</td><td>Specifies that CA-Clipper-compatible DBF tables with NTX index and DBT memo fields will be used. </td></tr></table>|
|ColumnWiseBinding|If set to True, the option enables <a href="https://msdn.microsoft.com/en-us/library/ms713541(v=vs.85).aspx" target="_blank">Column-Wise Binding</a> mode. The fefault value is False. Note: <a href="https://msdn.microsoft.com/en-us/library/ms711730%28v=vs.85%29.aspx" target="_blank">Row-Wise Binding</a> mode is enabled by default. However, some ODBC drivers don't support this mode. In such case, set the ColumnWiseBinding option to True. |
|ConnectionTimeout|The time to wait for a connection to open before raising an exception.|
|ServerTypes|Specifies the Advantage server types, to which connections should be attempted. Valid values include ADS, ALS, and AIS.<br/>ADL - Remote , ALS - local, andAIS - Internet Servers.<br/>These values can be logically OR'ed together with the "," in order to choose multiple server types. If multiple types are specified and multiple server types are available, the order of precedence is ADS first, AIS second, and ALS last.|
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

The following table lists the constants for mapping Advantage Database Server data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| adsCharacter | Maps to Delphi data types. |
| adsNChar | Maps NChar to Delphi data types. |
| adsVarChar | Maps Varchar to Delphi data types. |
| adsNVarChar | Maps NVarChar to Delphi data types. |
| adsShortInteger | Maps Short to Delphi data types. |
| adsInteger | Maps Integer to Delphi data types. |
| adsNumeric | Maps Numeric to Delphi data types. |
| adsDouble | Maps Double to Delphi data types. |
| adsMoney | Maps Money to Delphi data types. |
| adsDate | Maps Date to Delphi data types. |
| adsTime | Maps Time to Delphi data types. |
| adsTimeStamp | Maps TimeStamp to Delphi data types. |
| adsLogical | Maps Logical to Delphi data types. |
| adsBinary | Maps Binary to Delphi data types. |
| adsVarBinary | Maps VarBinary to Delphi data types. |
| adsImage | Maps Image to Delphi data types. |
| adsMemo | Maps Memo to Delphi data types. |
| adsNMemo | Maps NMemo to Delphi data types. |

