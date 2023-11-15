# infinity.pdf

Provides functionality for creating and formatting PDF (Portable Document Format) files. Supports pixel-perfect embedding of images, aligning text, drawing Bezier curves. Lets you rotate pages as well as render them to image files.

Module: `infinity.pdf`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [pdf](#infinity.pdf_class)

<div class="doc-toc-heading">Enums:</div>

- [align](#infinity.pdf.align_enum)

</div>

---

<div class="doc-heading">Classes</div>

---

## pdf {: #infinity.pdf_class .doc-class}

The class for operations with PDF documents.

<div class="doc-toc" markdown="1">

**Properties:**

- [fill](#infinity.pdf.fill_property)
- [fillColor](#infinity.pdf.fillColor_property)
- [font](#infinity.pdf.font_property)
- [fontAlign](#infinity.pdf.fontAlign_property)
- [fontColor](#infinity.pdf.fontColor_property)
- [fontSize](#infinity.pdf.fontSize_property)
- [pageNumber](#infinity.pdf.pageNumber_property)
- [pageRotation](#infinity.pdf.pageRotation_property)
- [password](#infinity.pdf.password_property)
- [stroke](#infinity.pdf.stroke_property)
- [strokeColor](#infinity.pdf.strokeColor_property)
- [strokeWidth](#infinity.pdf.strokeWidth_property)
- [author](#infinity.pdf.author_property)
- [creator](#infinity.pdf.creator_property)
- [pageCount](#infinity.pdf.pageCount_property)
- [pageHeight](#infinity.pdf.pageHeight_property)
- [pageWidth](#infinity.pdf.pageWidth_property)
- [producer](#infinity.pdf.producer_property)
- [subject](#infinity.pdf.subject_property)
- [text](#infinity.pdf.text_property)
- [title](#infinity.pdf.title_property)
- [version](#infinity.pdf.version_property)

**Methods:**

- [constructor()](#infinity.pdf.constructor_function)
- [addImage()](#infinity.pdf.addImage_function)
- [addImage()](#infinity.pdf.addImage_function)
- [addPage()](#infinity.pdf.addPage_function)
- [addPath()](#infinity.pdf.addPath_function)
- [addText()](#infinity.pdf.addText_function)
- [bezierTo()](#infinity.pdf.bezierTo_function)
- [closePath()](#infinity.pdf.closePath_function)
- [createPath()](#infinity.pdf.createPath_function)
- [deletePage()](#infinity.pdf.deletePage_function)
- [free()](#infinity.pdf.free_function)
- [lineTo()](#infinity.pdf.lineTo_function)
- [loadFromFile()](#infinity.pdf.loadFromFile_function)
- [moveTo()](#infinity.pdf.moveTo_function)
- [reloadPage()](#infinity.pdf.reloadPage_function)
- [renderPage()](#infinity.pdf.renderPage_function)
- [saveToFile()](#infinity.pdf.saveToFile_function)
- [updatePage()](#infinity.pdf.updatePage_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.pdf');
let myPdf = new infinity.pdf();

//adding the first page in the size of the DIN A4 format @72 PPI
myPdf.addPage(1, 595, 842);
myPdf.font = 'Arial';

//adding an image to the top right corner. Use only after you placed a corresponding image file at the specified location:
//myPdf.addImage(infinity.current.root + '../image.bmp', myPdf.pageWidth*0.88, myPdf.pageHeight*0.95, 20, 20);

//adding company name and document title
myPdf.fontAlign = infinity.pdf.align.center;
myPdf.fontColor = 0x000077FF;
myPdf.addText('Big Company', myPdf.pageWidth*0.855, myPdf.pageHeight*0.935);

myPdf.fontSize = 24;
myPdf.fontColor = 0x000000FF;
myPdf.addText('Invoice 21689', myPdf.pageWidth*0.5, myPdf.pageHeight*0.855);

//creating a dividing line under document title
myPdf.createPath(myPdf.pageWidth*0.2, myPdf.pageHeight*0.84);
myPdf.stroke = true;
myPdf.strokeColor = 0x000000FF;
myPdf.lineTo(myPdf.pageWidth*0.8, myPdf.pageHeight*0.84);
myPdf.addPath();

//creating a contrasting box at the bottom of the page
myPdf.fill = true;
myPdf.fillColor = 0xFFFF0033;
myPdf.strokeColor = 0xFF0000FF;
myPdf.createPath(myPdf.pageWidth*0.09, myPdf.pageHeight*0.30);
myPdf.lineTo(myPdf.pageWidth*0.90, myPdf.pageHeight*0.30);
myPdf.lineTo(myPdf.pageWidth*0.90, myPdf.pageHeight*0.23);
myPdf.lineTo(myPdf.pageWidth*0.09, myPdf.pageHeight*0.23);
myPdf.closePath();
myPdf.addPath();

//adding text to the box
myPdf.fontSize = 16;
myPdf.addText('Attention:', myPdf.pageWidth*0.17, myPdf.pageHeight*0.26);

//creating a signature at the bottom of the page
myPdf.fill = false;
myPdf.strokeColor = 0x000000FF;
myPdf.createPath(myPdf.pageWidth*0.2, myPdf.pageHeight*0.15);

myPdf.bezierTo(myPdf.pageWidth*0.1, myPdf.pageHeight*0.1, myPdf.pageWidth*0.2, myPdf.pageHeight*0.1, myPdf.pageWidth*0.3, myPdf.pageHeight*0.2);

myPdf.addPath();

//adding a rotated page to the document
myPdf.addPage(2, 595, 842);//DIN A4 @72 PPI
myPdf.pageRotation=90;

myPdf.saveToFile('test.pdf');
```

---

**Properties**

---

### fill {: #infinity.pdf.fill_property .doc-property}

Type: `boolean`

Specifies whether to fill with [`fillColor`](#infinity.pdf.fillColor_property) the shapes you create with [`lineTo()`](#infinity.pdf.lineTo_function) and [`bezierTo()`](#infinity.pdf.bezierTo_function).

---

### fillColor {: #infinity.pdf.fillColor_property .doc-property}

Type: `number`

Specifies the color to fill in shapes, see [`fill`](#infinity.pdf.fill_property).

---

### font {: #infinity.pdf.font_property .doc-property}

Type: `string`

Specifies the font to use with [`addText()`](#infinity.pdf.addText_function).

---

### fontAlign {: #infinity.pdf.fontAlign_property .doc-property}

Type: `infinity.pdf.align`

Specifies the alignment of text created by [`addText()`](#infinity.pdf.addText_function), according to [`align`](#infinity.pdf.align_enum).

---

### fontColor {: #infinity.pdf.fontColor_property .doc-property}

Type: `number`

Specifies the color of the text created by [`addText()`](#infinity.pdf.addText_function).

---

### fontSize {: #infinity.pdf.fontSize_property .doc-property}

Type: `number`

Specifies the size of the text created by [`addText()`](#infinity.pdf.addText_function).

---

### pageNumber {: #infinity.pdf.pageNumber_property .doc-property}

Type: `number`

Gets or sets the current page to be worked on.

---

### pageRotation {: #infinity.pdf.pageRotation_property .doc-property}

Type: `number`

Gets or sets the rotation of the current page in degrees. Only values like `90`, `180`, `270` lead to actual changes.

---

### password {: #infinity.pdf.password_property .doc-property}

Type: `string`

Gets or sets the pdf-file password.

---

### stroke {: #infinity.pdf.stroke_property .doc-property}

Type: `boolean`

Specifies whether to draw a stroke with operations like [`lineTo()`](#infinity.pdf.lineTo_function) and [`bezierTo()`](#infinity.pdf.bezierTo_function) (the created shapes still can be filled with colors).

---

### strokeColor {: #infinity.pdf.strokeColor_property .doc-property}

Type: `number`

Specifies the color of the next drawn stroke.

---

### strokeWidth {: #infinity.pdf.strokeWidth_property .doc-property}

Type: `number`

Specifies the width of the next drawn stroke.

---

### author {: #infinity.pdf.author_property .doc-property .doc-readonly}

Type: `string`

Gets the value of the author metadata field.

---

### creator {: #infinity.pdf.creator_property .doc-property .doc-readonly}

Type: `string`

Gets the value of the creator metadata field.

---

### pageCount {: #infinity.pdf.pageCount_property .doc-property .doc-readonly}

Type: `number`

Gets the total page count of the pdf document.

---

### pageHeight {: #infinity.pdf.pageHeight_property .doc-property .doc-readonly}

Type: `number`

Gets the height of the current page in pixels.

---

### pageWidth {: #infinity.pdf.pageWidth_property .doc-property .doc-readonly}

Type: `number`

Gets the width of the current page in pixels.

---

### producer {: #infinity.pdf.producer_property .doc-property .doc-readonly}

Type: `string`

Gets the value of the producer metadata field.

---

### subject {: #infinity.pdf.subject_property .doc-property .doc-readonly}

Type: `string`

Gets the value of the subject metadata field.

---

### text {: #infinity.pdf.text_property .doc-property .doc-readonly}

Type: `string`

Gets the text data contained inside the body of the pdf document.

---

### title {: #infinity.pdf.title_property .doc-property .doc-readonly}

Type: `string`

Gets the value of the title metadata field.

---

### version {: #infinity.pdf.version_property .doc-property .doc-readonly}

Type: `string`

Gets the value of the version metadata field.

---

**Methods**

---

### constructor() {: #infinity.pdf.constructor_function .doc-function}

Lets you create an INFINITY.JS pdf file object instance. Doesn't accept parameters.

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.pdf');
let myPdf = new infinity.pdf();
```

---

### addImage() {: #infinity.pdf.addImage_function .doc-function}

Embeds an image out of the given stream into the current page of the pdf document at the specified coordinates.

Signature:
```typescript
addImage( stream: infinity.stream, x: number, y: number, width?: number, height?: number ): void
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >Stream object to receive image data from. See [infinity.stream](infinity.stream.md).

- x: `number`
  >The horizontal coordinate in pixels.

- y: `number`
  >The vertical coordinate in pixels.

- width: `number`, optional
  >The width for the embedded image.

- height: `number`, optional
  >The height for the embedded image.


Example:

```typescript
myPdf.addImage(myStream, myPdf.pageWidth*0.88, myPdf.pageHeight*0.95);
```

---

### addImage() {: #infinity.pdf.addImage_function .doc-function}

Embeds the given image file into the current page of the pdf document at the specified coordinates.

Signature:
```typescript
addImage( fileName: string, x: number, y: number, width?: number, height?: number ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be loaded.

- x: `number`
  >The horizontal coordinate in pixels.

- y: `number`
  >The vertical coordinate in pixels.

- width: `number`, optional
  >The width for the embedded image.

- height: `number`, optional
  >The height for the embedded image.


Example:

```typescript
myPdf.addImage(infinity.current.root + '../image.bmp', myPdf.pageWidth*0.88, myPdf.pageHeight*0.95, 20, 20);
```

---

### addPage() {: #infinity.pdf.addPage_function .doc-function}

Adds a new page with the specified size to the current document and selects it for editing.

Signature:
```typescript
addPage( pageNumber: number, width: number, height: number ): void
```

Parameters:

- pageNumber: `number`
  >The number for the new page. The sequence can be determined freely.

- width: `number`
  >The width for the new page in pixels.

- height: `number`
  >The height for the new page in pixels.


Example:

```typescript
myPdf.addPage(2, 595, 842);//DIN A4 @72 PPI
```

---

### addPath() {: #infinity.pdf.addPath_function .doc-function}

Adds the path previously created with [`createPath()`](#infinity.pdf.createPath_function) and [`lineTo()`](#infinity.pdf.lineTo_function) or [`bezierTo()`](#infinity.pdf.bezierTo_function) to the current page.

Signature:
```typescript
addPath(): void
```

Example:

```typescript
myPdf.createPath(myPdf.pageWidth*0.2, myPdf.pageHeight*0.84);
myPdf.stroke = true;
myPdf.strokeColor = 0x000000FF;
myPdf.lineTo(myPdf.pageWidth*0.8, myPdf.pageHeight*0.84);
myPdf.addPath();
```

---

### addText() {: #infinity.pdf.addText_function .doc-function}

Adds a row of text to the current page at the specified coordinates of the current page.

Signature:
```typescript
addText( text: string, x: number, y: number, angle?: number ): void
```

Parameters:

- text: `string`
  >The text to add.

- x: `number`
  >The horizontal coordinate in pixels.

- y: `number`
  >The vertical coordinate in pixels.

- angle: `number`
  >The angle in degrees.


Example:

```typescript
myPdf.fontAlign = infinity.pdf.align.center;
myPdf.fontColor = 0x000000FF;
myPdf.fontSize = 24;
myPdf.addText('Invoice 21689', myPdf.pageWidth*0.5, myPdf.pageHeight*0.85);
```

---

### bezierTo() {: #infinity.pdf.bezierTo_function .doc-function}

Draws a Bezier curve to the specified coordinates of the current page.

Signature:
```typescript
bezierTo( x1: number, y1: number, x2: number, y2: number, x3: number, y3: number ): void
```

Parameters:

- x1: `number`
  >The horizontal coordinate in pixels of the first control point used to specify the shape of the curve.

- y1: `number`
  >The vertical coordinate in pixels of the first control point used to specify the shape of the curve of the first control point used to specify the shape of the curve.

- x2: `number`
  >The horizontal coordinate in pixels of the second control point used to specify the shape of the curve.

- y2: `number`
  >The vertical coordinate in pixels of the first control point used to specify the shape of the curve of the second control point used to specify the shape of the curve.

- x3: `number`
  >The horizontal coordinate in pixels of the destination point for the end of the curve.

- y3: `number`
  >The vertical coordinate in pixels of the destination point for the end of the curve.


Example:

```typescript
myPdf.createPath(myPdf.pageWidth*0.2, myPdf.pageHeight*0.15);

myPdf.bezierTo(myPdf.pageWidth*0.1, myPdf.pageHeight*0.1, myPdf.pageWidth*0.2, myPdf.pageHeight*0.1, myPdf.pageWidth*0.3, myPdf.pageHeight*0.2);

myPdf.addPath();
```

---

### closePath() {: #infinity.pdf.closePath_function .doc-function}

Draws a line between the start and the end point of the path, thus closing it.

Signature:
```typescript
closePath(): void
```

Example:

```typescript
myPdf.createPath(myPdf.pageWidth*0.09, myPdf.pageHeight*0.30);
myPdf.lineTo(myPdf.pageWidth*0.90, myPdf.pageHeight*0.30);
myPdf.lineTo(myPdf.pageWidth*0.90, myPdf.pageHeight*0.23);
myPdf.lineTo(myPdf.pageWidth*0.09, myPdf.pageHeight*0.23);
myPdf.closePath();
myPdf.addPath();
```

---

### createPath() {: #infinity.pdf.createPath_function .doc-function}

Sets a start point for a new path

Signature:
```typescript
createPath( x: number, y: number ): void
```

Parameters:

- x: `number`
  >The horizontal coordinate in pixels.

- y: `number`
  >The vertical coordinate in pixels.


Example:

```typescript
myPdf.createPath(myPdf.pageWidth*0.09, myPdf.pageHeight*0.30);
```

---

### deletePage() {: #infinity.pdf.deletePage_function .doc-function}

Deletes the specified page.

Signature:
```typescript
deletePage( pageNumber: number ): void
```

Parameters:

- pageNumber: `number`
  >The number of the page to delete.


Example:

```typescript
myPdf.deletePage(2);
```

---

### free() {: #infinity.pdf.free_function .doc-function}

Frees the memory previously occupied by the pdf object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myPdf.free();
```

---

### lineTo() {: #infinity.pdf.lineTo_function .doc-function}

Draws a straight line from the current point of the path to the specified coordninates.

Signature:
```typescript
lineTo( x: number, y: number ): void
```

Parameters:

- x: `number`
  >The horizontal coordinate in pixels.

- y: `number`
  >The vertical coordinate in pixels.


Example:

```typescript
myPdf.createPath(myPdf.pageWidth*0.2, myPdf.pageHeight*0.84);
myPdf.lineTo(myPdf.pageWidth*0.8, myPdf.pageHeight*0.84);
```

---

### loadFromFile() {: #infinity.pdf.loadFromFile_function .doc-function}

Loads data from the given pdf-file into memory.

Signature:
```typescript
loadFromFile( fileName: string ): boolean
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to be loaded from.


Return type: `boolean`

Example:

```typescript
myPdf.loadFromFile('test.pdf');
```

---

### moveTo() {: #infinity.pdf.moveTo_function .doc-function}

Moves the current point of the path to the specified coordinates.

Signature:
```typescript
moveTo( x: number, y: number ): void
```

Parameters:

- x: `number`
  >The horizontal coordinate in pixels.

- y: `number`
  >The vertical coordinate in pixels.


Example:

```typescript
myPdf.moveTo(myPdf.pageWidth*0.8, myPdf.pageHeight*0.84);
```

---

### reloadPage() {: #infinity.pdf.reloadPage_function .doc-function}

Resets current pending changes to the page.

Signature:
```typescript
reloadPage(): void
```

Example:

```typescript
myPdf.reloadPage();
```

---

### renderPage() {: #infinity.pdf.renderPage_function .doc-function}

Renders the current page to an image file at the given location.

Signature:
```typescript
renderPage( fileName: string, left: number, top: number, width: number, height: number ): void
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be saved.

- left: `number`
  >The offset in pixels to the left image corner.

- top: `number`
  >The offset in pixels to the top image corner.

- width: `number`
  >The width of the final image.

- height: `number`
  >The height of the final image.


Example:

```typescript
myPdf.renderPage('test.bmp', 0, 0, 595, 841);
```

---

### saveToFile() {: #infinity.pdf.saveToFile_function .doc-function}

Saves the created work as a pdf-file at the given location.

Signature:
```typescript
saveToFile( fileName: string ): boolean
```

Parameters:

- fileName: `string`
  >Filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file to save the data to.


Return type: `boolean`

Example:

```typescript
myPdf.saveToFile('test.pdf');
```

---

### updatePage() {: #infinity.pdf.updatePage_function .doc-function}

Flushes the current page content. Make sure to call this method to ensure you don't loose any pending changes.

Signature:
```typescript
updatePage(): void
```

Example:

```typescript
myPdf.updatePage();
```



---

<div class="doc-heading">Enums</div>

---

## infinity.pdf.align {: #infinity.pdf.align_enum .doc-enum}

Values:

- left: `0`
  >Align text to the left side of the document.

- center: `1`
  >Align text to the center of the document.

- right: `2`
  >Align text to the right side of the document.

Example:

```typescript
myPdf.fontAlign = infinity.pdf.align.center;
myPdf.addText('Invoice 21689', myPdf.pageWidth*0.5, myPdf.pageHeight*0.85);
```





