// @flow

import * as React from "react";
import * as ReactDOM from "react-dom";
// components
import Root from "components/Root";
// service worker
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));

registerServiceWorker();
