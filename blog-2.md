# 2.How to handle asynchronous operations using async/await over callback/promise TypeScript?

### Ans: To handle asynchronous operations in TypeScript, you can use async/await over callback/promise. To handle asynchronous operations, you need to wrap the code in a function and declear that this is a asynchronous function using async keyword like below.

```typescript
async function myFunction() {
  // asynchronous code
}
```

### Here the word _async_ is used to declear that this is a asynchronous function. In the function body you can use await keyword to handle asynchronous operations. Here is another Example:-

```typescript
async function myFunction() {
  // asynchronous code
  await someFunction();
  // asynchronous code
}
```

### Here the word _await_ is used to handle asynchronous operations. The word _await_ instucts the program to wait for the asynchronous operation to complete before executing the next line of code.
