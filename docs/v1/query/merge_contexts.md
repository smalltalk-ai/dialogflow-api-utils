# mergeContexts
The `mergeContexts()` method is used to merge two `Array`s of `context` objects.

## Synopsis
Returns an `Array` of `context` objects.

## Syntax

```js
const dfQueryUtils = require('dialogflow-api-utils').v1.Query

dfQueryUtils.getResultParameter(sourceContexts, newContexts[, override])
```

### Parameters
- `sourceContexts`<br>
   an `Array` of `context` objects
- `newContexts`<br>
  an `Array` of `context` objects
- `override` | *optional*<br>
  `true` | `false` defaults to `false`; if `true`, existing `context` objects in the `sourceContexts` will be replaced by the `context` in `newContexts`; if `false`, existing `context` objects in the `sourceContexts` will be merged with the `context` in `newContexts`  



### Return Value
A new `Array` of `context` objects.

## Description
A helper method which merges 2 `Array`s of `context` objects.
## Examples

### Merge Contexts
```js
const dfUtils = require('dialogflow-api-utils').v1
var sourceContexts = [{
    "name": "address",
    "parameters": {
      "address": "123 Same St",
      "address.original": [
        "123 Same St",
        "Terrace Ln",
        "Atlanta GA 30350"
      ]
    },
    "lifespan": 5
  },
  {
    "name": "profile",
    "parameters": {
      "first_name": "John",
      "last_name:": "Doe"
    },
    "lifespan": 3
  }
]
var newContexts = [{
    "name": "address",
    "parameters": {
      "city": "Washington"
    }
  },
  {
    "name": "foo",
    "parameters": {
      "bar": "foobar"
    },
    "lifespan": 5
  }
]
var contexts = dfUtils.Query.mergeContexts(sourceContexts, newContexts)
```
`contexts` value

```js
[{
    "name": "address",
    "parameters": {
      "address": "123 Same St",
      "address.original": [
        "123 Same St",
        "Terrace Ln",
        "Atlanta GA 30350"
      ],
      "city": "Washington"
    },
    "lifespan": 5
  },
  {
    "name": "profile",
    "parameters": {
      "first_name": "John",
      "last_name:": "Doe"
    },
    "lifespan": 3
  },
  {
    "name": "foo",
    "parameters": {
      "bar": "foobar"
    },
    "lifespan": 5
  }
]
```

### Merge Contexts with Override
```js
const dfUtils = require('dialogflow-api-utils').v1
var sourceContexts = [{
    "name": "address",
    "parameters": {
      "address": "123 Same St",
      "address.original": [
        "123 Same St",
        "Terrace Ln",
        "Atlanta GA 30350"
      ]
    },
    "lifespan": 5
  },
  {
    "name": "profile",
    "parameters": {
      "first_name": "John",
      "last_name:": "Doe"
    },
    "lifespan": 3
  }
]
var newContexts = [{
    "name": "profile",
    "parameters": {
      "first_name": "Jane"
    },
    "lifespan": 5
  },
  {
    "name": "foo",
    "parameters": {
      "bar": "foobar"
    },
    "lifespan": 5
  }
]
var contexts = dfUtils.Query.mergeContexts(sourceContexts, newContexts, true)
```
`contexts` value

```js
[{
    "name": "address",
    "parameters": {
      "address": "123 Same St",
      "address.original": [
        "123 Same St",
        "Terrace Ln",
        "Atlanta GA 30350"
      ]
    },
    "lifespan": 5
  },
  {
    "name": "profile",
    "parameters": {
      "first_name": "Jane"
    },
    "lifespan": 5
  },
  {
    "name": "foo",
    "parameters": {
      "bar": "foobar"
    },
    "lifespan": 5
  }
]
```
