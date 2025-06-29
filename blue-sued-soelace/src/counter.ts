import { addListener } from "./tools/events"
import { getElementById } from "./tools/selectors"

export function setupCounter(id: string) {
  const element = getElementById<HTMLButtonElement>(id)

  if (!element) {
    return
  }

  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }

  setCounter(0)

  addListener<"click">(element, "click", () => setCounter(counter + 1))
}
