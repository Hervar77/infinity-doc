infinity.loadModule( 'infinity.fileSystem' );

infinity.include( 'dtsParser.js' );

let dtsFile = infinity.fileName.extractDirectory( infinity.current.run ) + '/resources/infinity.d.ts';
let jsonFile = infinity.fileName.extractDirectory( infinity.current.root ) + '/dump.json';
let parser = new dtsParser.Parser( infinity.file.readString( dtsFile ) );

console.info( 'Parsing ' + dtsFile );
let items = parser.getItems();

console.info( items.length + ' root items found, dumping to ' + jsonFile );

infinity.file.writeString( jsonFile, JSON.stringify( items, undefined, 2 ), infinity.encoding.utf8 );
