infinity.loadModule( 'infinity.regEx' );

infinity.include( 'dtsParser.js' );

class DocSync {
    public dtsFile: string = '';
    public mkdocsFolder: string = '';
    public createDocumentation: boolean = false;
    public overwriteDocumentation: boolean = false;

    protected modules = {
        'console': '',
        'infinity': '',
        'infinity.aes256': 'infinity.crypto',
        'infinity.base64': 'infinity.encoding',
        'infinity.bcrypt': 'infinity.crypto',
        'infinity.crc32': 'infinity.crypto',
        'infinity.current': '',
        'infinity.directory': 'infinity.fileSystem',
        'infinity.encoding': '',
        'infinity.event': '',
        'infinity.file': 'infinity.fileSystem',
        'infinity.fileMode': '',
        'infinity.fileName': 'infinity.fileSystem',
        'infinity.hex': 'infinity.encoding',
        'infinity.http.client': 'infinity.http',
        'infinity.http.request': 'infinity.http',
        'infinity.http.response': 'infinity.http',
        'infinity.http.server': 'infinity.http',
        'infinity.lock': '',
        'infinity.md5': 'infinity.crypto',
        'infinity.pop3.client': 'infinity.pop3',
        'infinity.pop3.session': 'infinity.pop3',
        'infinity.quotedPrintable': 'infinity.encoding',
        'infinity.rsa': 'infinity.crypto',
        'infinity.scgi.server': 'infinity.scgi',
        'infinity.sha256': 'infinity.crypto',
        'infinity.sha512': 'infinity.crypto',
        'infinity.smtp.client': 'infinity.smtp',
        'infinity.smtp.session': 'infinity.smtp',
        'infinity.url': 'infinity.encoding',
        'infinity.ui': 'infinity.ui',
        'infinity.webSocket.session': 'infinity.webSocket'
    };

    protected todo = '//TO' + 'DO';

    public execute() {
        let parser: dtsParser.Parser;
        let items: Array<dtsParser.Item>;

        parser = new dtsParser.Parser( infinity.file.readString( this.dtsFile ) );
        items = parser.getItems();

        // Adjust the infinity namespace for the documentation:
        let infinityNamespace: dtsParser.Namespace;

        for ( let item of items ) {
            if ( item.name == 'infinity' && item instanceof dtsParser.Namespace ) {
                infinityNamespace = item;
                break;
            }
        }

        if ( infinityNamespace ) {
            // Make sure that all classes and enums are under a sub-namespace of the infinity namespace:
            let namespacesByPath = {};

            for ( let item of infinityNamespace.namespaces ) {
                namespacesByPath[ item.path ] = item;
            }

            let tmpItems: Array<dtsParser.Item> = [];
            tmpItems = tmpItems.concat( infinityNamespace.classes );
            tmpItems = tmpItems.concat( infinityNamespace.enums );

            for ( let item of tmpItems ) {
                let namespace = namespacesByPath[ item.path ];

                if ( !namespace ) {
                    namespace = new dtsParser.Namespace( item.name, infinityNamespace );
                    namespace.move( infinityNamespace );
                }

                item.move( namespace );
            }
        }

        // Check documentation:
        this.checkItems( items, 0 );
    }

    protected checkItems( items: Array<dtsParser.Item>, depth: number ) {
        let item: dtsParser.Item;

        for ( item of items ) {
            if ( item instanceof dtsParser.Namespace ) {
                let file: string;

                file = this.mkdocsFolder + item.path + '.md';

                if ( infinity.file.exists( file ) || this.createDocumentation || this.overwriteDocumentation ) {
                    this.checkNamespace( item, file, depth );
                } else {
                    console.warn( 'namespace ' + item.path + ' file missing.' );
                }

                this.checkItems( item.namespaces, depth + 1 );
            }
        }
    }

