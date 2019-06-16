const fs = require("fs");
const fibWasm = fs.readFileSync("./app.wasm");
let res;
(async () => {
  res = await WebAssembly.instantiate(fibWasm);
  const { fib } = res.instance.exports;
  fib(10);
})();
