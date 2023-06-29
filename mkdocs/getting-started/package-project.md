# Package Project

To be able to distribute your program and the INFINITY.JS runtime, you will need to at least include the folders with the runtime executables for the platforms you want to support, the `resources` and `redist` folders and your project folder (`example-1` in our case):

```
+ bin
  + example-1
    + js
  + resources
  + linux-x64
  + osx-x64
  + win-x64
  + win-x86
+ redist
- LICENSE
```

Of course, you could omit the folders with the platform runtimes you don't need (for example the `win-x86` folder with the INFINITY.JS runtime for 32-bit Microsoft Windows).
The `redist` folder should be included because it contains runtime libraries that you might need to install before being able to run the INFINITY.JS runtime.
You will only need the `js` folder from your project as well as any assets you might have added (images, etc.).

You might want to remove the `infinity.ini` files from your platform runtime folders, if they contain settings for your development system only.

To make it easier to start your program using the INFINITY.JS runtime, you could add a batch file or shell script next to the `bin` folder that executes the runtime with your main javascript file.
The command line syntax for running your program in the INFINITY.JS runtime is (e.g. for Linux):

```
bin/linux-x64/infinity bin/example-1/js/main.js
```

You can add additional command line options, e.g. `-console` to enable console output in INFINITY.JS, but the last command line parameter will be the file path to your main javascript file.

Now that you've set up your development environment and know how to build and package your application, there are a few basic concepts of the INFINITY.JS engine you need to be aware of: [Concepts](../concepts/index.md)