    protected checkNamespace( dts: dtsParser.Namespace, docFile: string, depth: number )
    {
        // Only create documentation files for the first two levels of namespaces:
        if ( depth > 1 ) {
            return;
        }

        let content: string;
        let doc: dtsParser.Namespace;
        let module: string;

        if ( this.overwriteDocumentation || ( this.createDocumentation && !infinity.file.exists( docFile ) ) ) {
            this.warn( 'creating file for namespace ' + dts.path );
            module = this.getModule( dts.path );

            content = '# ' + dts.path + '\r\n\r\n' +
                'Module: ' + ( module ? '`' + module + '`' : 'none (built-in)') + '\r\n\r\n';

            // Table of contents:
            let toc: string = '';

            if ( dts.classes.length ) {
                toc += '<div class="doc-toc-heading">Classes:</div>\r\n\r\n';

                for ( let item of dts.classes ) {
                    toc += '- [' + item.name + '](#' + item.path + '_class)\r\n';
                }

                toc += '\r\n';
            }

            // Namespaces of the first two levels have their own documentation files:
            if ( depth > 0 ) {
                if ( dts.namespaces.length ) {
                    toc += '<div class="doc-toc-heading">Namespaces:</div>\r\n\r\n';

                    for ( let item of dts.namespaces ) {
                        toc += '- [' + item.name + '](#' + item.path + '_namespace)\r\n';
                    }

                    toc += '\r\n';
                }
            }

            if ( dts.interfaces.length ) {
                toc += '<div class="doc-toc-heading">Interfaces:</div>\r\n\r\n';

                for ( let item of dts.interfaces ) {
                    toc += '- [' + item.name + '](#' + dts.path + '.' + item.name + '_interface)\r\n';
                }

                toc += '\r\n';
            }

            if ( dts.properties.length ) {
                toc += '<div class="doc-toc-heading">Properties:</div>\r\n\r\n';

                for ( let item of dts.properties ) {
                    toc += '- [' + item.name + '](#' + dts.path + '.' + item.name + '_property)\r\n';
                }

                toc += '\r\n';
            }

            if ( dts.functions.length ) {
                toc += '<div class="doc-toc-heading">Functions:</div>\r\n\r\n';

                for ( let item of dts.functions ) {
                    toc += '- [' + item.name + '](#' + dts.path + '.' + item.name + '_function)\r\n';
                }

                toc += '\r\n';
            }

            if ( dts.enums.length ) {
                toc += '<div class="doc-toc-heading">Enums:</div>\r\n\r\n';

                for ( let item of dts.enums ) {
                    toc += '- [' + item.name + '](#' + dts.path + '.' + item.name + '_enum)\r\n';
                }

                toc += '\r\n';
            }

            if ( toc.length ) {
                content += '<div class="doc-toc" markdown="1">\r\n\r\n' + toc + '</div>\r\n\r\n';
            }

            // Content:
            content += this.todo + '\r\n\r\n';
            infinity.file.writeString( docFile, content, infinity.encoding.utf8 );
        } else if ( infinity.file.exists( docFile ) ) {
            content = infinity.file.readString( docFile );

            if ( content.indexOf( '# ' + dts.path + '\r\n' ) === -1 ) {
                this.warn( 'namespace ' + dts.path + ' heading not found.' );
            }
        }

        doc = this.parseDoc( content );

        this.checkClasses( dts, doc );

        // Namespaces of the first two levels have their own documentation files:
        if ( depth > 0 ) {
            this.checkNamespaces( dts, doc );
        }

        this.checkInterfaces( dts, doc );
        this.checkFunctions( dts, doc );
        this.checkProperties( dts, doc );
        this.checkEnums( dts, doc );
    }

