#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameLogicEven, rulesStr } from '../src/games/brain-even-logic.js';

runGame(gameLogicEven, rulesStr);
