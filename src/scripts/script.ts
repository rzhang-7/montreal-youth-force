// Taken from https://stackoverflow.com/a/57127781
export const toggleCSSClasses = (el: Element, ...cls: string[]) =>
  cls.map((cl) => el.classList.toggle(cl));