export function hello(name: string): string {
  return `Hello, ${name}!`;
}

// Simple runtime usage in the browser (safe in Node too)
// This ensures the entry compiles without side effects.
// eslint-disable-next-line no-console
console.log(hello('World'));

