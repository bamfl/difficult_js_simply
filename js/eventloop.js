// Урок 4. JavaScript. Асинхронность.Что такое Event Loop. JS SetTimeout 0
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0); // на самом деле по умолчанию 4ms

setTimeout(() => {
  console.log(3);
}, 2000);

console.log(4);

// Event loop:

// callStack --> webAPIs --> callbackQueue ---
// ^																	 |
// |-----------------------------------
