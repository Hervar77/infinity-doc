## Amazon Redshift-specific options

Though UniDAC is components that provide unified interface to work with different database servers, it also lets you tune behaviour for each server individually. For thin setup of a certain database server, UniDAC provides server-specific options. These options can be applied to such components as TUniConnection, TUniQuery, TUniTable, TUniStoredProc, TUniSQL, TUniScript via their SpecificOptions property. SpecificOptions is a string list. Therefore you can use the following syntax to assign an option value:

`UniConnection.SpecificOptions.Values['ConnectionTimeout'] := '15';`

Below you will find the description of allowed options grouped by components.


##TUniConnection

|Option name|Description|
|---|---|
|ApplicationName|The name of a client application. The default value is the name of the executable file of your application.|
|Charset|Specifies the character set that will be used to transfer character data between the client and the server.|
|ConnectionTimeout|The time to wait for a connection to open before raising an exception.|
|HttpPassword|Use the HttpPassword option to specify the password for HTTP authorization.|
|HttpTrustServerCertificate|This option specifies whether or not the driver should trust the server certificate when connecting to the server. The default value is False – the driver won't trust the server certificate and will verify validity of the server certificate instead. If set to True, the driver will trust the server certificate.|
|HttpUrl|Use the HttpUrl option to specify the URL of the PHP tunneling script.|
|HttpUsername|Use the HttpUsername option to specify the username for HTTP authorization.|
|IPVersion|Use the IPVersion property to specify Internet Protocol Version.Supported values:<table><tr><td>ivIPBoth</td><td>Specifies that either Internet Protocol Version 6 (IPv6) or Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv4 (default)</td><td>Specifies that Internet Protocol Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv6</td><td>Specifies that Internet Protocol Version 6 (IPv6) will be used.</td></tr></table>Note: When the TIPVersion property is set to ivIPBoth, a connection attempt will be made via IPv6 if it is enabled on the operating system. If the connection attempt fails, a new connection attempt will be made via IPv4. |
|MessagesCharset|Specifies the character set that will be used to transfer error messages from the server to the client.|
|ProtocolVersion|Specifies protocol version to be used when several versions are available. Supported values:<table><tr><td>pv20</td><td>Set ProtocolVersion to pv20 to enforce protocol version 2.0.</td></tr><tr><td>pv30 (default)</td><td> Set ProtocolVersion to pv30 to enforce protocol version 3.0.</td></tr><tr><td>pvAuto</td><td>Set ProtocolVersion to pvAuto to automatically select between protocol versions depending on the specific query for the best possible performance.</td></tr></table>|
|ProxyHostname|Use the ProxyHostName option to specify the host name or IP address to connect to the proxy server.|
|ProxyPassword|Use the ProxyPassword option to specify the password for the proxy server.|
|ProxyPort|Use the ProxyPort option to specify the port for a TCP/IP connection with the proxy server.|
|ProxyUsername|Use the ProxyUsername option to specify the username for the proxy server.|
|Schema|Use the Schema property to set the search path for the connection to the specified schema. The setting offers a convenient way to perform operations on objects in a schema other than that of the current user without having to qualify the objects with the schema name.|
|SSLCACert|The pathname to the certificate authority file.|
|SSLCert|The pathname to the certificate file.|
|SSLChipherList|The list of allowable ciphers to use for SSL encryption.|
|SSLKey|The pathname to the key file.|
|SSLMode|This option determines whether or with what priority an SSL connection will be negotiated with the server.|
|UseHttp|The UseHttp option enables the use of HTTP tunneling to connect to the server. The default value is False.|
|UseUnicode|Enables or disables Unicode support. Affects character data fetched from the server. When set to True, all character data is stored as WideStrings, and TStringField is replaced by TWideStringFiled.|




##TUniSQL

|Option name|Description|
|---|---|
|CommandTimeout|The time to wait for a statement to be executed.|
|UnpreparedExecute|If True, the simple execute is used for SQL statement. Statement is not prepared before execute. It allows to add multiple statements separated by semicolon to the SQL property.|
|UseParamTypes|Set this option to True to disable automatic detection of parameter types. When this option is True, data types of parameters are set basing on the DataType property. When this option is False, data types of the parameters are detected by server automatically.|




##TUniQuery, TUniTable, TUniStoredProc

