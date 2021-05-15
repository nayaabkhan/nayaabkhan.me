import * as React from 'react'

export default function HR(props: React.HTMLProps<HTMLHRElement>) {
  const { className, ...deferred } = props

  return (
    <hr
      className={`w-7 h-1 m-auto bg-gray-100 border-0 rounded-full ${className}`}
      {...deferred}
    />
  )
}
