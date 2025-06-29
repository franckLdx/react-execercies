import './style.module.scss'
import { setupCounter } from './counter.ts'

const id = "counter"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <sl-button variant="primary" id="${id}" size="small">Click me</sl-button>
  </div>
`

setupCounter(id)

