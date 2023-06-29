# infinity.date

Provides functionality for retrieving timestamps according to supported timezones and converting them to various date and time formats.

Module: `infinity.date`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Properties:</div>

- [nullTimestamp](#infinity.date.nullTimestamp_property)

<div class="doc-toc-heading">Functions:</div>

- [abbreviation](#infinity.date.abbreviation_function)
- [displayName](#infinity.date.displayName_function)
- [formatLocal](#infinity.date.formatLocal_function)
- [formatUniversal](#infinity.date.formatUniversal_function)
- [getTimeZoneFromAlias](#infinity.date.getTimeZoneFromAlias_function)
- [id](#infinity.date.id_function)
- [isStandardTime](#infinity.date.isStandardTime_function)
- [listAliases](#infinity.date.listAliases_function)
- [listTimeZones](#infinity.date.listTimeZones_function)
- [now](#infinity.date.now_function)
- [toISO8601Format](#infinity.date.toISO8601Format_function)
- [toLocalTime](#infinity.date.toLocalTime_function)
- [toUniversalTime](#infinity.date.toUniversalTime_function)
- [utcOffset](#infinity.date.utcOffset_function)

</div>

<div class="doc-toc-heading">Formatting:</div>

- [Date and time formats](#infinity.date.dateTimeFormats)

Example:

```typescript
infinity.loadModule('infinity.date');

let tz="Tokyo Standard Time";
let abbreviation = infinity.date.abbreviation(tz);
let displayName = infinity.date.displayName(tz);
let id = infinity.date.id(tz);
console.debug(displayName);
//JT
console.debug(abbreviation);
//GMT+09
console.debug(id);
//Asia/Tokyo

console.debug(infinity.date.formatLocal('d-m-Y', infinity.date.now('Europe/Berlin')));
//27-4-21

let localTimeDate = infinity.date.formatLocal('dd-mm-yyyy hh:mm:ss', 1893456000000);
console.debug(localTimeDate);
//01-01-2030 00:00:00

let universalTimeDate = infinity.date.formatUniversal('Europe/Madrid', 'dd-mm-yyyy hh:mm:ss', 1893456000000);
console.debug(universalTimeDate);
//01-01-2030 01:00:00

let ISO8601time = infinity.date.toISO8601Format('Europe/Berlin', 1893456000000);
console.debug(ISO8601time);
//2030-01-01T00:00:00.000+01:00
```

---

<div class="doc-heading">Functions</div>

---

## abbreviation() {: #infinity.date.abbreviation_function .doc-function}

Returns the "GMT abbreviation for the given time zone.

Signature:
```
abbreviation( timeZone: string ): string
```

Parameters:

- timeZone: `string`
  >the name of the time zone for which the abbreviation should be returned


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.date');
let abbreviation = infinity.date.abbreviation('New Zealand Standard Time');
console.debug(abbreviation);
//GMT+02
```

---

## displayName() {: #infinity.date.displayName_function .doc-function}

Returns the general display name that represents the time zone.

Signature:
```
displayName( timeZone: string ): string
```

Parameters:

- timeZone: `string`
  >the name of the time zone for which the display name should be returned


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.date');
let displayName = infinity.date.displayName("Tokyo Standard Time");
console.debug(displayName);
//"JT"
```

---

## formatLocal() {: #infinity.date.formatLocal_function .doc-function}

Returns the time formatted according to the given `format` string, considering only the local time zone.

Signature:
```
formatLocal( format: string, value: number ): string
```

Parameters:

- format: `string`
  >the date format according to [Date and time formats](#infinity.date.dateTimeFormats)

- value: `number`
  >the timestamp which should be returned as a formatted date string


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.date');
//local time zone: Europe/Berlin
let localTimeDate = infinity.date.formatLocal('dd-mm-yyyy hh:mm:ss', 1893456000000);
console.debug(localTimeDate);
//01-01-2030 00:00:00
```

---

## formatUniversal() {: #infinity.date.formatUniversal_function .doc-function}

Returns the time formatted according to the given `format` string, considering the given time zone.

Signature:
```
formatUniversal( timeZone: string, format: string, value: number ): string
```

Parameters:

- timeZone: `string`
  >the name of the timezone for which the time should be returned

- format: `string`
  >the date format according to [Date and time formats](#infinity.date.dateTimeFormats)

- value: `number`
  >the timestamp which should be returned as a formatted date string


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.date');
let universalTimeDate = infinity.date.formatUniversal('Europe/Madrid', 'dd-mm-yyyy hh:mm:ss', 1893456000000);
console.debug(universalTimeDate);
//01-01-2030 01:00:00
```

---

## getTimeZoneFromAlias() {: #infinity.date.getTimeZoneFromAlias_function .doc-function}

Returns the name of a time zone according to the given alias.

Signature:
```
getTimeZoneFromAlias( alias: string ): string
```

Parameters:

- alias: `string`
  >the alias of the timezone that is being searched for


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.date');
let timeZone = infinity.date.getTimeZoneFromAlias(alias);
```

---

## id() {: #infinity.date.id_function .doc-function}

Returns a time zone identifier which is a string that should uniquely identify the timezone.

Signature:
```
id( timeZone: string ): string
```

Parameters:

- timeZone: `string`
  >the name of the time zone for which the identifier should be returned


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.date');
let id = infinity.date.id("New Zealand Standard Time");
console.debug(id);
//Pacific/Auckland

```

---

## isStandardTime() {: #infinity.date.isStandardTime_function .doc-function}

Checks whether the given local date and time is situated outside the DST (Daylight Savings Time) period.

Signature:
```
isStandardTime( timeZone: string, local: number, forceDaylight?: boolean ): boolean
```

Parameters:

- timeZone: `string`
  >specifies the timezone to be checked in

- local: `number`
  >the time stamp to be checked as a Unix Epoch timestamp in milliseconds

- forceDaylight: `boolean`, optional
  >specifes how ambiguous time is treated


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.date');
if ( infinity.date.isStandardTime(timeZone, local) ) {
  //...
}
```

---

## listAliases() {: #infinity.date.listAliases_function .doc-function}

Returns a list of all time zone aliases that are available within INFINITY.JS date.

Signature:
```
listAliases(): infinity.stringArray
```

Return type: `infinity.stringArray`

Example:

```typescript
infinity.loadModule('infinity.date');
let aliases = infinity.date.listAliases();
```

---

## listTimeZones() {: #infinity.date.listTimeZones_function .doc-function}

Returns a list of all time zones that are available within INFINITY.JS date.

Signature:
```
listTimeZones(): infinity.stringArray
```

Return type: `infinity.stringArray`

Example:

```typescript
infinity.loadModule('infinity.date');
let timeZones = infinity.date.listTimeZones();
```

---

## now() {: #infinity.date.now_function .doc-function}

Returns a timestamp representing the current time in milliseconds starting at the Unix Epoch.

Signature:
```
now( timeZone: string, asUtc?: boolean ): number
```

Parameters:

- timeZone: `string`
  >the name of the time zone for which the timestamp should be returned

- asUtc: `boolean`, optional
  >whether to return the timestamp according to Coordinated Universal Time


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.date');
let timestamp = infinity.date.now('Europe/Berlin');
```

---

## toISO8601Format() {: #infinity.date.toISO8601Format_function .doc-function}

Returns the given timestamp, considering the provided time zone, formatted according to ISO 8601.

Signature:
```
toISO8601Format( timeZone: string, local: number ): string
```

Parameters:

- timeZone: `string`
  >the name of the time zone for which the formatted time string should be returned

- local: `number`
  >the time stamp as a Unix Epoch timestamp in milliseconds to be returned as an ISO 8601 formatted string

Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.date');
let ISO8601time = infinity.date.toISO8601Format('Europe/Berlin', 1893456000000);
console.debug(ISO8601time);
//2030-01-01T00:00:00.000+01:00
```

---

## toLocalTime() {: #infinity.date.toLocalTime_function .doc-function}

Converts the given UTC timestamp to local time in the given time zone.

Signature:
```
toLocalTime( timeZone: string, utc: number ): number
```

Parameters:

- timeZone: `string`
  >the name of the time zone for which the timestamp should be returned

- utc: `number`
  >a timestamp in milliseconds that corresponds to Coordinated Universal Time starting at the Unix Epoch


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.date');
let n = infinity.date.toLocalTime(timeZone, utc);
```

---

## toUniversalTime() {: #infinity.date.toUniversalTime_function .doc-function}

Returns the given timestamp, modified to correspond to Coordinated Universal Time, considering the provided time zone.

Signature:
```
toUniversalTime( timeZone: string, local: number, forceDaylight?: boolean ): number
```

Parameters:

- timeZone: `string`
  >the name of the local time zone

- local: `number`
  >the local time as a Unix Epoch timestamp in milliseconds

- forceDaylight: `boolean`, optional
  >specifes how ambiguous time is treated


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.date');
let timestamp = infinity.date.toUniversalTime('Europe/Berlin', 1893456000000);
console.debug(timestamp);
//1893452400000
```

---

## utcOffset() {: #infinity.date.utcOffset_function .doc-function}

Returns the offset in milliseconds of the given timezone from Coordinated Universal Time.

Signature:
```
utcOffset( timeZone: string ): string
```

Parameters:

- timeZone: `string`
  >the name of the time zone for which the offset should be retrieved


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.date');
let offset = infinity.date.utcOffset('Europe/Berlin');
//7200000
```



---

<div class="doc-heading">Properties</div>

---

## nullTimestamp {: #infinity.date.nullTimestamp_property .doc-property}

Type: `number`

The `nullTimestamp` constant represents the timestamp that is considered "empty" in some of INFINITY.JS's internal date/time functions.
When reading DATE, DATETIME or TIMESTAMP values from a database table, then a database value of `0000-00-00 00:00:00` will be represented
as `infinity.date.nullTimestamp` in INFINITY.JS (and not `0`). So, when checking for "unset" database date/time values, compare to
`infinity.date.nullTimestamp` and not to `0`. A value of `0` still represents `1970-01-01 00:00:00`, because INFINITY.JS uses unix epoch
timestamps. The difference is just in the way the `0000-00-00 00:00:00` date/time is interpreted as a timestamp.

Note: the `nullTimestamp` represents `1899-12-31 00:00:00`.



# Date and time formats {: #infinity.date.dateTimeFormats .doc-info}


|Specifier|	Displays|
|---|---|
|`c`|Short date and time format (according to system locale). If the time is exactly midnight, then the time will be omitted.|
|`d`|Day of the month (without leading zero: `1`-`31`)|
|`dd`|Day of the month (with leading zero: `01`-`31`)|
|`ddd`|Abbreviated weekday (according to system locale, e.g. `Mon`-`Sun`)|
|`dddd`|Weekday (according to system locale, e.g. `Monday`-`Sunday`)|
|`ddddd`|Short date format (according to system locale).|
|`dddddd`|Long date format (according to system locale).|
|`e`|Year according to the system locale (without leading zeroes, windows only, japanese, korean and taiwanese only).|
|`ee`|Year according to the system locale (with leading zeroes, windows only, japanese, korean and taiwanese only).|
|`g`|Abbreviated era according to the system locale (windows only, e.g. `A.D.`).|
|`gg`|Full era according to the system locale (windows only, e.g. `A.D.`).|
|`m`|Month as a number (without leading zero, `1`-`12`).|
|`mm`|Month as a number (with leading zero, `01`-`12`).|
|`mmm`|Abbreviated name of the month (`Jan`-`Dec`).|
|`mmmm`|Full name of the month (according to system locale, e.g. `January`-`December`).|
|`yy`|Year as a two-digit number (`00`-`99`).|
|`yyyy`|Year as a four-digit number (`0000`-`9999`).|
|`h`|Hour (24-hour format, without leading zero, `0`-`23`).|
|`hh`|Hour (24-hour format, with leading zero, `00`-`23`).|
|`n`|Minute (without leading zero, `0`-`59`).|
|`nn`|Minute (with leading zero, `00`-`59`).|
|`s`|Second (without leading zero, `0`-`59`).|
|`ss`|Second (with leading zero, `00`-`59`).|
|`z`|Millisecond (without leading zeroes, `0`-`999`).|
|`zzz`|Millisecond (with leading zeroes, `000`-`999`).|
|`t`|Short time format (according to system locale).|
|`tt`|Long time format (according to system locale).|
|`am/pm`|`am/pm` or `AM/PM` or `Am/Pm` will result in the corresponding string, depending on time (before/after noon) and will change a preceding `h` or `hh` format to show hours in 12-hour format.|
|`a/p`|`a/p` or `A/P` will result in the corresponding string, depending on time (before/after noon) and will change a preceding `h` or `hh` format to show hours in 12-hour format.|
|`ampm`|Uses the system's `am/pm` string, depending on time (before/after noon) and will change a preceding `h` or `hh` format to show hours in 12-hour format.|
|`/`|Results in the date separator character (according to system locale).|
|`:`|Results in the time separator character (according to system locale).|
|`'abc'` / `"abc"`|Anything written between single or double quotes will be returned as is (escaping any characters that would otherwise result in date/time format values).|
