infinity.loadModule('infinity.fileSystem');

infinity.include( 'DocSync.js' );

let sync = new DocSync();
sync.dtsFile = infinity.current.run + '../resources/infinity.d.ts';
sync.mkdocsFolder = infinity.current.root + '../../mkdocs/api/';

// Handle command line arguments:
let args = infinity.getArgs();

if ( args.length ) {
    for ( let arg of args ) {
        if ( arg == 'overwrite' ) {
            sync.overwriteDocumentation = true; // Warning: this will overwrite all documentation files!
        } else if ( arg == 'add' ) {
            sync.createDocumentation = true; // This will add missing documentation files.
        }
    }
}

// Sync documentation with infinity.d.ts file:
sync.execute();
