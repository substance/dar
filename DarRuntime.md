# Dar Runtime

An important goal of Dar is to model reproducible documents, without imposing any restrictions on the language for source code or the runtime environment the code can be run on.

Each Dar can specify one runtime environment in the manifest. It is defined using an identifier string containing name and version of the image.

E.g. a user could choose a `sci` runtime, which provides a number of languages (Python, R, Julia) with popular libraries used in scientific computing (Pandas, numpy, matplotlib, ggplot, ...).

```xml
<dar>
  ...
  <runtime>sci@0.2.0</runtime>
</dar>
```

*NOTE: This draft spec is a work in progress, and considered a request for comments.*

## Runtime Registry

In order to run the code in this document, we need to connect to a runtime registry service.

```
GET https://runtimeregistry/runtimes/:runtime
```

As a result a url to a runtime host is returned, which lets you access that runtime.

```json
{
  "id": "sci@0.2.0",
  "name": "sci",
  "version": "0.2.0",
  "hostUrl": "https://runtimehost"
}
```

*NOTE: Provisioning of runtimes can be implemented with any containerisation technology, such as Docker.*


## Runtime Host

Get host info. E.g. what languages are available, in which version.

```
GET https://runtimehost
```

```json
{
  "name": "sci",
  "version": "0.2.0",
  "languages": {
    "py": {
      "name": "Python",
      "version": "3.6.4"
    },
    "r": {
      "name": "R",
      "version": "3.4.3"
    },
    "julia": {
      "name": "Julia",
      "version": "0.6.2"
    }
  }
}
```

#### `analyse`

Send a piece of code and get the inputs and outputs extracted. Also syntax errors if there are some.

```
PUT https://runtimehost/:language/analyse
```

Example:

```
PUT https://runtimehost/js/analyse

{
  "code": "x = a + b"
}
```

Result:

```json
{
  "inputs": ["a", "b"],
  "output": "x",
  "errors": []
}
```

Example error:

```json
{ "type": "error", "message": "Syntax Error: Missing\")\")" }
```


#### `run`

```
PUT https://runtimehost/:language/run
```

Example:

```
PUT https://runtimehost/js/run

{
  "code": "x = a + b",
  "inputs": {
    "a": 5,
    "b": 8
  }
}
```

Result:

```json
{
  "value": { "type": "integer", "data": 13 },
  "errors": []
}
```

Example error:

```json
{ "type": "error", "message": "Runtime Error: a is not defined" }
```

#### `call`

Calls a function implemented in the target language. This is currently only used by tools, such as Stencila which exposes those functions in a high-level gluing language (Mini). For instance if you had an algorithm `mysim` implemented in R, you could simply call it from Mini `mysim(data)`.

```
PUT https://runtimehost/:language/call
```


Example:

```
PUT https://runtimehost/js/call

{
  lib: 'core',
  function: 'mysim',
  args: [
    { type: 'table', data: {}}
  ]
}
```

Result:

```json
{
  "value": { "type": "integer", "data": 33 },
  "errors": []
}
```

Example error:

```json
{ "type": "error", "message": "Function mysim not found" }
```


## Data Types

In order to allow passing around data between different languages, Dar defines a few primitive data types, expressed as JSON.

### String

```json
{ "type": "string", "data": "hello" }
```

### Integer

```json
{ "type": "integer", "data": 50 }
```

### Number

```json
{ "type": "number", "data": 50.3 }
```

### Boolean

```json
{ "type": "boolean", "data": true }
```

### Array

```json
{ "type": "array[integer]", "data": [ 1, 2, 3 ] }
```

### Table

```json
{
  "type": "table",
  "data": {
    "target_sales": [123,451,55],
    "actual_sales": [200,340,5],
  }
}
```

### Object

```json
{ "type": "object", "data": {"custom": "data"} }
```
