# Javascript notes

## Eloquent Javascript

### Numbers
* Chunks of bits are called _values_
* It's garbage collected
* Ints are 64 bits
* e.g. 10, 9.91, 299e8
* `Infinity` and `-Infinity`, `NaN`

### Strings
* 'this is a string', "as is this", `as is this`
* backslash escaping, \n, etc
* Unicode
    - "uses 16 bits per string element
* `+` concatenates
* backtick quoted strings, a.k.a. _template literals_ can embed other values and newlines
```
`half of 100 is ${100 / 2}`
```

### Unary operators

* `typeof` - string, number (for both ints and floats)
* -

### Boolean values

* `true` / `false`
* string comparisons "roughly alphabetic"
    - uppercase < lower case
* all things are equal to themselves, except for `NaN`
* `&&` and `||` and `!`

### Emptiness of being

* `null` and `undefined`
* denote the absence of a meaningful value
* many language operations produce `undefined` b/c they have to yield _some_ value
* null and undefined are "mostly interchangeable"

### Automatic conversion


### Precedence
* chart - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
