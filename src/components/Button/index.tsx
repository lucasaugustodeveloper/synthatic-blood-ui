import React from "react"

import * as S from './styled'

export type ButtonProps = {
  text: string
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  text,
  size = 'medium',
  fullWidth = false,
  icon = false,
  ...props
}: ButtonProps) => (
  <S.Button
    size={size}
    fullWidth={fullWidth}
    icon={icon}
    {...props}
  >
    {text}
  </S.Button>
)

export default Button
