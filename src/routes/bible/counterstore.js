// @ts-nocheck
// counterstore.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
let initialValue = 0;

if (browser) {
  initialValue = localStorage.getItem('counter') || 0;
}

// Create a writable store for the counter
export const counter = writable(parseInt(initialValue));

// Subscribe to changes and update local storage whenever the counter changes
if (browser) {
  counter.subscribe(value => {
    localStorage.setItem('counter', value.toString());
  });
}

// Increment and decrement functions

export function increment() {
    counter.update(n => {
      // Check if the current value is less than 31,100 before incrementing
      return n < 31100 ? n + 1 : n;
    });
  }

  export function decrement() {
    counter.update(n => {
      // Check if the current value is greater than 0 before decrementing
      return n > 0 ? n - 1 : n;
    });
  }

// Set function to directly set the counter value
export function set(value) {
  counter.set(value);
}
