namespace dtsParser {

    export enum TokenType {
        none = '',
        word = 'word',
        braceOpen = '{',
        braceClose = '}',
        paranthesisOpen = '(',
        paranthesisClose = ')',
        bracketOpen = '[',
        bracketClose = ']',
        chevronOpen = '<',
        chevronClose = '>',
        string = 'string',
        number = 'number',
        comment = 'comment',
        question = '?',
        colon = ':',
        equals = '=',
        pipe = '|',
        comma = ',',
        semicolon = ';',
        arrow = '=>'
    }

    export class Token {

        public type: TokenType;
        public value: string;

        public constructor( type?: TokenType, value?: string ) {
            this.type = type || TokenType.none;
            this.value = value || '';
        }

    }

    export enum ItemType {
        none = '',
        namespace = 'namespace',
        class = 'class',
        interface = 'interface',
        enum = 'enum',
        variable = 'variable',
        constant = 'constant',
        function = 'function'
    }

    export class Item {

        public type: ItemType = ItemType.none;
        public name: string = '';
        public path: string = '';
        public parent?: Item;
        public firstLine?: number;
        public lastLine?: number;

        public constructor( name?: string, parent?: Item, firstLine?: number, lastLine?: number ) {
            this.name = name || '';
            this.parent = parent;
            this.firstLine = firstLine;
            this.lastLine = lastLine;

            if ( parent ) {
                if ( parent.path.length ) {
                    this.path = parent.path + '.' + this.name;
                } else {
                    this.path = this.name;
                }
            }
        }

        public toJSON(): any {
            let data: any = {};

            for ( let key in this ) {
                if ( key != 'parent' && this[ key ] !== undefined ) {
                    data[ key ] = this[ key ];
                }
            }

            return data;
        }

        public sort(): void {
        }

        public move( namespace: Namespace ): void {
            this.parent = namespace;
        }

