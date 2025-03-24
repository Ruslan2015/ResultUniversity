function sum(...argv) {
    const count = (argv) => argv.reduce((acc, num) => acc + num, 0);
    return count(argv);
  }
  
  console.log(sum(1, 2, 3)) // 6
  console.log(sum(2, 2)) // 4
  console.log(sum(10, 15, 249, 653, 846)) // 1773