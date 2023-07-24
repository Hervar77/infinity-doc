# infinity.mail

Provides functionality for creating, as well as reading or writing standard conform email data from or to files and streams.

Module: `infinity.mail`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [mail](#infinity.mail_class)

<div class="doc-toc-heading">Interfaces:</div>

- [attachmentArray](#infinity.mail.attachmentArray_interface)
- [contentArray](#infinity.mail.contentArray_interface)
- [headerArray](#infinity.mail.headerArray_interface)
- [stringArray](#infinity.mail.stringArray_interface)

<div class="doc-toc-heading">Enums:</div>

- [multipartType](#infinity.mail.multipartType_enum)
- [priority](#infinity.mail.priority_enum)
- [transferEncoding](#infinity.mail.transferEncoding_enum)

</div>


Example:

```typescript
infinity.loadModule('infinity.mail');

let myMail = new infinity.mail();


myMail.replyTo = 'support@site.com';
myMail.from = 'mailer@site.com';
myMail.sender = 'sender@site.com';
myMail.returnPath = 'mailFailed@site.com';
myMail.charset = 'utf-8';
myMail.organization = 'Corporation Institution';
myMail.userAgent = 'INFINITY.JS';

myMail.recipients = ['recipient@site.com', 'secondRecipient@site.com'];
myMail.cc = ['copyRecipient@site.com'];
myMail.bcc = ['blindCopyRecipient@site.com'];
myMail.envelopeTo = 'recipient@site.com';

myMail.subject = 'Mailsubject';

myMail.contents = [{
  contentType: 'text/html', 
  contentTransferEncoding: infinity.mail.transferEncoding.quotedPrintable, 
  charset: 'utf-8', 
  text: 'Hello, this is my mailtext. And here is a picture: <img src="cid:att01.bmp">', 
  items: []
}];

myMail.attachments = [{
  name: 'image.bmp',
  size: 1254,
  contentType: 'image/bmp',
  contentTransferEncoding: infinity.mail.transferEncoding.base64,
  contentId: 'att01.bmp',
  contentDisposition: 'inline',
  storedFilePath: infinity.current.root + '../image.bmp'
}]


myMail.saveToFile(infinity.current.root + '../mail.eml');
```


Resulting mail.eml:

```
Return-Path: <mailFailed@site.com>
From: <mailer@site.com>
Sender: <sender@site.com>
Reply-To: <support@site.com>
To: <recipient@site.com>,
	<secondRecipient@site.com>
CC: <copyRecipient@site.com>
Organization: Corporation Institution
X-Mailer: INFINITY.JS
X-Priority: 3 (Normal)
Subject: Mailsubject [T-5LHR1OS2MM-69]
Date: Thu, 8 Apr 2021 16:24:33 +0000
Content-Transfer-Encoding: 7bit
Content-Type: multipart/related;
	boundary="_NextPart_f40c92e644d38073e5521df63cb73a57"
MIME-Version: 1.0

This is a multi-part message in MIME format

--_NextPart_f40c92e644d38073e5521df63cb73a57
Content-Type: text/html;
	charset="utf-8"
Content-Transfer-Encoding: quoted-printable

Hello, this is my mailtext. And here is a picture: <img src=3D"cid:att01.bm=
p">

--_NextPart_f40c92e644d38073e5521df63cb73a57
Content-Type: image/bmp;
	name="image.bmp"
Content-Transfer-Encoding: base64
Content-Disposition: inline;
	filename="image.bmp"
Content-ID: att01.bmp

Qk3mBAAAAAAAADYAAAAoAAAAFAAAABQAAAABABgAAAAAAAAAAAATCwAAEwsAAAAAAAAAAAAACvDN
CvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNqdUZCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDN
CvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNLOMZCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDN
CvDN2t4fCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNtvAZCvDNCvDNCvDNCvDNCvDNCvDNCvDN
CvDNCvDNCvDNeOwfCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNQ/4ZCvDNCvDNCvDNCvDNCvDNCvDN
CvDNCvDNeOwfCvDNCvDN5vkfhx0hCvDNCvDNCvDNCvDNCvDNCvDNwygbCvDNCvDNCvDNCvDNCvDN
CvDNhx0h5vkfCvDNCvDNCvDNCvDNCvDN8TwhCvDNCvDNCvDNCvDNCvDNVkUbCvDNCvDNCvDNCvDN
CvDN8TwhCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNlVUhCvDNCvDNCvDNCvDNz1wbCvDNCvDNCvDN
CvDNlVUhCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDN/Goho30hCvDNCvDNaHEbCvDNCvDN
o30h/GohCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNHZAhCvDN2oMbCvDN
HZAhCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNsKAheJUb
sKAhCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDN2t4feOwf5vkfhx0h8TwhlVUh/Goho30hHZAhvMAh
OLEhvMAhTc8hydwhX+sh1fghcBkj4Dkjf1Mj62gjCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNTc8h
CvDNh7UbCvDNTc8hCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNydwh
CvDNCvDN8cQbCvDNCvDNydwhCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDN1fghX+sh
CvDNCvDNCvDNldMbCvDNCvDNCvDNX+sh1fghCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNcBkjCvDN
CvDNCvDNCvDNCvDN/OEbCvDNCvDNCvDNCvDNCvDNcBkjCvDNCvDNCvDNCvDNCvDNCvDN4DkjCvDN
CvDNCvDNCvDNCvDNCvDNo+8bCvDNCvDNCvDNCvDNCvDNCvDN4DkjCvDNCvDNCvDN62gjf1MjCvDN
CvDNCvDNCvDNCvDNCvDNCvDNHfwbCvDNCvDNCvDNCvDNCvDNCvDNCvDNf1Mj62gjjnwjCvDNCvDN
CvDNCvDNCvDNCvDNCvDNCvDNCvDNsCUdCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDN
CvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNOEMdCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDN
CvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNvFkdCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDNCvDN

--_NextPart_f40c92e644d38073e5521df63cb73a57--
```

Example for working with received emails:

```typescript
infinity.loadModule('infinity.mail');
infinity.loadModule('infinity.fileSystem');

let myMail = new infinity.mail();

myMail.loadFromFile('C:/tmp/email.eml');

infinity.file.writeString('c:/tmp/mailContent.txt', myMail.getTextContent());
```

---

<div class="doc-heading">Classes</div>

---

## mail {: #infinity.mail_class .doc-class}

The class for operations with email files.

<div class="doc-toc" markdown="1">

**Properties:**

- [attachments](#infinity.mail.attachments_property)
- [bcc](#infinity.mail.bcc_property)
- [boundary](#infinity.mail.boundary_property)
- [cc](#infinity.mail.cc_property)
- [charset](#infinity.mail.charset_property)
- [contentTransferEncoding](#infinity.mail.contentTransferEncoding_property)
- [contentType](#infinity.mail.contentType_property)
- [contents](#infinity.mail.contents_property)
- [date](#infinity.mail.date_property)
- [deliveryNotification](#infinity.mail.deliveryNotification_property)
- [envelopeTo](#infinity.mail.envelopeTo_property)
- [extendedHeaders](#infinity.mail.extendedHeaders_property)
- [from](#infinity.mail.from_property)
- [organization](#infinity.mail.organization_property)
- [priority](#infinity.mail.priority_property)
- [recipients](#infinity.mail.recipients_property)
- [replyTo](#infinity.mail.replyTo_property)
- [returnPath](#infinity.mail.returnPath_property)
- [sender](#infinity.mail.sender_property)
- [subject](#infinity.mail.subject_property)
- [userAgent](#infinity.mail.userAgent_property)
- [inReplyTo](#infinity.mail.inReplyTo_property)
- [messageId](#infinity.mail.messageId_property)
- [multipartType](#infinity.mail.multipartType_property)
- [receivedFrom](#infinity.mail.receivedFrom_property)
- [size](#infinity.mail.size_property)

**Methods:**

- [constructor()](#infinity.mail.constructor_function)
- [clear()](#infinity.mail.clear_function)
- [free()](#infinity.mail.free_function)
- [getBestContent()](#infinity.mail.getBestContent_function)
- [getHtmlContent()](#infinity.mail.getHtmlContent_function)
- [getTextContent()](#infinity.mail.getTextContent_function)
- [loadFromFile()](#infinity.mail.loadFromFile_function)
- [loadFromStream()](#infinity.mail.loadFromStream_function)
- [saveToFile()](#infinity.mail.saveToFile_function)
- [saveToStream()](#infinity.mail.saveToStream_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.mail');
let myMail = new infinity.mail();
```

---

**Properties**

---

### attachments {: #infinity.mail.attachments_property .doc-property}

Type: [`infinity.mail.attachmentArray`](#infinity.mail.attachmentArray_interface)

Gets or sets the attachments for the current email. The data must be passed and will be retreived inside an [`infinity.mail.stringArray`](#infinity.mail.stringArray_interface). See the example on top of this page for more information.

---

### bcc {: #infinity.mail.bcc_property .doc-property}

Type: [`infinity.mail.stringArray`](#infinity.mail.stringArray_interface)

Gets or sets the blind carbon copy recipients for the current email. The data must be passed and will be retreived inside an [`infinity.mail.stringArray`](#infinity.mail.stringArray_interface). See the example on top of this page for more information.

---

### boundary {: #infinity.mail.boundary_property .doc-property}

Type: `string`

Gets or sets the boundary for the current email.

---

### cc {: #infinity.mail.cc_property .doc-property}

Type: [`infinity.mail.stringArray`](#infinity.mail.stringArray_interface)

Gets or sets the `CC` header for the current email. The data must be passed and will be retreived inside an [`infinity.mail.stringArray`](#infinity.mail.stringArray_interface). See the example on top of this page for more information.

---

### charset {: #infinity.mail.charset_property .doc-property}

Type: `string`

Gets or sets the character encoding for the current email.

---

### contentTransferEncoding {: #infinity.mail.contentTransferEncoding_property .doc-property}

Type: [`infinity.mail.transferEncoding`](#infinity.mail.transferEncoding_enum)

Gets or sets the `Content-Transfer-Encoding` header for the current email according to the [`infinity.mail.transferEncoding`](#infinity.mail.transferEncoding_enum) enum.

---

### contentType {: #infinity.mail.contentType_property .doc-property}

Type: `string`

Gets or sets the MIME `Content-Type` header for the current email.

---

### contents {: #infinity.mail.contents_property .doc-property}

Type: [`infinity.mail.contentArray`](#infinity.mail.contentArray_interface)

Gets or sets the contents for the current email. The data must be passed and will be retreived inside an [`infinity.mail.stringArray`](#infinity.mail.stringArray_interface). See the example on top of this page for more information.

---

### date {: #infinity.mail.date_property .doc-property}

Type: `number`

Gets or sets the `Date` header for the current email.

---

### deliveryNotification {: #infinity.mail.deliveryNotification_property .doc-property}

Type: `string`

Gets or sets the delivery notification flag for the current email.

---

### envelopeTo {: #infinity.mail.envelopeTo_property .doc-property}

Type: `string`

Gets or sets the `X-Envelope-To` header for the current email.

---

### extendedHeaders {: #infinity.mail.extendedHeaders_property .doc-property}

Type: [`infinity.mail.headerArray`](#infinity.mail.headerArray_interface)

Allows for additional headers to be added.

---

### from {: #infinity.mail.from_property .doc-property}

Type: `string`

Gets or sets the `From` header for the current email.

---

### organization {: #infinity.mail.organization_property .doc-property}

Type: `string`

Gets or sets the `Organization` header for the current email.

---

### priority {: #infinity.mail.priority_property .doc-property}

Type: `infinity.mail.priority`

Gets or sets the `X-Priority` header for the current email.

---

### recipients {: #infinity.mail.recipients_property .doc-property}

Type: [`infinity.mail.stringArray`](#infinity.mail.stringArray_interface)

Gets or sets the `To` header for the current email. The data must be passed inside an [`infinity.mail.stringArray`](#infinity.mail.stringArray_interface). See the example on top of this page for more information.

---

### replyTo {: #infinity.mail.replyTo_property .doc-property}

Type: `string`

Gets or sets the `Reply-To` header for the current email.

---

### returnPath {: #infinity.mail.returnPath_property .doc-property}

Type: `string`

Gets or sets the `Return-Path` header for the current email.

---

### sender {: #infinity.mail.sender_property .doc-property}

Type: `string`

Gets or sets the `Sender` header for the current email.

---

### subject {: #infinity.mail.subject_property .doc-property}

Type: `string`

Gets or sets the subject for the current email.

---


### userAgent {: #infinity.mail.userAgent_property .doc-property}

Type: `string`

Gets or sets the `X-Mailer` header for the current email.

---

### inReplyTo {: #infinity.mail.inReplyTo_property .doc-property .doc-readonly}

Type: `string`

Gets the data out of the `In-Reply-To` header of the current email.

---

### messageId {: #infinity.mail.messageId_property .doc-property .doc-readonly}

Type: `string`

Gets the data out of the `Message-ID` header of the current email.

---

### multipartType {: #infinity.mail.multipartType_property .doc-property .doc-readonly}

Type: [`infinity.mail.multipartType`](#infinity.mail.multipartType_enum)

Gets the data out of the `Message-ID` header of the current email according to the [`infinity.mail.multipartType`](#infinity.mail.multipartType_enum) enum. 

---

### receivedFrom {: #infinity.mail.receivedFrom_property .doc-property .doc-readonly}

Type: `infinity.mail.stringArray`

Gets the IPs of the servers from which the email has been received out of the `Received` header of the current email.

---

### size {: #infinity.mail.size_property .doc-property .doc-readonly}

Type: `number`

Gets the size of the current email.

---

**Methods**

---

### constructor() {: #infinity.mail.constructor_function .doc-function}

Lets you create an INFINITY.JS mail object instance.

Signature:
```typescript
constructor( parseAttachment?: boolean)
```

Parameters:

- parseAttachment: `boolean`, optional
  >Whether to include attachments when loading mail from a file.


Example:

```typescript
infinity.loadModule('infinity.mail');
let myMail = new infinity.mail();
```

---

### clear() {: #infinity.mail.clear_function .doc-function}

Clears all data from the mail object instance.

Signature:
```typescript
clear(): void
```

Example:

```typescript
myMail.clear();
```

---

### free() {: #infinity.mail.free_function .doc-function}

Frees the memory previously occupied by the mail object instance instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myMail.free();
```

---

### getBestContent() {: #infinity.mail.getBestContent_function .doc-function}

Returns the most appropriate HTML or text content of the current mail.

Signature:
```typescript
getBestContent( replaceCID: boolean ): string
```

Parameters:

- replaceCID: `boolean`
  >Specifies whether image data should be put inline in place of the previous `cid:` entries.


Return type: `string`

Example:

```typescript
myMail.getBestContent(true);
```

---

### getHtmlContent() {: #infinity.mail.getHtmlContent_function .doc-function}

Returns extracted html content from the email inside the mail object instance.

Signature:
```typescript
getHtmlContent( replaceCID: boolean ): string
```

Parameters:

- replaceCID: `boolean`
  >Specifies whether imaga data should be put inline in place of the previous `cid:` entries.


Return type: `string`

Example:

```typescript
myMail.getHtmlContent(true);
```

---

### getTextContent() {: #infinity.mail.getTextContent_function .doc-function}

Returns extracted text content from the email inside the mail object instance.

Signature:
```typescript
getTextContent(): string
```

Return type: `string`

Example:

```typescript
let textContent = myMail.getTextContent();
```

---

### loadFromFile() {: #infinity.mail.loadFromFile_function .doc-function}

Loads data from the specified email-file into the mail object instance.

Signature:
```typescript
loadFromFile( fileName: string ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be loaded.


Example:

```typescript
myMail.loadFromFile(infinity.current.root + '../mail.eml');
```

---

### loadFromStream() {: #infinity.mail.loadFromStream_function .doc-function}

Loads data from the given stream into the mail object instance.

Signature:
```typescript
loadFromStream( stream: infinity.stream ): void
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >Stream object to receive email data from. See [infinity.stream](infinity.stream.md).


Example:

```typescript
myMail.loadFromStream(stream);
```

---

### saveToFile() {: #infinity.mail.saveToFile_function .doc-function}

Saves standard conform email data from the mail object instance to a file.

Signature:
```typescript
saveToFile( fileName: string ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to save the data to.


Example:

```typescript
myMail.saveToFile(fileName);
```

---

### saveToStream() {: #infinity.mail.saveToStream_function .doc-function}

Saves standard conform email data from the mail object instance to the given stream.

Signature:
```typescript
saveToStream( stream: infinity.stream ): void
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >Stream object to write email data to. See [infinity.stream](infinity.stream.md).


Example:

```typescript
myMail.saveToStream(stream);
```



---

<div class="doc-heading">Interfaces</div>

---

## attachmentArray {: #infinity.mail.attachmentArray_interface .doc-interface}

Extends: `Array<{name: string, size: number, contentType: string, contentTransferEncoding: infinity.mail.transferEncoding, contentId: string, contentDisposition: string, storedFilePath: string}>`

An array containing objects with attachment data inside its properties.

### Properties:
- #### name 
  >Type: `string`. The name of the attachment for the corresponding parameter of the `Content-Type` attachment header.
- #### size
  >Type: `number`. The size of the attachment in bytes.
- #### contentTransferEncoding
  >Type: `infinity.mail.transferEncoding`. The transfer encoding for the attachment.
- #### contentId
  >Type: `string`. The content id ("cid") for e.g. inline insertion of the attachment into the email content.
- #### contentDisposition
  >Type: `string`. The entry for the `Content-Disposition` header.
- #### storedFilePath
  >Type: `string`. The filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the attachment file.

---

## contentArray {: #infinity.mail.contentArray_interface .doc-interface}

Extends: `Array<{contentType: string, contentTransferEncoding: infinity.mail.transferEncoding, charset: string, text: string, items: infinity.mail.contentArray}>`


### Properties:
- #### contentType 
  >Type: `string`. The MIME content type for the corresponding email header.
- #### contentTransferEncoding
  >Type: `infinity.mail.transferEncoding`. The transfer encoding for the email body content.
- #### charset
  >Type: `string`. The character encoding identifier for the email body content.
- #### text
  >Type: `string`. The email body content.
- #### items
  >Type: `infinity.mail.contentArray`.


---

## headerArray {: #infinity.mail.headerArray_interface .doc-interface}

Extends: `Array<{name: string, value: string}>`

An array containing objects with data inside its properties.

### Properties:
- #### name 
  >Type: `string`. The field name.
- #### value
  >Type: `string`. The field value.

---

## stringArray {: #infinity.mail.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array of strings.



---

<div class="doc-heading">Enums</div>

---

## infinity.mail.multipartType {: #infinity.mail.multipartType_enum .doc-enum}

Values:

- none: `0`
  >Stands for.

- alternative: `1`
  >Stands for the `multipart/related` `Content-Type` header declaration.

- other: `2`
  >Stands for the `multipart/other` `Content-Type` header declaration.

Example:

```typescript
infinity.loadModule('infinity.mail');
let multipartType = infinity.mail.multipartType.none;
```



---

## infinity.mail.priority {: #infinity.mail.priority_enum .doc-enum}

Values:

- lowest: `0`
  >Stands for the `5 (Lowest)` `X-Priority` email header declaration.

- lower: `1`
  >Stands for the `4 (Lower)` `X-Priority` email header declaration.

- normal: `2`
  >Stands for the `3 (Normal)` `X-Priority` email header declaration.

- higher: `3`
  >Stands for the `2 (Higher)` `X-Priority` email header declaration.

- highest: `4`
  >Stands for the `1 (Highest)` `X-Priority` email header declaration.

Example:

```typescript
infinity.loadModule('infinity.mail');
let priority = infinity.mail.priority.lowest;
```



---

## infinity.mail.transferEncoding {: #infinity.mail.transferEncoding_enum .doc-enum}

Values:

- bit7: `0`
  >Stands for the `7bit` `Content-Transfer-Encoding` email header declaration.

- bit8: `1`
  >Stands for the `8bit` `Content-Transfer-Encoding` email header declaration.

- binary: `2`
  >Stands for the `binary` `Content-Transfer-Encoding` email header declaration.

- quotedPrintable: `3`
  >Stands for the `quoted-printable` `Content-Transfer-Encoding` email header declaration.

- base64: `4`
  >Stands for the `base64` `Content-Transfer-Encoding` email header declaration.

Example:

```typescript
infinity.loadModule('infinity.mail');
let transferEncoding = infinity.mail.transferEncoding.bit7;
```