|Option name|Description|
|---|---|
|AutoDeleteBlob|If True (the default value), the BLOBs are deleted from database automatically when a record that holds these BLOBs' OIDs is deleted from dataset.|
|CacheBlobs|If True (the default value), then local memory buffer is allocated to hold a copy of the BLOB content.|
|CommandTimeout|The time to wait for a statement to execute.|
|CursorWithHold|When this option is False (default), an active transaction is required to open a query in FetchAll=False mode. If there is no active transaction, UniDAC opens additional internal connection and starts transaction on this connection.When this option is True, UniDAC uses DECLARE CURSOR ... WITH HOLD statement to open the query. In this case no active transaction is required but this may take additional server resources.|
|DeferredBlobRead|If True, all BLOB values are fetched only when they are explicitly requested. Otherwise entire record set with any BLOB values is returned when dataset is opened. Whether BLOB values are cached locally to be reused later is controlled by the CacheLobs option.|
|ExtendedFieldsInfo|If True, an additional query is performed to get information about returned fields and tables they belong to. The default value is False.|
|FetchAll|If True, all records of a query are requested from database server when the dataset is being opened.If False, records are retrieved when a data-aware component or a program requests it. The default value is True.|
|KeySequence|Use the KeySequence property to specify the name of a sequence that will be used to fill in a keyfield after a new record is inserted or posted to the database.|
|OIDAsInt|If True, OID fields are mapped on TIntegerField. If False, values of OID fields are treated as large objects' OID, and these fields are mapped on TBlobField.|
|SequenceMode |Set the SequenceMode property to specify which method is used internally to generate sequenced field.The following values are allowed for this property:<table><tr><td>smInsert</td><td>New record is inserted into the dataset with the first key field populated with a sequenced value.Application may modify this field before posting the record to the database.</td></tr><tr><td>smPost</td><td>Database server populates key field with a sequenced value when application posts the record to thedatabase. Any value put into the key field before post will be overwritten.</td></tr></table>|
|UnknownAsString|If True, all Amazon Redshift data types that are fetched as text, and don't have limited field size, are mapped on TStringField with default size 8192. If False, such types are mapped on TMemoField. The TEXT data type is always mapped on TMemoField regardless of this option.|
|UnpreparedExecute|If True, the simple execute is used for SQL statement. Statement is not prepared before execute. It allows to add multiple statements separated by semicolon to the SQL property.|
|UseParamTypes|Set this option to True to disable automatic detection of parameter types. When this option is True, data types of parameters are set basing on the DataType property. When this option is False, data types of the parameters are detected by server automatically.|




##TUniScript, TUniDump, TUniLoader

The TUniScript, TUniDump, TUniLoader components have no Amazon Redshift-specific options.



## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping Amazon Redshift data types to Delphi data types. See the [Data Type Mapping](./data_type_mapping.md) tutorial for more information.

| Constant | Description |
|---|---|
| pgBigInt | Maps bigint to Delphi data types. |
| pgBigSerial | Maps bigserial to Delphi data types. |
| pgBit | Maps bit to Delphi data types. |
| pgBitVarying | Maps bit varying to Delphi data types. |
| pgBoolean | Maps boolean to Delphi data types. |
| pgBytea | Maps bytea to Delphi data types. |
| pgCharacter | Maps character to Delphi data types. |
| pgCharacterVarying | Maps character varying to Delphi data types. |
| pgDate | Maps date to Delphi data types. |
| pgDoublePrecision | Maps double precision to Delphi data types. |
| pgInteger | Maps integer to Delphi data types. |
| pgMoney | Maps money to Delphi data types. |
| pgNumeric | Maps numeric to Delphi data types. |
| pgReal | Maps real to Delphi data types. |
| pgSerial | Maps serial to Delphi data types. |
| pgSmallint | Maps smallint to Delphi data types. |
| pgText | Maps text to Delphi data types. |
| pgTime | Maps time to Delphi data types. |
| pgTimeStamp | Maps timestamp to Delphi data types. |
| pgTimeStampWithTimeZone | Maps timestamp with time zone to Delphi data types. |
| pgTimeWithTimeZone | Maps time with time zone to Delphi data types. |
| pgUUID | Maps uuid to Delphi data types. |