    protected checkNamespaces( dts: dtsParser.Namespace, doc: dtsParser.Namespace ) {
        let docNamespacesByName: any = {};

        for ( let item of doc.namespaces ) {
            docNamespacesByName[ item.name ] = item;
        }

        if ( !this.overwriteDocumentation && !this.createDocumentation ) {
            for ( let item of dts.namespaces ) {
                if ( !docNamespacesByName[ item.name ] ) {
                    this.warn( dts.path + ' namespace ' + item.name + ' not found.' );
                }
            }
        } else if ( dts.namespaces.length && ( this.overwriteDocumentation || ( this.createDocumentation && !doc?.namespaces?.length ) ) ) {
            let content = '---\r\n\r\n<div class="doc-heading">Namespaces</div>\r\n\r\n';

            for ( let item of dts.namespaces ) {
                content += '---\r\n\r\n## ' + item.path + ' {: #' + item.path + '_namespace .doc-namespace}\r\n\r\n';

                // Table of contents:
                let toc: string = '';

                if ( item.properties.length ) {
                    toc += '<div class="doc-toc-heading">Properties:</div>\r\n\r\n';

                    for ( let prop of item.properties ) {
                        toc += '- [' + prop.name + '](#' + item.path + '.' + prop.name + '_property)\r\n';
                    }

                    toc += '\r\n';
                }

                if ( item.functions.length ) {
                    toc += '<div class="doc-toc-heading">Functions:</div>\r\n\r\n';

                    for ( let func of item.functions ) {
                        toc += '- [' + func.name + '](#' + item.path + '.' + func.name + '_function)\r\n';
                    }

                    toc += '\r\n';
                }

                if ( item.enums.length ) {
                    toc += '<div class="doc-toc-heading">Enums:</div>\r\n\r\n';

                    for ( let en of item.enums ) {
                        toc += '- [' + en.name + '](#' + item.path + '.' + en.name + '_enum)\r\n';
                    }

                    toc += '\r\n';
                }

                if ( toc.length ) {
                    content += '<div class="doc-toc" markdown="1">\r\n\r\n' + toc + '</div>\r\n\r\n';
                }

                // Content:
                content += this.todo + '\r\n\r\n';

                // Properties:
                if ( item.properties.length ) {
                    content += '---\r\n\r\n<div class="doc-heading">Properties</div>\r\n\r\n';

                    for ( let prop of item.properties ) {
                        content += '---\r\n\r\n### ' + prop.name + ' {: #' + item.path + '.' + prop.name + '_property' +
                            ( prop instanceof dtsParser.Constant ? ' .doc-readonly' : '') + '}\r\n\r\n';
                        content += 'Type: `' + prop.dataType + '`\r\n\r\n';
                        content += this.todo + '\r\n\r\n';
                    }
                }

                // Functions:
                if ( item.functions.length ) {
                    content += '---\r\n\r\n<div class="doc-heading">Functions</div>\r\n\r\n';

                    for ( let func of item.functions ) {
                        content += '---\r\n\r\n### ' + func.name + '() {: #' + item.path + '.' + func.name + '_function .doc-function}\r\n\r\n';
                        content += this.todo + '\r\n\r\n';
                        content += 'Signature:\r\n```typescript\r\n' + func.getSignature() + '\r\n```\r\n\r\n';

                        if ( func.params.length ) {
                            content += 'Parameters:\r\n\r\n';

                            for ( let param of func.params ) {
                                content += '- ' + param.name + ': `' + param.dataType + '`' + ( param.optional ? ', optional' : '' ) + '\r\n' +
                                '  >' + this.todo + '\r\n\r\n';
                            }

                            content += '\r\n';
                        }

                        if ( func.returnType && func.returnType != 'void' ) {
                            content += 'Return type: `' + func.returnType + '`\r\n\r\n';
                        }
                    }
                }

                // Enums:
                if ( item.enums.length ) {
                    content += '---\r\n\r\n<div class="doc-heading">Enums</div>\r\n\r\n';

                    for ( let en of item.enums ) {
                        content += '---\r\n\r\n### ' + en.path + ' {: #' + item.path + '.' + en.name + '_enum .doc-enum}\r\n\r\n';
                        content += this.getEnumContent( en, item );
                        content += '\r\n\r\n';
                    }
                }

                content += '\r\n\r\n';
            }

            infinity.file.writeString( this.mkdocsFolder + dts.path + '.md', content, infinity.encoding.utf8, true );
        }
    }

