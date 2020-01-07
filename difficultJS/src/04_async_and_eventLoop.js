// Асинхронность в JS.

console.log('Start');

console.log('Start 2');

const timeOut = () => {
  console.log('complete');
};


setTimeout(timeOut, 0);

console.log('end'); // 3