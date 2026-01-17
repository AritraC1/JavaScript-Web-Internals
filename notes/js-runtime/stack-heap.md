# Stack and Heap Memory in JavaScript

JavaScript uses two main memory areas to manage data during program execution:

- **Stack Memory**
- **Heap Memory**

---

## Stack Memory

**Stack memory** is used for:
- Primitive data types
- Function calls
- Local variables
- Execution context management

### Characteristics
- Fast access
- Fixed size
- Stored in a **Last In, First Out (LIFO)** order
- Automatically managed

### Stored in Stack
- `Number`
- `String`
- `Boolean`
- `Undefined`
- `Null`
- `Symbol`
- `BigInt`
- Function call frames

### Example
```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
```
**Explanation:**
`a` and `b` store independent copies of the value in stack memory.

---

## Heap Memory
Heap memory is used for:
- Objects
- Arrays
- Functions (as objects)
- Reference types

### Characteristics
- Slower than stack
- Large and dynamic size
- Memory is allocated manually by the engine
- Variables store references, not actual values 

### Stored in Heap
- Objects
- Arrays
- Functions
- Closures

### Example
```js
let obj1 = { name: "Alice" };
let obj2 = obj1;

obj2.name = "Bob";

console.log(obj1.name); // Bob
console.log(obj2.name); // Bob
```

**Explanation:**
Both variables reference the same object in heap memory.

---

## Stack vs Heap Comparison
| Feature    | Stack Memory | Heap Memory    |
| ---------- | ------------ | -------------- |
| Speed      | Very fast    | Slower         |
| Size       | Limited      | Large          |
| Data Types | Primitive    | Non-primitive  |
| Storage    | Value        | Reference      |
| Management | Automatic    | Automatic (GC) |


---

## Key Points to Remember
- Primitive values are stored directly in stack
- Objects are stored in heap, variables store references
- Stack overflow happens due to deep or infinite recursion
- JavaScript uses garbage collection to clean heap memory

---