    protected checkClasses( dts: dtsParser.Namespace, doc: dtsParser.Namespace ) {
        let docClassesByName: any = {};
        let content: string;
        let names: Array<string>;

        for ( let item of doc.classes ) {
            docClassesByName[ item.name ] = item;
        }

        if ( !this.createDocumentation && !this.overwriteDocumentation ) {
            for ( let item of dts.classes ) {
                if ( !docClassesByName[ item.name ] ) {
                    this.warn( dts.path + ' class ' + item.name + ' not found.' );
                }
            }
        } else if ( dts.classes.length && ( this.overwriteDocumentation || ( this.createDocumentation && !doc?.classes?.length ) ) ) {
            content = '---\r\n\r\n<div class="doc-heading">Classes</div>\r\n\r\n';

            for ( let item of dts.classes ) {
                content += '---\r\n\r\n## ' + item.name + ' {: #' + item.path + '_class .doc-class}\r\n\r\n';

                if ( item.extends ) {
                    content += 'Extends: `' + item.extends + '`\r\n\r\n';
                }

                // Table of contents:
                let toc: string = '';

                if ( item.properties.length ) {
                    toc += '**Properties:**\r\n\r\n';

                    for ( let prop of item.properties ) {
                        toc += '- [' + prop.name + '](#' + item.path + '.' + prop.name + '_property)\r\n';
                    }

                    toc += '\r\n';
                }

                if ( item.methods.length ) {
                    toc += '**Methods:**\r\n\r\n';

                    for ( let func of item.methods ) {
                        toc += '- [' + func.name + '()](#' + item.path + '.' + func.name + '_function)\r\n';
                    }

                    toc += '\r\n';
                }

                if ( toc.length ) {
                    content += '<div class="doc-toc" markdown="1">\r\n\r\n' + toc + '</div>\r\n\r\n';
                }

                // Content:
                content += this.todo + '\r\n\r\n';

                names = [];

                for ( let func of item.methods ) {
                    if ( func.name === 'constructor' ) {
                        for ( let param of func.params ) {
                            if ( !param.optional ) {
                                names.push( param.name );
                            }
                        }
                        break;
                    }
                }

                content += 'Example:\r\n\r\n```typescript\r\n';
                let exampleConstructor = '';

                let module = this.getModule( dts.path );

                if ( module ) {
                    exampleConstructor += 'infinity.loadModule(\'' + module + '\');\r\n';
                }

                exampleConstructor += 'let my' + item.name[0].toUpperCase() + item.name.substring( 1 ) + ' = new ' + item.path + '(' + names.join( ', ' ) + ');\r\n';

                content += exampleConstructor + '```\r\n\r\n';

                // Properties:
                if ( item.properties.length ) {
                    content += '---\r\n\r\n**Properties**\r\n\r\n';

                    for ( let prop of item.properties ) {
                        content += '---\r\n\r\n### ' + prop.name + ' {: #' + item.path + '.' + prop.name + '_property .doc-property' +
                           ( prop instanceof dtsParser.Constant ? ' .doc-readonly' : '' ) + '}\r\n\r\n';
                        content += 'Type: `' + prop.dataType + '`\r\n\r\n';
                        content += this.todo + '\r\n\r\n';
                    }
                }

                // Methods:
                if ( item.methods.length ) {
                    content += '---\r\n\r\n**Methods**\r\n\r\n';

                    for ( let func of item.methods ) {
                        content += '---\r\n\r\n### ' + func.name + '() {: #' + item.path + '.' + func.name + '_function .doc-function}\r\n\r\n';
                        content += this.todo + '\r\n\r\n';
                        content += 'Signature:\r\n```typescript\r\n' + func.getSignature() + '\r\n```\r\n\r\n';
                        let exampleParams = [];

                        if ( func.params.length ) {
                            content += 'Parameters:\r\n\r\n';

                            for ( let param of func.params ) {
                                content += '- ' + param.name + ': `' + param.dataType + '`' + ( param.optional ? ', optional' : '' ) + '\r\n' +
                                '  >' + this.todo + '\r\n\r\n';

                                if ( !param.optional ) {
                                    exampleParams.push( param.name );
                                }
                            }

                            content += '\r\n';
                        }

                        if ( func.returnType && func.returnType != 'void' ) {
                            content += 'Return type: `' + func.returnType + '`\r\n\r\n';
                        }

                        if ( func.name == 'constructor' ) {
                            content += 'Example:\r\n\r\n```typescript\r\n' + exampleConstructor + '```\r\n\r\n';
                        } else {
                            content += 'Example:\r\n\r\n```typescript\r\n' +
                                'my' + item.name[0].toUpperCase() + item.name.substring( 1 ) + '.' + func.name + '(' + exampleParams.join( ', ' ) + ');\r\n' +
                                '```\r\n\r\n';
                        }
                    }
                }

                content += '\r\n\r\n';
            }

            infinity.file.writeString( this.mkdocsFolder + dts.path + '.md', content, infinity.encoding.utf8, true );
        }
    }

