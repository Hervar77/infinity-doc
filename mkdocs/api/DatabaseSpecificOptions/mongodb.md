## MongoDB-specific options

Though UniDAC is a library of components that provide unified interface to work with different database servers, it also lets you tune behaviour for each server individually. For thin setup of a certain database server, UniDAC provides server-specific options. These options can be applied to such components as TUniConnection, TUniQuery and TUniTable via their SpecificOptions property. SpecificOptions is a string list. Therefore you can use the following syntax to assign an option value:

`TUniConnection.SpecificOptions.Values['UseUnicode'] := 'True';`

Below you will find the description of allowed options grouped by components.

##TUniConnection

|Option name|Description|
|---|---|
|AdditionalServers|Specifies additional servers to connect to, separated by commas. Each server has to be specified in the <i>host[:port]</i> format as it is described in the official MongoDB <a href="https://docs.mongodb.com/manual/reference/connection-string/#connections-standard-connection-string-format" target="_blank" class="weblink">documentation</a>.|
|BSONLibrary|Use the BSONLibrary option to set or get the <i>libbson</i> client library location.|
|ClientLibrary|Use the ClientLibrary option to set or get the <i>libmongoc</i> client library location.|
|ConnectionOptions|Connection specific options. See official MongoDB <a href="https://docs.mongodb.com/manual/reference/connection-string/#connections-connection-options" target="_blank" class="weblink">documentation</a> for a full description of these options.|
|LowerCaseObjectID|Use the option to return ObjectId values in lower case. The default value is False.|
|SQLEngine|If set to True, the driver will use the SQL language to access data in a MongoDB database, otherwise it will use the standard Mongo query language. The default value is False.|
|UseUnicode|Enables or disables Unicode support. Affects on the character data fetched from the server. When set to True all character data is stored as WideStrings, and TStringField is replaced with TWideStringFiled.|




##TUniQuery, TUniTable

|Option name|Description|
|---|---|
|AllowAddField|If True, then when editing an existing document, it allows to add new fields to the document. If False, an attempt to add a new field to the document will raise an exceptin. For newly created documents adding new fields is always allowed. The default value is True.|
|<a name="allowchangetype"></a>AllowChangeType|If True, when editing an existing document, it allows to assign a value of another type to the existing document field. If False, an attempt to assign a value of another type will raise an exceptin. For newly created documents changing field type is always allowed. The default value is True.|
|<a name="complexasstring"></a>ComplexAsString|If True, then complex fields of a document (which are of <i>object</i>, <i>array</i>, <i>timestamp</i>, <i>binary</i>, <i>regular expression</i> or <i>JavaScript</i> type) are mapped as TStringField and their content is displayed in the <a href="https://docs.mongodb.com/manual/reference/mongodb-extended-json/" target="_blank" class="weblink">Extended JSON</a> format. If False, such fields are mapped as TADTField with its child fields. The default value is False.|
|DescribeMethod|Defines a way of creating dataset fields.The following values are allowed for this property:<table><tr><td>cmGrid</td><td>The field list is generated based on a sample of <i>DescribeAmont</i> documents. The list includes all unique fields from all documents in the sample.</td></tr><tr><td>cmObject</td><td>The dataset has a single field of the ftADT type, which provides access to the entire document.</td></tr></table>The default value is cmGrid.|
|DescribeAmount|Specifies the number of sample documents used to create a list of fields in the dataset when <i>DescribeMethod</i> is set to cmGrid. The default value is 25.|
|FetchAll|If True, all records of the query are requested from database server when the dataset is being opened. If False, records are retrieved when a data-aware component or a program requests it. The default value is False.|


**Note**: Since parametrized commands are not supported in MongoDB, the MongoDB provider does not support parameters. Also, update SQL-s are not supported too.


##TUniSQL

The TUniSQL component has no MongoDB-specific options.

##TUniStoredProc, TUniScript, TUniDump, TUniLoader, TUniTransaction

TUniStoredProc, TUniScript, TUniDump, TUniLoader and TUniTransaction components are not supported for the MongoDB provider.<h2><a name="specificnotes"></a>MongoDB-specific notes</h2>This chapter describes several special cases of using the MongoDB provider.

##Data types {: #datatypes}

The MongoDB provider supports the following MongoDB data types:

- String
- 32-bit integer
- 64-bit integer
- Double
- Boolean
- Date
- ObjectId
- Object
- Array
- Timestamp
- Binary
- Regular Expression
- JavaScript
- JavaScript (with scope)
- Null
- Min key
- Max key

