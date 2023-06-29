# Server Example

In this section, we'll show you how to write your own server application using the INFINITY.JS engine. We'll start with a simple example and gradually extend it and introduce some of the runtime library functions and classes along the way.

To follow along, you should have set up your development environment with a fresh project as described in the [Getting Started](../getting-started/index.md) guide.

The complete source code of the finished server example can be downloaded [here](assets/server-example.zip).
We've also prepared some example requests for the HTTP/API tools [Insomnia](https://insomnia.rest/){:target="_blank"} and [Postman](https://www.postman.com/){:target="_blank"} that you can download here: <a href="assets/server-example-insomnia.json" download>for Insomnia</a> and <a href="assets/server-example.postman_collection.json" download>for Postman</a>.




## Server and Static Content

Your server application will consist of a main program, which will basically just listen for incoming requests and start worker threads as needed, to process them. The INFINITY.JS runtime library comes with an [HTTP server](../api/infinity.http.md#infinity.http.server_class) object that already provides that functionality. Since this server class comes from the `infinity.http` module, we'll have to load that module and can then create the server object instance. So, create a `main.ts` file with the following code:

```typescript
// main.ts

// Load the infinity.http runtime library module:
infinity.loadModule( 'infinity.http' );

// Create an HTTP server listening for HTTPS requests on port 443:
let server = new infinity.http.server( true, false, true, true, 443 );
// Register a request handler that delivers static files:
server.registerHandler( infinity.http.server.handler.staticFile, '/', '../public/' );

console.info( 'Starting server...' );

// Start listening:
server.start();

console.info( 'Server started (terminate with CTRL+C).' );

// Run until terminated:
// The main program doesn't have to do anything.
// The server object will handle all incoming requests.
while ( !infinity.terminated ) {
    // The main program can just sleep. Wake up every quarter of a second to check for termination:
    infinity.sleep( 250 );
}

// The main loop is exited when the program has been told to terminate.

console.info( 'Stopping server...' );

// Stop the server and shut down the request handlers:
server.stop();

console.info( 'Done.' );
```

This creates an HTTP server object that listens on port 443 using SSL for secure connections. The first argument to the `infinity.http.server()` constructor activates SSL, the second disables certificate verification (since we're using a self-signed certificate). The third argument activates cross-origin requests (using CORS) and the fourth is the port to listen on. We're using the default HTTPS port 443 in this example, but feel free to use a different port, e.g. 8443.

To exchange the SSL certificate, check out the `infinity/bin/resources` folder - you will find the `.crt` and `.key` files there. You can exchange them with your own certificate, of course.

After creating an HTTP server instance, we're registering a handler with the `registerHandler()` method. The first argument is the type of request handler. In this case, we're using a static file handler, which will simply deliver files from a specified folder. The second parameter is the URL path that this handler should react on. We're using `/` so that this handler will answer to all requests that our server receives. The third parameter is the folder from which the handler should deliver files. We're using `../public/`, so the handler will look for files in a folder called `public` next to the `js` folder that contains our compiled main program.

So, create the `public` folder, and an `index.html` (with any content you like) inside of it like this:

```
+ infinity
  + bin
    + example-1
      + js
      + ts
        - main.ts
      + public
        - index.html
```

Now, make sure that your typescript source code is being compiled (press `ctrl+shift+b` if unsure and select "tsc: watch" for your example-1 project folder). Then start your program by pressing `F5`. You should see the console output, ending in "Server started (terminate with CTRL+C)".

Now head over to your web browser and open `https://localhost` (add the port if you didn't use the default HTTPS port in your `main.ts`). You should now see the contents of your `index.html` file from the `public` folder.

Shut down your program by clicking the stop button in the debugger toolbar, or by clicking inside the terminal with the console output and pressing `ctrl+c`.

Great - you've got a simple web server application that can deliver static web pages. You probably know how to do this already using other products, so let's continue on and add some functionality to our server.


## Services and APIs

Let's add a service to our server, along with a simple REST API. INFINITY.JS's HTTP server already brings a couple of request handlers and in addition to the static file handler we've used, there's a REST API handler that you can use to add a service with REST APIs to your server. You register the server much the same as the static file handler, but you'll have to register your services, too, so that the REST API handler will know which functions to provide as an API.

```typescript
// [...]

let server = new infinity.http.server( true, false, true, true, 443 );
server.registerHandler( infinity.http.server.handler.staticFile, '/', '../public/' );

// Register a REST API handler:
server.registerHandler( infinity.http.server.handler.rest, '/api/v1/rest' );

// Register services and functions:
server.registerService( 'system', 'system', 'services/system.js', [
    { name: 'shutdown' }
] );

// [...]
```

We're using the `registerHandler()` method to register a `infinity.http.server.handler.rest` type handler for the URL path `/api/v1/rest`. Even though we've already added the static file handler to `/` that should receive requests for all URL paths, our REST handler will take precedence for URLs starting with `/api/v1/rest` because it's a more specialized match. The INFINITY.JS runtime will take care of that, so you don't have to worry about the order in which you register handlers on URL paths.

> Note: You can choose any URL path you like. The example uses `/api/v1/rest` so we could add another REST API handler later if we need to make breaking API changes (e.g. `/api/v2/rest`) and it also allows us to add different APIs (e.g. `/api/v1/json`).

We then register a service on our HTTP server, using the `registerService()` function. The first argument is the service name, the second one is the namespace in which the REST handler will look for exported functions, and the third argument is a path to the javascript file that contains the service's code. This path is relative to the main program's folder and since INFINITY.JS executes javascript files, we'll have to use the `.js` extension and not the `.ts` extension of our source file.

So, we'll have to create a folder called `services` in our `ts` folder and create a `system.ts` file in it:

```
+ infinity
  + bin
    + example-1
      + js
      + ts
        + services
          - system.ts
        - main.ts
      + public
        - index.html
```

Copy the following code into the `services/system.ts` file:

```typescript
// system.ts

// Declare the "system" namespace for the "system" service:
namespace system {

    // Export the "shutdown" function within the "system" service namespace:
    export function shutdown() {
        // Ask the main program to terminate:
        infinity.terminate();
    }

}
```

We define a namespace called `system`, since that is the namespace we've used in the `registerService()` function in the `main.ts`. Inside that namespace we export a function called `shutdown()` that just calls `infinity.terminate()`. This will ask the main program to terminate, by setting it's `infinity.terminated` variable to `true`. Since we're checking that variable four times a second in our `main.ts`, the `while` loop will exit and our program will terminate.

You can call the API from your web browser by opening the URL `https://localhost/api/v1/rest/system/shutdown`. You should then see your server terminating in the console output.

You can also use tools like [Insomnia](https://insomnia.rest/){:target="_blank"} or [Postman](https://www.postman.com/){:target="_blank"} to send HTTP requests, of course - especially for `POST`, `DELETE` requests, etc. You can download a set of requests for the Insomnia tool <a href="assets/server-example-insomnia.json" download>here</a> and for Postman <a href="assets/server-example.postman_collection.json" download>here</a>. You can import these into the tools and just run the `system.shutdown` request to test your server and service. These packages also contain some additional requests for the code we're going to add in the following sections.

So to recap: you can register a REST API handler to your HTTP server and then register services and the INFINITY.JS engine will take care of mapping the HTTP requests to your typescript/javascript scripts and functions.

By the way - you're not limited to REST. INFINITY.JS can provide [JSON-RPC](https://www.jsonrpc.org/){:target="_blank"} APIs, too:

```typescript
// [...]

server.registerHandler( infinity.http.server.handler.rest, '/api/v1/rest' );

// Register a JSON-RPC API handler:
server.registerHandler( infinity.http.server.handler.jsonRpc, '/api/v1/json' );

// [...]
```

You don't have to change your service - INFINITY.JS will process JSON-RPC requests and map the service, function and arguments for you. Go ahead and send an HTTP post request with a `Content-Type: application/json` header to `https://localhost/api/v1/json` with the following body:

```json
{
	"jsonrpc": "2.0",
	"method": "system.shutdown",
	"params": []
}
```

The REST and JSON-RPC API formats are handled natively by INFINITY.JS. There's another nice feature you might find useful: INFINITY.JS provides a request handler that can return a list of all registered services (with their functions) in the [JSON-WSP](https://en.wikipedia.org/wiki/JSON-WSP) (JSON Web Service Protocol) format:

```typescript
// [...]

server.registerHandler( infinity.http.server.handler.rest, '/api/v1/rest' );
server.registerHandler( infinity.http.server.handler.jsonRpc, '/api/v1/json' );

// Register an API info handler:
server.registerHandler( infinity.http.server.handler.api, '/api/v1/spec' );

// [...]
```

If you send an HTTP get request to `https://localhost/api/v1/spec`, then you will get a JSON string describing your `system` service with its `shutdown` method. You might find this useful to generate an overview of your API.


## Database

Since you probably don't want everyone to be able to shutdown your server using the API, let's add a list of users so you can limit the shutdown API call to authorized users, only. For productive use, you'd probably use a dedicated database server, but for this example, we'll be using [SQLite](https://www.sqlite.org){:target="_blank"} as a single file database, so you won't have to set up a separate database server.

The INFINITY.JS runtime library already supports some database connection providers, so let's extend our `main.ts` to use an SQLite database file and create a database table for our users list:

```typescript
// main.ts

// Load the HTTP and database runtime library modules:
infinity.loadModule( 'infinity.http' );
infinity.loadModule( 'infinity.crypto' );
infinity.loadModule( 'infinity.database' );
infinity.loadModule( 'infinity.fileSystem' );


// Set up database connection:
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
```

We're loading three more runtime library modules: `infinity.crypto` for the bcrypt hash function that we're going to use as a password hash, `infinity.database` for the database functions and `infinity.fileSytem` for a file path utility function we're going to use.

Before starting our HTTP server, we will now create a new database object and set some specific options that will vary between database types. For our SQLite database, we set `Direct`, `UseUnicode` and `ForceCreateDatabase` to `true`, meaning that a direct connection to the database file will be used (and not through an additional library), the database will use unicode encoding and the database file will automatically be created if it doesn't exist yet (instead of throwing an error).

We then use the `infinity.fileName.extractDirectory()` helper function from the `infinity.fileSystem` module to get the parent directory of the `infinity.current.root` folder. That root folder is the folder where the main program file is, so that's the `js` folder in our project. By taking the parent folder, our database file will be created in our project folder (the file will be called `database.db`).

Then we connect to that database file using the `infinity.database.provider.sqlite` database type. The second and third parameters (server and port) can be empty, because we're using a database file and are not really connecting to a database server. The fourth parameter (database name) is the database file (for SQLite databases).

After we've established the connection to the database (the file will be created if it doesn't exist), we execute two SQL commands, creating a table for users (with `id`, `username` and `password` fields) and inserting a default `admin` user if it doesn't exist, yet.
When inserting the default admin user, we're writing a password hash (using the bcrypt algorithm) into the database. You're free to use different password algorithms, of course, but bcrypt is a popular choice for hashing passwords.

Afterwards, we disconnect from the database and free the database connection resource handle and then start up our HTTP server and services like before. We're using a `try`-`finally` block to make sure that the database resource always gets released after we create it. This is not strictly necessary, but since our main program will run until terminated, any memory allocated in the same scope of the script will not be released by the garbage collector until our script terminates. Again: this is optional - it's just a measure to optimize the memory footprint of our server.

When you run the project, you will notice that the `database.db` file is being created in your project folder. If you examine the file with some database browser tool (e.g. [HeidiSQL](https://www.heidisql.com/){:target="_blank"}), then you will notice that it contains a table called `users` with a single entry (id 0, username "admin" and a password hash).


## Session and Authorization

Now that we have a database with a users list, let's limit the system service's shutdown function to be allowed for valid users only. Let's add a `user` service, where users can log in. We'll create a user session on successful login and can then use the session afterwards to make sure a user has been logged in, limiting the shutdown call to requests with a valid session.

First, let's create the `user` service with the `login` function. Edit you `main.ts` file and add register another service after the `system` service:

```typescript
// main.ts

// [...]

// Register services and functions:
server.registerService( 'system', 'system', 'services/system.js', [
    { name: 'shutdown' }
] );

// Register the user service and login function:
server.registerService( 'user', 'user', 'services/user.js', [
    { name: 'login', params: [ 'username: string', 'password: string' ], result: 'object' }
] );

console.info( 'Starting server...' );

// [...]
```

Note that we've specified two parameters `username` and `password` as strings and an object result type for the `login` function. INFINITY.JS will check any parameters passed to that function in the API and will emit error messages for missing parameters or wrong parameter types.

Now, let's create our user service: create a `services/user.ts` file with the following content:

```typescript
// services/user.ts
infinity.loadModule( 'infinity.database' );
infinity.loadModule( 'infinity.crypto' );
infinity.loadModule( 'infinity.fileSystem' );
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

                // Return session ID and user info:
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

}
```

We're implementing the `login` function within the `user` namespace. As specified in the `registerService()` call we added to the `main.ts` script, the function takes two string parameters: `username` and `password`. We're creating a database connection to our SQLite database, just like in the `main.ts` script. This time, however, we're using a query to look for a database entry in the `users` table, searching for the given username.

Note that we're creating the database query a little different than before. We're not passing the SQL query string to the `execute()` method - instead we're setting up the SQL query string in the `sql` property of the database object.Also, we're not just adding the username to the database SQL query string. Instead we're using a placeholder `:username` and then use the `setParamValue()` method of the database object to set that placeholder to contain the `username` parameter of our `login` function. The reason for this is security. If we would just add the `username` parameter directly to the SQL query string, then someone could call our API function with malicious code in the `username` param (called "SQL injection"). The `setParamValue()` method will escape any special characters in the value to render them harmless. It's generally a good idea to use methods like these to prevent database code injection, but when using data that has been passed from outside (e.g. through an API call) then you really *must* make sure that no malicious code can be injected into your database queries. So always use the `setParamValue()` method (or the [`escape()`](../api/infinity.database.md#infinity.database.escape_function) method) to prevent SQL injection.

To validate the credentials, it would be enough to just read the password hash from the database, but in our case, we're fetching the user ID, username and password hash. We're using the password hash to check whether the given password is correct (by using the `infinity.bcrypt.verify()` function). Then we're creating a session data object. This session data object *must* have an `id` property that contains the session ID. We can use an arbitrary value here, it just can't be empty. We're using the `infinity.md5.generateUniqueId()` method to generate a random MD5 hash as a session ID. Note: this is just used as a session ID, so the hash itself doesn't have to be particularly secure. We could as well generate a random string by other means.

We're also storing the user's ID and the username from the database inside the session object. We could use the username parameter directly, but in our case, we're using the value from the database because it might be different in upper-/lower-case.

Then we create the actual session by calling the `infinity.session.start()` function, passing it our session data object. INFINITY.JS will store this session data for the session ID of the data object. This session ID will then automatically be sent as a cookie in the response back to the client.

Whenever a client sends a request to your API, INFINITY.JS will automatically check if it has sent a cookie with a session ID, or an `Authorization: Bearer ...` HTTP header, containing the session ID as a bearer token, or a session ID query parameter. If any of these contain a valid session ID, then INFINITY.JS will be automatically able to find the session. You can just call `infinity.session.get()` to check if there was a valid session ID in the client's request and you will receive the session data that you stored earlier using that session ID.

So, in our case, calling `infinity.session.get()` will return either `undefined` if no valid session ID was provided, or it will return the session data we passed to the `infinity.session.start()` function in our `login` API function. This is the reason why we stored the user ID and username within the session data - so that we can easily retrieve it later.

Now that we can start a session if we receive a valid login request to our API, let's change the `shutdown` API function in our `system` service so that it only allows logged in users to shut down our server. To do this, you need to edit the `services/system.ts` file:

```typescript
// services/system.ts
infinity.loadModule( 'infinity.session' );

namespace system {

    export function shutdown() {
        let session: any = infinity.session.get();

        if ( !session ) {
            throw 'Unauthorized';
        }

        console.info( 'User "' + session.username + '" is shutting down the server.' );
        infinity.terminate();
    }

}
```

We load the `infinity.session` module, so that we can access the `infinity.session` functions. In the `shutdown` function, we fetch the session and check if it is valid. If the client didn't provide a session ID in the shutdown request, then the session will be `undefined` and we just throw an authentication error message. If we have a valid user session, then we call the `infinity.terminate()` function to shut down our system. We're also logging a simple message to the console (or log file) to demonstrate that we can access the username that we've stored inside the session data when we created the session in our `user.login` function.

So, we've now extended our server example to include a database-based user login and session management.


## Sharing Data Between Threads

As you've probably noticed, our server example involves multiple threads running in parallel at the same time. There's our `main.ts` script that starts up the HTTP server and then waits until terminated. Whenever an HTTP request is received, INFINITY.JS will automatically start a new thread and run the script you've specified in the `registerService()` method that matches the service and method of the request. This thread will run in parallel to your main script and if several requests arrive at the same time, then each of them will be run in parallel in separate threads.

Most of the time, you'll be writing services with functions that access some shared data storage - usually the database. The `user.login` function is an example for this: each login request will run in a separate thread, accessing the database to read the user data and then verify the password.

That's okay, since databases have been made to handle mutliple parallel requests and to store data persistently and consistently. There might, however, be situations where you'd want some kind of shared memory area that your threads can use to exchange data - e.g. for caching.

INFINITY.JS already comes with a shared memory module: [`infinity.memory`](../api/infinity.memory.md). You can use it to store arbitrary data in memory (strings, objects, etc) and it even offers an optional expiry timestamp that you can use to cache data for a specified time, only.

Let's add a simple username cache to our server. We'll just use another API function for fetching a username by ID and use `infinity.memory` to cache the data so that multiple requests looking for the same username can be answered from cache instead of reading from the database each time.

First, register another function for the `user` service in your `main.ts`:

```typescript
// main.ts

// [...]

// Register the user service and login function:
server.registerService( 'user', 'user', 'services/user.js', [
    { name: 'login', params: [ 'username: string', 'password: string' ], result: 'object' },
    { name: 'getUsername', params: [ 'id: number' ], result: 'string' }
] );

// [...]
```

Then, edit your `services/user.ts` file to load the `infinity.memory` module and add the new `getUsername` function:

```typescript
// services/user.ts
infinity.loadModule( 'infinity.database' );
infinity.loadModule( 'infinity.crypto' );
infinity.loadModule( 'infinity.fileSystem' );
infinity.loadModule( 'infinity.memory' ); // load the infinity.memory module
infinity.loadModule( 'infinity.session' );

namespace user {

    // [...]

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
```

At the beginning of our `getUsername` function, we make sure that we do have a valid session, limiting the function to logged in users only. We're also checking for a valid ID, while we're at it.

Then we use the `infinity.memory.getString()` method to look for a username by that ID in our memory cache. The first parameter is a "namespace". This is an arbitrary string that just divides the shared memory into different sections (a bit like database tables), so you could have multiple, independent caches in parallel. We're calling our cache `usernames`. The second parameter is a key. This is the "ID" of our data inside the `usernames` cache. Again, you can use any string you like. We're using the string `id:` followed by the user ID.

If we find a username by that key, we just log a comment to the console (so we can later check that the cache is actually working). Otherwise, we look for the ID in the database and fetch the username if there's a user with that ID. Then we store the username inside the cache, so that subsequent requests will find it.

If you run your server and send a `user.login` request followed by multiple `user.getUsername` requests with a parameter of `1`, then you'll notice that the first one will read the result from the database, while the others will read the username from the memory cache.

Keep in mind that each request starts up a new script in a new thread, so each of them is a separate javascript running in it's own runtime environment. Nevertheless, you can access values stored by another thread.

This is not limited to string values, of course. You can even put objects into the memory cache, using the `infinity.memory.put()` method, and then fetch the object using `infinity.memory.get()` (objects won't store funtions, though, since the INFINITY.JS engine will internally store them as JSON data).

You also don't have to worry about reading from and writing data to the memory cache at the same time from multiple threads. The `infinity.memory` functions are all thread-safe. You can find more details on the memory cache in the [`infinity.memory`](../api/infinity.memory.md) documentation.


## Conclusion

The server example should show you how to build your own server and services using the INFINITY.JS engine. It should also give you a basic idea of how to access the database, session management, authentication and shared memory. There's a whole lot more of functions and classes, from AES256 encryption to ZIP-files. You can find an overview of the runtime library and a detailed description of all the classes and functions in the [API documentation](../api/index.md).

You can download the complete server example source code [here](assets/server-example.zip). Feel free to use it as a basis or inspiration for your own projects.