    protected checkInterfaces( dts: dtsParser.Namespace, doc: dtsParser.Namespace ) {
        let docInterfacesByName: any = {};
        let content: string;

        for ( let item of doc.interfaces ) {
            docInterfacesByName[ item.name ] = item;
        }

        if ( !this.createDocumentation && !this.overwriteDocumentation ) {
            for ( let item of dts.interfaces ) {
                if ( !docInterfacesByName[ item.name ] ) {
                    this.warn( dts.path + ' interface ' + item.name + ' not found.' );
                }
            }
        } else if ( dts.interfaces.length && ( this.overwriteDocumentation || ( this.createDocumentation && !doc?.interfaces?.length ) ) ) {
            content = '---\r\n\r\n<div class="doc-heading">Interfaces</div>\r\n\r\n';

            for ( let item of dts.interfaces ) {
                content += '---\r\n\r\n## ' + item.name + ' {: #' + item.path + '_interface .doc-interface}\r\n\r\n';

                if ( item.extends ) {
                    content += 'Extends: `' + item.extends + '`\r\n\r\n';
                }

                // Table of contents:
                let toc: string = '';

                if ( item.properties.length ) {
                    toc += '**Properties:**\r\n\r\n';

                    for ( let prop of item.properties ) {
                        toc += '- [' + prop.name + '](#' + item.path + '.' + prop.name + '_property)\r\n';
                    }

                    toc += '\r\n';
                }

                if ( item.methods.length ) {
                    toc += '**Methods:**\r\n\r\n';

                    for ( let func of item.methods ) {
                        toc += '- [' + func.name + '()](#' + item.path + '.' + func.name + '_function)\r\n';
                    }

                    toc += '\r\n';
                }

                if ( toc.length ) {
                    content += '<div class="doc-toc" markdown="1">\r\n\r\n' + toc + '</div>\r\n\r\n';
                }

                // Content:
                content += this.todo + '\r\n\r\n';

                // Properties:
                if ( item.properties.length ) {
                    content += '---\r\n\r\n**Properties**\r\n\r\n';

                    for ( let prop of item.properties ) {
                        content += '---\r\n\r\n### ' + prop.name + '{: #' + item.path + '.' + prop.name + '_property .doc-property}\r\n\r\n';
                        content += 'Type: `' + prop.dataType + '`\r\n\r\n';
                        content += this.todo + '\r\n\r\n';
                    }
                }

                // Methods:
                if ( item.methods.length ) {
                    content += '---\r\n\r\n**Methods**\r\n\r\n';

                    for ( let func of item.methods ) {
                        content += '---\r\n\r\n### ' + func.name + '() {: #' + item.path + '.' + func.name + '_function .doc-function}\r\n\r\n';
                        content += this.todo + '\r\n\r\n';
                        content += 'Signature:\r\n```\r\n' + func.getSignature() + '\r\n```\r\n\r\n';

                        if ( func.params.length ) {
                            content += 'Parameters:\r\n\r\n';

                            for ( let param of func.params ) {
                                content += '- ' + param.name + ': `' + param.dataType + '`' + ( param.optional ? ', optional' : '' ) + '\r\n' +
                                '  >' + this.todo + '\r\n\r\n';
                            }

                            content += '\r\n';
                        }

                        if ( func.returnType && func.returnType != 'void' ) {
                            content += 'Return type: `' + func.returnType + '`\r\n\r\n';
                        }
                    }
                }
            }

            content += '\r\n\r\n';

            infinity.file.writeString( this.mkdocsFolder + dts.path + '.md', content, infinity.encoding.utf8, true );
        }
    }

