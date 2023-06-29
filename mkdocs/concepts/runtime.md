# Runtime

The INFINITY.JS runtime executes javascript files and provides a set of runtime library functions, mostly sorted into modules, as well as a couple of variables. Since it supports multithreading, there may be more than one script running at the same time. Each of these scripts has its own runtime environment and some of the runtime functions and global variables are used to synchronize and control multithreaded execution.

All of the runtime functions and variables are organized within the `infinity` namespace, with one exception: the `console` namespace of the runtime supports the usual output functions that you are probably used to from browser environments or other javascript runtimes (e.g. `console.log()`). Apart from that, everything else can be found within the `infinity` namespace.


## Variables

There's a couple of variables inside the `infinity` namespace that you should be aware about:

- `infinity.terminated`
    This will always be `false` unless the current script should terminate itself. Scripts won't be forcefully terminated - instead this runtime variable will switch to `true` to signal the current script, that it should terminate itself. For your main program this might happen by the user pressing `ctrl+c` to abort the program, or by the operating system sending the INFINITY.JS process a signal to terminate. If you are writing a server application or a program that might run for a longer time, then make sure that you regularly check the value of `infinity.terminated` to ensure that your program reacts (and terminates) when requested to do so.

    Scripts that run as threads in parallel to the main program will be told to terminate the same way, e.g. if the main program calls the thread's `stop()` method. For more details on using threads, refer to the [infinity.thread](../api/infinity.thread.md) reference documentation.

- `infinity.current.root`
    The path of the folder containing the main program file (usually your `main.js`).

- `infinity.current.temp`
    The path of INFINITY.JS's `temp` folder.

There are a couple more variables that are described in the api reference, e.g. the [infinity](../api/infinity.md) namespace and the [infinity.current](../api/infinity.current.md) namespace.


## Functions

You can find a complete list and description of the runtime functions in the [API reference](../api/index.md), but here are some that you might find useful:

- `infinity.terminate()`
    This will set the `infinity.terminated` variable of the main program and all threads to `false`, no matter if you call the function from the main program or a thread. So, calling this function anywhere in your application will ask your main program to terminate.

- `infinity.getGlobal( name )`
    Returns the value of a global variable (or namespace) by its name. Since there is no global `window` object like in web browser environments, you can use this function to get global variables by their name. Of course you can just write them normally like `let root = infinity.current.root;`, but if you want to use a variable name, you might need this function.

- `infinity.sleep( milliseconds );`
    Waits for the given number of milliseconds without causing cpu load. When writing a script that should run in a thread and that just has to do work sporadically (like monitoring some resource or performing cleanup operations), then you should use the sleep function while waiting to reduce cpu load.
    
    Make sure your script doesn't oversleep changes in the `infinity.terminated` variable, though. Even if your script only has to perform some work every minute, you should only sleep for half a second, or a second at a time and always check the `infinity.terminated` value in between, to ensure that your thread (or main program) terminates properly when requested to do so.


Now that you know some of the useful global runtime features, we'll show you how to split your source code into multiple files by using INFINITY.JS's include mechanism: [Includes](includes.md)


## Resources and Memory

Some of the objects that you instantiate in your code will actually access resources allocated by the INFINITY.JS runtime. These will automatically be released again when the object is destroyed by the javascript garbage collector, so you don't have to deal with that.

However, when allocating resources that you'd like to free early (e.g. when creating a gigabyte-sized memory stream), you have the option of releasing these resources explicitly. All objects of the INFINITY.JS runtime that have a method called `free()` can be released immediately by calling that `free()` method. This will release the underlying system resources (e.g. memory) used by the object. Make sure that you don't reuse the object after calling `free()` on it, as this will cause a memory access violation, because the object will be accessing system resources that have already been deallocated.

The best way to ensure that you are releasing an object that has a `free()` method is by using a `try`-`finally` block like this:

```typescript
infinity.loadModule( 'infinity.database' );

let database = new infinity.database();

try {
    // use the database object
} finally {
    database.free();
}
```

But, as noted in the beginning: all of this is purely optional and just an added option to give you more control over allocating and deallocating memory or system resources. If you don't call the `free()` method, then the INFINITY.JS runtime will free the resources later through the automatic garbage collector.
