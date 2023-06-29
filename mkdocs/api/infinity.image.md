# infinity.image

Offers various image creation and manipulation possibilities. Lets you load image data from files or create your own. Supports different formats, quantizing, dithering, tone mapping algorithms as well as manipulation of basic image properties. Offers comfort functions for thumbnail creation, resizing, cropping, rotating, flipping and combining images as well as inverting, extracting or combining colors.

Module: `infinity.image`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [image](#infinity.image_class)

<div class="doc-toc-heading">Interfaces:</div>

- [pixelArray](#infinity.image.pixelArray_interface)

<div class="doc-toc-heading">Enums:</div>

- [channel](#infinity.image.channel_enum)
- [color](#infinity.image.color_enum)
- [dither](#infinity.image.dither_enum)
- [filter](#infinity.image.filter_enum)
- [quantize](#infinity.image.quantize_enum)
- [tmo](#infinity.image.tmo_enum)
- [type](#infinity.image.type_enum)

</div>


Example:

```typescript
infinity.loadModule('infinity.image');

const WIDTH = 320;
const HEIGHT = 240;
let myImage = new infinity.image(infinity.image.type.bitmap, WIDTH, HEIGHT, 24);

myImage.fill(0x0000DDAA);

let color = 0x00CC0000;
const HWRATIO =  HEIGHT / WIDTH;

for (let i = 0; i < WIDTH; i++){

    //Diagonals
    myImage.setPixel(i, i*HWRATIO, color);
    myImage.setPixel(WIDTH-i, i*HWRATIO, color);

    //Horizontal line
    myImage.setPixel(i, HEIGHT/2, color);

    //Vertical line
    if( i <= HEIGHT ){
      myImage.setPixel(WIDTH/2, i, color);
    }
}


let myImage2 = new infinity.image();

myImage.copySubImage(140, 100, 180, 140, myImage2);
myImage.adjustGamma(1.5);
myImage.pasteSubImage(myImage2, 20, 20);

myImage.rotateEx(127, 0, -80, 160, 120, true);

myImage.saveToFile('image.bmp');
```

---

<div class="doc-heading">Classes</div>

---

## image {: #infinity.image_class .doc-class}

The class for working with images.

<div class="doc-toc" markdown="1">

**Properties:**

- [horzResolution](#infinity.image.horzResolution_property)
- [vertResolution](#infinity.image.vertResolution_property)
- [bpp](#infinity.image.bpp_property)
- [color](#infinity.image.color_property)
- [colorsUsed](#infinity.image.colorsUsed_property)
- [height](#infinity.image.height_property)
- [scanWidth](#infinity.image.scanWidth_property)
- [size](#infinity.image.size_property)
- [type](#infinity.image.type_property)
- [width](#infinity.image.width_property)

**Methods:**

- [constructor()](#infinity.image.constructor_function)
- [constructor()](#infinity.image.constructor_function)
- [adaptiveThreshold()](#infinity.image.adaptiveThreshold_function)
- [adjustBrightness()](#infinity.image.adjustBrightness_function)
- [adjustContrast()](#infinity.image.adjustContrast_function)
- [adjustGamma()](#infinity.image.adjustGamma_function)
- [assign()](#infinity.image.assign_function)
- [clear()](#infinity.image.clear_function)
- [colorQuantize()](#infinity.image.colorQuantize_function)
- [combineChannels()](#infinity.image.combineChannels_function)
- [convertTo16Bits555()](#infinity.image.convertTo16Bits555_function)
- [convertTo16Bits565()](#infinity.image.convertTo16Bits565_function)
- [convertTo24Bits()](#infinity.image.convertTo24Bits_function)
- [convertTo32Bits()](#infinity.image.convertTo32Bits_function)
- [convertTo4Bits()](#infinity.image.convertTo4Bits_function)
- [convertTo8Bits()](#infinity.image.convertTo8Bits_function)
- [convertToGrayscale()](#infinity.image.convertToGrayscale_function)
- [convertToRgbf()](#infinity.image.convertToRgbf_function)
- [convertToStandardType()](#infinity.image.convertToStandardType_function)
- [convertToType()](#infinity.image.convertToType_function)
- [copySubImage()](#infinity.image.copySubImage_function)
- [deskew()](#infinity.image.deskew_function)
- [dither()](#infinity.image.dither_function)
- [fill()](#infinity.image.fill_function)
- [flipHorizontal()](#infinity.image.flipHorizontal_function)
- [flipVertical()](#infinity.image.flipVertical_function)
- [free()](#infinity.image.free_function)
- [getChannel()](#infinity.image.getChannel_function)
- [getData()](#infinity.image.getData_function)
- [getMetaData()](#infinity.image.getMetaData_function)
- [getPixel()](#infinity.image.getPixel_function)
- [getThumbnail()](#infinity.image.getThumbnail_function)
- [invert()](#infinity.image.invert_function)
- [isGrayscale()](#infinity.image.isGrayscale_function)
- [isTransparent()](#infinity.image.isTransparent_function)
- [isValid()](#infinity.image.isValid_function)
- [loadFromFile()](#infinity.image.loadFromFile_function)
- [loadFromStream()](#infinity.image.loadFromStream_function)
- [pasteSubImage()](#infinity.image.pasteSubImage_function)
- [rescale()](#infinity.image.rescale_function)
- [rotate()](#infinity.image.rotate_function)
- [rotateEx()](#infinity.image.rotateEx_function)
- [saveToFile()](#infinity.image.saveToFile_function)
- [saveToStream()](#infinity.image.saveToStream_function)
- [setChannel()](#infinity.image.setChannel_function)
- [setData()](#infinity.image.setData_function)
- [setPixel()](#infinity.image.setPixel_function)
- [setSize()](#infinity.image.setSize_function)
- [setThumbnail()](#infinity.image.setThumbnail_function)
- [splitChannels()](#infinity.image.splitChannels_function)
- [threshold()](#infinity.image.threshold_function)
- [thumbnail()](#infinity.image.thumbnail_function)
- [toneMapping()](#infinity.image.toneMapping_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.image');
let myImage = new infinity.image();
```

---

**Properties**

---

### horzResolution {: #infinity.image.horzResolution_property .doc-property}

Type: `number`

Gets or sets the horizontal pixels per unit property.

---

### vertResolution {: #infinity.image.vertResolution_property .doc-property}

Type: `number`

Gets or sets the vertical pixels per unit property.

---

### bpp {: #infinity.image.bpp_property .doc-property .doc-readonly}

Type: `number`

Gets the bits per pixel property.

---

### color {: #infinity.image.color_property .doc-property .doc-readonly}

Type: [`infinity.image.color`](#infinity.image.color_enum)

Gets the color model in use corresponding to the [`infinity.image.color`](#infinity.image.color_enum) enum.

---

### colorsUsed {: #infinity.image.colorsUsed_property .doc-property .doc-readonly}

Type: `number`

Gets the number of possible colors (0 for true-color).

---

### height {: #infinity.image.height_property .doc-property .doc-readonly}

Type: `number`

Gets the height of the picture in pixels.

---

### scanWidth {: #infinity.image.scanWidth_property .doc-property .doc-readonly}

Type: `number`

Gets the width in bytes of each scan line (row) of pixel data.

---

### size {: #infinity.image.size_property .doc-property .doc-readonly}

Type: `number`

Gets the file size in bytes.

---

### type {: #infinity.image.type_property .doc-property .doc-readonly}

Type: [`infinity.image.type`](#infinity.image.type_enum)

Gets the image type according to [`infinity.image.type`](#infinity.image.type_enum)

---

### width {: #infinity.image.width_property .doc-property .doc-readonly}

Type: `number`

Gets the image width in pixels.

---

**Methods**

---

### constructor() {: #infinity.image.constructor_function .doc-function}

Lets you create an INFINITY.JS image file object instance with several parameters.

Signature:
```typescript
constructor( type?: infinity.image.type, width?: number, height?: number, bpp?: number )
```

Parameters:

- type: [`infinity.image.type`](#infinity.image.type_enum), optional
  >image type according to [infinity.image.type](#infinity.image.type_enum)

- width: `number`, optional
  >image width in pixels

- height: `number`, optional
  >image height in pixels

- bpp: `number`, optional
  >bits per pixel



---

### constructor() {: #infinity.image.constructor_function .doc-function}

Lets you create an INFINITY.JS image file object instance without parameters.

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.image');

let myImage = new infinity.image();
myImage.loadFromFile('image.bmp');

myImage.convertToGrayscale();
myImage.dither(infinity.image.dither.fs);

myImage.saveToFile('image2.bmp');
```

---

### adaptiveThreshold() {: #infinity.image.adaptiveThreshold_function .doc-function}

Converts an RGB 8-bit-color image to black and white using the adaptive threshold algorithm.

Signature:
```typescript
adaptiveThreshold( s: number, t: number ): boolean
```

Parameters:

- s: `number`
  >window size

- t: `number`
  >threshold value for black and white


Return type: `boolean`

Example:

```typescript
myImage.adaptiveThreshold(64, 128);
```

---

### adjustBrightness() {: #infinity.image.adjustBrightness_function .doc-function}

Adjusts image brightness.

Signature:
```typescript
adjustBrightness( percentage: number ): boolean
```

Parameters:

- percentage: `number`
  >adjustment extent in percent


Return type: `boolean`

Example:

```typescript
myImage.adjustBrightness(70);
```

---

### adjustContrast() {: #infinity.image.adjustContrast_function .doc-function}

Adjusts image contrast.

Signature:
```typescript
adjustContrast( percentage: number ): boolean
```

Parameters:

- percentage: `number`
  >adjustment extent in percent


Return type: `boolean`

Example:

```typescript
myImage.adjustContrast(50);
```

---

### adjustGamma() {: #infinity.image.adjustGamma_function .doc-function}

Adjusts image gamma.

Signature:
```typescript
adjustGamma( gamma: number ): boolean
```

Parameters:

- gamma: `number`
  >the new gamma value


Return type: `boolean`

Example:

```typescript
myImage.adjustGamma(1.5);
```

---

### assign() {: #infinity.image.assign_function .doc-function}

Assigns the contents of another infinity.image object instance to the current object instance.

Signature:
```typescript
assign( src: infinity.image ): void
```

Parameters:

- src: `infinity.image`
  >the `infinity.image` object instance to assign the contents from


Example:

```typescript
let myImage = new infinity.image();
myImage.loadFromFile('image.bmp');

let myImage2 = new infinity.image();
myImage2.assign(myImage);

myImage2.saveToFile('image2.bmp');
```

---

### clear() {: #infinity.image.clear_function .doc-function}

Clears image data from the current object instance.

Signature:
```typescript
clear(): void
```

Example:

```typescript
myImage.clear();
```

---

### colorQuantize() {: #infinity.image.colorQuantize_function .doc-function}

Quantizates colors of the image data.

Signature:
```typescript
colorQuantize( algorithm: infinity.image.quantize ): boolean
```

Parameters:

- algorithm: [`infinity.image.quantize`](#infinity.image.quantize_enum)
  >the quantization algorithm to apply according to [`infinity.image.quantize`](#infinity.image.quantize_enum)


Return type: `boolean`

Example:

```typescript
myImage.colorQuantize(infinity.image.quantize.lfpQuant);
```

---

### combineChannels() {: #infinity.image.combineChannels_function .doc-function}

Combines red, green, blue and alpha channels from other picture instances into one image.

Signature:
```typescript
combineChannels( red: infinity.image, green: infinity.image, blue: infinity.image ): boolean
```

Parameters:

- red: `infinity.image`
  >red channel

- green: `infinity.image`
  >green channel

- blue: `infinity.image`
  >blue channel


Return type: `boolean`

Example:

```typescript
myImage.combineChannels(myImage2Red, myImage2Green, myImage2Blue);
```

---

### convertTo16Bits555() {: #infinity.image.convertTo16Bits555_function .doc-function}

Converts a bitmap to 16 bits, where each pixel has a color pattern of 5 bits red, 5 bits green and 5 bits blue. One bit in each pixel is unused.

Signature:
```typescript
convertTo16Bits555(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.convertTo16Bits555();
```

---

### convertTo16Bits565() {: #infinity.image.convertTo16Bits565_function .doc-function}

Converts a bitmap to 16 bits, where each pixel has a color pattern of 5 bits red, 6 bits green and 5 bits blue.

Signature:
```typescript
convertTo16Bits565(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.convertTo16Bits565();
```

---

### convertTo24Bits() {: #infinity.image.convertTo24Bits_function .doc-function}

Converts a bitmap to 24 bits.

Signature:
```typescript
convertTo24Bits(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.convertTo24Bits();
```

---

### convertTo32Bits() {: #infinity.image.convertTo32Bits_function .doc-function}

Converts a bitmap to 32 bits.

Signature:
```typescript
convertTo32Bits(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.convertTo32Bits();
```

---

### convertTo4Bits() {: #infinity.image.convertTo4Bits_function .doc-function}

Converts a bitmap to 4 bits.

Signature:
```typescript
convertTo4Bits(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.convertTo4Bits();
```

---

### convertTo8Bits() {: #infinity.image.convertTo8Bits_function .doc-function}

Converts a bitmap to 8 bits.

Signature:
```typescript
convertTo8Bits(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.convertTo8Bits();
```

---

### convertToGrayscale() {: #infinity.image.convertToGrayscale_function .doc-function}

Converts a bitmap to 8-bit greyscale.

Signature:
```typescript
convertToGrayscale(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.convertToGrayscale();
```

---

### convertToRgbf() {: #infinity.image.convertToRgbf_function .doc-function}

Converts the bitmap to a 96-bit RGBF image.

Signature:
```typescript
convertToRgbf(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.convertToRgbf();
```

---

### convertToStandardType() {: #infinity.image.convertToStandardType_function .doc-function}

Converts an image with a color type other than 8-bit (e.g. floating point color formats) to 8-bit grey scale. 

Signature:
```typescript
convertToStandardType( scaleLinear: boolean ): boolean
```

Parameters:

- scaleLinear: `boolean`
  >If `true`, then color values will be scaled linearly to values `0`-`255`. If `false` each value will be rounded to values `0`-`255`.

Return type: `boolean`

Example:

```typescript
myImage.convertToStandardType(true);
```

---

### convertToType() {: #infinity.image.convertToType_function .doc-function}

Converts an image to the given color type.

Signature:
```typescript
convertToType( type: infinity.image.type, scaleLinear: boolean ): boolean
```

Parameters:

- type: [`infinity.image.type`](#infinity.image.type_enum)
  >the image type according to [`infinity.image.type`](#infinity.image.type_enum)

- scaleLinear: `boolean`
  >If `true`, then color values will be scaled linearly to values `0`-`255`. If `false` each value will be rounded to values `0`-`255`.

Return type: `boolean`

Example:

```typescript
myImage.convertToType(infinity.image.type.rgba16, false);
```

---

### copySubImage() {: #infinity.image.copySubImage_function .doc-function}

Copies a sub part of the current image.

Signature:
```typescript
copySubImage( left: number, top: number, right: number, bottom: number, dest: infinity.image ): boolean
```

Parameters:

- left: `number`
  >Specifies the left position of the cropped rectangle

- top: `number`
  >Specifies the top position of the cropped rectangle

- right: `number`
  >Specifies the right position of the cropped rectangle

- bottom: `number`
  >Specifies the bottom position of the cropped rectangle

- dest: `infinity.image`
  >an `infinity.image` object instance to hold the copied image


Return type: `boolean`

Example:

```typescript
myImage.copySubImage(140, 100, 180, 140, myImage2);
```

---

### deskew() {: #infinity.image.deskew_function .doc-function}

Deskews an image automatically.

Signature:
```typescript
deskew( s: number, t: number ): boolean
```

Parameters:

- s: `number`
  >the maximum deskew angle

- t: `number`
  >line detection threshold for the Hough lines algorithm


Return type: `boolean`

Example:

```typescript
myImage.deskew(10, 128);
```

---

### dither() {: #infinity.image.dither_function .doc-function}

Converts a bitmap to 1-bit monochrome bitmap using a dithering algorithm.

Signature:
```typescript
dither( algorithm: infinity.image.dither ): boolean
```

Parameters:

- algorithm: [`infinity.image.dither`](#infinity.image.dither_enum)
  >the dithering algorithm according to [`infinity.image.dither`](#infinity.image.dither_enum)


Return type: `boolean`

Example:

```typescript
myImage.dither(infinity.image.dither.fs);
```

---

### fill() {: #infinity.image.fill_function .doc-function}

Fills the area with the specified color.

Signature:
```typescript
fill( color: number ): void
```

Parameters:

- color: `number`
  >the color to be filled in


Example:

```typescript
myImage.fill(190904);
```

---

### flipHorizontal() {: #infinity.image.flipHorizontal_function .doc-function}

Flips the image horizontally along the vertical axis.

Signature:
```typescript
flipHorizontal(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.flipHorizontal();
```

---

### flipVertical() {: #infinity.image.flipVertical_function .doc-function}

Flips the image vertically along the horizontal axis.

Signature:
```typescript
flipVertical(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.flipVertical();
```

---

### free() {: #infinity.image.free_function .doc-function}

Frees the memory previously occupied by the image object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myImage.free();
```

---

### getChannel() {: #infinity.image.getChannel_function .doc-function}

Retrieves the specified channel of the image.

Signature:
```typescript
getChannel( dest: infinity.image, channel: infinity.image.channel ): boolean
```

Parameters:

- dest: `infinity.image`
  >an `infinity.image` object instance to hold the output

- channel: [`infinity.image.channel`](#infinity.image.channel_enum)
  >the color channel to extract according to [`infinity.image.channel`](#infinity.image.channel_enum)


Return type: `boolean`

Example:

```typescript
myImage.getChannel(myImage2, infinity.image.channel.green);
```

---

### getData() {: #infinity.image.getData_function .doc-function}

Returns a pixel array out of the image.

Signature:
```typescript
getData(): infinity.image.pixelArray
```

Return type: [`infinity.image.pixelArray`](#infinity.image.pixelArray_interface)

Example:

```typescript
let pixelArray = myImage.getData();
pixelArray.forEach(element =>{
  //...
});
```

---

### getMetaData() {: #infinity.image.getMetaData_function .doc-function}

Returns metadata of the image.

Signature:
```typescript
getMetaData(): any
```

Return type: `any`

Example:

```typescript
let metaData = myImage.getMetaData();
console.debug(metaData);
```

---

### getPixel() {: #infinity.image.getPixel_function .doc-function}

Gets the Color of the specified pixel.

Signature:
```typescript
getPixel( x: number, y: number ): number
```

Parameters:

- x: `number`
  >the horizontal coordinate in pixels

- y: `number`
  >the vertical coordinate in pixels


Return type: `number`

Example:

```typescript
let color = myImage.getPixel(160, 120);
```

---

### getThumbnail() {: #infinity.image.getThumbnail_function .doc-function}

Retrieves a copy the thumbnail possibly attached to the image.

Signature:
```typescript
getThumbnail( dest: infinity.image ): boolean
```

Parameters:

- dest: `infinity.image`
  >an `infinity.image` object instance to hold the output


Return type: `boolean`

Example:

```typescript
myImage.getThumbnail(myThumbObj);
```

---

### invert() {: #infinity.image.invert_function .doc-function}

Inverts the colors of the given image.

Signature:
```typescript
invert(): boolean
```

Return type: `boolean`

Example:

```typescript
myImage.invert();
```

---

### isGrayscale() {: #infinity.image.isGrayscale_function .doc-function}

Returns TRUE if the image is a 8-bit bitmap with a greyscale palette, FALSE otherwise.

Signature:
```typescript
isGrayscale(): boolean
```

Return type: `boolean`

Example:

```typescript
if(myImage.isGrayscale()){
  //...
}
```

---

### isTransparent() {: #infinity.image.isTransparent_function .doc-function}

Returns whether transparency is enabled.

Signature:
```typescript
isTransparent(): boolean
```

Return type: `boolean`

Example:

```typescript
if(myImage.isTransparent()){
  //...
}
```

---

### isValid() {: #infinity.image.isValid_function .doc-function}

Returns TRUE if the image is allocated, FALSE otherwise.

Signature:
```typescript
isValid(): boolean
```

Return type: `boolean`

Example:

```typescript
if(myImage.isValid()){
  //...
}
```

---

### loadFromFile() {: #infinity.image.loadFromFile_function .doc-function}

Loads the image from the specified file into the object instance.

Signature:
```typescript
loadFromFile( fileName: string, flag?: number ): boolean
```

Parameters:

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which has to be loaded

- flag: [`infinity.image.flag`](#infinity.image.flag_enum), optional
  >one of the [`infinity.image.flag`](#infinity.image.flag_enum) enums


Return type: `boolean`

Example:

```typescript
myImage.loadFromFile('image.bmp');
```

---

### loadFromStream() {: #infinity.image.loadFromStream_function .doc-function}

Loads the image from the specified stream into the object instance.

Signature:
```typescript
loadFromStream( stream: infinity.stream, flag?: number ): boolean
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >stream object to load from. See [infinity.stream](infinity.stream.md)

- flag: [`infinity.image.flag`](#infinity.image.flag_enum), optional
  >one of the [`infinity.image.flag`](#infinity.image.flag_enum) enums


Return type: `boolean`

Example:

```typescript
myImage.loadFromStream(stream);
```

---

### pasteSubImage() {: #infinity.image.pasteSubImage_function .doc-function}

Alpha blends or combines a sub part image with the current image.

Signature:
```typescript
pasteSubImage( src: infinity.image, left: number, top: number, alpha?: number ): boolean
```

Parameters:

- src: `infinity.image`
  >Source subimage

- left: `number`
  >Specifies the left position of the sub image.

- top: `number`
  >Specifies the top position of the sub image.

- alpha: `number`, optional
  >Alpha blend factor. The source and destination images are alpha blended if alpha = 0..255. If alpha > 255, then the source image is combined to the destination image.



Return type: `boolean`

Example:

```typescript
myImage.pasteSubImage(myImage2, 20, 20);
```

---

### rescale() {: #infinity.image.rescale_function .doc-function}

Rescales the image to a new width / height.

Signature:
```typescript
rescale( width: number, height: number, filter: infinity.image.filter, dest?: infinity.image ): boolean
```

Parameters:

- width: `number`
  >New image width

- height: `number`
  >New image height

- filter: [`infinity.image.filter`](#infinity.image.filter_enum)
  >The filter parameter specifies which resampling filter should be used according to [`infinity.image.filter`](#infinity.image.filter_enum).


- dest: `infinity.image`, optional
  >an `infinity.image` object instance to hold the output


Return type: `boolean`

Example:

```typescript
myImage.rescale(160, 120, infinity.image.filter.lanczos3);
```

---

### rotate() {: #infinity.image.rotate_function .doc-function}

Rotates the image.

Signature:
```typescript
rotate( angle: number ): boolean
```

Parameters:

- angle: `number`
  >Image rotation angle, in degree


Return type: `boolean`

Example:

```typescript
myImage.rotate(90);
```

---

### rotateEx() {: #infinity.image.rotateEx_function .doc-function}

Image translation and rotation using B-Splines.

Signature:
```typescript
rotateEx( angle: number, xShift: number, yShift: number, xOrigin: number, yOrigin: number, useMask: boolean ): boolean
```

Parameters:

- angle: `number`
  >Image rotation angle, in degree

- xShift: `number`
  >Image horizontal shift

- yShift: `number`
  >Image vertical shift

- xOrigin: `number`
  >Origin of the x-axis

- yOrigin: `number`
  >Origin of the y-axis

- useMask: `boolean`
  >Whether or not to mask the image. Image mirroring is applied when use_mask is set to FALSE



Return type: `boolean`

Example:

```typescript
myImage.rotateEx(127, 0, -80, 160, 120, true);
```

---

### saveToFile() {: #infinity.image.saveToFile_function .doc-function}

Saves the image from the object instance to the specified file.

Signature:
```typescript
saveToFile( fileName: string, flag?: number ): boolean
```

Parameters:

- fileName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the file which should contain the image output

- flag: [`infinity.image.flag`](#infinity.image.flag_enum), optional
  >one of the [`infinity.image.flag`](#infinity.image.flag_enum) enums


Return type: `boolean`

Example:

```typescript
myImage.saveToFile('image.bmp');
```

---

### saveToStream() {: #infinity.image.saveToStream_function .doc-function}

Saves the image from the object instance to the specified stream.

Signature:
```typescript
saveToStream( stream: infinity.stream, extension: string, flag?: number ): boolean
```

Parameters:

- stream: [`infinity.stream`](infinity.stream.md)
  >stream object to save to. See [infinity.stream](infinity.stream.md)

- extension: `string`
  >the file extension to assign

- flag: [`infinity.image.flag`](#infinity.image.flag_enum), optional
  >one of the [`infinity.image.flag`](#infinity.image.flag_enum) enums


Return type: `boolean`

Example:

```typescript
myImage.saveToStream(stream, extension);
```

---

### setChannel() {: #infinity.image.setChannel_function .doc-function}

Inserts a 8-bit dib into a 24- or 32-bit image.

Signature:
```typescript
setChannel( src: infinity.image, channel: infinity.image.channel ): boolean
```

Parameters:

- src: `infinity.image`
  >Input 8-bit image to insert

- channel: [`infinity.image.channel`](#infinity.image.channel_enum)
  >Color channel to replace


Return type: `boolean`

Example:

```typescript
myImage.setChannel(myImage2, infinity.image.channel.green);
```

---

### setData() {: #infinity.image.setData_function .doc-function}

Applies data from an pixel array to the image.

Signature:
```typescript
setData( data: infinity.image.pixelArray ): void
```

Parameters:

- data: [`infinity.image.pixelArray`](#infinity.image.pixelArray_interface)
  >the pixel array to apply


Example:

```typescript
myImage.setData(pixelArray);
```

---

### setPixel() {: #infinity.image.setPixel_function .doc-function}

Sets the pixel color of an image at position (x, y).

Signature:
```typescript
setPixel( x: number, y: number, color: number ): void
```

Parameters:

- x: `number`
  >Pixel position in horizontal direction

- y: `number`
  >Pixel position in vertical direction

- color: `number`
  >Pixel color


Example:

```typescript
myImage.setPixel(160, 120, 190904);
```

---

### setSize() {: #infinity.image.setSize_function .doc-function}

Sets the width, height and the bits per pixel value of the image.

Signature:
```typescript
setSize( type: infinity.image.type, width: number, height: number, bpp: number ): boolean
```

Parameters:

- type: [`infinity.image.type`](#infinity.image.type_enum)
  >image type according to [infinity.image.type](#infinity.image.type_enum)

- width: `number`
  >new image width in pixels

- height: `number`
  >new image height in pixels

- bpp: `number`
  >bits per pixel


Return type: `boolean`

Example:

```typescript
myImage.setSize(infinity.image.type.bitmap, 640, 480, 32);
```

---

### setThumbnail() {: #infinity.image.setThumbnail_function .doc-function}

Attaches a thumbnail to the image.

Signature:
```typescript
setThumbnail( src: infinity.image ): boolean
```

Parameters:

- src: `infinity.image`
  >an `infinity.image` object instance to attach the thumbnail from


Return type: `boolean`

Example:

```typescript
myImage.setThumbnail(myImage2);
```

---

### splitChannels() {: #infinity.image.splitChannels_function .doc-function}

Splits a 24-bit RGB image into 3 greyscale images corresponding to the red, green and blue channels.

Signature:
```typescript
splitChannels( red: infinity.image, green: infinity.image, blue: infinity.image ): boolean
```

Parameters:

- red: `infinity.image`
  >an `infinity.image` object instance to hold the output red channel

- green: `infinity.image`
  >an `infinity.image` object instance to hold the output green channel

- blue: `infinity.image`
  >an `infinity.image` object instance to hold the output blue channel


Return type: `boolean`

Example:

```typescript
myImage.splitChannels(myImage2Red, myImage2Green, myImage2Blue);
```

---

### threshold() {: #infinity.image.threshold_function .doc-function}

Converts the bitmap to 1 bit using a threshold.

Signature:
```typescript
threshold( value: number ): boolean
```

Parameters:

- value: `number`
  >Threshold value in [0..255]


Return type: `boolean`

Example:

```typescript
myImage.threshold(127);
```

---

### thumbnail() {: #infinity.image.thumbnail_function .doc-function}

Creates a thumbnail out of the picture inside the object instance.

Signature:
```typescript
thumbnail( width: number, height: number, dest: infinity.image ): void
```

Parameters:

- width: `number`
  >thumbnail width

- height: `number`
  >thumbnail height

- dest: `infinity.image`
  >an `infinity.image` object instance to hold the output


Example:

```typescript
myImage.thumbnail(30, 20, myThumbObj);
```

---

### toneMapping() {: #infinity.image.toneMapping_function .doc-function}

Converts a High Dynamic Range image to an image with a more limited dynamic range.

Signature:
```typescript
toneMapping( tmo: infinity.image.tmo, firstParam: number, secondParam: number ): boolean
```

Parameters:

- tmo: [`infinity.image.tmo`](#infinity.image.tmo_enum)
  >Tone mapping operator according to [`infinity.image.tmo`](#infinity.image.tmo_enum)

- firstParam: `number`
  >First tone mapping algorithm parameter (algorithm dependant)

- secondParam: `number`
  >Second tone mapping algorithm parameter (algorithm dependant)


Return type: `boolean`

Example:

```typescript
myImage.toneMapping(infinity.image.tmo.drago03, firstParam, secondParam);
```



---

<div class="doc-heading">Interfaces</div>

---

## pixelArray {: #infinity.image.pixelArray_interface .doc-interface}

Extends: `Array<Array<number>>`

An multidimensional array of numbers.



---

<div class="doc-heading">Enums</div>

---

## infinity.image.channel {: #infinity.image.channel_enum .doc-enum}

Values:

- rgb: `0`
  >Use red, green and blue channels

- red: `1`
  >Use red channel

- green: `2`
  >Use green channel

- blue: `3`
  >Use blue channel

- alpha: `4`
  >Use alpha channel

- black: `5`
  >Use black channel

- real: `6`
  >Complex images: use real part

- imag: `7`
  >Complex images: use imaginary part

- mag: `8`
  >Complex images: use magnitude

- phase: `9`
  >Complex images: use phase

Example:

```typescript
infinity.loadModule('infinity.image');
let channel = infinity.image.channel.rgb;
```



---

## infinity.image.color {: #infinity.image.color_enum .doc-enum}

Values:

- minIsWhite: `0`
  >min value is white

- minIsBlack: `1`
  >min value is black

- rgb: `2`
  >RGB color model

- palette: `3`
  >color map indexed

- rgbAlpha: `4`
  >RGB color model with alpha channel

- cmyk: `5`
  >CMYK color model

Example:

```typescript
infinity.loadModule('infinity.image');
let color = infinity.image.color.minIsWhite;
```



---

## infinity.image.dither {: #infinity.image.dither_enum .doc-enum}

Values:

- fs: `0`
  >Floyd and Steinberg error diffusion

- bayer4x4: `1`
  >Bayer ordered dispersed dot dithering (order 2 dithering matrix)

- bayer8x8: `2`
  >Bayer ordered dispersed dot dithering (order 3 dithering matrix)

- cluster6x6: `3`
  >Ordered clustered dot dithering (order 3 - 6x6 matrix)

- cluster8x8: `4`
  >Ordered clustered dot dithering (order 4 - 8x8 matrix)

- cluster16x16: `5`
  >Ordered clustered dot dithering (order 8 - 16x16 matrix)

- bayer16x16: `6`
  >Bayer ordered dispersed dot dithering (order 4 dithering matrix)

Example:

```typescript
infinity.loadModule('infinity.image');
let dither = infinity.image.dither.fs;
```



---

## infinity.image.filter {: #infinity.image.filter_enum .doc-enum}

Values:

- box: `0`
  >Box, pulse, Fourier window, 1st order (constant) b-spline

- bicubic: `1`
  >Mitchell and Netravali's two-param cubic filter

- bilinear: `2`
  >Bilinear filter

- bspline: `3`
  >4th order (cubic) b-spline

- catmullrom: `4`
  >Catmull-Rom spline, Overhauser spline

- lanczos3: `5`
  >Lanczos3 filter

Example:

```typescript
infinity.loadModule('infinity.image');
let filter = infinity.image.filter.box;
```

---

## infinity.image.flag {: #infinity.image.flag_enum .doc-enum}

Values:

- fif_load_nopixels = 0x8000
  >loading: load the image header only

- bmp_default = 0
  >

- bmp_save_rle = 1
  >

- cut_default = 0
  >

- dds_default = 0
  >

- exr_default = 0
  >save data as half with piz-based wavelet compression

- exr_float = 0x0001
  >save data as float instead of as half

- exr_none = 0x0002
  >save with no compression

- exr_zip = 0x0004
  >save with zlib compression, in blocks of 16 scan lines

- exr_piz = 0x0008
  >save with piz-based wavelet compression

- exr_pxr24 = 0x0010
  >save with lossy 24-bit float compression

- exr_b44 = 0x0020
  >save with lossy 44% float compression - goes to 22% when combined with EXR_LC

- exr_lc = 0x0040
  >save images with one luminance and two chroma channels, rather than as RGB (lossy compression)

- faxg3_default = 0
  >

- gif_default = 0
  >

- gif_load256 = 1
  >Load the image as a 256 color image with ununsed palette entries, if it's 16 or 2 color

- gif_playback = 2
  >'Play' the GIF to generate each frame (as 32bpp) instead of returning raw frame data when loading

- hdr_default = 0
  >

- ico_default = 0
  >

- ico_makealpha = 1
  >convert to 32bpp and create an alpha channel from the AND-mask when loading

- iff_default = 0
  >

- j2k_default = 0
  >save with a 16:1 rate

- jp2_default = 0
  >save with a 16:1 rate

- jpeg_default = 0
  >loading (see JPEG_FAST); saving (see JPEG_QUALITYGOOD|JPEG_SUBSAMPLING_420)

- jpeg_fast = 1
  >load the file as fast as possible, sacrificing some quality

- jpeg_accurate = 2
  >load the file with the best quality, sacrificing some speed

- jpeg_cmyk = 0x0004
  >load separated CMYK "as is" (use | to combine with other flags)

- jpeg_exifrotate = 0x0008
  >load and rotate according to Exif 'Orientation' tag if available

- jpeg_greyscale = 0x0010
  >load and convert to a 8-bit greyscale image

- jpeg_qualitysuperb = 0x0080
  >save with superb quality (100:1)

- jpeg_qualitygood = 0x0100
  >save with good quality (75:1)

- jpeg_qualitynormal = 0x0200
  >save with normal quality (50:1)

- jpeg_qualityaverage = 0x0400
  >save with average quality (25:1)

- jpeg_qualitybad = 0x0800
  >save with bad quality (10:1)

- jpeg_progressive = 0x2000
  >save as a progressive-JPEG (use | to combine with other save flags)

- jpeg_subsampling_411 = 0x1000
  >save with high 4x1 chroma subsampling (4:1:1)

- jpeg_subsampling_420 = 0x4000
  >save with medium 2x2 medium chroma subsampling (4:2:0) - default value

- jpeg_subsampling_422 = 0x8000
  >save with low 2x1 chroma subsampling (4:2:2)

- jpeg_subsampling_444 = 0x10000
  >save with no chroma subsampling (4:4:4)

- jpeg_optimize = 0x20000
  >on saving, compute optimal Huffman coding tables (can reduce a few percent of file size)

- jpeg_baseline = 0x40000
  >save basic JPEG, without metadata or any markers

- koala_default = 0
  >

- lbm_default = 0
  >

- mng_default = 0
  >

- pcd_default = 0
  >

- pcd_base = 1
  >load the bitmap sized 768 x 512

- pcd_basediv4 = 2
  >load the bitmap sized 384 x 256

- pcd_basediv16 = 3
  >load the bitmap sized 192 x 128

- pcx_default = 0
  >

- pfm_default = 0
  >

- pict_default = 0
  >

- png_default = 0
  >

- png_ignoregamma = 1
  >loading: avoid gamma correction

- png_z_best_speed = 0x0001
  >save using ZLib level 1 compression flag (default value is 6)

- png_z_default_compression = 0x0006
  >save using ZLib level 6 compression flag (default recommended value)

- png_z_best_compression = 0x0009
  >save using ZLib level 9 compression flag (default value is 6)

- png_z_no_compression = 0x0100
  >save without ZLib compression

- png_interlaced = 0x0200
  >save using Adam7 interlacing (use | to combine with other save flags)

- pnm_default = 0
  >

- pnm_save_raw = 0
  >if set the writer saves in RAW format (i.e. P4, P5 or P6)

- pnm_save_ascii = 1
  >if set the writer saves in ASCII format (i.e. P1, P2 or P3)

- psd_default = 0
  >

- psd_cmyk = 1
  >reads tags for separated CMYK (default is conversion to RGB)

- psd_lab = 2
  >reads tags for CIELab (default is conversion to RGB)

- psd_none = 0x0100
  >save without any compression

- psd_rle = 0x0200
  >save using RLE compression

- psd_psb = 0x2000
  >save using Adobe Large Document Format (use | to combine with other save flags)

- ras_default = 0
  >

- raw_default = 0
  >load the file as linear RGB 48-bit

- raw_preview = 1
  >try to load the embedded JPEG preview with included Exif Data or default to RGB 24-bit

- raw_display = 2
  >load the file as RGB 24-bit

- raw_halfsize = 4
  >output a half-size color image

- raw_unprocessed = 8
  >output a FIT_UINT16 raw Bayer image

- sgi_default = 0
  >

- targa_default = 0
  >

- targa_load_rgb888 = 1
  >if set the loader converts RGB555 and ARGB8888 -> RGB888.

- targa_save_rle = 2
  >if set, the writer saves with RLE compression

- tiff_default = 0
  >

- tiff_cmyk = 0x0001
  >reads/stores tags for separated CMYK (use | to combine with compression flags)

- tiff_packbits = 0x0100
  >save using PACKBITS compression

- tiff_deflate = 0x0200
  >save using DEFLATE compression

- tiff_adobe_deflate = 0x0400
  >save using ADOBE DEFLATE compression

- tiff_none = 0x0800
  >save without any compression

- tiff_ccittfax3 = 0x1000
  >save using CCITT Group 3 fax encoding

- tiff_ccittfax4 = 0x2000
  >save using CCITT Group 4 fax encoding

- tiff_lzw = 0x4000
  >save using LZW compression

- tiff_jpeg = 0x8000
  >save using JPEG compression

- tiff_logluv = 0x10000
  >save using LogLuv compression

- wbmp_default = 0
  >

- xbm_default = 0
  >

- xpm_default = 0
  >

- webp_default = 0
  >save with good quality (75:1)

- webp_lossless = 0x100
  >save in lossless mode

- jxr_default = 0
  >save with quality 80 and no chroma subsampling (4:4:4)

- jxr_lossless = 0x0064
  >save lossless

- jxr_progressive = 0x2000
  >save as a progressive-JXR (use | to combine with other save flags)

Example:

```typescript
infinity.loadModule('infinity.image');
let flag = infinity.image.flag.bmp_default;
```



---

## infinity.image.quantize {: #infinity.image.quantize_enum .doc-enum}

Values:

- wuQuant: `0`
  >Xiaolin Wu color quantization algorithm

- nnQuant: `1`
  >NeuQuant neural-net quantization algorithm by Anthony Dekker

- lfpQuant: `2`
  >Lossless Fast Pseudo-Quantization Algorithm

Example:

```typescript
infinity.loadModule('infinity.image');
let quantize = infinity.image.quantize.wuQuant;
```



---

## infinity.image.tmo {: #infinity.image.tmo_enum .doc-enum}

Values:

- drago03: `0`
  >Adaptive logarithmic mapping (F. Drago, 2003)

- reinhard05: `1`
  >Dynamic range reduction inspired by photoreceptor physiology (E. Reinhard, 2005)

- fattal02: `2`
  >Gradient domain high dynamic range compression (R. Fattal, 2002)

Example:

```typescript
infinity.loadModule('infinity.image');
let tmo = infinity.image.tmo.drago03;
```



---

## infinity.image.type {: #infinity.image.type_enum .doc-enum}

Values:

- unknown: `0`
  >unknown type

- bitmap: `1`
  >standard image : 1-, 4-, 8-, 16-, 24-, 32-bit

- uint16: `2`
  >array of unsigned short : unsigned 16-bit

- int16: `3`
  >array of short : signed 16-bit

- uint32: `4`
  >array of unsigned long : unsigned 32-bit

- int32: `5`
  >array of long : signed 32-bit

- float: `6`
  >array of float : 32-bit IEEE floating point

- double: `7`
  >array of double : 64-bit IEEE floating point

- complex: `8`
  >array of FICOMPLEX : 2 x 64-bit IEEE floating point

- rgb16: `9`
  >48-bit RGB image : 3 x 16-bit

- rgba16: `10`
  >64-bit RGBA image : 4 x 16-bit

- rgbf: `11`
  >96-bit RGB float image : 3 x 32-bit IEEE floating point

- rgbaf: `12`
  >128-bit RGBA float image : 4 x 32-bit IEEE floating point

Example:

```typescript
infinity.loadModule('infinity.image');
let type = infinity.image.type.bitmap;
```





