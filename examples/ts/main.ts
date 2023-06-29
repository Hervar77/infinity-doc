// main.ts

// Load the HTTP and database runtime library modules:
infinity.loadModule( 'infinity.http' );
infinity.loadModule( 'infinity.crypto' );
infinity.loadModule( 'infinity.database' );
infinity.loadModule( 'infinity.fileSystem' );


// Setup database connection:
let database = new infinity.database();

try {
  database.specificOptions[ 'Direct' ] = true;
  database.specificOptions[ 'UseUnicode' ] = true;
  database.specificOptions[ 'ForceCreateDatabase' ] = true;
  let databaseFile = infinity.fileName.extractDirectory( infinity.current.root ) + 'database.db';
  database.connect( infinity.database.provider.sqlite, '', 0, databaseFile );

  console.info( 'Database: ' + databaseFile );

  // Create users table if it doesn't exist:
  database.execute( 'CREATE TABLE IF NOT EXISTS users (' +
    'id INTEGER PRIMARY KEY, ' +
    'username TEXT NOT NULL UNIQUE, ' +
    'password TEXT NOT NULL' +
    ')'
  );

  // Create admin user if it doesn't exist:
  database.execute( 'INSERT OR IGNORE INTO users (username, password) VALUES("admin", "' + infinity.bcrypt.hash( 'Infinity-1' ) + '")' );

  // Close database connection:
  database.disconnect();
} finally {
  database.free();
}

// Create an HTTP server listening for HTTPS requests on port 443:
let server = new infinity.http.server( true, false, true, true, 443 );
server.registerHandler( infinity.http.server.handler.staticFile, '/', '../public/' );
server.registerHandler( infinity.http.server.handler.rest, '/api/v1/rest' );
server.registerHandler( infinity.http.server.handler.jsonRpc, '/api/v1/json' );
server.registerHandler( infinity.http.server.handler.api, '/api/v1/spec' );

// Register services and functions:
server.registerService( 'system', 'system', 'services/system.js', [
    { name: 'shutdown' }
] );

// Register the user service and login function:
server.registerService( 'user', 'user', 'services/user.js', [
    { name: 'login', params: [ 'username: string', 'password: string' ], result: 'object' },
    { name: 'getUsername', params: [ 'id: number' ], result: 'string' }
] );

console.info( 'Starting server...' );

// Start listening:
server.start();

console.info( 'Server started (terminate with CTRL+C).' );

// Run until terminated, check for termination four times a second:
while ( !infinity.terminated ) {
    infinity.sleep( 250 );
}

console.info( 'Stopping server...' );

// Stop the server and shut down the request handlers:
server.stop();

console.info( 'Done.' );
