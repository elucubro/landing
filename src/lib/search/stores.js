// @ts-nocheck
import { writable, derived } from "svelte/store";
import json_data from './asv.json';
let keys = Object.keys(json_data)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const term = writable('')
export const items = writable(keys)
export const filtered = derived([term, items], ([$term, $items]) => $items.filter(x => x.includes($term || $term.toLowerCase()))
);