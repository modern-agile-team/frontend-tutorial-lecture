// This is a simple Node.js application that
// does a network request and prints the response.

import { worker } from "./mocks/browser.js";

window.addEventListener("load", () => {
  worker.start();
});
