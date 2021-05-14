import * as React from 'react'

interface ContainerProps {
  blockSpacing?: string
}

export default function Container(
  props: ContainerProps & React.HTMLProps<HTMLDivElement>
) {
  const { blockSpacing = 0, style, ...deferred } = props

  return (
    <div
      style={{
        ...style,
        width: 'clamp(320px, 95vw, 60ch)',
        margin: `${blockSpacing} auto`,
        padding: '0 var(--space-normal)',
      }}
      {...deferred}
    />
  )
}
