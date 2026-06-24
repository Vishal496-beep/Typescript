import type {PropsWithChildren, ReactNode} from "react"

interface CardProps extends PropsWithChildren {
    title:string
    footer?:ReactNode
}

export function Card({title, children, footer}:CardProps) {
  return (
    <section>
        <h2>{title}</h2>
        <h2>{children}</h2>
        {footer && <footer>{footer}</footer>}
    </section>
  )
}


