
## MySQL-specific options

Though UniDAC is components that provide unified interface to work with different database servers, it also lets you tune behaviour for each server individually. For thin setup of a certain database server, UniDAC provides server-specific options. These options can be applied to such components as TUniConnection, TUniQuery, TUniTable, TUniStoredProc,TUniSQL, TUniScript via their SpecificOptions property. SpecificOptions is a sting list. Therefore you can use the following syntax to assign an option value:

`UniQuery.SpecificOptions.Values['FieldsAsString'] := 'True';`

Below you will find the description of allowed options grouped by components.

## TUniConnection

|Option name|Description|
|---|---|
|Charset|Setups the character set used by the client.|
|Compress|Use compression on transferring data. Setting this property to True is quite effective on transferring big volume data through slow connection. This property is ignored under CLR. The default value is False.|
|ConnectionTimeout|Specifies the amount of time in seconds that can be expired before an attempt to make a connection is considered unsuccessful.|
|Embedded|If True, connects to Embedded MySQL server. If False, connects to MySQL server. The default value is False.|
|EmbeddedParams|Allows to set such parameters of embedded connection as --basedir, --datadir, etc. Parameters should be separated with newline characters (#13#10), for example: `UniConnection.SpecificOptions.Values['MySQL.EmbeddedPrams'] := '--basedir=.'#13#10'--datadir=data';` The default value is ''|
|HttpTrustServerCertificate|This option specifies whether or not the driver should trust the server certificate when connecting to the server. The default value is False – the driver won't trust the server certificate and will verify validity of the server certificate instead. If set to True, the driver will trust the server certificate.|
|Interactive|Determines the inactivity timeout before the server breaks the connection. If true, the server breaks the connection after number of seconds specified in interactive_timeout sever variable, otherwise wait_timeout is used. The default value is false. The interactive_timeout and wait_timeout variables can be set in my.ini file.|
|IPVersion|Use the IPVersion property to specify Internet Protocol Version. Supported values:<table><tr><td>ivIPBoth</td><td>Specifies that either Internet Protocol Version 6 (IPv6) or Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv4 (default)</td><td>Specifies that Internet Protocol Version 4 (IPv4) will be used.</td></tr><tr><td>ivIPv6</td><td>Specifies that Internet Protocol Version 6 (IPv6) will be used.</td></tr></table>Note: When the TIPVersion property is set to ivIPBoth, a connection attempt will be made via IPv6 if it is enabled on the operating system. If the connection attempt fails, a new connection attempt will be made via IPv4.|
|NullForZeroDelphiDate |Use the NullForZeroDelphiDate property to hide the '30-12-1899' dates. If NullForZeroDelphiDate is set to True, the values of all datetime fields will be changed to Null. If the property is set to False, the '30-12-1899' value will be used as an ordinary date. The default value is false. |
|OptimizedBigint|Setting this option converts all fields with field length less than 11 of TLargeIntField type into TIntegerField. This allows to process fields that are results of numeric function or cast values as usual Integer fields. The default value is False.|
|Protocol|Specifies which protocol to use when connecting to the server:<table><tr><td>mpDefault</td><td>Similar to mpTCP, except the cases when you connect to a local server and the OS supports sockets (Unix) or named pipes (Windows), they are used instead of TCP/IP to connect to the server. </td></tr><tr><td>mpTCP</td><td>Use TCP/IP to connect to the server.</td></tr><tr><td>mpSocket</td><td>Uses sockets to connect to the server. Can be used with Direct set to False and libmysql.dll 4.1.</td></tr><tr><td>mpPipe</td><td>Use NamedPipes to connect to the server.</td></tr><tr><td>mpMemory</td><td>To connect to the server using SharedMem. Can be used with Direct set to False and libmysql.dll 4.1.</td></tr><tr><td>mpSSL</td><td>Use protected SSL connection with the server.</td></tr><tr><td>mpHttp</td><td>Uses HTTP [Network Tunneling](#network-tunneling) to connect to the server. </td></tr></table>|
|HttpUrl|Holds the url of the tunneling PHP script.|
|HttpUsername|Holds the user name forHTTP authorization.|
|HttpPassword|Holds the password for HTTP authorization.|
|ProxyHostname|Holds the host name or IP address to connect to proxy server.|
|ProxyPort|Used to specify the port number for TCP/IP connection with proxy server.|
|ProxyUsername|Holds the proxy server account name.|
|ProxyPassword|Holds the password for the proxy server account.|
|SSLCACert|CACert is the pathname to the certificate authority file.|
|SSLCert|Cert is the pathname to the certificate file.|
|SSLChipherList|ChipherList is a list of allowable ciphers to use for SSL encryption.|
|SSLKey|Key is the pathname to the key file.|
|UseUnicode|Informs server that all data between client and server sides will be passed in UTF-8 coding. Setting this option converts all fields of TStringField type into TWideStringField that allows to work correctly with symbols of almost all languages simultaneously. On the other hand, it causes a delay in working. The default value is False.|


## TUniSQL

|Option name|Description|
|---|---|
|CommandTimeout|Specifies the amount of time that is expired before an attempt to execute a command is considered unsuccessful. Measured in seconds.If a command is successfully executed prior to the expiration of the seconds specified, CommandTimeout has no effect. The default value is 0 (infinite).|


## TUniQuery, TUniTable, TUniStoredProc

|Option name|Description|
|---|---|
|BinaryAsString|Specifies the method of representation of BINARY and VARBINARY types. If set to True, binary field data will be retrieved as a string and handled by the TStringField class. The default value is True.|
|CheckRowVersion|Determines whether the dataset checks for rows modifications made by another user on automatic generation of SQL statement for update or delete data. If CheckRowVersion is True and DataSet has timestamp field when only this field is added into WHERE clause of the generated SQL statement. If CheckRowVersion is True, but there is no TIMESTAMP field, then to WHERE clause all non-BLOB fields will be added. The default value is False.|
|CommandTimeout|Specifies the amount of time that is expired before an attempt to execute a command is considered unsuccessful. Measured in seconds.If a command is successfully executed prior to the expiration of the seconds specified, CommandTimeout has no effect. The default value is 0 (infinite).|
|CreateConnection|Specifies whether an additional connection to a server should be established to execute an additional query in the FetchAll=False mode. If a DataSet is opened in FetchAll=False, the current connection is locked until all records have been fetched. If this option is set to True, an additional connection is created to prevent locking of the current connection when fetching data. In case you have the FetchAll or UniDirectional option enabled, and you don't want an additional connection to be created for each Open/ExecSQL (for example, when dealing with temporary tables or session variables), set CreateConnection to False.|
|EnableBoolean|Specifies the method of representation of TINYINT(1) fields. If set to True, these fields will be represented as TBooleanFiled; otherwise, as TSmallintField. The default value is True.|
|FetchAll|When set to True, all records of the query are requested from the database server when dataset is being opened. When set to False, records are retrieved when a data-aware component or a program requests it. If a query can return a lot of records, set this property to False if initial response time is important.When the FetchAll property is False, the first call to Locate and LocateEx methods may take a lot of time to retrieve additional records to the client side.|
|FieldsAsString|All non-BLOB fields are stored as string (native MySQL format). The default value is False.|
|NullForZeroDate|For datetime fields with invalid values, for example '2002-12-32', MySQL returns on fetch '0000-00-00' value. According to NullForZeroDate option this value will be represented as Null or '0001-01-01' ('0100-01-01' for CLR). The default value is True.|


## TUniLoader

|Option name|Description|
|---|---|
|LockTable|Locks tables while inserting data.|
|Delayed|Uses INSERT DELAYED syntax.|
|RowsPerQuery|Use the RowsPerQuery property to get or set the number of rows that will be send to the server for one time. The default value is 0. In this case rows will be grouped by 16Kb (the default value of net_buffer_length).|
|DuplicateKeys|Use the DuplicateKeys property to specify in what way conflicts with duplicated key values will be resolved.|
|QuoteNames|Use the QuoteNames option to quote all database object names in automatically generated SQL statements, such as UPDATE statements. The default value is False.|


## TUniDump

|Option name|Description|
|---|---|
|AddLock|Use the AddLock property to execute LOCK TABLE before data insertion. Used only with doData in P:Devart.MyDac.TMyDump.Objects.|
|BackupData|Use the option to backup the data in a table. The default value is True.|
|BackupStoredProcs|Use the enable backup of stored procedures. The default value is False.|
|BackupTables|Use the option to enable backup of the table structure. The default value is False.|
|BackupTriggers|Use the option to enable backup of triggers. The default value is False.|
|BackupViews|Use the option to enable backup of views. The default value is False.|
|CommitBatchSize|Use the CommitBatchSize option to add COMMIT statement to script after the specified number of strings when dumping table data. The option is useful for recovering large amounts of data. The default value is 0.|
|DisableKeys|Add /*!40000 ALTER TABLE ... DISABLE KEYS */ before inserting data. Used only with doData in P:Devart.MyDac.TMyDump.Objects.|
|InsertType|Specifies how rows will be inserted into a table. Supported values:<table><tr><td>itInsert (default)</td><td>New rows will be inserted into an existing table. If a duplicate entry is encountered, an exception will be raised.</td></tr><tr><td>itInsertIgnore</td><td>The insert operation will fail silently for rows containing an unmatched value, but inserts rows that are matched, without raising an exception.</td></tr><tr><td>itReplaceInto</td><td>If an old row in a table has the same value as a new row, the old row will be deleted before the new row is inserted.</td></tr></table></td><tr><td>HexBlob|If the HexBlob property is True, the BLOB values are presented in hexdecimal notation.|
|UseExtSyntax|Set the UseExtSyntax propery to use extended syntax of INSERT on data insertion. Used only with doData in P:Devart.MyDac.TMyDump.Objects.|
|UseDelayedIns|Set the UseDelayedIns property to use INSERT DELAYED. Used only with doData in P:Devart.MyDac.TMyDump.Objects.|


## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping MySQL data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

| Constant | Description |
|---|---|
| myBigint | Maps BIGINT to Delphi data types. |
| myBigintUnsigned | Maps BIGINT UNSIGNED to Delphi data types. |
| myBinary | Maps BINARY to Delphi data types. |
| myBit | Maps BIT to Delphi data types. |
| myBlob | Maps BLOB to Delphi data types. |
| myChar | Maps CHAR to Delphi data types. |
| myDate | Maps DATE to Delphi data types. |
| myDatetime | Maps DATETIME to Delphi data types. |
| myDecimal | Maps DECIMAL to Delphi data types. |
| myDouble | Maps DOUBLE to Delphi data types. |
| myEnum | Maps ENUM to Delphi data types. |
| myFloat | Maps FLOAT to Delphi data types. |
| myInt | Maps INTEGER to Delphi data types. |
| myIntUnsigned | Maps INTEGER UNSIGNED to Delphi data types. |
| myJSON | Maps JSON to Delphi data types. |
| myLongBlob | Maps LONGBLOB to Delphi data types. |
| myLongText | Maps LONGTEXT to Delphi data types. |
| myMedium | Maps MEDIUMINT to Delphi data types. |
| myMediumBlob | Maps MEDIUMBLOB to Delphi data types. |
| myMediumText | Maps MEDIUMTEXT to Delphi data types. |
| myMediumUnsigned | Maps MEDIUMINT UNSIGNED to Delphi data types. |
| myNull | Maps NULL to Delphi data types. |
| mySet | Maps SET to Delphi data types. |
| mySmall | Maps SMALLINT to Delphi data types. |
| mySmallUnsigned | Maps SMALLINT UNSIGNED to Delphi data types. |
| myText | Maps TEXT to Delphi data types. |
| myTime | Maps TIME to Delphi data types. |
| myTimestamp | Maps TIMESTAMP to Delphi data types. |
| myTiny | Maps TINY to Delphi data types. |
| myTinyBlob | Maps TINYBLOB to Delphi data types. |
| myTinyText | Maps TINYTEXT to Delphi data types. |
| myTinyUnsigned | Maps TINYINT UNSIGNED to Delphi data types. |
| myUnsignedTypes | Maps UNSIGNED TYPES to Delphi data types. |
| myVarbinary | Maps VARBINARY to Delphi data types. |
| myVarchar | Maps VARCHAR to Delphi data types. |
| myYear | Maps YEAR to Delphi data types. |

## Network Tunneling

Usually when a client needs to connect to server it is assumed that direct connection can be established. Nowadays though, due to security reasons or network topology, it is often necessary to use a proxy or bypass a firewall. This article describes different ways to connect to MySQL server with UniDAC.

*   [Direct connection](#directconnection)
*   [Connection through HTTP tunnel](#connectionhttp)
    *   [Connection through proxy and HTTP tunnel](#connectionproxyhttp)
*   [Additional information](#addoptions)

### <a name="directconnection"></a>Direct connection

Direct connection to server means that server host is accessible from client without extra routing and forwarding. This is the simplest case. The only network setting you need is the host name and port number. This is also the fastest and most reliable way of communicating with server. Use it whenever possible.

The following code illustrates the simplicity:

    UniConnection := TUniConnection.Create(self);
    UniConnection.ProviderName := 'MySQL';
    UniConnection.Server := 'localhost';
    UniConnection.Port := 3306;
    UniConnection.Username := 'root';
    UniConnection.Password := 'root';
    UniConnection.Connect;

### <a name="connectionhttp"></a>Connection through HTTP tunnel

Sometimes client machines are shielded by a firewall that does not allow you to connect to server directly at the specified port. If the firewall allows HTTP connections, you can use UniDAC together with HTTP tunneling software to connect to MySQL server.

UniDAC supports HTTP tunneling based on the PHP script.

An example of the web script tunneling usage can be the following: you have a remote website, and access to its database through the port of the database server is forbidden. Only access through HTTP port 80 is allowed, and you need to access the database from a remote computer, like when using usual direct connection.

You need to deploy the tunnel.php script, which is included into the provider package on the web server. It allows access to the database server to use HTTP tunneling. The script must be available through the HTTP protocol. You can verify if it is accessible with a web browser. The script can be found in the HTTP subfolder of the installed provider folder, e. g. %Program Files%\Devart\UniDac for Delphi X\HTTP\tunnel.php. The only requirement to the server is PHP 5 support.

To connect to the database, you should set TUniConnection parameters for usual direct connection, which will be established from the web server side, the Protocol specific MySQL option to mpHttp, and set the following parameters, specific for the HTTP tunneling:

|Specific Option|Mandatory|Meaning|
|---|---|---|
|HttpUrl|Yes|Url of the tunneling PHP script. For example, if the script is in the server root, the url can be the following: http://localhost/tunnel.php|
|HttpUsername, HttpPassword|No|Set this properties if the access to the website folder with the script is available only for registered users authenticated with user name and password.|

### <a name="connectionproxyhttp"></a>Connection through proxy and HTTP tunnel

Consider the previous case with one more complication.

HTTP tunneling server is not directly accessible from client machine. For example, client address is 10.0.0.2, server address is 192.168.0.10, and the MySQL server listens on port 3307\. The client and server reside in different networks, so the client can reach it only through proxy at address 10.0.0.1, which listens on port 808\. In this case in addition to the Http specific options you have to setup the Proxy specific options as follows:

    UniConnection := TUniConnection.Create(self);
    UniConnection.ProviderName := 'MySQL';
    UniConnection.Server := '192.168.0.10';
    UniConnection.Port := 3307;
    UniConnection.Username := 'root';
    UniConnection.Password := 'root';
    UniConnection.SpecificOptions.Values['Protocol'] := 'mpHttp';
    UniConnection.SpecificOptions.Values['HttpUrl'] := 'http://server/tunnel.php';
    UniConnection.SpecificOptions.Values['ProxyHostname'] := '10.0.0.1';
    UniConnection.SpecificOptions.Values['ProxyPort'] := '808';
    UniConnection.SpecificOptions.Values['ProxyUsername'] := 'ProxyUser';
    UniConnection.SpecificOptions.Values['ProxyPassword'] := 'ProxyPassword';
    UniConnection.Connect;

Note that setting the Proxy specific options automatically enables proxy server usage.

### <a name="addoptions"></a>Additional information

Keep in mind that traffic tunneling or encryption always increase CPU usage and network load. It is recommended that you use direct connection whenever possible.

