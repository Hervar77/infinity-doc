# infinity.list

Provides efficient list-type operations with data collections. Should be preferred over arrays for performance reasons.

Module: `infinity.list`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [list](#infinity.list_class)

<div class="doc-toc-heading">Enums:</div>

- [operator](#infinity.list.operator_enum)
- [type](#infinity.list.type_enum)

</div>


Example:

```typescript
infinity.loadModule('infinity.list');

var list = new infinity.list(infinity.list.type.generic);
list.add(1);
console.debug(list.toArray());
//[1]
list.add(true);
console.debug(list.toArray());
//[1,true]
list.add('Hello World!');
console.debug(list.toArray());
//[1,true,"Hello World!"]
list.add({id: 1, name: 'Tobias'});
console.debug(list.toArray());
//[1,true,"Hello World!",{"id":1,"name":"Tobias"}]
list.add([1,2,3]);
console.debug(list.toArray());
//[1,true,"Hello World!",{"id":1,"name":"Tobias"},[1,2,3]]
list.insert(1, false);
console.debug(list.toArray());
//[1,false,true,"Hello World!",{"id":1,"name":"Tobias"},[1,2,3]]
list.remove(0);
console.debug(list.toArray());
//[false,true,"Hello World!",{"id":1,"name":"Tobias"},[1,2,3]]
list.exchange(1,2);
console.debug(list.toArray());
//[false,"Hello World!",true,{"id":1,"name":"Tobias"},[1,2,3]]
list.move(1,2);
console.debug(list.toArray());
//[false,true,"Hello World!",{"id":1,"name":"Tobias"},[1,2,3]]
list.put(0, 'Hi');
console.debug(list.toArray());
//["Hi",true,"Hello World!",{"id":1,"name":"Tobias"},[1,2,3]]
console.debug(list.indexOf('Hi'));
//0
list.sort();
var a = list.toArray();
console.debug(a);
//["Hello World!","Hi",[1,2,3],{"id":1,"name":"Tobias"},true]
console.debug(list.indexOf('Hi'));
//1
list.clear();
list.fromArray(a);
console.debug(list.toArray());
//["Hello World!","Hi",[1,2,3],{"id":1,"name":"Tobias"},true]
list.free();

var list = new infinity.list(infinity.list.type.number);
list.sorted = true;
list.add(1);
console.debug(list.toArray());
//[1]
list.add(5);
console.debug(list.toArray());
//[1,5]
list.add(3);
console.debug(list.toArray());
//[1,3,5]
list.add(8);
console.debug(list.toArray());
//[1,3,5,8]
list.add(2);
console.debug(list.toArray());
//[1,2,3,5,8]
list.insert(1, 10);
console.debug(list.toArray());
//[1,10,2,3,5,8]
list.remove(0);
console.debug(list.toArray());
//[10,2,3,5,8]
list.exchange(1,2);
console.debug(list.toArray());
//[10,3,2,5,8]
list.move(1,2);
console.debug(list.toArray());
//[10,2,3,5,8]
list.put(0, 7);
console.debug(list.toArray());
//[7,2,3,5,8]
console.debug(list.indexOf(7));
//0
list.sort();
var a = list.toArray();
console.debug(a);
//[2,3,5,7,8]
console.debug(list.indexOf(7));
//3
list.add(4);
console.debug(list.toArray());
//[2,3,4,5,7,8]
list.clear();
list.fromArray(a);

console.debug('--------------------');
console.debug('list a: ' + list.toArray());
//list a: 2,3,5,7,8

var list2 = new infinity.list(infinity.list.type.number);
list2.fromArray([1, 5, 3, 9, 11, 12]);
console.debug('list b: ' + list2.toArray());
// list b: 1,5,3,9,11,12
list.assign(list2, infinity.list.operator.or);
console.debug('list a or b: ' + list.toArray());
//list a or b: 1,2,3,5,7,8,9,11,12
list2.free();
console.debug('--------------------');

//Comparison to JavaScript arrays:

list.clear();
list.sorted = false;
console.time('a');

for (var i = 0; i < 1000000; i++)
  list.add(Math.round(Math.random() * 1000000));

list.sort();
console.debug(list.toArray(0, 30));
//[1,4,4,4,5,9,9,12,12,13,15,15,16,20,20,21,23,23,23,23,24,25,25,26,26,26,27,27,29,30]
console.timeEnd('a');
//a: 3,53103140s
list.free();

var a = [];
console.time('b');

for (var i = 0; i < 1000000; i++)
  a.push(Math.round(Math.random() * 1000000));

a.sort(function(a, b){return a-b});
console.debug(a.slice(0, 30));
//[3,3,4,4,5,7,8,8,8,9,10,11,13,15,18,19,19,20,21,22,22,23,24,26,28,30,32,33,35,37]
console.timeEnd('b');
//b: 15,54191280s

```


---

<div class="doc-heading">Classes</div>

---

## list {: #infinity.list_class .doc-class}

The class for operations with lists.

<div class="doc-toc" markdown="1">

**Properties:**

- [capacity](#infinity.list.capacity_property)
- [sorted](#infinity.list.sorted_property)
- [count](#infinity.list.count_property)

**Methods:**

- [constructor()](#infinity.list.constructor_function)
- [add()](#infinity.list.add_function)
- [assign()](#infinity.list.assign_function)
- [clear()](#infinity.list.clear_function)
- [contains()](#infinity.list.contains_function)
- [exchange()](#infinity.list.exchange_function)
- [first()](#infinity.list.first_function)
- [free()](#infinity.list.free_function)
- [fromArray()](#infinity.list.fromArray_function)
- [get()](#infinity.list.get_function)
- [indexOf()](#infinity.list.indexOf_function)
- [insert()](#infinity.list.insert_function)
- [last()](#infinity.list.last_function)
- [move()](#infinity.list.move_function)
- [put()](#infinity.list.put_function)
- [remove()](#infinity.list.remove_function)
- [sort()](#infinity.list.sort_function)
- [toArray()](#infinity.list.toArray_function)
- [trim()](#infinity.list.trim_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.list');
let myList = new infinity.list();
```

---

**Properties**

---

### capacity {: #infinity.list.capacity_property .doc-property}

Type: `number`

Gets or sets the number of elements that the current list can contain before resizing is required.

---

### sorted {: #infinity.list.sorted_property .doc-property}

Type: `boolean`

Specifies whether the current list is sorted or not.

---

### count {: #infinity.list.count_property .doc-property .doc-readonly}

Type: `number`

Gets the number of elements contained in the current list.

---

**Methods**

---

### constructor() {: #infinity.list.constructor_function .doc-function}

Lets you create an INFINITY.JS list object instance. Lets you optionally specify the list type.

Signature:
```typescript
constructor( type?: infinity.list.type )
```

Parameters:

- type: [`infinity.list.type`](#infinity.list.type_enum), optional
  >The type of list to create.


Example:

```typescript
infinity.loadModule('infinity.list');
let myList  = new infinity.list(infinity.list.type.generic);
```

---

### add() {: #infinity.list.add_function .doc-function}

Adds the given data to the end of the current list.

Signature:
```typescript
add( value: any ): number
```

Parameters:

- value: `any`
  >The data to add.


Return type: `number`

Example:

```typescript
myList.add(1);
console.debug(myList.toArray());
//[1]
list.add([3, 4, 5, {prop1: 1, prop2: [1,2,'Somedata']}]);
console.debug(myList.toArray());
//[1,[3,4,5,{"prop1":1,"prop2":[1,2,"Somedata"]}]]

```

---

### assign() {: #infinity.list.assign_function .doc-function}

Assigns data from another specified list to the current list.

Signature:
```typescript
assign( src: infinity.list, mode?: infinity.list.operator ): void
```

Parameters:

- src: `infinity.list`
  >The list to assign data from.

- mode: `infinity.list.operator`, optional
  >The assignment mode.


Example:

```typescript
infinity.loadModule('infinity.list');
let myList = new infinity.list(infinity.list.type.number);
myList.add(12);
let myList2 = new infinity.list(infinity.list.type.number);
myList2.add(345);
myList.assign(myList2, infinity.list.operator.or);
console.debug(myList.toArray());
//[12,345]
```

---

### clear() {: #infinity.list.clear_function .doc-function}

Clears data from the current list.

Signature:
```typescript
clear(): void
```

Example:

```typescript
myList.clear();
```

---

### contains() {: #infinity.list.contains_function .doc-function}

Reports, whether the current list contains the specified data.

Signature:
```typescript
contains( value: any ): boolean
```

Parameters:

- value: `any`
  >The data to check for.


Return type: `boolean`

Example:

```typescript
if(myList.contains(3)){
  //...
}
```

---

### exchange() {: #infinity.list.exchange_function .doc-function}

Exchanges the position of the specified elements inside the current list.

Signature:
```typescript
exchange( index1: number, index2: number ): void
```

Parameters:

- index1: `number`
  >The first element to exchange.

- index2: `number`
  >The second element to exchange.


Example:

```typescript
myList.exchange(3, 5);
```

---

### first() {: #infinity.list.first_function .doc-function}

Returns the value of the first element in the current list.

Signature:
```typescript
first(): any
```

Return type: `any`

Example:

```typescript
let firstData = myList.first();
```

---

### free() {: #infinity.list.free_function .doc-function}

Frees the memory previously occupied by of the list object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myList.free();
```

---

### fromArray() {: #infinity.list.fromArray_function .doc-function}

Builds a list out of the given array.

Signature:
```typescript
fromArray( a: Array<any> ): void
```

Parameters:

- a: `Array<any>`
  >The array to build the list of.


Example:

```typescript
infinity.loadModule('infinity.list');
let a = [1, 2, 'a'];
let myList = new infinity.list(infinity.list.type.generic);
myList.fromArray(a);
```

---

### get() {: #infinity.list.get_function .doc-function}

Returns the value of the element from the specified position of the current list.

Signature:
```typescript
get( index: number ): any
```

Parameters:

- index: `number`
  >The position of the element to retrieve.


Return type: `any`

Example:

```typescript
let data = myList.get(4);
```

---

### indexOf() {: #infinity.list.indexOf_function .doc-function}

Returns the position of the element containing the specified data inside the current list.

Signature:
```typescript
indexOf( value: any ): number
```

Parameters:

- value: `any`
  >The data to examine the list for.


Return type: `number`

Example:

```typescript
let indexOfDataString = myList.indexOf('data');
```

---

### insert() {: #infinity.list.insert_function .doc-function}

Inserts the data at the specified position, putting the previous data and everything that follows after the specified position

Signature:
```typescript
insert( index: number, value: any ): void
```

Parameters:

- index: `number`
  >The position at which the data should be inserted.

- value: `any`
  >The data to insert.


Example:

```typescript
myList.insert(3, 'inserted');
```

---

### last() {: #infinity.list.last_function .doc-function}

Returns the value of the last element inside the current list.

Signature:
```typescript
last(): any
```

Return type: `any`

Example:

```typescript
let lastData = myList.last();
```

---

### move() {: #infinity.list.move_function .doc-function}

Reassigns the specified element to another position inside the current list. 

Signature:
```typescript
move( index1: number, index2: number ): void
```

Parameters:

- index1: `number`
  >The element to be moved.

- index2: `number`
  >The new position to move the element to.


Example:

```typescript
myList.move(3, 5);
```

---

### put() {: #infinity.list.put_function .doc-function}

Puts the given data to the specified position, replacing data that was there before.

Signature:
```typescript
put( index: number, value: any ): void
```

Parameters:

- index: `number`
  >The position inside the list to put data at.

- value: `any`
  >The data to put at the specified position.


Example:

```typescript
myList.put(2, "replaced");
```

---

### remove() {: #infinity.list.remove_function .doc-function}

Removes an element from the specified position of the current list.

Signature:
```typescript
remove( index: number ): void
```

Parameters:

- index: `number`
  >The position to remove an element from.


Example:

```typescript
myList.remove(3);
```

---

### sort() {: #infinity.list.sort_function .doc-function}

Sorts the current list.

Signature:
```typescript
sort(): void
```

Example:

```typescript
let myList = new infinity.list(infinity.list.type.generic);
myList.fromArray([8, "data", 3, 5,"string"]);
myList.sort();
console.debug(myList.toArray());
//["data","string",3,5,8]
```

---

### toArray() {: #infinity.list.toArray_function .doc-function}

Returns an array built of the data inside the current list.

Signature:
```typescript
toArray( index?: number, count?: number ): Array<any>
```

Parameters:

- index: `number`, optional
  >The position inside the list to start at.

- count: `number`, optional
  >The amount of elements to built from.


Return type: `Array<any>`

Example:

```typescript
myList.toArray();
```

---

### trim() {: #infinity.list.trim_function .doc-function}

Trims the capacity of the current list to the current amount of present elements.

Signature:
```typescript
trim(): void
```

Example:

```typescript
infinity.loadModule('infinity.list');
let myList = new infinity.list(infinity.list.type.number);
myList.fromArray([1,2,3,4,5,6,7,8,9,10]);
console.debug(myList.capacity)
myList.remove(9);
myList.trim();
console.debug(myList.capacity)
```



---

<div class="doc-heading">Enums</div>

---

## infinity.list.operator {: #infinity.list.operator_enum .doc-enum}

Values:

- copy: `0`
  >The receiving list will be completely overwritten by the assigned list.

- and: `1`
  >Only elements with identical data between the lists will be kept inside the receiving list.

- or: `2`
  >The receiving list will be combined with the assigned list.

- not: `3`
  >The receiving list receives only elements containing data that isn't present in it yet.

Example:

```typescript
myList.assign(myList2, infinity.list.operator.not)
```



---

## infinity.list.type {: #infinity.list.type_enum .doc-enum}

Values:

- generic: `0`
  >For a list that accepts any data.

- number: `1`
  >For a list that accepts only numbers.

- string: `2`
  >For a list that accepts only strings.

Example:

```typescript
infinity.loadModule('infinity.list');
var myList = new infinity.list(infinity.list.type.generic);
```





