// // EXAMPLE 1

// function main() {
//     console.log('A');
//     setTimeout(function display() {
//         console.log('B');
//     }, 0);
//     console.log('C');
// }
// main();

// EXAMPLE 2

// function main() {
//     console.log('A');
//     setTimeout(function exec() {
//         console.log('B');
//     }, 0);
//     runWhileLoopForNSeconds(3);
//     console.log('C');
// }
// main();
// function runWhileLoopForNSeconds(sec) {
//     let start = Date.now(),
//         now = start;
//     while (now - start < sec * 1000) {
//         now = Date.now();
//     }
// }
