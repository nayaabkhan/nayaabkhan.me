import * as React from 'react'

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  const { className, ...deferred } = props

  return <div className={`container ${className}`} {...deferred} />
}