    protected checkFunctions( dts: dtsParser.Namespace, doc: dtsParser.Namespace ) {
        let docFunctionsByName: any = {};
        let content: string;
        let names: Array<string>;
        let callPrefix, callSuffix: string;

        for ( let item of doc.functions ) {
            docFunctionsByName[ item.name ] = item;
        }

        if ( !this.createDocumentation && !this.overwriteDocumentation ) {
            for ( let item of dts.functions ) {
                if ( !docFunctionsByName[ item.name ] ) {
                    this.warn( dts.path + ' function ' + item.name + ' not found.' );
                }
            }
        } else if ( dts.functions.length && ( this.overwriteDocumentation || ( this.createDocumentation && !doc?.functions?.length ) ) ) {
            content = '---\r\n\r\n<div class="doc-heading">Functions</div>\r\n\r\n';

            for ( let func of dts.functions ) {
                content += '---\r\n\r\n## ' + func.name + '() {: #' + dts.path + '.' + func.name + '_function .doc-function}\r\n\r\n';
                content += this.todo + '\r\n\r\n';
                content += 'Signature:\r\n```\r\n' + func.getSignature() + '\r\n```\r\n\r\n';

                // Params:
                if ( func.params.length ) {
                    content += 'Parameters:\r\n\r\n';

                    for ( let param of func.params ) {
                        content += '- ' + param.name + ': `' + param.dataType + '`' + ( param.optional ? ', optional' : '' ) + '\r\n' +
                            '  >' + this.todo + '\r\n\r\n';
                    }

                    content += '\r\n';
                }

                // Return type:
                if ( func.returnType && func.returnType != 'void' ) {
                    content += 'Return type: `' + func.returnType + '`\r\n\r\n';
                }

                // Example:
                names = [];

                for ( let param of func.params ) {
                    if ( !param.optional ) {
                        names.push( param.name );
                    }
                }

                callSuffix = ';';

                switch ( func.returnType.toLowerCase() ) {
                    case 'string':
                        callPrefix = 'let s = ';
                        break;

                    case 'number':
                        callPrefix = 'let n = ';
                        break;

                    case 'boolean':
                        callPrefix = 'if ( ';
                        callSuffix = ' ) {}';
                        break;

                    case '':
                    case 'void':
                        callPrefix = '';
                        break;

                    default:
                        callPrefix = 'let x = ';
                        break;
                }

                content += 'Example:\r\n\r\n```typescript\r\n';

                let module = this.getModule( dts.path );

                if ( module ) {
                    content += 'infinity.loadModule(\'' + module + '\');\r\n';
                }

                content += callPrefix + dts.path + '.' + func.name + '(' + names.join( ', ' ) + ')' + callSuffix +
                    '\r\n```\r\n\r\n';
            }

            content += '\r\n\r\n';

            infinity.file.writeString( this.mkdocsFolder + dts.path + '.md', content, infinity.encoding.utf8, true );
        }
    }

