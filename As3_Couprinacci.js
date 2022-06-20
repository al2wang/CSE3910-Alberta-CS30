let recursiveruns = 0;
function coupSequence(num) {
  recursiveruns++;
  if (num <= 3) {
    if (num == 1)
      return 3;
    if (num == 2)
      return 5;
    if (num == 3)
      return 8;
  }
    else {
      return coupSequence(num - 3) + coupSequence(num - 2) + coupSequence(num - 1);
    }
}

// take n-th term input from the user
const nTerm = prompt('Generate which term number?');

if (nTerm <=0) {
  console.log('Enter a positive integer.');
}
else {
  console.log(coupSequence(nTerm));
    }

console.log('Term #'+nTerm+' is '+coupSequence(nTerm));
console.log("Program complete. The recursive function ran " + recursiveruns + " times.")
