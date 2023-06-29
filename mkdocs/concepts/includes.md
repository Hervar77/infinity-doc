# Includes

You can split your source code into multiple files and use the `infinitiy.include()` function to include code from other files. Keep in mind that INFINITY.JS is a javascript runtime, not a typescript runtime, so you need to include the compiled javascript files and not your typescript source files. Since they will be compiled into a matching folder structure, you'll just need to use the `.js` extension instead of `.ts`:

```typescript
infinity.include( 'core/service.js' );
infinity.include( 'utils/dateUtils.js' );
```

All paths will be interpreted as relative to the main javascript file of your application, no matter in which file (and folder) you use the `infinity.include()` function.

Example: Let's say you created a project called "example-1" inside the `infinity/bin` folder, with the following structure:

```
+ infinity
  + bin
    + example-1
      + js
      + ts
        + core
          - service.ts
        + utils
          - dateUtils.ts
        - main.ts
```

The `main.ts` is your main program file. All the typescript files are compiled from the `ts` folder to a similar folder structure inside the `js` folder. When running your program, you will execute the INFINITY.JS runtime and provide `../example-1/js/main.js` as a command line argument so that the INFINITY.JS runtime binary will run the compiled javascript file of your main program file. This means that all paths used in `infinity.include()` will then be relative to the `js` folder, since that is the folder that contains the `main.js` file. Even if you use the `infinity.include()` function inside a file in a subfolder, e.g. `core/service.ts`, you will need to provide a path relative to the `js` folder (which is basically the same to the `ts` folder, only the files will end in `.js` instead of `.ts`). So, for the example structure above, your `core/service.ts` file would look like this:

```typescript
infinity.include( 'utils/dateUtils.js' );
```

Note that the path is relative to the main program file and not to the `core/service.ts` file, where you are using the include function. Also note that the compiled `dateUtils.js` file is included and not the `dateUtils.ts` source file. So keep in mind that you need to refer to include files from the main program folder and that you need to include `.js` files.

> Note: if you include the same file multiple times, then it will only be executed on the first include. All subsequent `infinity.include()` calls with the same file path will be ignored. This means that you can put typescript class definitions or utility functions into include files and include them in every source file where you need them, without having to worry about them being read or executed multiple times.

Now that you can structure your code into multiple source files and include them as needed, let us show you how to load modules of the INFINITY.JS runtime library so that you can make full use of all of the engine's functions: [Modules](modules.md)