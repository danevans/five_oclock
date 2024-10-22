export function randomFactory<T>(initialChoices: Readonly<Array<T>>): () => T {
  let remainingChoices: Array<T> = [...initialChoices];
  return function () {
    if (remainingChoices.length === 0) {
      remainingChoices = [...initialChoices];
    }
    const idx = Math.floor(Math.random() * remainingChoices.length);
    return remainingChoices.splice(idx, 1)[0];
  };
}
