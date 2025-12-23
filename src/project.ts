import {makeProject} from '@motion-canvas/core';
import './global.css';

import http from './scenes/http?scene';
import https from './scenes/https?scene';
import symmetric from "./scenes/symmetric?scene";
import asymmetric from "./scenes/asymmetric?scene";
import trust from "./scenes/trust?scene";
import ca from "./scenes/ca?scene";
import split from "./scenes/split?scene";
import table from "./scenes/table?scene";

export default makeProject({
  scenes: [http, https, symmetric, asymmetric, trust, ca, split, table],
});
