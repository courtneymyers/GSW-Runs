// @flow

import * as React from "react";
import { injectGlobal } from "styled-components";
// components
import App from "components/App";

// --- styled components ---
injectGlobal`
  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1;
    color: #444;
    background-color: white;
  }
`;

// --- components ---
type Props = {};

const Root = (props: Props) => <App />;

export default Root;
