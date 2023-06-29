# infinity.scheduler

Provides functionality for (CronJob-like) execution timing of scripts, as long as the infinity instance is running.

Module: `infinity.scheduler`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [scheduler](#infinity.scheduler_class)

<div class="doc-toc-heading">Enums:</div>

- [priority](#infinity.scheduler.priority_enum)

</div>


Example:

main.ts:

```typescript
infinity.loadModule('infinity.scheduler');

let myScheduler = new infinity.scheduler();
myScheduler.add('testTask', '* * * * * * */10',  'task.js'); 

while(!infinity.terminated){
  myScheduler.processTasks();
  infinity.sleep(500);
}
```

task.ts:

```typescript
infinity.loadModule('infinity.fileSystem')
infinity.loadModule('infinity.date')

let entry = infinity.date.formatLocal('dd.mm.yyyy - hh:mm:ss', infinity.date.now('Europe/Berlin')) + ': task done\n';

infinity.file.writeString(infinity.current.root + '../log.txt', entry, infinity.encoding.utf8, true);
```


log.txt after execution:

```shell
08.04.2021 - 15:00:20: task done
08.04.2021 - 15:00:30: task done
08.04.2021 - 15:00:40: task done
```

---

<div class="doc-heading">Classes</div>

---

## scheduler {: #infinity.scheduler_class .doc-class}

The class for operations with scheduled tasks in INFINITY.JS.

<div class="doc-toc" markdown="1">

**Methods:**

- [constructor()](#infinity.scheduler.constructor_function)
- [add()](#infinity.scheduler.add_function)
- [clear()](#infinity.scheduler.clear_function)
- [free()](#infinity.scheduler.free_function)
- [processTasks()](#infinity.scheduler.processTasks_function)
- [remove()](#infinity.scheduler.remove_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.scheduler');
let myScheduler = new infinity.scheduler();
```

---

**Methods**

---

### constructor() {: #infinity.scheduler.constructor_function .doc-function}

Lets you create an INFINITY.JS scheduler object instance. Doesn't accept parameters.

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.scheduler');
let myScheduler = new infinity.scheduler();
```

---

### add() {: #infinity.scheduler.add_function .doc-function}

Adds a task to the scheduler object instance.

Signature:
```typescript
add( name: string, plan: string, scriptName: string, priority?: infinity.scheduler.priority ): void
```

Parameters:

- name: `string`
  >the internal name for the task

- plan: `string`
  >the time schedule for the task (see below)

- scriptName: `string`
  >filename, relative path (location relative to the folder with the used INFINITY.JS executable file) or absolute path to the script to be executed

- priority: [`infinity.scheduler.priority`](#infinity.scheduler.priority_enum), optional
  >the process priority for the script according to [`infinity.scheduler.priority`](#infinity.scheduler.priority_enum)

The `plan` parameter follows the format used by unix/linux cronjobs. It consists of several fields separated by a space:

```
<minute> <hour> <day> <month> <weekday> <year> <seconds> <limit>
```

The fields in order from left to right are:

- minute (range: 0-59)
- hour (range: 0-23)
- day of the month (range: 1-31)
- month of the year (range: 1-12)
- day of the week (range: 1-7, 1 = monday, 2 = tuesday, etc.)
- year (range: 1900-3000)
- seconds (rand: 0-59, default: 0)
- execution limit (range: 0-0xffffffff, default: 0 = unlimited)

Each of these fields may contain an asterisk as a wildcard, which would match every possible value of that field (e.g. a `*` in the `hour` field would mean that the task is run every hour). A field may also contain a comma-separated list of values or a range of values separated by a dash (e.g. `8,14,20` in the `hour` field would run the task at eight o'clock in the morning and at two and eight o'clock in the afternoon/evening). It's also possible to append a slash with a value after an asterisk or range, indicating that the task should run at a certain interval (e.g. `*/4` in the `hours` field would run the task every four hours).

If a value is omitted, an asterisk will be used as a default, except where noted (the default for `seconds` and `limit` is 0).

Here's some examples for the `plan` parameter:

- `0 6 * * 1` this will run the task at 6 o'clock in the morning on every monday
- `0 6` this will run the task every day at 6 o'clock in the morning
- `*/5` will run the task every 5 minutes
- `* * * * * * 30` will run the task every minute on the 30th second
- `0 8,14,20` will run the task at 8, 14 and 20 o'clock every day
- `0 0 1-3` will run the task at midnight of the first three days each month
- `0 0 1 1,4,7,10` will run the task at midnight on the first day of January, April, July and October
- `*/5 6 * * * * 0 3` will run the task three times every 5 minutes from 6 o'clock in the morning, every day

Example:

```typescript
myScheduler.add('testTask', '*/5 1-3 1 1,4,7,10',  'task.js'); 
```

---

### clear() {: #infinity.scheduler.clear_function .doc-function}

Clears all tasks from the scheduler object instance.

Signature:
```typescript
clear(): void
```

Example:

```typescript
myScheduler.clear();
```

---

### free() {: #infinity.scheduler.free_function .doc-function}

Frees the memory previously occupied by of the INFINITY.JS scheduler object instance.

Signature:
```typescript
free(): void
```

Example:

```typescript
myScheduler.free();
```

---

### processTasks() {: #infinity.scheduler.processTasks_function .doc-function}

Initializes the check for tasks inside the scheduler object instance and starts the execution of due tasks.

Signature:
```typescript
processTasks(): boolean
```

Return type: `boolean`

Example:

```typescript
while(!infinity.terminated){
  myScheduler.processTasks();
  infinity.sleep(500);
}
```

---

### remove() {: #infinity.scheduler.remove_function .doc-function}

Removes the specified task from the scheduler object instance.

Signature:
```typescript
remove( name: string ): boolean
```

Parameters:

- name: `string`
  >the internal name of the task to be removed


Return type: `boolean`

Example:

```typescript
myScheduler.remove('testTask');
```



---

<div class="doc-heading">Enums</div>

---

## infinity.scheduler.priority {: #infinity.scheduler.priority_enum .doc-enum}

Values:

- idle: `0`
  >stands for the task running only when the system is idle

- lowest: `1`
  >stands for the task having priority above `idle` but below `lower`

- lower: `2`
  >stands for the task having priority above `lowest` but below `normal`

- normal: `3`
  >stands for the task having no special prioritizing needs

- higher: `4`
  >stands for the task having priority above `normal` but below `highest`

- highest: `5`
  >stands for the task having priority above `higher` but below `timeCritical`

- timeCritical: `6`
  >stands for the task having the highest possible priority.

Example:

```typescript
infinity.loadModule('infinity.scheduler');
let priority = infinity.scheduler.priority.idle;
```





