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
    - 0, NaN, and "" count as false
* string comparisons "roughly alphabetic"
    - uppercase < lower case
* all things are equal to themselves, except for `NaN`
* `&&` and `||` and `!`
* short cirucuting
    - handy for default value in the face of null.  `oop = couldBeNull || "blah"`
    - && the other direction (if left evals to false, returns value on the right)
        - (is that right?  Own experiments like `false && "ack"` come back as false)

### Emptiness of being

* `null` and `undefined`
* denote the absence of a meaningful value
* many language operations produce `undefined` b/c they have to yield _some_ value
* null and undefined are "mostly interchangeable"

### Automatic conversion

"Javascript goes out of its way to accept almost any program you give it"
* Javascript will quietly convert a wrong type of value to the type it needs
    - "using a set of rules that often aren't what you want or expect"
    - a.k.a. "Type coercion"
* some mappings
    - null -> 0
    - "5" + 1 -> 51  (string coercion)
    - out-to-lunch conversions (e.g. "snorgle" -> number) result in NaN
* when using `==`
    - "when types differ, uses a complicated and confusing set of rules"
    - if null or undefined, it's true only if both sides are null/undefined
        - null == undefined is true
    - this can be useful if you want to test whether a vale has a real value instead of null.
        - can complare to null with == / !=
* === and !== are _precise_ equality tests.  so "" == false is true, and "" === false is false
* recommended using the 3-character operators defensively to prevent unexpected coercions

### Precedence
* chart - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

### Expressions and Statements

- expression: fragment of code that produces a value
    - literals (e.g. 22 or "snorgle") are expressions
    - expression in parens is also an expression
    - and binary operator appllied to two expressions / unary operator to one
- statement
    - simplest is an expression with a semicolon
        - e.g. 23;  or !true;
        - just produces the values and then immediately throws them away
    - useless,, though
    - "a statement stands on its own, so it amounts to something only if it affects the world"
        - that is, side effects
    - can omit the semicolon at the end of a statement
        - but sometimes it has to be there.  Or sometimes the next line will get pulled in
        - "the rules are somewhat complex and error-prone"
        - recommend always use them

### Bindings

- how a program keeps internal state / "remembering things"
- a.k.a. variable
    - `let varname = expression`
- `let` says that the statement will be a binding
- `=` can be used to disconnect from current value and then point to a new one
    - it's type-fluid.  it can point to an integer, then point to a string
- bindings are pointers, not boxes.
    - "they do not contain values, they grasp them"
    - two bindings can refer to the same value
- can do multiple on a line.  `let one = 5, two = 12`
- `var` and `const`
    - var is pre-2015 Javascript (difference in next chapter)
        - "we'll rarealy use it because it has some confusing properties"
    - const is a constant - points to same value
- binding names can be any word
    - must not start with a digit
    - can include $ and _
    - can do things like åaaah, but not 🦔
- name can't be a reserved word
    - the full list:
    - break case catch class const continue debugger default
      delete do else enum export extends false finally for
      function if implements import interface in instanceof let
      new package private protected public return static super
      switch this throw true try typeof var void while with yield

      The Environment

(what's difference between `blah = 23` and `let blah = 23` ?)
