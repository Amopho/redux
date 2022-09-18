import {compose, pipe} from "lodash/fp";

let input = "    Javascript    ";
let output = "<div>" + input.trim() + "</div>";

// trim
//  wrap into div
// lowercsase
const trim = str => str.trim();
const wrapInDiv = str =>  `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();
const result = wrapInDiv(toLowerCase(trim(input)));

// Lodash to simplify the functional programming
