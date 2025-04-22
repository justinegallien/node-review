"use strict";

export function capitalizeMyString(str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export function greeting(name) {
  return `Hello, ${name}! I am getting the hang of importing and exporting.`;
}