    protected checkProperties( dts: dtsParser.Namespace, doc: dtsParser.Namespace ) {
        let docPropertiesByName: any = {};
        let content: string;

        for ( let item of doc.properties ) {
            docPropertiesByName[ item.name ] = item;
        }

        if ( !this.createDocumentation && !this.overwriteDocumentation ) {
            for ( let item of dts.properties ) {
                if ( !docPropertiesByName[ item.name ] ) {
                    this.warn( dts.path + ' ' + item.name + ' not found.' );
                }
            }
        } else if ( dts.properties.length && ( this.overwriteDocumentation || ( this.createDocumentation && !doc?.properties?.length ) ) ) {
            content = '---\r\n\r\n<div class="doc-heading">Properties</div>\r\n\r\n';

            for ( let prop of dts.properties ) {
                content += '---\r\n\r\n## ' + prop.name + ' {: #' + dts.path + '.' + prop.name + '_property .doc-property}\r\n\r\n';
                content += 'Type: `' + prop.dataType + '`\r\n\r\n';
                content += this.todo + '\r\n\r\n';
            }

            content += '\r\n\r\n';

            infinity.file.writeString( this.mkdocsFolder + dts.path + '.md', content, infinity.encoding.utf8, true );
        }
    }

    protected checkEnums( dts: dtsParser.Namespace, doc: dtsParser.Namespace ) {
        let docEnumsByName: any = {};
        let content: string;

        for ( let item of doc.enums ) {
            docEnumsByName[ item.name ] = item;
        }

        if ( !this.createDocumentation && !this.overwriteDocumentation ) {
            for ( let item of dts.enums ) {
                if ( !docEnumsByName[ item.name ] ) {
                    this.warn( dts.path + ' enum ' + item.name + ' not found.' );
                }
            }
        } else if ( dts.enums.length && ( this.overwriteDocumentation || ( this.createDocumentation && !doc?.enums?.length ) ) ) {
            content = '---\r\n\r\n<div class="doc-heading">Enums</div>\r\n\r\n';

            for ( let item of dts.enums ) {
                content += '---\r\n\r\n## ' + item.path + ' {: #' + item.path + '_enum .doc-enum}\r\n\r\n';
                content += this.getEnumContent( item, dts );
                content += '\r\n\r\n';
            }

            content += '\r\n\r\n';

            infinity.file.writeString( this.mkdocsFolder + dts.path + '.md', content, infinity.encoding.utf8, true );
        }
    }

    protected getEnumContent( item: dtsParser.Enum, parent: dtsParser.Namespace ): string {
        let content: string = '';
        let isBitmask: boolean = true;
        let bitmasks: Array<string> = [
            '1', '2', '4', '8', '16', '32', '64', '128',
            '256', '512', '1024', '2048', '4096', '8192', '16384', '32768',
            '65536', '131072', '262144', '524288', '1048576', '2097152', '4194304', '8388608',
            '16777216', '33554432', '67108864', '134217728', '268435456', '536870912', '1073741824', '2147483648',
            '4294967296' ];

        content += 'Values:\r\n\r\n';

        for ( let value of item.values ) {
            content += '- ' + value.name + ': `' + value.value + '`\r\n' +
                '  >' + this.todo + '\r\n\r\n';

            if ( isBitmask && bitmasks.indexOf( value.value ) == -1 ) {
                isBitmask = false;
            }
        }

        // A bitmask can't be determined by less than 3 values (because 1, 2 could just be normal enums):
        if ( item.values.length < 3 ) {
            isBitmask = false;
        }

        let exampleValues: Array<string> = [];

        for ( let value of item.values ) {
            exampleValues.push( item.path + '.' + value.name );

            if ( !isBitmask || exampleValues.length > 1 ) {
                break;
            }
        }

        if ( item.values.length ) {
            content += 'Example:\r\n\r\n```typescript\r\n';

            let module = this.getModule( parent.path );

            if ( module ) {
                content += 'infinity.loadModule(\'' + module + '\');\r\n';
            }

            content += 'let ' + item.name + ' = ' + exampleValues.join( ' | ' ) + ';' +
                '\r\n```\r\n\r\n';
        }

        return content;
    }