        protected compare( item1: Item, item2: Item ): number {
            if ( item1.type != item2.type ) {
                if ( item1.type == ItemType.variable ) {
                    return -1;
                } else if ( item2.type == ItemType.variable ) {
                    return 1;
                }

                if ( item1.type == ItemType.function ) {
                    return -1;
                } else if ( item2.type == ItemType.function ) {
                    return 1;
                }
            }

            if ( item1.type == ItemType.function && item2.type == ItemType.function ) {
                if ( item1.name == 'constructor' ) {
                    return -1;
                } else if ( item2.name == 'constructor' ) {
                    return 1;
                }
            }

            if ( item1.name < item2.name ) {
                return -1;
            } else if ( item1.name > item2.name ) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    export class Variable extends Item {

        public type: ItemType = ItemType.variable;
        public dataType: string = '';
        public value: string = '';
        public optional: boolean = false;

        public move( namespace: Namespace ): void {
            if ( this.parent && this.parent instanceof Namespace ) {
                let index = this.parent.properties.indexOf( this );

                if ( index != -1 ) {
                    this.parent.properties.splice( index, 1 );
                }
            }

            this.parent = namespace;
            namespace.properties.push( this );
        }

    }

    export class Constant extends Variable {

        public type: ItemType = ItemType.constant;

    }

    export class Function extends Item {

        public type: ItemType = ItemType.function;
        public params: Array<Variable> = [];
        public returnType: string = '';

        public getSignature(): string {
            let sig: string;
            let params: Array<string>;
    
            sig = this.name + '(';
    
            params = [];
    
            for ( let param of this.params ) {
                params.push( param.name + ( param.optional ? '?' : '' ) + ': ' + param.dataType );
            }
    
            if ( params.length ) {
                sig += ' ' + params.join( ', ' ) + ' ';
            }
    
            sig += ')';
    
            if ( this.returnType ) {
                sig += ': ' + this.returnType;
            }
    
            return sig;
        }

        public move( namespace: Namespace ): void {
            if ( this.parent && this.parent instanceof Namespace ) {
                let index = this.parent.functions.indexOf( this );

                if ( index != -1 ) {
                    this.parent.functions.splice( index, 1 );
                }
            }

            this.parent = namespace;
            namespace.functions.push( this );
        }

    }

    export class Interface extends Item {

        public type: ItemType = ItemType.interface;
        public extends: string = '';
        public properties: Array<Variable> = [];
        public methods: Array<Function> = [];

        public sort(): void {
            this.properties.sort( this.compare );
            this.methods.sort( this.compare );
        }

        public move( namespace: Namespace ): void {
            if ( this.parent && this.parent instanceof Namespace ) {
                let index = this.parent.interfaces.indexOf( this );

                if ( index != -1 ) {
                    this.parent.interfaces.splice( index, 1 );
                }
            }

            this.parent = namespace;

            namespace.interfaces.push( this );
        }

    }

    export class Class extends Interface {

        public type: ItemType = ItemType.class;

        public move( namespace: Namespace ): void {
            if ( this.parent && this.parent instanceof Namespace ) {
                let index = this.parent.classes.indexOf( this );

                if ( index != -1 ) {
                    this.parent.classes.splice( index, 1 );
                }
            }

            this.parent = namespace;

            namespace.classes.push( this );
        }

    }

    export class Enum extends Item {

        public type: ItemType = ItemType.enum;
        public values: Array<Variable> = [];

        public move( namespace: Namespace ): void {
            if ( this.parent && this.parent instanceof Namespace ) {
                let index = this.parent.enums.indexOf( this );

                if ( index != -1 ) {
                    this.parent.enums.splice( index, 1 );
                }
            }

            this.parent = namespace;
            namespace.enums.push( this );
        }

    }

    export class Namespace extends Item {

        public type: ItemType = ItemType.namespace;

        public namespaces: Array<Namespace> = [];
        public classes: Array<Class> = [];
        public interfaces: Array<Interface> = [];
        public properties: Array<Variable> = [];
        public functions: Array<Function> = [];
        public enums: Array<Enum> = [];

        public sort(): void {
            this.namespaces.sort( this.compare );
            this.classes.sort( this.compare );
            this.interfaces.sort( this.compare );
            this.properties.sort( this.compare );
            this.functions.sort( this.compare );
            this.enums.sort( this.compare );

            for ( let item of this.namespaces ) {
                item.sort();
            }

            for ( let item of this.classes ) {
                item.sort();
            }

            for ( let item of this.interfaces ) {
                item.sort();
            }
        }

        public move( namespace: Namespace ): void {
            if ( this.parent && this.parent instanceof Namespace ) {
                let index = this.parent.namespaces.indexOf( this );

                if ( index != -1 ) {
                    this.parent.namespaces.splice( index, 1 );
                }
            }

            this.parent = namespace;

            namespace.namespaces.push( this );
        }

    }

    export class Parser {

        protected source: string;
        protected pos: number;
        protected maxPos: number;
        protected line: number;
        protected pendingTokens: Array<Token>;
        protected namespacesByPath: any;
        protected nonNamespacesByPath: any;

        public constructor( source?: string ) {
            this.setSource( source || '' );
        }

        public setSource( source: string ): void {
            this.source = source;
            this.reset();
        }

        public reset(): void {
            this.pos = 0;
            this.maxPos = this.source?.length ? this.source.length - 1 : -1;
            this.line = 1;
            this.pendingTokens = [];
            this.namespacesByPath = {};
            this.nonNamespacesByPath = {};
        }

        public getItems(): Array<Item> {
            let token: Token;
            let root: Namespace;

            this.reset();
            root = new Namespace();

            while ( token = this.parse() ) {
                switch ( token.type ) {
                    case TokenType.word:
                        // Ignore "declare" keywords
                        if ( token.value != 'declare' ) {
                            this.parseItem( token.value, root );
                        }
                        break;
                    
                    case TokenType.comment:
                        // Ignore comments
                        break;
                    
                    default:
                        throw 'Invalid top-level token (line ' + this.line + '): ' + token.value;
                }
            }

            root.sort();

            return root.namespaces;
        }

        protected assignItemToNamespace( item: Item, parent: Namespace ): void {
            let namespace: Namespace;
            let assigned: boolean = false;

            if ( item.path ) {
                if ( namespace = this.namespacesByPath[ item.path ] ) {
                    // Existing namespace with the same path:
                    if ( item instanceof Namespace ) {
                        // Move namespace's children into the existing namespace:
                        for ( let child of item.namespaces ) {
                            child.move( namespace );
                        }

                        for ( let child of item.classes ) {
                            child.move( namespace );
                        }

                        for ( let child of item.interfaces ) {
                            child.move( namespace );
                        }

                        for ( let child of item.properties ) {
                            child.move( namespace );
                        }

                        for ( let child of item.functions ) {
                            child.move( namespace );
                        }

                        for ( let child of item.enums ) {
                            child.move( namespace );
                        }

                        assigned = true;
                    } else if ( item instanceof Class ) {
                        // Keep classes on the same level of a namespace by the same name:
                        if ( namespace.parent && namespace.parent instanceof Namespace ) {
                            item.move( namespace.parent );
                            assigned = true;
                        }
                    } else {
                        // Move item into the existing namespace:
                        item.move( namespace );
                        assigned = true;
                    }
                } else {
                    // Check for namespace with parent path:
                    let index = item.path.lastIndexOf( '.' );

                    if ( index != -1 ) {
                        let prefix = item.path.substring( 0, index );

                        if ( namespace = this.namespacesByPath[ prefix ] ) {
                            // Move item into the existing parent namespace:
                            item.move( namespace );

                            if ( item instanceof Namespace ) {
                                this.namespacesByPath[ item.path ] = item;
                            }

                            assigned = true;
                        }
                    }

                    if ( item instanceof Namespace ) {
                        this.namespacesByPath[ item.path ] = item;

                        // Check for existing items that might need to be moved into this namespace:
                        for ( let child of this.nonNamespacesByPath[ item.path ] || [] ) {
                            if ( !( child instanceof Class ) ) {
                                child.move( item );
                            }
                        }
                    }
                }

                if ( !( item instanceof Namespace ) ) {
                    if ( this.nonNamespacesByPath[ item.path ] ) {
                        this.nonNamespacesByPath[ item.path ].push( item );
                    } else {
                        this.nonNamespacesByPath[ item.path ] = [ item ];
                    }
                }
            }

            if ( !assigned && parent ) {
                item.move( parent );
            }
        }

        protected parseItem( type: string, parent: Namespace ): void {
            switch ( type ) {
                case 'namespace':
                    let namespace = this.parseNamespace( parent );
                    this.assignItemToNamespace( namespace, parent );
                    break;

                case 'class':
                    let cls = this.parseClass( parent );
                    this.assignItemToNamespace( cls, parent );
                    break;

                case 'interface':
                    let intf = this.parseInterface( parent );
                    this.assignItemToNamespace( intf, parent );
                    break;

                case 'function':
                    let fnc = this.parseFunction( parent );
                    this.assignItemToNamespace( fnc, parent );
                    break;

                case 'enum':
                    let enm = this.parseEnum( parent );
                    this.assignItemToNamespace( enm, parent );
                    break;

                case 'const':
                    let c = this.parseConstant( [ TokenType.semicolon ], parent );
                    this.assignItemToNamespace( c, parent );
                    break;

                case 'let':
                case 'var':
                    let v = this.parseVariable( [ TokenType.semicolon ], parent );
                    this.assignItemToNamespace( v, parent );
                    break;

                default:
                    throw 'Unexpected token in namespace (line ' + this.line + '): ' + type;
            }
        }

        protected parseNamespace( parent: Item ): Namespace {
            let token = this.parse();

            if ( token?.type != TokenType.word ) {
                throw 'Invalid namespace name (line ' + this.line + '): "' + token.value + '"';
            }

            let result = new Namespace( token.value, parent, this.line );

            if ( (token = this.parse())?.type != TokenType.braceOpen ) {
                throw 'Namespace "' + result.name + '" has no body (line ' + this.line + ')';
            }

            while ( (token = this.parse())?.type && token.type != TokenType.braceClose ) {
                if ( token.type == TokenType.semicolon ) {
                    continue;
                }

                if ( token.type != TokenType.word ) {
                    throw 'Invalid token in namespace "' + result.name + '" (line ' + this.line + '): ' + token.value;
                }

                this.parseItem( token.value, result );
            }

            result.lastLine = this.line;

            if ( token?.type && token.type != TokenType.braceClose ) {
                throw 'Missing closing brace in namespace "' + result.name + '" (line ' + this.line + '), unexpected token: ' + token.value;
            }

            return result;
        }

        protected parseClass( parent: Item ): Class {
            return this.parseClassOrInterface( 'class', parent );
        }

        protected parseInterface( parent: Item ): Interface {
            return this.parseClassOrInterface( 'interface', parent );
        }

        protected parseClassOrInterface( type: string, parent: Item ): Interface {
            let token = this.parse();

            if ( token?.type != TokenType.word ) {
                throw 'Invalid ' + type + ' name (line ' + this.line + '): "' + token.value + '"';
            }

            let result: Interface;

            if ( type == 'interface' ) {
                result = new Interface( token.value, parent, this.line );
            } else {
                result = new Class( token.value, parent, this.line );
            }

            if ( (token = this.parse())?.type == TokenType.word && token.value == 'extends' ) {
                result.extends = this.parseType( [ TokenType.braceOpen ] );
            } else {
                this.unparse( token );
            }

            if ( (token = this.parse())?.type != TokenType.braceOpen ) {
                throw type[0].toUpperCase() + type.substring( 1 ) + ' "' + result.name + '" has no body (line ' + this.line + '), unexpected token: ' + token.value;
            }

            while ( (token = this.parse())?.type && token.type != TokenType.braceClose ) {
                if ( token.type != TokenType.word ) {
                    throw 'Invalid token in ' + type + ' "' + result.name + '" (line ' + this.line + '): ' + token.value;
                }

                let token2 = this.parse();

                if ( token2?.type && token2.type == TokenType.paranthesisOpen ) {
                    // Method:
                    this.unparse( token2 );
                    this.unparse( token );
                    let func = this.parseFunction( undefined );

                    if ( func ) {
                        result.methods.push( func );

                        if ( (token = this.parse())?.type != TokenType.semicolon ) {
                            this.unparse( token );
                        }
                    }
                } else {
                    // Property:
                    this.unparse( token2 );
                    this.unparse( token );
                    let prop = this.parseVariable( [ TokenType.semicolon, TokenType.comma, TokenType.braceClose ], undefined );

                    if ( prop ) {
                        result.properties.push( prop );

                        if ( (token = this.parse())?.type && token.type != TokenType.semicolon && token.type != TokenType.comma ) {
                            this.unparse( token );
                        }
                    }
                }
            }

            if ( token?.type && token.type != TokenType.braceClose ) {
                throw 'Missing closing brace in ' + type + ' "' + result.name + '" (line ' + this.line + '), unexpected token: ' + token.value;
            }

            result.lastLine = this.line;

            return result;
        }

        protected parseFunction( parent: Item ): Function {
            let token = this.parse();

            if ( token?.type != TokenType.word ) {
                throw 'Invalid function name (line ' + this.line + '): "' + token.value + '"';
            }

            let result = new Function( token.value, parent, this.line );

            if ( (token = this.parse())?.type != TokenType.paranthesisOpen ) {
                throw 'Function "' + result.name + '" has no params (line ' + this.line + '), unexpected token: ' + token.value;
            }

            let param: Variable;

            do {
                token = this.parse();

                if ( token?.type == TokenType.paranthesisClose ) {
                    param = undefined;
                } else {
                    if ( token?.type != TokenType.comma ) {
                        this.unparse( token );
                    }

                    if ( param = this.parseVariable( [ TokenType.comma, TokenType.paranthesisClose ], undefined ) ) {
                        result.params.push( param );
                    }
                }
            } while ( param );

            if ( token.type != TokenType.paranthesisClose ) {
                throw 'Function "' + result.name + '" has no closing paranthesis (line ' + this.line + ')';
            }

            result.lastLine = this.line;

            if ( (token = this.parse())?.type == TokenType.colon ) {
                while ( (token = this.parse())?.type && token.type != TokenType.semicolon ) {
                    result.returnType += token.value;
                }

                result.lastLine = this.line;
            } else if ( token?.type != TokenType.semicolon ) {
                this.unparse( token );
            }

            return result;
        }

        protected parseConstant( stopTokens: Array<TokenType>, parent: Item ): Constant {
            return this.parseVariableOrConstant( 'constant', stopTokens, parent );
        }

        protected parseVariable( stopTokens: Array<TokenType>, parent: Item ): Variable {
            return this.parseVariableOrConstant( 'variable', stopTokens, parent );
        }

        protected parseVariableOrConstant( type: string, stopTokens: Array<TokenType>, parent: Item ): Variable {
            let token = this.parse();
            let readonly: boolean = false;

            if ( token?.type == TokenType.word && token.value == 'readonly' ) {
                readonly = true;
                token = this.parse();
            }

            if ( token?.type != TokenType.word ) {
                throw 'Invalid ' + type + ' name (line ' + this.line + '): "' + token.value + '"';
            }

            let result: Variable;

            if ( type == 'constant' || readonly ) {
                result = new Constant( token.value, parent, this.line, this.line );
            } else {
                result = new Variable( token.value, parent, this.line, this.line );
            }

            token = this.parse();

            if ( token?.type == TokenType.question ) {
                result.optional = true;
                token = this.parse();
            }

            if ( token?.type == TokenType.colon ) {
                let stopTokens2: Array<TokenType>;

                if ( stopTokens.indexOf( TokenType.equals ) != -1 ) {
                    stopTokens2 = stopTokens;
                } else {
                    stopTokens2 = stopTokens.slice( 0 );
                    stopTokens2.push( TokenType.equals );
                }

                result.dataType = this.parseType( stopTokens2 );
            } else {
                this.unparse( token );
            }

            token = this.parse();

            if ( token?.type == TokenType.equals ) {
                token = this.parse();
                result.value = token?.value;
                result.lastLine = this.line;
                token = this.parse();
            }
            
            if ( token?.type ) {
                if ( stopTokens.indexOf( token.type ) != -1 ) {
                    this.unparse( token );
                } else {
                    throw 'Unexpected token in variable or param "' + result.name + '", expected: ' + stopTokens.join( ' ' ) + ' (line ' + this.line + '): ' + token.value;
                }
            }

            return result;
        }

        protected parseType( stopTokens: Array<TokenType> ): string {
            let result: string = '';
            let stack = [];
            let top: string;
            let token: Token;

            while ( (token = this.parse()) && ( stack.length || stopTokens.indexOf( token.type ) == -1 ) ) {
                result += token.value;

                switch ( token.type ) {
                    case TokenType.braceOpen:
                        stack.push( '}' );
                        break;

                    case TokenType.braceClose:
                        if ( !stack.length ) {
                            throw 'Unexpected token in type (line ' + this.line + '): ' + token.value;
                        }

                        top = stack.pop();

                        if ( top != '}' ) {
                            throw 'Unexpected token in type, expected "' + top + '" (line ' + this.line + '): ' + token.value;
                        }
                        break;

                    case TokenType.bracketOpen:
                        stack.push( ']' );
                        break;

                    case TokenType.bracketClose:
                        if ( !stack.length ) {
                            throw 'Unexpected token in type (line ' + this.line + '): ' + token.value;
                        }

                        top = stack.pop();

                        if ( top != ']' ) {
                            throw 'Unexpected token in type, expected "' + top + '" (line ' + this.line + '): ' + token.value;
                        }
                        break;
    
                    case TokenType.chevronOpen:
                        stack.push( '>' );
                        break;
    
                    case TokenType.chevronClose:
                        if ( !stack.length ) {
                            throw 'Unexpected token in type (line ' + this.line + '): ' + token.value;
                        }

                        top = stack.pop();

                        if ( top != '>' ) {
                            throw 'Unexpected token in type, expected "' + top + '" (line ' + this.line + '): ' + token.value;
                        }
                        break;
    
                    case TokenType.paranthesisOpen:
                        stack.push( ')' );
                        break;
    
                    case TokenType.paranthesisClose:
                        if ( !stack.length ) {
                            throw 'Unexpected token in type (line ' + this.line + '): ' + token.value;
                        }

                        top = stack.pop();

                        if ( top != ')' ) {
                            throw 'Unexpected token in type, expected "' + top + '" (line ' + this.line + '): ' + token.value;
                        }
                        break;

                    case TokenType.comma:
                    case TokenType.colon:
                        result += ' ';
                }
            }

            if ( token?.type && stopTokens.indexOf( token.type ) != -1 ) {
                this.unparse( token );
            }

            return result.trim();
        }

        protected parseEnum( parent: Item ): Enum {
            let token = this.parse();

            if ( token?.type != TokenType.word ) {
                throw 'Invalid enum name (line ' + this.line + '): "' + token.value + '"';
            }

            let result = new Enum( token.value, parent, this.line, this.line );

            if ( (token = this.parse())?.type != TokenType.braceOpen ) {
                throw 'Enum "' + result.name + '" has no body (line ' + this.line + ')';
            }

            let index: number = 0;

            while ( (token = this.parse())?.type && token.type != TokenType.braceClose ) {
                if ( token.type == TokenType.comma ) {
                    continue;
                }

                if ( token.type != TokenType.word ) {
                    throw 'Invalid token in enum "' + result.name + '" (line ' + this.line + '): ' + token.value;
                }

                let v = new Variable( token.value, result, this.line, this.line );
                result.values.push( v );
                token = this.parse();

                if ( token?.type == TokenType.equals ) {
                    if ( (token = this.parse())?.type == TokenType.string || token?.type == TokenType.number ) {
                        v.value = token.value;
                        v.lastLine = this.line;
                        result.lastLine = this.line;
                    }
                } else if ( token?.type != TokenType.braceClose ) {
                    v.value = '' + index++;
                    v.lastLine = this.line;
                    result.lastLine = this.line;
                    this.unparse( token );
                }
            }

            if ( token?.type != TokenType.braceClose ) {
                throw 'Missing closing brace in enum "' + result.name + '" (line ' + this.line + '), unexpected token: ' + token.value;
            }

            return result;
        }

        public parse(): Token {

            if ( this.pendingTokens.length ) {
                return this.pendingTokens.pop();
            }

            this.skipWhitespaces();

            if ( this.pos > this.maxPos ) {
                return undefined;
            }

            let start: number = this.pos;
            let end: number = this.pos;
            let type: TokenType = TokenType.none;
            let c: string;

            c = this.source.charAt( end++ );

            switch ( c ) {
                // Comment:
                case '/':
                    c = end <= this.maxPos ? this.source.charAt( end++ ) : '';

                    if ( c == '/' ) {
                        // Line comment:
                        type = TokenType.comment;

                        while ( end <= this.maxPos && !( ( c = this.source.charAt( end ) ) == '\r' || c == '\n' ) ) {
                            end++;
                        }

                        if ( c == '\n' ) {
                            this.line++;
                        }
                    } else if ( c == '*' ) {
                        // Block comment:
                        type = TokenType.comment;

                        let prev: string;
                        end++;

                        while ( end <= this.maxPos && ( ( c = this.source.charAt( end ) ) != '/' || prev != '*' ) ) {
                            end++;
                            prev = c;

                            if ( c == '\n' ) {
                                this.line++;
                            }
                        }
                    } else {
                        // Error
                        throw 'Invalid character after "/" (line ' + this.line + '): ' + c;
                    }
                    break;

                // String:
                case '"':
                case '\'':
                    type = TokenType.string;

                    let prev: string;
                    let quote: string = c;

                    while ( end <= this.maxPos && ( ( c = this.source.charAt( end ) ) != quote || prev == '\\' ) ) {
                        end++;
                        prev = c;

                        if ( c == '\n' ) {
                            this.line++;
                        }
                    }

                    if ( end > start && c == quote ) {
                        end++;
                    }
                    break;

                case '{':
                    type = TokenType.braceOpen;
                    break;

                case '}':
                    type = TokenType.braceClose;
                    break;

                case '(':
                    type = TokenType.paranthesisOpen;
                    break;

                case ')':
                    type = TokenType.paranthesisClose;
                    break;

                case '[':
                    type = TokenType.bracketOpen;
                    break;

                case ']':
                    type = TokenType.bracketClose;
                    break;

                case '<':
                    type = TokenType.chevronOpen;
                    break;

                case '>':
                    type = TokenType.chevronClose;
                    break;

                case '?':
                    type = TokenType.question;
                    break;

                case ':':
                    type = TokenType.colon;
                    break;

                case '=':
                    if ( end <= this.maxPos && this.source.charAt( end ) == '>' ) {
                        type = TokenType.arrow;
                        end++;
                    } else {
                        type = TokenType.equals;
                    }
                    break;

                case '|':
                    type = TokenType.pipe;
                    break;

                case ',':
                    type = TokenType.comma;
                    break;

                case ';':
                    type = TokenType.semicolon;
                    break;

                default:
                    if ( ( c >= 'a' && c <= 'z' ) || ( c >= 'A' && c <= 'Z' ) || c == '_' || c == '$' ) {
                        // Identifier or keyword:
                        type = TokenType.word;

                        while ( end <= this.maxPos && ( ( ( c = this.source.charAt( end ) ) >= 'a' && c <= 'z' ) ) || ( c >= 'A' && c <= 'Z' ) || ( c >= '0' && c <= '9' ) || c == '_' || c == '$' || c == '.' ) {
                            end++;
                        }
                    } else if ( c >= '0' && c <= '9' ) {
                        // Number value:
                        type = TokenType.number;

                        while ( end <= this.maxPos && ( ( c = this.source.charAt( end ) ) >= '0' && c <= '9' ) ) {
                            end++;
                        }
                    } else {
                        throw 'Unexpected character at offset ' + start + ' (line ' + this.line + '): ' + c;
                    }
            }

            this.pos = end;
            
            if ( end > start ) {
                // Strip quotation marks from string values:
                if ( type == TokenType.string ) {
                    start++;
                    end--;
                }

                return new Token( type, this.source.substring( start, end ) );
            } else {
                return undefined;
            }
        }

        protected unparse( token: Token ): void {
            this.pendingTokens.push( token );
        }

        protected skipWhitespaces(): void {
            let c: string;

            while ( this.pos <= this.maxPos && ( ( c = this.source.charAt( this.pos ) ) == ' ' || c == '\t' || c == '\r' || c == '\n' ) ) {
                this.pos++;

                if ( c == '\n' ) {
                    this.line++;
                }
            }
        }

    }

}