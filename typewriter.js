let sentence = "hello there from lighthouse labs";
sentence = sentence + '\n';
let incrementTime = 0;
for (const char of sentence) {
  incrementTime = incrementTime + 50
  setTimeout(() => {
    process.stdout.write(char);
  }, incrementTime)
}
