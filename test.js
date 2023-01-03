import { main } from "./dist/Task_Test.js";

function log(message) {
  return () => console.log(message);
}

function fail() {
  process.exit(1);
}

main(log, fail)();
