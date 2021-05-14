import * as React from 'react'

interface TitleProps {
  as?: React.ElementType
}

export default function Title(
  props: TitleProps & React.HTMLAttributes<HTMLHeadingElement>
) {
  const { as = 'h1', style: styleIn, ...delegate } = props

  const style: React.CSSProperties = {
    ...styleIn,
    margin: 'var(--space-normal) 0',
    textShadow: '0px 2px 0 hsla(0, 0%, 60%, 24%)',
  }

  return React.createElement(as, { style, ...delegate })
}
