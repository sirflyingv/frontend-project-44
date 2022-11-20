#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameLogicGCD, rulesStr } from '../src/games/brain-gcd-logic.js';

runGame(gameLogicGCD, rulesStr);