import { ark } from "@ark-ui/react"
import { MouseEventHandler, ReactNode } from "react"

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export function Button({ onClick, children }: ButtonProps) {
  const base = "m-1 bg-white border border-gray-300 rounded px-4 py-2"
  const hover = "hover:bg-gray-100 hover:translate-y-[1px] hover:shadow-sm"
  const active = "active:translate-y-[1px]"
  return <ark.button className={`${base} ${hover} ${active}`} onClick={onClick}>{children}</ark.button>

}