    protected parseDoc( content: string ): dtsParser.Namespace {
        let item: dtsParser.Namespace;
        let match: any;
        let section: any;
        let sectionsByName: any;
        let subSection: any;
        let subSections: any;

        item = new dtsParser.Namespace();

        // Namespace:
        for ( match of infinity.regEx.matchList( '^#\\s+(.+)$', content, [ infinity.regEx.option.multiLine ] ) ) {
            if ( item.name ) {
                this.warn( 'additional first level heading: ' + match.groups[1].text );
            } else {
                item.name = match.groups[1].text;
                item.path = item.name;
            }
        }

        // Sections:
        sectionsByName = this.getSections( '^\\*\\*([^*]+)\\*\\*$', content );

        // Classes:
        section = sectionsByName[ 'Classes' ];

        if ( section ) {
            subSections = this.getSections( '^##\\s+(.+)$', section.content );

            for ( subSection in subSections ) {
                item.classes.push( new dtsParser.Class( subSections[ subSection ].name ) );
            }
        }

        // Interfaces:
        section = sectionsByName[ 'Interfaces' ];

        if ( section ) {
            subSections = this.getSections( '^##\\s+(.+)$', section.content );

            for ( subSection in subSections ) {
                item.interfaces.push( new dtsParser.Interface( subSections[ subSection ].name ) );
            }
        }

        // Functions:
        section = sectionsByName[ 'Functions' ];

        if ( section ) {
            subSections = this.getSections( '^##\\s+(.+)$', section.content );

            for ( subSection in subSections ) {
                item.functions.push( new dtsParser.Function( subSections[ subSection ].name ) );
            }
        }

        // Properties:
        section = sectionsByName[ 'Properties' ];

        if ( section ) {
            subSections = this.getSections( '^##\\s+(.+)$', section.content );

            for ( subSection in subSections ) {
                item.properties.push( new dtsParser.Variable( subSections[ subSection ].name ) );
            }
        }

        // Enums:
        section = sectionsByName[ 'Enums' ];

        if ( section ) {
            subSections = this.getSections( '^##\\s+(.+)$', section.content );

            for ( subSection in subSections ) {
                item.enums.push( new dtsParser.Enum( subSections[ subSection ].name ) );
            }
        }

        return item;
    }

    protected getSections( regExp: any, text: string ): any {
        let match: any;
        let section: any;
        let sections: Array<any>;
        let sectionsByName: any;

        sections = [];
        sectionsByName = {};

        for ( match of infinity.regEx.matchList( regExp, text || '', [ infinity.regEx.option.multiLine ] ) ) {
            section = {
                name: match.groups[1].text.trim(),
                start: match.groups[0].offset,
                contentStart: match.groups[1].offset + match.groups[1].length
            };

            if ( sections.length ) {
                sections[ sections.length - 1 ].end = section.start;
            }

            sections.push( section );
            sectionsByName[ section.name ] = section;
        }

        if ( sections.length ) {
            sections[ sections.length - 1 ].end = text.length - 1;
        }

        for ( section of sections ) {
            section.content = text.substring( section.contentStart, section.end ).trim();
        }

        return sectionsByName;
    }

    protected getModule( path: string ): string {
        let module = path;

        if ( this.modules[ module ] !== undefined ) {
            module = this.modules[ module ];
        }

        return module;
    }

    protected warn( msg: string ) {
        console.warn( msg );
    }
}
