import { getElementById } from "./selectors"

export const addListener = <EVENT extends keyof GlobalEventHandlersEventMap>(element: Element | null, event: EVENT, listener: EventListenerOrEventListenerObject) => {
  if (!element) {
    return
  }
  element.addEventListener(event, listener)
}

export const addListennerById = <EVENT extends keyof GlobalEventHandlersEventMap>(id: string, event: EVENT, listener: EventListenerOrEventListenerObject) => {
  const element = getElementById(id)
  addListener(element, event, listener)
} 