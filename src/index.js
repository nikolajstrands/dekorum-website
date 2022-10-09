import { createRoot } from 'react-dom/client';
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter>
  <App />
</BrowserRouter>);