import { main } from "./dist/Task_Test.js";

function log(message) {
  return () => console.log(message);
}

main(log)();
