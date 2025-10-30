import { ark } from "@ark-ui/react";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode
}

function Root({ children }: CardProps) {
  return (
    <ark.article className="rounded shadow-lg/25 bg-white p-4">
      {children}
    </ark.article>)
}


function Title({ children }: CardProps) {
  return (
    <h3 className="text-xl font-semibold text-gray-800 mb-4">
      {children}
    </h3>
  )
}

function Buttons({ children }: CardProps) {
  return <ark.div className="inline my-1 border-t border-gray-300">{children}</ark.div>

}

export const Card = {
  Root,
  Title,
  Buttons
}
