// services/user.ts
infinity.loadModule( 'infinity.database' );
infinity.loadModule( 'infinity.crypto' );
infinity.loadModule( 'infinity.fileSystem' );
infinity.loadModule( 'infinity.memory' );
infinity.loadModule( 'infinity.session' );

namespace user {

    export function login(username: string, password: string): any {
        // Check if username or password are empty:
        if ( !username.length || !password.length ) {
            throw 'Invalid username or password';
        }

        // If there already is a session, clear it:
        let session: any = infinity.session.get();

        if ( session ) {
            console.info( 'Logging out user "' + session.username + '"' );
            infinity.session.clear();
        }

        // Look for username in database and verify the password:
        let database = new infinity.database();

        try {
            database.specificOptions[ 'Direct' ] = true;
            database.specificOptions[ 'UseUnicode' ] = true;
            database.specificOptions[ 'ForceCreateDatabase' ] = true;
            let databaseFile = infinity.fileName.extractDirectory( infinity.current.root ) + 'database.db';
            database.connect( infinity.database.provider.sqlite, '', 0, databaseFile );

            // Look for username in database:
            database.sql = 'SELECT id, username, password FROM users WHERE username = :username';
            database.setParamValue( 'username', username );

            if ( !database.execute() ) {
                // Database error (just deny authorization):
                throw 'Invalid username or password';
            }

            // Fetch database result:
            let userId = database.result( 'id' );
            username = database.result( 'username' );
            let passwordHash = database.result( 'password' );

            // Close database connection:
            database.disconnect();

            if ( userId && passwordHash && infinity.bcrypt.verify( password, passwordHash ) ) {
                // The username and password are correct, create a new session:
                let sessionData = {
                    id: infinity.md5.generateUniqueId(),
                    userId: userId,
                    username: username
                };

                // Create a new session and store the session data in it:
                let sessionId = infinity.session.start( sessionData );

                console.info( 'User "' + username + '" has logged in.' );

                // Return session id and user info:
                return {
                    sessionId: sessionId,
                    userId: userId,
                    username: username
                };
            } else {
                // Invalid password:
                throw 'Invalid username or password';
            }
        } finally {
            database.free();
        }
    }

    export function getUsername( id: number ): string {
        if ( !infinity.session.get() ) {
            throw 'Unauthorized';
        }

        if ( !id ) {
            throw 'Invalid id';
        }

        // Check the memory cache for the username:
        let username = infinity.memory.getString( 'usernames', 'id:' + id );

        if ( username !== undefined ) {
            console.info( 'got username for id ' + id + ' from cache: ' + username );
        } else {
            // Fetch the username from database and cache it:
            let database = new infinity.database();

            try {
                database.specificOptions[ 'Direct' ] = true;
                database.specificOptions[ 'UseUnicode' ] = true;
                database.specificOptions[ 'ForceCreateDatabase' ] = true;
                let databaseFile = infinity.fileName.extractDirectory( infinity.current.root ) + 'database.db';
                database.connect( infinity.database.provider.sqlite, '', 0, databaseFile );

                database.sql = 'SELECT username FROM users WHERE id = :id';
                database.setParamValue( 'id', id );

                if ( database.execute() ) {
                    username = database.result( 'username' );
                }

                database.disconnect();
            } finally {
                database.free();
            }

            if ( username ) {
              console.info( 'got username for id ' + id + ' from database, caching: ' + username );

              // Store the username in the memory cache:
              infinity.memory.putString( 'usernames', 'id:' + id, username );
            } else {
              console.info( 'username for id ' + id + ' not found in database' );
            }
        }

        return username;
    }

}
