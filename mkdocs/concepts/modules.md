# Modules

Most of the runtime library functions will only be loaded into the runtime when you explicitly need them. To import a set of functions (a runtime library module), use the `infinity.loadModule()` function with the name of the runtime module as an argument:

```typescript
infinity.loadModule( 'infinity.encoding' );
let encoded = infinity.base64.encode( 'Hello World!' );
```

This example code will import the encoding functions into the runtime, including the Base64 functions. When browsing the [API reference documentation](../api/index.md), you will get an overview of all the functions available in the INFINITY.JS runtime engine. The documentation will also list the module that you need to import to use those functions. For example, check out the [Base64](../api/infinity.base64.md) api reference. It will tell you that these functions are provided by the `infinity.encoding` module.

There are a few core functions that are included in the runtime itself, without the need to import them, e.g. the `console` functions (`console.log` etc.). Most of the specialized functions need to be imported, however. Importing the same module multiple times in your code is not a problem - the runtime module will only be loaded once. This means that when using include files (as shown above), you can just import the runtime modules that you need in each include file. That way each file will contain it's own requirements and if you later decide to remove a file from your program, which is the only one that requires (and imports) a certain runtime module, than that module won't have to be loaded, resulting in a more optimized application.


So, now you should know how to write applications using the INFINITY.JS engine, split your code into separate source files and load runtime modules to use INFINITY.JS's runtime library. As a next step, we'll show you how to start building your own server application: [Server Example](../example/index.md)
