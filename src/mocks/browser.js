"use strict";

import handlers from "./handlers.js";

export const worker = MockServiceWorker.setupWorker(...handlers);
