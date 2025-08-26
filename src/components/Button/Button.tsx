import type { MouseEventHandler } from "react"

const Button = (props: { onClick: MouseEventHandler<HTMLButtonElement> | undefined }) => {


  return (
    <button type="button" onClick={props.onClick}>
      Adicionar
    </button>
  )
}

export default Button
