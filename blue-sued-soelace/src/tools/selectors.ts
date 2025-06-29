export const getElementBySelector = <ELEMENT extends Element>(selector: string): ELEMENT | null => {
  return document.querySelector<ELEMENT>(selector)
}

export const getElementById = <ELEMENT extends Element>(id: string): ELEMENT | null => {
  const selector = `#${id}`
  return getElementBySelector(selector)
} 