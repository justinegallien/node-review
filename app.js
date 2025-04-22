"use strict";
import _ from "lodash";
const arrayOfNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

console.log(_.shuffle(arrayOfNumbers));

import { capitalizeMyString, greeting } from "./utils.js";

console.log(capitalizeMyString("capitalize my string."));
console.log(greeting("Treasure"));