By default, document fields of these types are mapped in a dataset as follows:

- <i>String</i>, <i>integer</i>, <i>double</i>, <i>boolean </i> and <i>date</i> data types are simple types and in a dataset they are mapped to ftString, ftInteger, ftLargeint, ftBoolean and ftDate fields respectively
- <i>Object</i>, <i>array</i>, <i>timestamp</i>, <i>binary</i>, <i>regular expression</i> and <i>JavaScript</i> types are complex types and they are mapped either to ftString or ftADT fields, depending on the [ComplexAsString](#complexasstring) option value
- <i>ObjectId</i> type is mapped as ftString and is displayed as 24-character hexadecimal string
- <i>Null</i> type is mapped as ftString and is displayed as 'null'
- <i>Min key</i> and <i>max key</i> data types are mapped to ftString and are displayed in the <a href="https://docs.mongodb.com/manual/reference/mongodb-extended-json/" target="_blank" class="weblink">Extended JSON</a> format




##Query and update operations

Since MongoDB is a No-SQL database, the MongoDB provider does not support regular SQL to manage documents. Instead, it supports native <a href="https://docs.mongodb.com/manual/reference/command/nav-crud/" target="_blank" class="weblink">MongoDB command syntax</a> to perform CRUD operations:

- Use the <a href="https://docs.mongodb.com/manual/reference/command/find/" target="_blank" class="weblink">find</a> command to query documents from a collection, for example:

<pre><code>UniQuery1.SQL.Text := '{"find":"restaurants", "filter":{"cuisine":"italian"}, "sort":{"name:1}}';UniQuery1.Open;</code></pre>
- Use the <a href="https://docs.mongodb.com/manual/reference/command/insert/" target="_blank" class="weblink">insert</a> command to insert documents into a collection, for example:

<pre><code>UniQuery1.SQL.Text := '{"insert":"restaurants", "documents":[{"_id":1, "name":"Volare", "cuisine":"italian"}]}';UniQuery1.Execute;</code></pre>
- Use the <a href="https://docs.mongodb.com/manual/reference/command/update/" target="_blank" class="weblink">update</a> command to update documents, for example:

<pre><code>UniQuery1.SQL.Text := '{"update":"restaurants", "updates":[{"q":{"name":"Volare"}, "u":{"$set":{"cuisine":"spanish"}}}]}';UniQuery1.Execute;</code></pre>
- Use the <a href="https://docs.mongodb.com/manual/reference/command/delete/" target="_blank" class="weblink">delete</a> command to delete documents from a collection, for example:

<pre><code>UniQuery1.SQL.Text := '{"delete":"restaurants", "deletes":[{"q":{"name":"Volare"}}]}';UniQuery1.Execute;</code></pre></ul>

##Accessing a document using the TMongoDocument class

To access and modify a document in the code, you can use a special TMongoDocument class that has a set of properties and methods for working with the document structure. The data set always contains at least one field of the ftADT type, which has the same name as the collection and provides access to the entire document using the TMongoDocument class.

##Obtaining a document

To obtain an existing document instance, use the TUniQuery.GetObject method:<pre><code>uses...MongoObjectsUni;...varDocument: TMongoDocument;beginUniQuery1.Edit;Document := UniQuery1.GetObject('restaurants') as TMongoDocument;...</code></pre>Or, for a newly created document:<pre><code>uses...MongoObjectsUni;...varDocument: TMongoDocument;beginUniQuery1.Append;Document := UniQuery1.GetObject('restaurants') as TMongoDocument;...</code></pre>

##Accessing a document as JSON

To access / change the entire document in the JSON format, use the following properties and methods:

- The <i>Text</i> property allows to get or set the contents of a document as a JSON string, for example:

<pre><code>ShowMessage(Document.Text);Document.Text := '{"_id":1, "name":"Volare", "cuisine":"italian"}';</code></pre>
- The <i>LoadFromFile</i> and <i>SaveToFile</i> methods allow to load or save the contents of a document in a text file
- The <i>LoadFromStream</i> and <i>SaveToStream</i> methods allow to load or save the contents of a document in a stream



##Accessing the document fields

To iterate through the document fields use <i>FieldCount</i> and <i>Fields</i> property. To access the field value use its <i>Name</i> property. To access the field value use its <i>Value</i> property. For fields of complex [data types](#datatypes)</a> the return value contains the JSON representation of the field. Example:<pre><code>for i := 0 to Document.FieldCount - 1 doShowMessage(Document.Fields[i].Name + ': ' + Document.Fields[i].Value);</code></pre>Also, you can access the particular field of the document via its name using the <i>FieldByName</i> property, for example:<pre><code>ShowMessage(Document.FieldByName['name'].Value);</code></pre>or<pre><code>ShowMessage(Document['name'].Value);</code></pre>

##Modifying a document using the "fluent" interface

The TMongoDocument class provides a set of <i>SetXX</i> methods which allow to easily change its structure. Methods can be combined one by one into a chain, thus making it easier to write code.

- SetString(const Name: string; const Value: string)
- SetInteger(const Name: string; const Value: integer)
- SetInt64(const Name: string; const Value: Int64)
- SetDouble(const Name: string; const Value: double)
- SetBoolean(const Name: string; const Value: boolean)
- SetDateTime(const Name: string; const Value: TDateTime)
- SetOid(const Name: string; const Value: TJSONOid)

These methods add a simple field named<i>Name</i> with the specified<i>Value</i> to the document, or change its value if the field exists. When the existing field has the different type, then if the [AllowChangeType](#allowchangetype) property of the dataset is set to True, the field type will also be changed. Example:<pre><code>Document.SetString('name', 'Trattoria');</code></pre>
- SetTimestamp(const Name: string; const Timestamp: integer; Increment: Cardinal)
- SetBinary(const Name: string; const Binary: TBytes; const SubType: integer)
- SetJavaCode(const Name: string; const Code: string)
- SetJavaScopeCode(const Name: string; const Code: string; const Scope: array of Variant)
- SetRegex(const Name: string; const Pattern, Options: string)

These methods add corresponding complex fields to the document.<p class="notes"><b>Note:</b> For the <i>SetJavaScopeCode</i> method, the <i>Scope</i> argument is an array of pairs of identifiers and values, representing the scope.
- SetNull(const Name: string)
- SetMinKey(const Name: string)
- SetMaxKey(const Name: string)

Since <i>Null</i>, <i>MinKey</i> and <i>MaxKey</i> are constant types, the methods do not contain the <i>Value</i> argument.
- SetObject(const Name: string)
- SetArray(const Name: string)
- SetEnd

These methods are intended to add fields of <i>Object</i> and <i>Array</i> types to the document. After using <i>SetObject</i> or <i>SetArray</i> methods, all the following <i>SetXX</i> methods add fields to the object or array, not to the document. So, you should use the <i>SetEnd</i> method to return to the document level. Example:<pre><code>Document.SetObject('address').SetString('city', 'Chicago').SetString('street', 'Dearborn').SetInteger('building', 10).SetEnd.SetString('cuisine', 'italian');</code></pre>
- Unset(const Name: string)

Removes a field with the specified name from the document.</ul>


## Data Type Mapping {: #data_type_mapping}

The following table lists the constants for mapping MongoDB data types to Delphi data types. See [Data Type Mapping](./data_type_mapping.md) for more information.

|Constant|Description|
|---|---|
|mongoString|Maps String to Delphi data types.|
|mongoNumber|Maps Number to Delphi data types.|
|mongoBoolean|Maps Boolean to Delphi data types.|
|mongoObject|Maps Object to Delphi data types.|
|mongoArray|Maps Array to Delphi data types.|
|mongoNull|Maps Null to Delphi data types.|
|mongoObjectId|Maps ObjectId to Delphi data types.|
|mongoInt32|Maps 32-bit integer to Delphi data types.|
|mongoInt64|Maps 64-bit integer to Delphi data types.|
|mongoDouble|Maps Double to Delphi data types.|
|mongoDateTime|Maps DateTime to Delphi data types.|
|mongoTimestamp|Maps Timestamp to Delphi data types.|
|mongoUndefined|Maps Undefined to Delphi data types.|
|mongoBinary|Maps Binary data to Delphi data types.|
|mongoRegex|Maps Regular Expression to Delphi data types.|
|mongoJavaspan|Maps Javascript span to Delphi data types.|
|mongoJavaScopespan|Maps JavaScript span with scope to Delphi data types.|
|mongoMinKey|Maps Min key to Delphi data types.|
|mongoMaxKey|Maps Max key to Delphi data types.|
|mongoDBPointer|Maps DBPointer to Delphi data types.|
|mongoDecimal128|Maps Decimal128 to Delphi data types.|

