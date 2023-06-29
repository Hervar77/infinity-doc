

## Overview

<strong>Data Type Mapping</strong> is a flexible and easily customizable gear, which allows mapping between DB types and Delphi field types.


In this article there are several examples, which can be used when working with all supported DBs. In order to clearly display the universality of the Data Type Mapping gear, a separate DB will be used for each example.



## Data Type Mapping Rules

In versions where Data Type Mapping is not supported, UniDAC automatically	sets the correspondence between the DB data types and Delphi field types. DB data types can be manually mapped to Delphi field types using the constants for [Oracle](./oracle.md#data_type_mapping), [InterBase/Firebird](./interbase.md#data_type_mapping), [MySQL](./mysql.md#data_type_mapping), [PostgreSQL](./postgresql.md#data_type_mapping), [SQL Server](./sql_server.md#data_type_mapping), [SQLite](./sqlite.md#data_type_mapping), [MS Access](./microsoft_access.md#data_type_mapping), [Advantage DB Server](./advantage.md#data_type_mapping), [SAP ASE](./sap_sybase_ase.md#data_type_mapping), [DB2](./db2.md#data_type_mapping), [DBF](./dbf.md#data_type_mapping), [MongoDB](./mongodb.md#data_type_mapping), [ODBC](./odbc.md#data_type_mapping).


Here is an example with the numeric type in the following table of a PostgreSQL database:
<pre><code>CREATE TABLE numeric_types
(
 id integer NOT NULL,
 value1 numeric(5,2),
 value2 numeric(10,4),
 value3 numeric(15,6),
 CONSTRAINT pk_numeric_types PRIMARY KEY (id)
)</code></pre>

And Data Type Mapping should be used so that:
<ul>	<li>the numeric fields with Scale=0 in Delphi would be mapped to one of the field types: TSmallintField, TIntegerField or TlargeintField, depending on Precision</li><li>to save precision, the numeric fields with Precision&gt;=10 and Scalе&lt;= 4 would be mapped to TBCDField</li><li>and the numeric fields with Scalе&gt;= 5 would be mapped to TFMTBCDField.</li></ul>
The above in the form of a table:

|PostgreSQl data type|Default Delphi field type|Destination Delphi field type |
|---|---|---|
|numeric(4,0)|ftFloat|ftSmallint|
|numeric(10,0)|ftFloat|ftInteger|
|numeric(15,0)|ftFloat|ftLargeint|
|numeric(5,2)|ftFloat|ftFloat|
|numeric(10,4)|ftFloat|ftBCD|
|numeric(15,6)|ftFloat|ftFMTBCD|


To specify that numeric fields with Precision &lt;= 4 and Scale = 0 must be mapped to ftSmallint, such a rule should be set:
<pre><code>var
  DBType: Word;
  MinPrecision: Integer;
  MaxPrecision: Integer;
  MinScale: Integer;
  MaxScale: Integer;
  FieldType: TfieldType;
begin
  DBType       := pgNumeric;
  MinPrecision := 0;
  MaxPrecision := 4;
  MinScale     := 0;
  MaxScale     := 0;
  FieldType    := ftSmallint;
  PgConnection.DataTypeMap.AddDBTypeRule(DBType, MinPrecision, MaxPrecision, MinScale, MaxScale, FieldType);
end;</code></pre>
This is an example of the detailed rule setting, and it is made for maximum visualization.Usually, rules are set much shorter, e.g. as follows:

<pre><code>// clear existing rules
PgConnection.DataTypeMap.Clear;
// rule for numeric(4,0)
PgConnection.DataTypeMap.AddDBTypeRule(pgNumeric, 0,      4, 0,     0, ftSmallint);
// rule for numeric(10,0)
PgConnection.DataTypeMap.AddDBTypeRule(pgNumeric, 5,     10, 0,     0, ftInteger);
// rule for numeric(15,0)
PgConnection.DataTypeMap.AddDBTypeRule(pgNumeric, 11, rlAny, 0,     0, ftLargeint);
// rule for numeric(5,2)
PgConnection.DataTypeMap.AddDBTypeRule(pgNumeric, 0,      9, 1, rlAny, ftFloat);
// rule for numeric(10,4)
PgConnection.DataTypeMap.AddDBTypeRule(pgNumeric, 10, rlAny, 1,     4, ftBCD);
// rule for numeric(15,6)
PgConnection.DataTypeMap.AddDBTypeRule(pgNumeric, 10, rlAny, 5, rlAny, ftFMTBcd);</code></pre>


## Rules order
When setting rules, there can occur a situation when two or more rules that contradict to each other are set for one type in the database. In this case, only one rule will be applied &#8212; the one, which was set first.

For example, there is a table in an Oracle database:
<pre><code>CREATE TABLE NUMBER_TYPES
(
 ID NUMBER NOT NULL,
 VALUE1 NUMBER(5,2),
 VALUE2 NUMBER(10,4),
 VALUE3 NUMBER(15,6),
 CONSTRAINT PK_NUMBER_TYPES PRIMARY KEY (id)
)</code></pre>
TBCDField should be used for NUMBER(10,4), and TFMTBCDField - for NUMBER(15,6) instead of default fields:

|Oracle data type|Default Delphi field type|Destination field type |
|---|---|---|
|NUMBER(5,2)|ftFloat|ftFloat|
|NUMBER(10,4)|ftFloat|ftBCD|
|NUMBER(15,6)|ftFloat|ftFMTBCD|


If rules are set in the following way:
<pre><code>OraSession.DataTypeMap.Clear;
OraSession.DataTypeMap.AddDBTypeRule(oraNumber, 0,     9, rlAny, rlAny, ftFloat);
OraSession.DataTypeMap.AddDBTypeRule(oraNumber, 0, rlAny,     0,     4, ftBCD);
OraSession.DataTypeMap.AddDBTypeRule(oraNumber, 0, rlAny,     0, rlAny, ftFMTBCD);</code></pre>

it will lead to the following result:

|Oracle data type|Delphi field type |
|---|---|
|NUMBER(5,2)|ftFloat|
|NUMBER(10,4)|ftBCD|
|NUMBER(15,6)|ftFMTBCD|


But if rules are set in the following way:
<pre><code>OraSession.DataTypeMap.Clear;
OraSession.DataTypeMap.AddDBTypeRule(oraNumber, 0, rlAny,     0, rlAny, ftFMTBCD);
OraSession.DataTypeMap.AddDBTypeRule(oraNumber, 0, rlAny,     0,     4, ftBCD);
OraSession.DataTypeMap.AddDBTypeRule(oraNumber, 0,     9, rlAny, rlAny, ftFloat);</code></pre>

it will lead to the following result:

|Oracle data type|Delphi field type |
|---|---|
|NUMBER(5,2)|ftFMTBCD|
|NUMBER(10,4)|ftFMTBCD|
|NUMBER(15,6)|ftFMTBCD|


This happens because the rule
<pre><code>OraSession.DataTypeMap.AddDBTypeRule(oraNumber, 0, rlAny, 0, rlAny, ftFMTBCD);</code></pre>

will be applied for the NUMBER fields, whose Precision is from 0 to infinity, and Scale is from 0 to infinity too. This condition is met by all NUMBER fields with any Precision and Scale.

When using Data Type Mapping, first matching rule is searched for each type, and it is used for mapping. In the second example, the first set rule appears to be the first matching rule for all three types, and therefore the ftFMTBCD type will be used for all fields in Delphi.


If to go back to the first example, the first matching rule for the NUMBER(5,2) type is the first rule, for NUMBER(10,4) - the second rule, and for NUMBER(15,6)	- the third rule. So in the first example, the expected result was obtained.


So it should be remembered that if rules for Data Type Mapping are set so that two or more rules that contradict to each other are set for one type in the database, the rules will be applied in the specifed order.


## Defining rules for Connection and Dataset
Data Type Mapping allows setting rules for the whole connection as well as for each DataSet in the application.


For example, such table is created in SQL Server:
<pre><code>CREATE TABLE person
( 
 id                INT              NOT NULL  , 
 firstname         VARCHAR(20)          NULL  , 
 lastname          VARCHAR(30)          NULL  ,         
 gender_code       VARCHAR(1)           NULL  , 
 birth_dttm        DATETIME             NULL  ,  
 CONSTRAINT pk_person PRIMARY KEY CLUSTERED (id ASC) ON [PRIMARY] 
)
GO</code></pre>
It is exactly known that the birth_dttm field contains birth day, and this	field should be ftDate in Delphi, and not ftDateTime. If such rule is set:

<pre><code>MSConnection.DataTypeMap.Clear;
MSConnection.DataTypeMap.AddDBTypeRule(msDateTime, ftDate);</code></pre>
all DATETIME fields	in Delphi will have the ftDate type, that is incorrect. The ftDate type was expected	to be used for the DATETIME type only when working with the person table. In this case, Data Type Mapping should be set not for the whole connection, but for a particular DataSet:
<pre><code>MSQuery.DataTypeMap.Clear;
MSQuery.DataTypeMap.AddDBTypeRule(msDateTime, ftDate);</code></pre>
Or the opposite case. For example, DATETIME is used in the application only for date storage, and only one table stores both date and time. In this case, the following rules setting will be correct:
<pre><code>MSConnection.DataTypeMap.Clear;
MSConnection.DataTypeMap.AddDBTypeRule(msDateTime, ftDate);
MSQuery.DataTypeMap.Clear;
MSQuery.DataTypeMap.AddDBTypeRule(msDateTime, ftDateTime);</code></pre>
In this case, in all DataSets for the DATETIME type fields with the ftDate type will be created, and for MSQuery - with the ftDateTime type.


The point is that the priority of the rules set for the DataSet is higher than the priority of the rules set for the whole connection. This allows both flexible and convenient setting of Data Type Mapping for the whole application. There is no need to set the same rules for each DataSet, all the general rules can be set once for the whole connection. And if a DataSet with an individual Data Type Mapping is necessary, individual rules can be set for it.


## Rules for a particular field

Sometimes there is a need to set a rule not for the whole connection, and not for the whole dataset, but only for a particular field.

e.g. there is such table in a MySQL database:
<pre><code>CREATE TABLE item 
(
 id INT NOT NULL AUTO_INCREMENT,
 name CHAR(50) NOT NULL,
 guid CHAR(38), 
 PRIMARY KEY (id)
) ENGINE=MyISAM;</code></pre>
The <strong>guid</strong> field contains a unique identifier.	For convenient work, this identifier is expected to be mapped to the TGuidField type in Delphi. But there is one problem, if to set the rule like this:
<pre><code>MyQuery.DataTypeMap.Clear;
MyQuery.DataTypeMap.AddDBTypeRule(myChar, ftGuid);</code></pre>
then both <strong>name</strong>
and <strong>guid</strong> fields will have the ftGuid type in Delphi, that does	not correspond to what was planned. In this case, the only way is to use Data Type Mapping for a particular field:
<pre><code>MyQuery.DataTypeMap.AddFieldNameRule('guid', ftGuid);</code></pre>

In addition, it is important to remember that setting rules for particular fields has the highest priority. If to set some rule for a particular field, all other rules in the Connection or DataSet will be ignored for this field.


## Ignoring conversion errors
Data Type Mapping allows mapping various types, and sometimes there can occur the problem with that the data stored in a DB cannot be converted to the correct data of the Delphi field type specified in rules of Data Type Mapping or vice-versa. In this case, an error will occur, which will inform that the data cannot be mapped to the specified type.

For example:

|Database valu|Destination field typ|Error|
|---|---|---|
|'text value'|ftInteger|String cannot be converted to Integer|
|1000000|ftSmallint|Value is out of range|
|15,1|ftInteger|Cannot convert float to integer|


But when setting rules for Data Type Mapping, there is a possibility to ignore data conversion errors:
<pre><code>IBCConnection.DataTypeMap.AddDBTypeRule(ibcVarchar, ftInteger, True);</code></pre>

In this case, the correct conversion is impossible. But because of ignoring data conversion errors, Data Type Mapping tries to return values that can be set to the Delphi fields or DB fields depending on the direction of conversion.

|Database valu|Destination field typ|Result|Result description|
|---|---|---|---|
|'text value'|ftInteger|0|0 will be returned if the text cannot be converted to number|
|1000000|ftSmallint|32767|32767 is the max value that can be assigned to the Smallint data type|
|15,1|ftInteger|15|15,1 was truncated to an integer value|


Therefore ignoring of conversion errors should be used only if the conversion results are expected.


## UniDAC and Data Type Mapping
When using UniDAC, there often occurs a hard-to-solve	situation, when two similar types from the DB have differnt types in Delphi. For greater clarity, there are examples below.

e.g. there is a project, which works with two DBs: Oracle and SQL Server. There is such table created in each DB:


Oracle:
<pre><code>CREATE TABLE ITEM_INFO
(
 ID NUMBER NOT NULL,
 CODE VARCHAR2(10)  NOT NULL,
 DESCRIPTION NVARCHAR2(250),
 CONSTRAINT PK_ITEM_INFO PRIMARY KEY (id)
)</code></pre>
SQL Server:
<pre><code>CREATE TABLE item_info
( 
 id                INT              NOT NULL  , 
 code              VARCHAR(10)      NOT NULL  , 
 description       NVARCHAR(250)        NULL  ,         
 CONSTRAINT pk_item_info PRIMARY KEY CLUSTERED (id ASC) 
 ON [PRIMARY] 
)
GO</code></pre>
The problem is due to that, when working with Oracle with the enabled UseUnicode option, both CODE and DESCRIPTION fields will have the ftWideString type, and if the UseUnicode option is disabled, both fields will have the ftString type. For SQL Server, the CODE field will always be ftString, and the DESCRIPTION field will always be ftWideString. This problem arises especially sharply when attempting to create persistent fields, because in this case, when working with one of the providers,	an error will always occur. Formerly, the only way to avoid the error was to refuse using of persistent fields in such situations.

For the time being, this problem can be solved rather easily. Data Type Mapping can be set for the Oracle provider:
<pre><code>UniConnection.DataTypeMap.Clear;
UniConnection.DataTypeMap.AddDBTypeRule(oraVarchar2, ftString);
UniConnection.DataTypeMap.AddDBTypeRule(oraNVarchar2, ftWideString);</code></pre>
Or Data Type Mapping can be set for SQL Server:
<pre><code>// for useUnicode = True in the Oracle data provider
UniConnection.DataTypeMap.Clear;
UniConnection.DataTypeMap.AddDBTypeRule(msVarchar, ftWideString);</code></pre>
or:

<pre><code>// for useUnicode = False in the Oracle data provider
UniConnection.DataTypeMap.Clear;
UniConnection.DataTypeMap.AddDBTypeRule(msNVarchar, ftString);</code></pre>